/**
 * 自动报价系统逻辑控制中心
 */

const state = {
    selectedItems: new Map(), // ItemId -> Quantity
};

// 捆绑逻辑配置
const BUNDLE_CONFIG = {
    ids: ['t8-006', 't8-007', 't8-008', 't8-009'], // 封膜, 去膜, 整理, 低温存储
    bundlePrice: 100000,
    singlePrices: {
        't8-006': 60000,
        't8-007': 40000
    }
};

/**
 * 初始化应用
 */
function init() {
    renderConfigPanel();
    updateQuote();
}

/**
 * 渲染左侧配置面板
 */
function renderConfigPanel() {
    const container = document.getElementById('config-panel');
    container.innerHTML = '';

    window.productCategories.forEach(category => {
        const catDiv = document.createElement('div');
        catDiv.className = 'mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-100';
        catDiv.innerHTML = `<h3 class="font-bold text-slate-800 mb-4 flex items-center">
            <span class="w-1 h-4 bg-indigo-500 rounded mr-2"></span>
            ${category.name}
        </h3>`;

        const itemGrid = document.createElement('div');
        itemGrid.className = 'space-y-3';

        category.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors';

            const isChecked = state.selectedItems.has(item.id);
            const qty = state.selectedItems.get(item.id) || 1;

            itemEl.innerHTML = `
                <div class="flex items-center flex-1 min-w-0 mr-4">
                    <input type="checkbox" id="check-${item.id}" ${isChecked ? 'checked' : ''} 
                        class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer">
                    <label for="check-${item.id}" class="ml-3 cursor-pointer truncate">
                        <span class="block text-sm font-medium text-slate-700">${item.name}</span>
                        <span class="block text-xs text-slate-400">${item.model || ''}</span>
                    </label>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center border rounded hover:bg-white text-slate-500">-</button>
                    <input type="number" value="${qty}" min="1" onchange="setQty('${item.id}', this.value)" 
                        class="w-12 text-center text-sm border-none bg-transparent focus:ring-0">
                    <button onclick="changeQty('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center border rounded hover:bg-white text-slate-500">+</button>
                </div>
            `;

            // 绑定事件
            const checkbox = itemEl.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    state.selectedItems.set(item.id, 1);
                } else {
                    state.selectedItems.delete(item.id);
                }
                updateQuote();
                renderConfigPanel(); // 刷新以同步状态
            });

            itemGrid.appendChild(itemEl);
        });

        catDiv.appendChild(itemGrid);
        container.appendChild(catDiv);
    });
}

/**
 * 查找产品信息
 */
function findItemById(id) {
    for (const cat of window.productCategories) {
        const item = cat.items.find(i => i.id === id);
        if (item) return item;
    }
    return null;
}

/**
 * 数量变更
 */
window.changeQty = (id, delta) => {
    if (!state.selectedItems.has(id)) return;
    const current = state.selectedItems.get(id);
    const newVal = Math.max(1, current + delta);
    state.selectedItems.set(id, newVal);
    updateQuote();
    renderConfigPanel();
};

window.setQty = (id, val) => {
    if (!state.selectedItems.has(id)) return;
    const newVal = Math.max(1, parseInt(val) || 1);
    state.selectedItems.set(id, newVal);
    updateQuote();
    renderConfigPanel();
};

/**
 * 核心：计算总价逻辑
 */
