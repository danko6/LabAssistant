// UI Elements
const opFileInput = document.getElementById('opFile');
const xrdFileInput = document.getElementById('xrdFile');
const opFileName = document.getElementById('opFileName');
const xrdFileName = document.getElementById('xrdFileName');
const analyzeBtn = document.getElementById('analyzeBtn');
const saveBtn = document.getElementById('saveBtn');
const resultsCard = document.getElementById('resultsCard');
const resultsTableBody = document.querySelector('#resultsTable tbody');
const millSelect = document.getElementById('millSelect');
const cementSelect = document.getElementById('cementSelect');

let calculatedCoeffs = {};

// Event Listeners for file uploads
opFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        opFileName.textContent = e.target.files[0].name;
    }
});

xrdFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        xrdFileName.textContent = e.target.files[0].name;
    }
});

// Toast notification helper
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return alert(message);
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Convert Excel/CSV file to JSON array
function readExcelFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    });
}

// Core Analytical Engine is now imported globally from columnMappers.js

analyzeBtn.addEventListener('click', async () => {
    if (!opFileInput.files[0]) {
        return showToast("Моля, качете задължителния Оперативен Дневник!", "error");
    }
    const cementType = cementSelect.value.trim();
    if (!cementType) {
        return showToast("Моля, въведете типа цимент (напр. CEM II / B-LL 32.5 R)!", "error");
    }

    try {
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ОБРАБОТВАНЕ...';

        const opData = await readExcelFile(opFileInput.files[0]);
        let xrdData = [];
        if (xrdFileInput.files[0]) {
            xrdData = await readExcelFile(xrdFileInput.files[0]);
        }

        const millId = millSelect.value;
        calculatedCoeffs = window.DataAnalyzer.analyze(opData, xrdData, millId);

        renderResultsTable(calculatedCoeffs);

        resultsCard.classList.remove('hidden');
        showToast("Анализът приключи успешно!", "success");

    } catch (err) {
        console.error(err);
        showToast("Грешка при обработката на файловете!", "error");
    } finally {
        analyzeBtn.disabled = false;
        analyzeBtn.innerHTML = 'АНАЛИЗИРАЙ И ИЗЧИСЛИ';
    }
});

function renderResultsTable(results) {
    resultsTableBody.innerHTML = '';

    Object.keys(results).forEach(key => {
        const item = results[key];
        const tr = document.createElement('tr');

        if (item.coeff !== null) {
            tr.innerHTML = `
                <td><strong>${item.label}</strong></td>
                <td style="color: var(--holcim-blue); font-weight: bold; font-size: 1.1rem;">${item.coeff.toFixed(3)}</td>
                <td>${item.count} събития</td>
                <td style="color: var(--text-muted);">± ${item.stdDev.toFixed(3)}</td>
            `;
        } else {
            tr.innerHTML = `
                <td><strong>${item.label}</strong></td>
                <td colspan="3" style="color: var(--negative-color);">Недостатъчно данни (само ${item.count} събития)</td>
            `;
        }
        resultsTableBody.appendChild(tr);
    });
}

saveBtn.addEventListener('click', () => {
    const cementType = cementSelect.value.trim();
    const millId = millSelect.value;
    if (!cementType) return;

    // Filter only valid coeffs
    let validCoeffs = {};
    Object.keys(calculatedCoeffs).forEach(key => {
        if (calculatedCoeffs[key].coeff !== null) {
            // Map back to application standard naming
            let stdName = "";
            if (key === 'zadaden_gypsum') stdName = "Gypsum_SO3";
            if (key === 'zadaden_bypass') stdName = "Bypass_Cl";

            if (stdName) validCoeffs[stdName] = calculatedCoeffs[key].coeff;
        }
    });

    const storageKey = `baseCoeff_${millId}_${cementType}`;
    localStorage.setItem(storageKey, JSON.stringify(validCoeffs));
    showToast(`Коефициентите за ${cementType} (${millId}) са запазени успешно!`, "success");
});
