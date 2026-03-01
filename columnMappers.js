// Mapping of internal variable names to physical CSV header names for the external laboratory files.
window.millColumnMappers = {
    "mill1": {
        zadaden_gypsum: 'Gyps',
        zadaden_varovik: 'HGL',
        zadaden_bypass: 'dust',
        otcheten_clinkerSilo1: 'clinker  silo 1',
        otcheten_clinkerSilo2: 'clinker silo 2',
        otcheten_so3: 'SO3',
        otcheten_cl: 'Cl',
        otcheten_c3s: 'C3S alite'
    },
    "mill3": {
        zadaden_gypsum: 'gypsum',
        zadaden_varovik: 'tr+v-k',
        zadaden_bypass: 'dust',
        otcheten_clinkerSilo1: 'clinker  silo 5',
        otcheten_clinkerSilo2: 'clinker  silo 6',
        otcheten_so3: 'SO3',
        otcheten_cl: 'Cl',
        otcheten_c3s: 'C3S alite'
    }
};

window.DataAnalyzer = {
    analyze: function (opData, xrdData, millId) {
        const map = window.millColumnMappers[millId];
        if (!map) throw new Error("Липсва мапинг конфигурация за избраната мелница.");

        let mergedData = opData;
        if (xrdData && xrdData.length > 0) {
            mergedData = opData.map((row, i) => {
                return { ...row, ...(xrdData[i] || {}) };
            });
        }

        const cleanData = mergedData.map(row => {
            let cleanRow = {};
            Object.keys(map).forEach(internalKey => {
                const rawColName = map[internalKey];
                let val = row[rawColName];
                if (val === undefined) {
                    const softKey = Object.keys(row).find(k => k.trim().toLowerCase() === rawColName.trim().toLowerCase());
                    if (softKey) val = row[softKey];
                }

                if (val !== undefined && val !== null && val !== '') {
                    const num = parseFloat(String(val).replace(',', '.'));
                    cleanRow[internalKey] = isNaN(num) ? null : num;
                } else {
                    cleanRow[internalKey] = null;
                }
            });
            return cleanRow;
        });

        const relationships = [
            { source: 'zadaden_gypsum', target: 'otcheten_so3', label: 'Гипс -> SO3', expectedDirection: 1 },
            { source: 'zadaden_bypass', target: 'otcheten_cl', label: 'Байпас -> Хлор', expectedDirection: 1 },
            { source: 'otcheten_clinkerSilo1', target: 'otcheten_c3s', label: 'Клинкер Силоз 1 -> C3S', expectedDirection: 1 }
        ];

        let results = {};

        relationships.forEach(rel => {
            let rawCoeffs = [];

            for (let i = 1; i < cleanData.length - 1; i++) {
                const prevRow = cleanData[i - 1];
                const actionRow = cleanData[i];
                const resultRow = cleanData[i + 1];

                if (prevRow[rel.source] !== null && actionRow[rel.source] !== null &&
                    actionRow[rel.target] !== null && resultRow[rel.target] !== null) {

                    const deltaAction = actionRow[rel.source] - prevRow[rel.source];
                    const deltaResult = resultRow[rel.target] - actionRow[rel.target];

                    if (Math.abs(deltaAction) >= 0.1) {
                        const coeff = deltaResult / deltaAction;
                        if (isFinite(coeff)) {
                            rawCoeffs.push(coeff);
                        }
                    }
                }
            }

            if (rawCoeffs.length > 5) {
                rawCoeffs.sort((a, b) => a - b);
                const tenPercent = Math.max(1, Math.floor(rawCoeffs.length * 0.1));
                const filteredCoeffs = rawCoeffs.slice(tenPercent, rawCoeffs.length - tenPercent);

                const sum = filteredCoeffs.reduce((a, b) => a + b, 0);
                const avg = sum / filteredCoeffs.length;

                const variance = filteredCoeffs.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / filteredCoeffs.length;
                const stdDev = Math.sqrt(variance);

                let finalAvg = Math.abs(avg);
                if (finalAvg < 0.1) finalAvg = 0.1;
                if (finalAvg > 5.0) finalAvg = 5.0;

                results[rel.source] = {
                    label: rel.label,
                    coeff: finalAvg,
                    count: filteredCoeffs.length,
                    stdDev: stdDev
                };
            } else {
                results[rel.source] = {
                    label: rel.label,
                    coeff: null,
                    count: rawCoeffs.length,
                    stdDev: 0
                };
            }
        });

        return results;
    }
};