function updateQuote() {
    const tbody = document.getElementById('quote-items');
    tbody.innerHTML = '';

    let baseTotal = 0;
    let hasLowTemp = false;

    // 识别捆绑模块
    const selectedBundleIds = BUNDLE_CONFIG.ids.filter(id => state.selectedItems.has(id));
    const isFullBundle = selectedBundleIds.length === BUNDLE_CONFIG.ids.length;

    // 渲染已选项目
    const processedIds = new Set();

    // 1. 处理特殊捆绑逻辑
    if (isFullBundle) {
        const bundleItem = {
            name: "封膜、去膜、整理、低温存储单元 (特惠捆绑)",
            model: "组合模块",
            qty: 1,
            unit: "套",
            total: BUNDLE_CONFIG.bundlePrice
        };
        appendRow(bundleItem);
        baseTotal += BUNDLE_CONFIG.bundlePrice;
        BUNDLE_CONFIG.ids.forEach(id => {
            processedIds.add(id);
            if (findItemById(id).isLowTemp) hasLowTemp = true;
        });
    } else {
        // 单独报价处理
        selectedBundleIds.forEach(id => {
            const item = findItemById(id);
            let price = BUNDLE_CONFIG.singlePrices[id] || 0; // 整理和存储如果不满全套则为0（按需求说明：合并报10万，单独封膜6万，单独去膜4万）

            if (price > 0) {
                const qty = state.selectedItems.get(id);
                appendRow({
                    name: item.name,
                    model: item.model,
                    qty: qty,
                    unit: item.unit,
                    total: price * qty
                });
                baseTotal += price * qty;
            }
            if (item.isLowTemp) hasLowTemp = true;
            processedIds.add(id);
        });
    }

    // 2. 处理普通项目
    state.selectedItems.forEach((qty, id) => {
        if (processedIds.has(id)) return;

        const item = findItemById(id);
        if (!item) return;

        const lineTotal = item.price * qty;
        baseTotal += lineTotal;

        appendRow({
            name: item.name,
            model: item.model,
            qty: qty,
            unit: item.unit,
            total: lineTotal
        });

        if (item.isLowTemp) hasLowTemp = true;
    });

    // 更新底部统计
    const extraFee = hasLowTemp ? window.LOW_TEMP_EXTRA_FEE : window.BASE_EXTRA_FEE;
    const finalTotal = baseTotal + extraFee;

    document.getElementById('base-total').textContent = `￥${baseTotal.toLocaleString()}`;
    document.getElementById('extra-fee-label').textContent = hasLowTemp ? '固定价费 (含低温存储加价)' : '固定价费 (实施费等)';
    document.getElementById('extra-fee-value').textContent = `￥${extraFee.toLocaleString()}`;
    document.getElementById('final-total').textContent = `￥${finalTotal.toLocaleString()}`;

    // 更新日立备注与维保
    updateHitachiInfo();
}

/**
 * 插入表格行
 */
function appendRow(data) {
    const tbody = document.getElementById('quote-items');
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-200';
    tr.innerHTML = `
        <td class="p-2 text-sm">${data.name}</td>
        <td class="p-2 text-sm text-slate-500">${data.model}</td>
        <td class="p-2 text-sm text-center">${data.qty}</td>
        <td class="p-2 text-sm text-center">${data.unit}</td>
        <td class="p-2 text-sm text-right font-medium no-print">￥${data.total.toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
}

/**
 * 更新日立专题信息
 */
function updateHitachiInfo() {
    const summary = document.getElementById('maintenance-summary');
    const details = document.getElementById('maintenance-details');
    const afterSalesTable = document.getElementById('after-sales-table');
    const afterSalesBody = document.getElementById('after-sales-body');

    let hasHitachi = false;
    let hitachiModels = [];

    state.selectedItems.forEach((qty, id) => {
        const item = findItemById(id);
        if (item && item.brand === "日立") {
            hasHitachi = true;
            hitachiModels.push(item.model);
        }
    });

    if (hasHitachi) {
        summary.classList.remove('hidden');
        afterSalesTable.classList.remove('hidden');

        // 渲染维保价格表 (过滤选中的型号)
        afterSalesBody.innerHTML = '';
        window.afterSalesService.forEach(service => {
            // 精确匹配：选中的型号与维保表型号一致时显示
            const isSelected = hitachiModels.some(m => m === service.model);
            if (isSelected) {
                const tr = document.createElement('tr');
                tr.className = 'border-b text-[10px]';
                tr.innerHTML = `
                    <td class="p-1">${service.model}</td>
                    <td class="p-1 text-right">￥${service.year4.toLocaleString()}</td>
                    <td class="p-1 text-right">￥${service.year5.toLocaleString()}</td>
                    <td class="p-1 text-right">￥${service.year6.toLocaleString()}</td>
                    <td class="p-1 text-right">￥${service.year7.toLocaleString()}</td>
                `;
                afterSalesBody.appendChild(tr);
            }
        });
    } else {
        summary.classList.add('hidden');
        afterSalesTable.classList.add('hidden');
    }
}

// 导出与打印
window.exportPDF = () => {
    window.print();
};

// 启动
init();
