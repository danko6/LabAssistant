// Конфигурация на силозите за клинкер
const clinkerSilos = {
    silo1: { name: "Клинкер Силоз 1 (Висок LSF)", lsf: 98 },
    silo2: { name: "Клинкер Силоз 2 (Нисък LSF)", lsf: 96 }
};

// Детайлни рецепти с правила за корекция
const recipes = {
    // 1. CEM II / B-LL 32.5 R
    "CEM II / B-LL 32.5 R": {
        targets: { SO3: { target: 2.9, tolerance: 0.2 }, C3S: { min: 41 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 4.3, "Варовик": 30.5, "Байпасен прах": 3.0, "Пепелина": 0.0, "Клинкер Силоз 1": 31.1, "Клинкер Силоз 2": 31.1 },
        dosingLimits: { "Гипс": { min: 2.8, max: 5.8 }, "Варовик": { min: 27.5, max: 33.5 }, "Байпасен прах": { min: 0.0, max: 3.0 }, "Пепелина": { min: 0.0, max: 0.0 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Варовик" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Варовик"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    },
    // 2. CEM II / B-LL 42.5 R
    "CEM II / B-LL 42.5 R": {
        targets: { SO3: { target: 3.0, tolerance: 0.2 }, C3S: { min: 45 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 5.0, "Варовик": 28.5, "Байпасен прах": 2.0, "Пепелина": 2.8, "Клинкер Силоз 1": 30.85, "Клинкер Силоз 2": 30.85 },
        dosingLimits: { "Гипс": { min: 3.5, max: 6.5 }, "Варовик": { min: 28.5, max: 28.5 }, "Байпасен прах": { min: 0.0, max: 2.0 }, "Пепелина": { min: 2.8, max: 4.8 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Пепелина" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Пепелина"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    },
    // 3. CEM II / C-M (V-LL) 42.5N
    "CEM II / C-M (V-LL) 42.5N": {
        targets: { SO3: { target: 2.9, tolerance: 0.2 }, C3S: { min: 0 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 5.0, "Варовик": 15.0, "Байпасен прах": 2.0, "Пепелина": 25.0, "Клинкер Силоз 1": 26.5, "Клинкер Силоз 2": 26.5 },
        dosingLimits: { "Гипс": { min: 3.5, max: 6.5 }, "Варовик": { min: 15.0, max: 17.0 }, "Байпасен прах": { min: 0.0, max: 2.0 }, "Пепелина": { min: 25.0, max: 25.0 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Варовик" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Варовик"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    },
    // 4. CEM II / A-LL 42.5R
    "CEM II / A-LL 42.5R": {
        targets: { SO3: { target: 3.0, tolerance: 0.2 }, C3S: { min: 50 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 5.0, "Варовик": 16.3, "Байпасен прах": 3.0, "Пепелина": 0.0, "Клинкер Силоз 1": 37.85, "Клинкер Силоз 2": 37.85 },
        dosingLimits: { "Гипс": { min: 3.5, max: 6.5 }, "Варовик": { min: 16.3, max: 19.3 }, "Байпасен прах": { min: 0.0, max: 3.0 }, "Пепелина": { min: 0.0, max: 0.0 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Варовик" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Варовик"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    },
    // 5. CEM II / A-LL 52.5N
    "CEM II / A-LL 52.5N": {
        targets: { SO3: { target: 3.0, tolerance: 0.2 }, C3S: { min: 56 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 6.5, "Варовик": 13.5, "Байпасен прах": 2.0, "Пепелина": 2.8, "Клинкер Силоз 1": 37.6, "Клинкер Силоз 2": 37.6 },
        dosingLimits: { "Гипс": { min: 5.0, max: 8.0 }, "Варовик": { min: 13.5, max: 13.5 }, "Байпасен прах": { min: 0.0, max: 2.0 }, "Пепелина": { min: 2.8, max: 4.8 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Пепелина" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Пепелина"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    },
    // 6. CEM I 52.5 R
    "CEM I 52.5 R": {
        targets: { SO3: { target: 3.3, tolerance: 0.2 }, C3S: { min: 59 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 6.5, "Варовик": 2.7, "Байпасен прах": 2.0, "Пепелина": 0.0, "Клинкер Силоз 1": 44.4, "Клинкер Силоз 2": 44.4 },
        dosingLimits: { "Гипс": { min: 5.0, max: 8.0 }, "Варовик": { min: 2.7, max: 4.7 }, "Байпасен прах": { min: 0.0, max: 2.0 }, "Пепелина": { min: 0.0, max: 0.0 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Варовик" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Варовик"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    },
    // 7. CEM II / B-V 52.5 N
    "CEM II / B-V 52.5 N": {
        targets: { SO3: { target: 3.0, tolerance: 0.2 }, C3S: { min: 0 }, Cl: { target: 0.090, max: 0.1 } },
        baseDosing: { "Гипс": 6.5, "Варовик": 2.7, "Байпасен прах": 2.0, "Пепелина": 28.6, "Клинкер Силоз 1": 30.1, "Клинкер Силоз 2": 30.1 },
        dosingLimits: { "Гипс": { min: 5.0, max: 8.0 }, "Варовик": { min: 2.7, max: 4.7 }, "Байпасен прах": { min: 0.0, max: 2.0 }, "Пепелина": { min: 28.6, max: 28.6 } },
        correctionRules: [
            { trigger: "Cl", type: "threshold", limit: 0.1, action: { material: "Байпасен прах", setPercentage: 0 }, balanceWith: "Варовик" },
            { trigger: "Cl", type: "balancePair", materials: ["Байпасен прах", "Варовик"], primary: "Байпасен прах", influenceCoeff: 0.05 },
            { trigger: "SO3", type: "vsClinker", material: "Гипс", influenceCoeff: 1.0 }
        ]
    }
};

let millState = {
    mill1: { cementType: null, currentDosing: {}, history: [], lastCorrection: null },
    mill2: { cementType: null, currentDosing: {}, history: [], lastCorrection: null },
    mill3: { cementType: null, currentDosing: {}, history: [], lastCorrection: null }
};

let currentMill = 'mill1';
let currentAnalysis = null;
let currentProposedChanges = {};
let radarChartInstance = null; // Store chart instance

// TOAST NOTIFICATIONS
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? '<i class="fa-solid fa-circle-check" style="color:var(--status-normal); font-size:1.2rem;"></i>'
        : '<i class="fa-solid fa-triangle-exclamation" style="color:var(--status-alarm); font-size:1.2rem;"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOutRight 0.4s forwards';
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

async function init() {
    await loadState();

    document.querySelectorAll('.mill-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.mill-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentMill = e.target.dataset.mill;
            renderMillView();
            hideFeedbackAndCorrection();
        });
    });

    const cementSelect = document.getElementById('cementType');
    Object.keys(recipes).forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        cementSelect.appendChild(option);
    });

    // Only load into UI, do NOT log to history yet
    cementSelect.addEventListener('change', async (e) => {
        millState[currentMill].cementType = e.target.value;
        if (e.target.value) {
            millState[currentMill].currentDosing = { ...recipes[e.target.value].baseDosing };
        } else {
            millState[currentMill].currentDosing = {};
        }
        await saveState();
        renderMillView();
        hideFeedbackAndCorrection();
    });

    // Apply cement type button -> solely for History tracking
    const applyCementBtn = document.getElementById('applyCementBtn');
    if (applyCementBtn) {
        applyCementBtn.addEventListener('click', async () => {
            const selectedType = cementSelect.value;
            if (!selectedType) {
                showToast("Моля, изберете рецепта първо.", "error");
                return;
            }

            // Add History Event for context
            const historyEntry = {
                date: new Date().toLocaleDateString('en-CA'),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                actionType: 'system',
                cementType: selectedType,
                message: `Стартирано производство -> ${selectedType}`
            };
            millState[currentMill].history.unshift(historyEntry);
            if (millState[currentMill].history.length > 2000) millState[currentMill].history.pop();

            await saveState();
            renderHistory();
            showToast(`Официално зададен: ${selectedType}`, "success");
        });
    }

    // Date Filter logic
    const historyDate = document.getElementById('historyDate');
    if (historyDate) {
        historyDate.value = new Date().toLocaleDateString('en-CA');
        historyDate.addEventListener('change', renderHistory);
    }

    document.getElementById('sampleForm').addEventListener('submit', (e) => {
        e.preventDefault();
        runAnalysis();
    });

    document.querySelector('.apply-btn').addEventListener('click', () => saveFeedback('apply'));
    document.querySelector('.reject-btn').addEventListener('click', () => saveFeedback('reject'));
    document.querySelector('.manual-btn').addEventListener('click', () => {
        document.getElementById('manualInputSection').classList.remove('hidden');
    });

    document.getElementById('saveManualBtn').addEventListener('click', () => saveFeedback('manual'));

    renderMillView();
}

async function loadState() {
    try {
        const response = await fetch('/api/state');
        const saved = await response.json();

        if (saved && Object.keys(saved).length > 0) {
            millState = saved;
        }
    } catch (err) {
        console.error("Failed to fetch state from server. Using default blank state.", err);
        showToast("Сервърът не е стартиран! Историята не може да бъде заредена.", "error");
    }
}

async function saveState() {
    try {
        await fetch('/api/state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(millState)
        });
    } catch (err) {
        console.error("Failed to save state to server.", err);
        showToast("Грешка при запазване: Сървърът не е достъпен!", "error");
    }
}

function hideFeedbackAndCorrection() {
    document.getElementById('correctionResult').innerHTML = '<p class="placeholder-text" style="color:var(--text-muted)">Въведете данни за анализ</p>';
    document.getElementById('feedbackSection').classList.add('hidden');
    document.getElementById('manualInputSection').classList.add('hidden');
    currentAnalysis = null;
    currentProposedChanges = {};
}

function getAvailableMaterials(recipe) {
    if (!recipe) return [];
    return Object.keys(recipe.baseDosing);
}

function getAdditiveMaterials(recipe) {
    if (!recipe) return [];
    return Object.keys(recipe.baseDosing).filter(m => !m.startsWith("Клинкер"));
}

function renderMillView() {
    const state = millState[currentMill];
    const select = document.getElementById('cementType');
    select.value = state.cementType || '';

    const repPanel = document.getElementById('currentRecipePanel');
    const simPanel = document.getElementById('simulatorPanel');
    const analyzeBtn = document.getElementById('analyzeBtn');

    document.getElementById('inputGrid').innerHTML = '';
    document.getElementById('currentRecipeGrid').innerHTML = '';
    document.getElementById('targetsTable').querySelector('tbody').innerHTML = '<tr><td colspan="4" class="placeholder-text" style="color:var(--text-muted)">Изберете цимент</td></tr>';

    repPanel.classList.add('hidden');
    simPanel.classList.add('hidden');
    analyzeBtn.disabled = true;

    if (state.cementType) {
        analyzeBtn.disabled = false;
        const recipe = recipes[state.cementType];

        if (Object.keys(state.currentDosing).length === 0) {
            state.currentDosing = { ...recipe.baseDosing };
        }

        // 1. Render Current Dosing Panel
        repPanel.classList.remove('hidden');
        let dosingHtml = '';
        const additiveMats = getAdditiveMaterials(recipe);

        additiveMats.forEach(mat => {
            const val = state.currentDosing[mat] || 0;
            dosingHtml += `
                <div class="form-group">
                    <label for="curr_${mat}">${mat}</label>
                    <input type="number" step="0.01" class="curr-mat-input" data-mat="${mat}" id="curr_${mat}" value="${val.toFixed(2)}" required>
                </div>
            `;
        });

        // Add Total Clinker (Readonly)
        let sumAdditives = 0;
        additiveMats.forEach(m => sumAdditives += (state.currentDosing[m] || 0));
        let totalClinker = 100 - sumAdditives;

        dosingHtml += `
            <div class="form-group">
                <label for="curr_TotalClinker">Общо Клинкер</label>
                <input type="text" id="curr_TotalClinker" value="${totalClinker.toFixed(2)}" readonly>
            </div>
        `;
        document.getElementById('currentRecipeGrid').innerHTML = dosingHtml;

        // Auto-calculate logic when current dosing changes
        document.querySelectorAll('.curr-mat-input').forEach(input => {
            input.addEventListener('input', async (e) => {
                const matName = e.target.dataset.mat;
                state.currentDosing[matName] = parseFloat(e.target.value) || 0;

                // Recalculate Total Clinker visually
                let freshSum = 0;
                additiveMats.forEach(m => freshSum += (state.currentDosing[m] || 0));
                let newTC = 100 - freshSum;

                const tcInput = document.getElementById('curr_TotalClinker');
                if (tcInput) tcInput.value = newTC.toFixed(2);

                // Keep background ratio of clinker silos in sync
                const baseC1 = recipe.baseDosing["Клинкер Силоз 1"] || 0;
                const baseC2 = recipe.baseDosing["Клинкер Силоз 2"] || 0;
                const sumC = baseC1 + baseC2;
                if (sumC > 0 && newTC >= 0) {
                    state.currentDosing["Клинкер Силоз 1"] = newTC * (baseC1 / sumC);
                    state.currentDosing["Клинкер Силоз 2"] = newTC * (baseC2 / sumC);
                }

                await saveState();
                updateSimulatorOutputs();
            });
        });

        // 2. Render Lab Inputs
        Object.keys(recipe.targets).forEach(param => {
            document.getElementById('inputGrid').innerHTML += `
                <div class="form-group">
                    <label for="input_${param}">${param}</label>
                    <input type="number" step="0.01" id="input_${param}" required>
                </div>
            `;
        });

        // 3. Render Targets Table
        let targetHtml = '';

        // Display full recipe base values
        const baseMats = getAvailableMaterials(recipe);
        let additiveList = baseMats.filter(m => !m.startsWith("Клинкер"));
        let clinkerList = baseMats.filter(m => m.startsWith("Клинкер"));
        targetHtml += '<tr><td colspan="4" style="background:rgba(255,255,255,0.05); color:var(--text-muted); font-size:0.8rem; text-transform:uppercase;">БАЗОВА РЕЦЕПТА (ДОПУСТИМИ ГРАНИЦИ)</td></tr>';

        additiveList.forEach(mat => {
            let basePct = recipe.baseDosing[mat];
            let limit = recipe.dosingLimits && recipe.dosingLimits[mat] ? recipe.dosingLimits[mat] : null;

            let minPct = limit ? limit.min.toFixed(2) : (basePct - 1.5).toFixed(2);
            let maxPct = limit ? limit.max.toFixed(2) : (basePct + 1.5).toFixed(2);

            targetHtml += `
                <tr>
                    <td style="color:var(--text-main); font-weight:500;">${mat}</td>
                    <td style="color:var(--text-muted);">${minPct}%</td>
                    <td><strong style="color:var(--holcim-blue-dark);">${basePct.toFixed(2)}%</strong></td>
                    <td style="color:var(--text-muted);">${maxPct}%</td>
                </tr>
            `;
        });

        let sumBaseClinker = 0;
        clinkerList.forEach(m => sumBaseClinker += recipe.baseDosing[m] || 0);
        targetHtml += `
            <tr>
                <td><strong style="color: var(--text-muted); font-weight: normal;">Общо Клинкер</strong></td>
                <td>-</td>
                <td style="color: var(--text-main); font-weight: normal;">${sumBaseClinker.toFixed(2)}%</td>
                <td>-</td>
            </tr>
        `;

        targetHtml += '<tr><td colspan="4" style="background:rgba(255,255,255,0.05); color:var(--text-muted); font-size:0.8rem; text-transform:uppercase;">ЦЕЛЕВИ ПАРАМЕТРИ</td></tr>';

        Object.keys(recipe.targets).forEach(param => {
            const t = recipe.targets[param];

            // Calculate display min/max based on structure
            let displayMin = t.min !== undefined ? t.min : '-';
            let displayMax = t.max !== undefined ? t.max : '-';
            let displayTarget = t.target !== undefined ? t.target : '-';

            // If target and tolerance exist, derive min and max
            if (t.target !== undefined && t.tolerance !== undefined) {
                displayMin = (t.target - t.tolerance).toFixed(2);
                displayMax = (t.target + t.tolerance).toFixed(2);
            }

            targetHtml += `
                <tr>
                    <td><strong style="color: var(--text-main);">${param}</strong></td>
                    <td style="color: var(--text-muted);">${displayMin}</td>
                    <td style="color: var(--accent-color); font-weight: 600;">${displayTarget}</td>
                    <td style="color: var(--text-muted);">${displayMax}</td>
                </tr>
            `;
        });
        document.getElementById('targetsTable').querySelector('tbody').innerHTML = targetHtml;

        simPanel.classList.remove('hidden');
        renderSimulator(recipe, state.currentDosing);

        // Render Chart if analysis exists, otherwise clear
        renderChart(state.cementType);

    } else {
        document.getElementById('inputGrid').innerHTML = '<p class="placeholder-text" style="color:var(--text-muted)">Изберете тип цимент, за да въведете данни</p>';
        if (radarChartInstance) {
            radarChartInstance.destroy();
            radarChartInstance = null;
        }
    }

    renderHistory();
}

// SIMULATOR LOGIC
function renderSimulator(recipe, currentDosing) {
    const simInputsGrid = document.getElementById('simInputsGrid');
    const simResultsGrid = document.getElementById('simResultsGrid');

    let simHtml = '';
    const additiveMats = getAdditiveMaterials(recipe);
    additiveMats.forEach(mat => {
        const val = currentDosing[mat] || 0;
        simHtml += `
            <div class="form-group">
                <label for="sim_${mat}">${mat}</label>
                <input type="number" step="0.01" class="sim-mat-input" data-mat="${mat}" id="sim_${mat}" value="${val.toFixed(2)}">
            </div>
        `;
    });
    simInputsGrid.innerHTML = simHtml;

    // Create Result blocks
    let resHtml = '';
    Object.keys(recipe.targets).forEach(param => {
        resHtml += `
            <div class="form-group">
                <label>${param}</label>
                <div class="sim-result" id="sim_res_${param}">-</div>
            </div>
        `;
    });
    simResultsGrid.innerHTML = resHtml;

    document.querySelectorAll('.sim-mat-input').forEach(input => {
        input.addEventListener('input', updateSimulatorOutputs);
    });

    updateSimulatorOutputs();
}

function updateSimulatorOutputs() {
    const state = millState[currentMill];
    if (!state.cementType) return;
    const recipe = recipes[state.cementType];

    if (!currentAnalysis || !currentAnalysis.values) {
        Object.keys(recipe.targets).forEach(param => {
            const el = document.getElementById(`sim_res_${param}`);
            if (el) {
                el.innerHTML = '<span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">Нужна проба</span>';
            }
        });
        return;
    }

    const simDosing = {};
    document.querySelectorAll('.sim-mat-input').forEach(input => {
        simDosing[input.dataset.mat] = parseFloat(input.value) || 0;
    });

    Object.keys(recipe.targets).forEach(param => {
        const baseValue = currentAnalysis.values[param]; // Last lab reading
        let predictedValue = baseValue;

        recipe.correctionRules.forEach(rule => {
            if (rule.trigger === param) {
                if (rule.type === 'vsClinker' || rule.type === 'balancePair') {
                    const primaryMat = rule.type === 'vsClinker' ? rule.material : rule.primary;
                    const deltaMat = simDosing[primaryMat] - (state.currentDosing[primaryMat] || 0);
                    predictedValue += (deltaMat * rule.influenceCoeff);
                } else if (rule.type === 'clinkerBlend') {
                    // if moving from Silo 2 (low LSF) to Silo 1 (high LSF) -> C3S goes up
                    const mat1 = rule.materials[0]; // High LSF
                    const deltaMat1 = simDosing[mat1] - (state.currentDosing[mat1] || 0);
                    predictedValue += (deltaMat1 * rule.influenceCoeff);
                }
            }
        });

        const el = document.getElementById(`sim_res_${param}`);
        if (el) {
            el.textContent = predictedValue.toFixed(2);
            el.className = 'sim-result ' + evaluateColor(param, predictedValue, recipe.targets);
        }
    });
}

// CORE ALGORITHM ENGINE (V3.0)
function runAnalysis() {
    const state = millState[currentMill];
    const recipe = recipes[state.cementType];

    let labResults = {};
    Object.keys(recipe.targets).forEach(param => {
        labResults[param] = parseFloat(document.getElementById(`input_${param}`).value);
    });

    currentAnalysis = {
        timestamp: new Date().toISOString(),
        values: labResults,
        colors: {}
    };

    Object.keys(labResults).forEach(param => {
        currentAnalysis.colors[param] = evaluateColor(param, labResults[param], recipe.targets);
    });

    // -------------------------------------------------------------
    // DATA-DRIVEN CALIBRATION OVERRIDE ENGINE (V7.0)
    // -------------------------------------------------------------
    const recMode = document.querySelector('input[name="recMode"]:checked').value;
    const effectiveCoeffs = CoefficientManager.getEffectiveCoefficients(recMode, state.history, currentMill, state.cementType, recipe);

    // Inject intelligent coefficients into a hot clone of the recipe without polluting originals
    const activeRecipe = JSON.parse(JSON.stringify(recipe)); // Deep clone
    activeRecipe.correctionRules.forEach(r => {
        if (r.influenceCoeff !== undefined) {
            let pairGrp = "";
            if (r.primary === "Байпасен прах" && r.trigger === "Cl") pairGrp = "Bypass_Cl";
            if (r.material === "Гипс" && r.trigger === "SO3") pairGrp = "Gypsum_SO3";
            if (pairGrp && effectiveCoeffs[pairGrp]) {
                r.influenceCoeff = effectiveCoeffs[pairGrp];
                console.log(`[Calibration] Overriding ${pairGrp} influenceCoeff -> ${effectiveCoeffs[pairGrp].toFixed(4)} (Mode: ${recMode})`);
            }
        }
    });

    const result = calculateCorrection(labResults, state.currentDosing, activeRecipe);
    const proposedChanges = result.changes;
    currentProposedChanges = proposedChanges;

    renderCorrectionUI(proposedChanges, result.warnings);
    updateSimulatorOutputs(); // Update sim base calculations with new lab results
    renderChart(state.cementType); // Update Radar Chart

    if (result.warnings.length > 0) {
        showToast("Анализът съдържа важни предупреждения!", "warning");
    } else {
        showToast("Анализът е завършен успешно!", "success");
    }
}

function calculateCorrection(labResults, currentDosing, recipe) {
    let parametersToCorrect = [];
    let triggeredThresholds = [];
    let changes = {};
    let warnings = [];

    // 0. Base Limit Enforcement (Fix manual inputs that break official specs first)
    if (recipe.dosingLimits) {
        Object.keys(recipe.dosingLimits).forEach(mat => {
            const limit = recipe.dosingLimits[mat];
            const currentVal = currentDosing[mat] || 0;
            let diff = 0;

            if (currentVal > limit.max) {
                diff = limit.max - currentVal; // negative
            } else if (currentVal < limit.min) {
                diff = limit.min - currentVal; // positive
            }

            if (diff !== 0) {
                changes[mat] = diff;

                // Shift the mass to/from Clinker to maintain 100% balance
                const c1 = currentDosing["Клинкер Силоз 1"] || 0;
                const c2 = currentDosing["Клинкер Силоз 2"] || 0;
                const totalC = c1 + c2;

                if (totalC > 0) {
                    changes["Клинкер Силоз 1"] = (changes["Клинкер Силоз 1"] || 0) + (-diff) * (c1 / totalC);
                    changes["Клинкер Силоз 2"] = (changes["Клинкер Силоз 2"] || 0) + (-diff) * (c2 / totalC);
                } else {
                    changes["Клинкер Силоз 1"] = (changes["Клинкер Силоз 1"] || 0) - diff;
                }
            }
        });
    }

    // 1. Identify which parameters need correction
    Object.keys(recipe.targets).forEach(param => {
        const t = recipe.targets[param];
        const actual = labResults[param];
        let dev = 0;

        if (t.target !== undefined) {
            dev = t.target - actual;
        } else if (t.min !== undefined && actual < t.min) {
            dev = t.min - actual;
        } else if (t.max !== undefined && actual > t.max) {
            dev = t.max - actual; // negative deviation indicating we should lower it
        }

        // Check Thresholds immediately
        const thresholdRule = recipe.correctionRules.find(r => r.trigger === param && r.type === 'threshold');
        if (thresholdRule && actual > thresholdRule.limit) {
            triggeredThresholds.push(thresholdRule);
        } else {
            // Clean up floating point noise (e.g. 2.9 - 3.0 = -0.10000000000000009)
            const cleanDev = Math.round(Math.abs(dev) * 1000) / 1000;

            // Only correct if there is a real mathematical deviation from the exact target
            if (cleanDev > 0.001) {
                parametersToCorrect.push({ param, dev });
            }
        }
    });

    // 2. Threshold Priority overrides (e.g. Cl > 0.1 -> Stop bypass)
    triggeredThresholds.forEach(rule => {
        const actionMat = rule.action.material;
        const currentVal = currentDosing[actionMat] || 0;
        const targetVal = rule.action.setPercentage;

        const delta = targetVal - currentVal;
        if (delta !== 0) {
            changes[actionMat] = (changes[actionMat] || 0) + delta;
            if (rule.balanceWith) {
                changes[rule.balanceWith] = (changes[rule.balanceWith] || 0) - delta;
            }
        }
    });

    // 3. Normal Rule evaluation for all other out-of-bounds parameters
    parametersToCorrect.forEach(item => {
        const { param, dev } = item;
        const rule = recipe.correctionRules.find(r => r.trigger === param && r.type !== 'threshold');

        if (rule) {
            let requiredChange = dev / rule.influenceCoeff;

            // PRE-LIMIT ENFORCEMENT & WARNING GENERATION
            let activeMat = rule.type === 'balancePair' ? rule.primary : (rule.type === 'vsClinker' ? rule.material : rule.materials[0]);
            let limit = recipe.dosingLimits && recipe.dosingLimits[activeMat] ? recipe.dosingLimits[activeMat] : null;

            if (limit && !activeMat.startsWith("Клинкер")) {
                let currentVal = currentDosing[activeMat] || 0;
                let pendingChange = changes[activeMat] || 0;
                let newValUncapped = currentVal + pendingChange + requiredChange;
                let actualChange = requiredChange;

                if (newValUncapped > limit.max) {
                    actualChange = limit.max - (currentVal + pendingChange);
                } else if (newValUncapped < limit.min) {
                    actualChange = limit.min - (currentVal + pendingChange);
                }

                // If the algorithm was clamped by physical limits, trigger a warning
                if (Math.abs(requiredChange) > 0.001 && Math.abs(actualChange) < Math.abs(requiredChange) - 0.001) {
                    const signReq = requiredChange > 0 ? '+' : '';
                    const signAct = actualChange > 0 ? '+' : '';
                    warnings.push(`⚠️ ВНИМАНИЕ: <b>${activeMat}</b> достига своя лимит!<br>Анализът изисква корекция от ${signReq}${requiredChange.toFixed(2)}%, но границите позволяват само ${signAct}${actualChange.toFixed(2)}%.<br><i>Препоръка: Направете втора проба за сигурност и проверете дали реалните показания на везните отговарят на зададените проценти.</i>`);
                }

                // Clamp the requiredChange so the secondary balancing material is not falsely adjusted!
                requiredChange = actualChange;
            }

            if (rule.type === 'balancePair') {
                changes[rule.primary] = (changes[rule.primary] || 0) + requiredChange;
                const otherMat = rule.materials.find(m => m !== rule.primary);
                changes[otherMat] = (changes[otherMat] || 0) - requiredChange;
            }
            else if (rule.type === 'vsClinker') {
                changes[rule.material] = (changes[rule.material] || 0) + requiredChange;

                const c1 = currentDosing["Клинкер Силоз 1"] || 0;
                const c2 = currentDosing["Клинкер Силоз 2"] || 0;
                const totalC = c1 + c2;

                if (totalC > 0) {
                    changes["Клинкер Силоз 1"] = (changes["Клинкер Силоз 1"] || 0) + (-requiredChange) * (c1 / totalC);
                    changes["Клинкер Силоз 2"] = (changes["Клинкер Силоз 2"] || 0) + (-requiredChange) * (c2 / totalC);
                } else {
                    changes["Клинкер Силоз 1"] = (changes["Клинкер Силоз 1"] || 0) - requiredChange;
                }
            }
            else if (rule.type === 'clinkerBlend') {
                changes[rule.materials[0]] = (changes[rule.materials[0]] || 0) + requiredChange;
                changes[rule.materials[1]] = (changes[rule.materials[1]] || 0) - requiredChange;
            }
        }
    });

    // 4. Apply Hard Dosing Limits and Shift Overflow to Clinker
    let finalChanges = {};
    let totalOverflow = 0;

    Object.keys(changes).forEach(mat => {
        let reqChange = changes[mat];

        // Clinker is balanced dynamically, do not cap directly here
        if (mat.startsWith("Клинкер")) {
            finalChanges[mat] = (finalChanges[mat] || 0) + reqChange;
            return;
        }

        let limit = recipe.dosingLimits && recipe.dosingLimits[mat] ? recipe.dosingLimits[mat] : null;
        if (limit) {
            let currentVal = currentDosing[mat] || 0;
            let newVal = currentVal + reqChange;
            let cappedVal = newVal;

            if (newVal > limit.max) cappedVal = limit.max;
            if (newVal < limit.min) cappedVal = limit.min;

            let allowedChange = cappedVal - currentVal;
            finalChanges[mat] = allowedChange;

            // Overflow is the chunk of mass we wanted to add/remove but couldn't due to hard limits. 
            // It MUST be balanced by shifting it inversely to Clinker.
            let overflow = reqChange - allowedChange;
            totalOverflow += overflow;
        } else {
            finalChanges[mat] = reqChange;
        }
    });

    if (Math.abs(totalOverflow) > 0.001) {
        // Because recipes run on a 100% basis, if we couldn't reduce Варовик by 2% (overflow = -2%),
        // we must instead subtract that 2% from Clinker. So we ADD the overflow to clinker.
        const c1 = currentDosing["Клинкер Силоз 1"] || 0;
        const c2 = currentDosing["Клинкер Силоз 2"] || 0;
        const totalC = c1 + c2;

        if (totalC > 0) {
            finalChanges["Клинкер Силоз 1"] = (finalChanges["Клинкер Силоз 1"] || 0) + totalOverflow * (c1 / totalC);
            finalChanges["Клинкер Силоз 2"] = (finalChanges["Клинкер Силоз 2"] || 0) + totalOverflow * (c2 / totalC);
        } else {
            finalChanges["Клинкер Силоз 1"] = (finalChanges["Клинкер Силоз 1"] || 0) + totalOverflow;
        }
    }

    // Clean up minor floating point anomalies
    Object.keys(finalChanges).forEach(k => {
        if (Math.abs(finalChanges[k]) < 0.01) delete finalChanges[k];
    });

    return { changes: finalChanges, warnings: warnings };
}

function renderCorrectionUI(changes, warnings = []) {
    const box = document.getElementById('correctionResult');
    const state = millState[currentMill];

    let warningsHtml = '';
    if (warnings.length > 0) {
        warningsHtml = `
            <div style="background-color: #ffc107; color: #333; padding: 15px; border-radius: 8px; margin-bottom: 20px; line-height: 1.5;">
                ${warnings.join('<hr style="border-color: rgba(0,0,0,0.1); margin: 10px 0;">')}
            </div>
        `;
    }

    if (Object.keys(changes).length === 0) {
        box.innerHTML = warningsHtml + '<h3 class="status-normal">Всичко е в норма. Не е нужна корекция.</h3>';
    } else {
        let html = warningsHtml;
        Object.keys(changes).forEach(mat => {
            if (mat.startsWith("Клинкер")) return; // Hide clinker from recommendations
            const val = changes[mat];
            if (Math.abs(val) > 0.05) { // Threshold for display
                const colorCls = val > 0 ? 'positive-change' : 'negative-change';
                const sign = val > 0 ? '+' : '';
                const oldVal = state.currentDosing[mat] || 0;
                const newVal = oldVal + val;

                html += `
                    <div class="correction-item">
                        <span class="mat-name">${mat}:</span>
                        <div>
                            <span class="change-val ${colorCls}">${sign}${val.toFixed(2)}%</span>
                            <span class="abs-val"><br>(старо: ${oldVal.toFixed(2)}% &rarr; ново: ${newVal.toFixed(2)}%)</span>
                        </div>
                    </div>
                `;
            }
        });
        if (html === '') {
            html = '<h3 class="status-normal">Корекциите са твърде малки (<0.05%). Няма нужда от действие.</h3>';
        }
        box.innerHTML = html;
    }

    document.getElementById('feedbackSection').classList.remove('hidden');

    // Prepare manual inputs
    const recipe = recipes[state.cementType];
    let manualHtml = '';
    const additiveMats = getAdditiveMaterials(recipe);
    additiveMats.forEach(mat => {
        const proposed = changes[mat] ? changes[mat].toFixed(2) : 0;
        manualHtml += `
            <div class="form-group">
                <label>${mat}</label>
                <input type="number" step="0.1" id="man_${mat}" value="${proposed}">
            </div>
        `;
    });
    document.getElementById('manualInputsGrid').innerHTML = manualHtml;
}

async function saveFeedback(actionType) {
    const state = millState[currentMill];
    let appliedChanges = {};

    if (actionType === 'apply') {
        appliedChanges = currentProposedChanges;
    } else if (actionType === 'manual') {
        const recipe = recipes[state.cementType];
        const additiveMats = getAdditiveMaterials(recipe);
        additiveMats.forEach(mat => {
            const val = parseFloat(document.getElementById(`man_${mat}`).value);
            if (!isNaN(val) && val !== 0) appliedChanges[mat] = val;
        });

        // Auto-balance clinker internally for manual feedback
        let sumAdditiveChange = 0;
        Object.values(appliedChanges).forEach(v => sumAdditiveChange += v);
        if (sumAdditiveChange !== 0) {
            const c1 = state.currentDosing["Клинкер Силоз 1"] || 0;
            const c2 = state.currentDosing["Клинкер Силоз 2"] || 0;
            const totalC = c1 + c2;
            if (totalC > 0) {
                appliedChanges["Клинкер Силоз 1"] = (-sumAdditiveChange) * (c1 / totalC);
                appliedChanges["Клинкер Силоз 2"] = (-sumAdditiveChange) * (c2 / totalC);
            }
        }
    } else if (actionType === 'reject') {
        appliedChanges = {};
    }

    if (actionType !== 'reject') {
        const recipe = recipes[state.cementType];
        const allMats = getAvailableMaterials(recipe); // All materials including internal clinkers
        allMats.forEach(mat => {
            if (appliedChanges[mat]) {
                state.currentDosing[mat] = (state.currentDosing[mat] || 0) + appliedChanges[mat];
            }
        });
    }

    const historyEntry = {
        date: new Date().toLocaleDateString('en-CA'),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        cementType: state.cementType,
        baseDosing: { ...state.currentDosing },
        values: currentAnalysis.values,
        colors: currentAnalysis.colors,
        actionType: actionType,
        appliedChanges: appliedChanges
    };

    state.history.unshift(historyEntry);
    if (state.history.length > 2000) state.history.pop();

    state.lastCorrection = {
        initialValues: currentAnalysis.values,
        appliedChanges: appliedChanges
    };

    await saveState();
    renderMillView(); // Refresh UI
    hideFeedbackAndCorrection(); // Reset analysis form for next entry
}

// --- CHART VISUALIZATION ---
function renderChart(cementType) {
    const chartPanel = document.querySelector('.charts-panel');
    const chartContainer = document.getElementById('chartsContainer');
    const canvas = document.getElementById('radarChart');

    if (!cementType || !currentAnalysis || !currentAnalysis.values) {
        chartPanel.classList.add('hidden');
        if (radarChartInstance) {
            radarChartInstance.destroy();
            radarChartInstance = null;
        }
        return;
    }

    const recipe = recipes[cementType];
    chartPanel.classList.remove('hidden');

    const labels = [];
    const targetData = [];
    const actualData = [];

    // Gather data for params that have a target
    Object.keys(recipe.targets).forEach(param => {
        const t = recipe.targets[param];
        if (t.target !== undefined) {
            labels.push(param);
            targetData.push(t.target);
            actualData.push(currentAnalysis.values[param] || 0);
        }
    });

    if (labels.length === 0) {
        chartContainer.innerHTML = '<p class="placeholder-text" style="color:var(--text-muted)">Няма целеви стойности за радарна графика.</p>';
        return;
    }

    if (radarChartInstance) {
        radarChartInstance.data.labels = labels;
        radarChartInstance.data.datasets[0].data = actualData;
        radarChartInstance.data.datasets[1].data = targetData;
        radarChartInstance.update();
    } else {
        const ctx = canvas.getContext('2d');
        radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Текуща Проба',
                    data: actualData,
                    backgroundColor: 'rgba(0, 180, 235, 0.2)',
                    borderColor: 'rgba(0, 180, 235, 1)',
                    pointBackgroundColor: 'rgba(0, 180, 235, 1)',
                    borderWidth: 2
                }, {
                    label: 'Цел',
                    data: targetData,
                    backgroundColor: 'rgba(103, 178, 70, 0.2)',
                    borderColor: 'rgba(103, 178, 70, 1)',
                    pointBackgroundColor: 'rgba(103, 178, 70, 1)',
                    borderDash: [5, 5],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        ticks: { display: false },
                        grid: { color: 'rgba(148, 163, 184, 0.2)' },
                        pointLabels: {
                            font: { family: "'Outfit', sans-serif", size: 12, weight: '600' },
                            color: 'var(--text-main)'
                        }
                    }
                },
                plugins: {
                    legend: { position: 'bottom', labels: { font: { family: "'Outfit', sans-serif" } } }
                }
            }
        });
    }
}

// EXCEL EXPORT / IMPORT
function exportToExcel() {
    if (typeof XLSX === 'undefined') {
        showToast("Моля, изчакайте зареждането на библиотеката за Excel.", "error");
        return;
    }

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Create a sheet for the raw state settings
    const stateData = [["Mill", "CementType"]];
    Object.keys(millState).forEach(mill => {
        stateData.push([mill, millState[mill].cementType || "None"]);
    });
    const wsState = XLSX.utils.aoa_to_sheet(stateData);
    XLSX.utils.book_append_sheet(wb, wsState, "SystemState");

    // Create a sheet for the history of all mills
    const historyData = [["Mill", "Time", "Action", "Measurement Data", "Applied Corrections"]];
    Object.keys(millState).forEach(mill => {
        const state = millState[mill];
        state.history.forEach(entry => {
            const vals = JSON.stringify(entry.values);
            const changes = JSON.stringify(entry.appliedChanges);
            historyData.push([mill, entry.time, entry.actionType, vals, changes]);
        });
    });
    const wsHistory = XLSX.utils.aoa_to_sheet(historyData);
    XLSX.utils.book_append_sheet(wb, wsHistory, "HistoryLog");

    // Save to file
    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `Cement_Quality_Export_${dateStr}.xlsx`);
}

function handleImportExcel(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            const data = evt.target.result;
            const wb = XLSX.read(data, { type: 'binary' });

            // Simplified import logic for demonstration:
            // Just verify we can read it, or actually restore history if wanted.
            // Since this involves parsing JSON back, a robust system would merge it.
            // For now, we'll replace the history from "HistoryLog" sheet

            const wsHistory = wb.Sheets["HistoryLog"];
            if (wsHistory) {
                const hData = XLSX.utils.sheet_to_json(wsHistory, { header: 1 });

                // Clear existing history
                Object.keys(millState).forEach(m => millState[m].history = []);

                for (let i = 1; i < hData.length; i++) {
                    const row = hData[i];
                    if (!row || row.length < 5) continue;
                    const mill = row[0];
                    if (!millState[mill]) continue;

                    const entry = {
                        time: row[1],
                        actionType: row[2],
                        values: JSON.parse(row[3] || "{}"),
                        appliedChanges: JSON.parse(row[4] || "{}"),
                        colors: {} // Can be re-evaled, but we leave empty for old history display simplicity
                    };
                    millState[mill].history.push(entry);
                }
                saveState();
                renderMillView();
                showToast("Данните от Excel са заредени успешно!", "success");
            } else {
                showToast("Не е намерен 'HistoryLog' лист във файла.", "error");
            }
        } catch (err) {
            showToast("Грешка при четене на Excel: " + err.message, "error");
        }
    };
    reader.readAsBinaryString(file);
    e.target.value = ""; // reset input
}

function evaluateColor(param, value, targets) {
    const t = targets[param];
    if (!t) return '';

    // Out of absolute bounds
    if (t.min !== undefined && value < t.min) return 'status-alarm';
    if (t.max !== undefined && value > t.max) return 'status-alarm';

    if (t.target !== undefined) {
        const dev = Math.abs(value - t.target);
        const tol = t.tolerance || 0.1;
        if (dev <= (tol / 2)) return 'status-normal';
        if (dev <= tol) return 'status-warning';
        return 'status-alarm';
    } else {
        if (t.min !== undefined && value >= t.min) return 'status-normal';
        if (t.max !== undefined && value <= t.max) return 'status-normal';
    }
    return 'status-alarm';
}

function renderHistory() {
    const tbody = document.querySelector('#historyTable tbody');

    const filterInput = document.getElementById('historyDate');
    const filterDate = filterInput ? filterInput.value : new Date().toLocaleDateString('en-CA');

    const rawHistory = millState[currentMill].history || [];
    const filteredHistory = rawHistory.filter(entry => {
        const entryDate = entry.date || new Date().toLocaleDateString('en-CA');
        return entryDate === filterDate;
    });

    if (filteredHistory.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="placeholder-text" style="color:var(--text-muted)">Няма данни за избраната дата</td></tr>';
        return;
    }

    let html = '';
    filteredHistory.slice(0, 100).forEach(entry => {

        // 1. Context Column
        let contextHtml = '';
        if (entry.cementType) {
            contextHtml += `<div style="font-weight:700; color:var(--holcim-blue-dark); margin-bottom: 4px;">${entry.cementType}</div>`;
        }
        if (entry.baseDosing && Object.keys(entry.baseDosing).length > 0) {
            const dosingStr = Object.keys(entry.baseDosing)
                .map(k => `${k}: <strong>${entry.baseDosing[k].toFixed(2)}</strong>`)
                .join(' | ');
            contextHtml += `<div style="font-size:0.75rem; color:var(--text-muted); line-height: 1.4;">${dosingStr}</div>`;
        } else if (entry.actionType !== 'system') {
            contextHtml += `<div style="font-size:0.75rem; color:var(--text-muted);">Без дозиране</div>`;
        }

        // 2. System Events (Cement Change)
        if (entry.actionType === 'system') {
            html += `
                <tr style="background: rgba(0,180,235,0.03);">
                    <td style="color:var(--text-muted); padding-top: 12px; padding-bottom: 12px;">${entry.time}</td>
                    <td colspan="3" style="font-size: 0.9rem; color: var(--holcim-blue-dark); padding-top: 12px; padding-bottom: 12px;">
                        <i class="fa-solid fa-rotate"></i> <strong>${entry.message}</strong>
                    </td>
                </tr>
            `;
            return;
        }

        // 3. Lab Values Column
        let valsHtml = '';
        if (entry.values) {
            valsHtml = Object.keys(entry.values).map(k => {
                return `<span class="${entry.colors[k]}"><strong>${k}</strong>: ${entry.values[k]}</span>`;
            }).join('<br>');
        }

        // 4. Corrections Column
        let changesHtml = '<span style="color:var(--text-muted)">Без активна промяна</span>';
        if (entry.appliedChanges && Object.keys(entry.appliedChanges).length > 0) {
            changesHtml = Object.keys(entry.appliedChanges)
                .filter(k => Math.abs(entry.appliedChanges[k]) >= 0.05) // Filter out noise
                .map(k => {
                    const val = entry.appliedChanges[k];
                    const sign = val > 0 ? '+' : '';
                    const clr = val > 0 ? 'var(--status-normal)' : 'var(--status-alarm)';
                    return `<strong>${k}</strong>: <span style="color:${clr}">${sign}${val.toFixed(2)}%</span>`;
                }).join('<br>');

            if (changesHtml === '') changesHtml = '<span style="color:var(--text-muted)">Минорни системни баланси</span>';
        }

        let icon = '';
        if (entry.actionType === 'apply') icon = '<span style="color:var(--status-normal); font-size:1.1em; margin-right:6px;"><i class="fa-solid fa-check-circle"></i></span>';
        if (entry.actionType === 'manual') icon = '<span style="color:var(--status-warning); font-size:1.1em; margin-right:6px;"><i class="fa-solid fa-pen-to-square"></i></span>';
        if (entry.actionType === 'reject') icon = '<span style="color:var(--text-muted); font-size:1.1em; margin-right:6px;"><i class="fa-solid fa-circle-xmark"></i></span>';

        html += `
            <tr>
                <td style="color:var(--text-muted); vertical-align:top;">${entry.time}</td>
                <td style="vertical-align:top;">${contextHtml}</td>
                <td style="font-size: 0.85rem; vertical-align:top; line-height:1.6;">${valsHtml}</td>
                <td style="font-size: 0.85rem; vertical-align:top; line-height:1.6;">${icon} ${changesHtml}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// ============================================================================
// DATA-DRIVEN CALIBRATION ENGINE (V7.0)
// ============================================================================

let tacticalCoefficients = null;

function parseUtilityExcel(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                resolve(json);
            } catch (err) { reject(err); }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

const CoefficientManager = {
    getEffectiveCoefficients: function (mode, history, millId, cementType, defaultRecipe) {
        let eff = {};

        // 1. Discover all active pairs and define baseline coefficients from the recipe
        let activePairs = []; // Array of tracking definitions { id, material, trigger }
        defaultRecipe.correctionRules.forEach(r => {
            if (r.influenceCoeff !== undefined) {
                // Determine which material is actually changing. 
                // Sometimes it's r.primary (eg. Bypass rules), sometimes r.material (Gypsum rules).
                let mat = r.primary ? r.primary : r.material;
                let id = `${mat}_${r.trigger}`;
                eff[id] = r.influenceCoeff;

                // Track this pair for dynamic analysis
                activePairs.push({ id: id, material: mat, trigger: r.trigger });
            }
        });

        if (mode === 'static') {
            const stored = localStorage.getItem(`baseCoeff_${millId}_${cementType}`);
            if (stored) {
                const parsed = JSON.parse(stored);
                Object.keys(parsed).forEach(k => eff[k] = parsed[k]);
            }
        }
        else if (mode === 'preload') {
            // Apply loaded tactical coefficients over static ones
            if (tacticalCoefficients) Object.assign(eff, tacticalCoefficients);
        }
        else if (mode === 'dynamic') {
            history = history || [];
            let histActions = history.filter(h => h.actionType === 'apply' && h.cementType === cementType);

            console.log(`[Dynamic Calibration] Found ${histActions.length} valid 'apply' actions in history for ${cementType}`);

            if (histActions.length < 3) {
                console.log(`[Dynamic Calibration] Not enough history (${histActions.length} < 3). Falling back to tactical/static.`);
                if (tacticalCoefficients) Object.assign(eff, tacticalCoefficients);
            } else {

                // Initialize accumulators for every discovered pair
                let realtime = {};
                let accumulators = {};
                activePairs.forEach(pair => {
                    accumulators[pair.id] = { sum: 0, count: 0 };
                });

                // Traverse chronologically (index 0 is newest, so we compare older [i+1] to newer [i])
                for (let i = 0; i < histActions.length - 1; i++) {
                    let eventLater = histActions[i];
                    let eventEarlier = histActions[i + 1];

                    if (eventEarlier.baseDosing && eventLater.values && eventEarlier.values) {

                        // Evaluate each pair 
                        activePairs.forEach(pair => {
                            let earlierDosing = eventEarlier.baseDosing[pair.material] || 0;
                            // The dosing *before* the action was taken is stored at index i+2
                            let oldestDosing = (histActions[i + 2] && histActions[i + 2].baseDosing) ? (histActions[i + 2].baseDosing[pair.material] || 0) : earlierDosing;

                            // Delta Dosage
                            let dMat = earlierDosing - oldestDosing;

                            // Delta Result (Lab parameter)
                            let dProp = (eventLater.values[pair.trigger] || 0) - (eventEarlier.values[pair.trigger] || 0);

                            // Only process significant changes (filter out noise > 0.05 dosage change)
                            if (Math.abs(dMat) > 0.05 && isFinite(dProp / dMat)) {

                                // In the new generalized model, we look at the relative impact. 
                                // Meaning: How much did the property change per 1 unit of material added/removed.
                                let currentCoeff = dProp / dMat;

                                // We expect a positive correlation (adding Gypsum adds SO3, adding Byapss adds Cl)
                                // Only count it if the correlation matched expected physics.
                                if (currentCoeff > 0) {
                                    accumulators[pair.id].sum += currentCoeff;
                                    accumulators[pair.id].count++;
                                }
                            }
                        });
                    }
                }

                // Finalize live coefficients for all pairs
                activePairs.forEach(pair => {
                    let acc = accumulators[pair.id];
                    if (acc.count > 0) {
                        // Apply reasonable bounds to prevent out-of-control math (e.g. 0.01 to 5.0 ratio)
                        let rawAvg = acc.sum / acc.count;
                        realtime[pair.id] = Math.min(Math.max(rawAvg, 0.01), 5.0);
                        console.log(`[Dynamic] Computed ${pair.id} realtime = ${realtime[pair.id].toFixed(4)}`);
                    }
                });

                // Apply 100% real-time coefficients where we have enough data (Override static entirely)
                Object.keys(realtime).forEach(k => {
                    eff[k] = realtime[k];
                    console.log(`[Dynamic] Applied 100% realtime ${k}: ${eff[k]}`);
                });

                console.log(`[Dynamic] Final Evaluated Matrix:`, eff);
            }
        }

        return eff;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    init();

    // Attach Excel listeners
    const btnExport = document.getElementById('exportBtn');
    if (btnExport) btnExport.addEventListener('click', exportToExcel);

    const btnImport = document.getElementById('importBtn');
    const fileInput = document.getElementById('importFile');
    if (btnImport && fileInput) {
        btnImport.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', handleImportExcel);
    }

    // Tactical Listeners
    document.querySelectorAll('input[name="recMode"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const container = document.getElementById('preloadFileContainer');
            if (e.target.value === 'preload' || e.target.value === 'dynamic') {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    });

    const preloadInput = document.getElementById('preload-file-input');
    if (preloadInput) {
        preloadInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            document.getElementById('preloadFileName').textContent = file.name;

            try {
                showToast("Зареждане на тактически анализ...", "info");
                const opData = await parseUtilityExcel(file);
                if (window.DataAnalyzer) {
                    const rawResults = window.DataAnalyzer.analyze(opData, [], currentMill);
                    tacticalCoefficients = {};

                    if (rawResults['zadaden_gypsum'] && rawResults['zadaden_gypsum'].coeff !== null) {
                        tacticalCoefficients["Gypsum_SO3"] = rawResults['zadaden_gypsum'].coeff;
                    }
                    if (rawResults['zadaden_bypass'] && rawResults['zadaden_bypass'].coeff !== null) {
                        tacticalCoefficients["Bypass_Cl"] = rawResults['zadaden_bypass'].coeff;
                    }
                    console.log("Tactical Coefficients stored:", tacticalCoefficients);
                    showToast("Тактическите коефициенти са заредени успешно! Имате готовност за анализ.", "success");
                } else {
                    showToast("Анализаторът не е зареден. Опреснете страницата.", "error");
                }
            } catch (err) {
                console.error(err);
                showToast("Грешка при зареждане на тактическия дневник!", "error");
            }
        });
    }

    // Numpad BG Layout Fix: Convert comma from Numpad into dot in number inputs
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
            // NumpadDecimal specifically target the numpad dot. ',' targets the comma key.
            if (e.key === ',' || e.code === 'NumpadDecimal') {
                e.preventDefault();
                // Native way to insert character at cursor overriding type="number" restrictions
                document.execCommand('insertText', false, '.');
            }
        }
    });
});
