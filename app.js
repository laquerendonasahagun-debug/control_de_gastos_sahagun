const STORAGE_KEY = 'la-querendona-control-gastos-v1';

const budgetItems = [
  { id: 'abarrote', name: 'Abarrote', weekly: 2755, monthly: 11020, group: 'operating' },
  { id: 'verdura', name: 'Verdura / chiles secos / hierbas de olor', weekly: 2250, monthly: 9000, group: 'operating' },
  { id: 'pan', name: 'Pan', weekly: 650, monthly: 2600, group: 'operating' },
  { id: 'basura', name: 'Basura', weekly: 150, monthly: 600, group: 'operating' },
  { id: 'agua', name: 'Agua', weekly: 250, monthly: 1000, group: 'operating' },
  { id: 'limpieza', name: 'Producto limpieza y mantelería', weekly: 200, monthly: 800, group: 'operating' },
  { id: 'gas', name: 'Gas', weekly: 500, monthly: 2000, group: 'operating' },
  { id: 'carne', name: 'Carne', weekly: 4000, monthly: 16000, group: 'operating' },
  { id: 'coca-cola', name: 'Coca-Cola', weekly: 950, monthly: 3800, group: 'operating' },
  { id: 'jarritos', name: 'Jarritos', weekly: 310, monthly: 1240, group: 'operating' },
  { id: 'cortes', name: 'Cortes, snacks', weekly: 1500, monthly: 6000, group: 'operating' },
  { id: 'cerveza', name: 'Cerveza', weekly: 785, monthly: 3140, group: 'operating' },
  { id: 'leche', name: 'Leche', weekly: 113, monthly: 452, group: 'operating' },
  { id: 'pollo', name: 'Pollo', weekly: 700, monthly: 2800, group: 'operating' },
  { id: 'bistek', name: 'Bistek', weekly: 660, monthly: 2640, group: 'operating' },
  { id: 'cremeria', name: 'Cremería', weekly: 680, monthly: 2720, group: 'operating' },
  { id: 'tortillas', name: 'Tortillas y masa', weekly: 650, monthly: 2600, group: 'operating' },
  { id: 'mandaditos', name: 'Mandaditos', weekly: 170, monthly: 680, group: 'operating' },
  { id: 'desechable', name: 'Desechable', weekly: 80, monthly: 320, group: 'operating' },
  { id: 'vinos', name: 'Vinos y licores', weekly: 650, monthly: 2600, group: 'operating' },
  { id: 'papeleria', name: 'Papelería', weekly: 125, monthly: 500, group: 'operating' },
  { id: 'comision', name: 'Comisión billipocket', weekly: 700, monthly: 2800, group: 'operating' },
  { id: 'otros', name: 'Otros', weekly: 0, monthly: 0, group: 'operating' },
  { id: 'nomina', name: 'Nómina', weekly: 13000, monthly: 52000, group: 'fixed' },
  { id: 'renta', name: 'Renta', weekly: 3800, monthly: 15200, group: 'fixed' },
  { id: 'luz', name: 'Luz', weekly: 187.5, monthly: 750, group: 'fixed' },
  { id: 'reserva', name: 'Fondo de reserva', weekly: 0, monthly: 0, group: 'fixed' },
];

const excelSnapshot = [
  ['abarrote', 6045.5], ['verdura', 2314], ['pan', 631], ['basura', 150], ['agua', 263],
  ['limpieza', 0], ['gas', 518], ['carne', 2997], ['coca-cola', 926], ['jarritos', 212],
  ['cortes', 0], ['cerveza', 1318], ['leche', 102], ['pollo', 118], ['bistek', 0],
  ['cremeria', 1909], ['tortillas', 2281], ['mandaditos', 0], ['desechable', 0], ['vinos', 475],
  ['papeleria', 116], ['renta', 0], ['nomina', 14598], ['comision', 0], ['reserva', 0], ['otros', 3859.5],
];

const periods = [
  {
    id: '2026-2sem', name: '2026 · 2º semestre', sheet: '2026-2sem', current: true,
    weeks: [
      ['4–10 mayo', 38833], ['11–17 mayo', 0], ['18–24 mayo', 34027.4], ['25–31 mayo', 30761.5],
      ['2–8 febrero', 0], ['9–15 febrero', 60770.26], ['16–21 febrero', 39882.34], ['23 feb–1 mzo', 30854.5],
      ['2–8 marzo', 24089], ['9–15 marzo', 37495.5], ['16–22 marzo', 29510.75], ['23–29 marzo', 25608.5],
      ['30 mar–5 abril', 29654.3], ['6–12 abril', 21689.5], ['13–19 abril', 0], ['20–26 abril', 12143.1], ['27 abr–3 mayo', 17092],
    ],
  },
  {
    id: '2026-1sem', name: '2026 · 1er semestre', sheet: '2026-1sem',
    weeks: [
      ['1–4 enero', 11872.5], ['5–11 enero', 0], ['12–18 enero', 0], ['19–25 enero', 33395.5], ['26 ene–1 feb', 34168],
      ['2–8 febrero', 33511.19], ['9–15 febrero', 60770.26], ['16–21 febrero', 39882.34], ['23 feb–1 mzo', 30854.5],
      ['2–8 marzo', 25609], ['9–15 marzo', 37495.5], ['16–22 marzo', 29510.75], ['23–29 marzo', 25608.5],
      ['30 mar–5 abril', 31033.3], ['6–12 abril', 21689.5], ['13–19 abril', 0], ['20–26 abril', 24643.1], ['27 abr–3 mayo', 29592],
    ],
  },
  {
    id: 'sep-dic25', name: 'Sep–dic 2025', sheet: 'sep-dic25',
    weeks: [
      ['1–7 septiembre', 0], ['8–14 septiembre', 34584.28], ['15–21 septiembre', 0], ['22–28 septiembre', 25782.8],
      ['29 sep–5 oct', 36846.5], ['6–12 octubre', 22524.5], ['13–19 octubre', 0], ['20–26 octubre', 23508.5],
      ['27 oct–2 nov', 34154.8], ['3–9 noviembre', 0], ['10–16 noviembre', 0], ['17–23 noviembre', 32575.5],
      ['24–30 noviembre', 39836.3], ['1–7 diciembre', 36495.5], ['8–14 diciembre', 0], ['15–21 diciembre', 0], ['22–28 diciembre', 0], ['29–31 diciembre', 0],
    ],
  },
  {
    id: 'hoja1', name: 'Histórico · nov 2024–ago 2025', sheet: 'Hoja1',
    weeks: [
      ['9–17 noviembre', 65656.5], ['18–24 noviembre', 0], ['25 nov–1 dic', 30313.8], ['2–8 diciembre', 31485.5],
      ['9–15 diciembre', 64032.74], ['16–22 diciembre', 73114.07], ['23–29 diciembre', 70169.3], ['20–26 enero', 33521.18],
      ['27 ene–2 feb', 34700.94], ['3–9 febrero', 29074.58], ['17–23 febrero', 34257.34], ['2–9 marzo', 34648.49],
      ['17–23 marzo', 29291], ['24–30 marzo', 34187.3], ['31 mar–6 abril', 33096.58], ['7–13 abril', 31717],
      ['21–27 abril', 34001], ['28 abr–4 mayo', 35462.06], ['19–25 mayo', 33413.5], ['26 may–1 jun', 29961.9],
      ['2–8 junio', 26713.5], ['16–22 junio', 33325.5], ['23–29 junio', 31792.5], ['7–13 julio', 24695.5],
      ['14–20 julio', 32739.5], ['21–27 julio', 35044], ['4–10 agosto', 32005.9], ['18–24 agosto', 31613.5], ['25–31 agosto', 37971.68],
    ],
  },
].map(period => ({ ...period, weeks: period.weeks.map(([label, total]) => ({ label, total })) }));

const defaultState = () => ({
  budgets: Object.fromEntries(budgetItems.map(item => [item.id, { weekly: item.weekly, monthly: item.monthly }])),
  manualEntries: [],
});

let state = loadState();
let selectedPeriodId = '2026-2sem';
let selectedWeekIndex = 0;
let activeView = 'dashboard';
let toastTimer;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 2 }).format(Number(value) || 0);
const compactMoney = value => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', notation: 'compact', maximumFractionDigits: 1 }).format(Number(value) || 0);
const shortDate = value => value ? new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`)).replace('.', '') : '—';
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const getPeriod = () => periods.find(period => period.id === selectedPeriodId) || periods[0];
const getWeek = () => getPeriod().weeks[selectedWeekIndex] || getPeriod().weeks[0];
const getBudget = id => state.budgets[id] || { weekly: 0, monthly: 0 };
const getItem = id => budgetItems.find(item => item.id === id);
const budgetTotal = group => budgetItems.filter(item => !group || item.group === group).reduce((sum, item) => sum + Number(getBudget(item.id).weekly || 0), 0);
const monthlyTotal = group => budgetItems.filter(item => !group || item.group === group).reduce((sum, item) => sum + Number(getBudget(item.id).monthly || 0), 0);
const manualForSelection = () => state.manualEntries.filter(entry => entry.periodId === selectedPeriodId && Number(entry.weekIndex) === Number(selectedWeekIndex));
const baseTotal = () => getWeek().total || 0;
const selectedTotal = () => baseTotal() + manualForSelection().reduce((sum, entry) => sum + Number(entry.amount || 0), 0);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved?.budgets && Array.isArray(saved.manualEntries)) return saved;
  } catch (error) { console.warn('No se pudo leer la sesión guardada', error); }
  return defaultState();
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function snapshotBreakdown() {
  if (selectedPeriodId !== '2026-2sem' || selectedWeekIndex !== 0) return null;
  const breakdown = Object.fromEntries(excelSnapshot.map(([id, amount]) => [id, amount]));
  for (const entry of manualForSelection()) breakdown[entry.category] = (breakdown[entry.category] || 0) + Number(entry.amount || 0);
  return breakdown;
}

function movementRows() {
  const manual = manualForSelection();
  const seed = selectedPeriodId === '2026-2sem' && selectedWeekIndex === 0
    ? excelSnapshot.filter(([, amount]) => amount > 0).map(([category, amount], index) => ({ id: `excel-${index}`, date: '2026-05-10', category, amount, note: 'Consolidado del Excel · semana 4–10 mayo', payment: 'Excel', source: 'excel' }))
    : [];
  return [...manual, ...seed].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function setView(view) {
  activeView = view;
  $$('.view').forEach(section => section.classList.toggle('active-view', section.id === `${view}View`));
  $$('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  if (view === 'capture') renderCapture();
  if (view === 'budget') renderBudget();
  if (view === 'history') renderHistory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSelectors() {
  $('#periodSelect').innerHTML = periods.map(period => `<option value="${period.id}" ${period.id === selectedPeriodId ? 'selected' : ''}>${escapeHtml(period.name)}</option>`).join('');
  const weekOptions = getPeriod().weeks.map((week, index) => `<option value="${index}" ${index === selectedWeekIndex ? 'selected' : ''}>${escapeHtml(week.label)} · ${money(week.total)}</option>`).join('');
  $('#weekSelect').innerHTML = weekOptions;
  $('#captureWeek').innerHTML = weekOptions;
}

function renderDashboard() {
  const period = getPeriod();
  const week = getWeek();
  const total = selectedTotal();
  const weeklyBudget = budgetTotal();
  const available = weeklyBudget - total;
  const usage = weeklyBudget ? (total / weeklyBudget) * 100 : 0;
  $('#dashboardSubtitle').textContent = `${period.name} · ${period.sheet}`;
  $('#heroTotal').textContent = money(total);
  $('#heroMeta').textContent = `${week.label} · comparado contra ${money(weeklyBudget)} de presupuesto semanal`;
  $('#kpiSpent').textContent = money(total);
  $('#kpiSpentNote').textContent = `${period.sheet} · ${week.label}`;
  $('#kpiBudget').textContent = money(weeklyBudget);
  $('#kpiAvailable').textContent = money(available);
  $('#kpiAvailable').style.color = available < 0 ? '#a34641' : '';
  $('#kpiAvailableNote').textContent = available < 0 ? 'Excedente del presupuesto' : 'Dentro del presupuesto';
  $('#kpiUsage').textContent = `${Math.round(usage)}%`;
  $('#kpiUsageBar').style.width = `${Math.min(100, Math.max(0, usage))}%`;
  $('#conceptCaption').textContent = week.label;
  renderConceptBars();
  renderRing(total, weeklyBudget);
  renderMovementTable();
}

function renderConceptBars() {
  const breakdown = snapshotBreakdown();
  const container = $('#conceptBars');
  if (!breakdown) {
    container.innerHTML = `<div class="empty-row">Este bloque del Excel conserva el total semanal, pero no un desglose visible para esta semana.</div>`;
    return;
  }
  const rows = Object.entries(breakdown).filter(([, amount]) => amount > 0).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = rows[0]?.[1] || 1;
  container.innerHTML = rows.map(([id, amount]) => `<div class="concept-row"><span class="concept-name" title="${escapeHtml(getItem(id)?.name || id)}">${escapeHtml(getItem(id)?.name || id)}</span><div class="concept-track"><div class="concept-fill" style="width:${Math.max(3, (amount / max) * 100)}%"></div></div><span class="concept-amount">${compactMoney(amount)}</span></div>`).join('');
}

function renderRing(total, budget) {
  const actualUsage = budget ? Math.max(0, total / budget * 100) : 0;
  const visualUsage = Math.min(100, actualUsage);
  $('#budgetRing').style.background = `conic-gradient(var(--forest-2) ${visualUsage * 3.6}deg, #edf4eb ${visualUsage * 3.6}deg)`;
  $('#ringPercent').textContent = `${Math.round(actualUsage)}%`;
  $('#ringSpent').textContent = money(total);
  $('#ringRemaining').textContent = money(Math.max(0, budget - total));
  $('#budgetCallout').textContent = total > budget ? `La semana excede el presupuesto por ${money(total - budget)}. Revisa los conceptos con mayor movimiento.` : `La semana está dentro del presupuesto. Aún puedes usar ${money(budget - total)} antes de llegar al límite.`;
  $('#budgetCallout').style.background = total > budget ? '#fae4e0' : '';
  $('#budgetCallout').style.color = total > budget ? '#a34641' : '';
}

function renderMovementTable() {
  const rows = movementRows();
  $('#movementRows').innerHTML = rows.length ? rows.slice(0, 10).map(row => movementRowHtml(row, false)).join('') : `<tr><td colspan="5" class="empty-row">No hay movimientos para esta semana.</td></tr>`;
}

function movementRowHtml(row, includePayment) {
  const item = getItem(row.category);
  return `<tr><td class="date-cell">${shortDate(row.date)}</td><td><span class="tag">${escapeHtml(item?.name || row.category)}</span></td>${includePayment ? `<td>${escapeHtml(row.payment || '—')}</td>` : ''}<td class="note-cell">${escapeHtml(row.note || 'Sin nota')}</td><td class="align-right amount-cell">${money(row.amount)}</td><td>${row.source === 'manual' ? `<button class="delete-button" data-delete-id="${row.id}" aria-label="Eliminar gasto">×</button>` : ''}</td></tr>`;
}

function renderCapture() {
  $('#expenseCategory').innerHTML = budgetItems.map(item => `<option value="${item.id}">${escapeHtml(item.name)}</option>`).join('');
  $('#captureBudget').textContent = money(budgetTotal());
  const count = state.manualEntries.length;
  $('#newMovementCount').textContent = `${count} ${count === 1 ? 'registro' : 'registros'}`;
  const rows = [...state.manualEntries].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  $('#newMovementRows').innerHTML = rows.length ? rows.map(row => movementRowHtml(row, true)).join('') : `<tr><td colspan="6" class="empty-row">Los gastos que guardes aparecerán aquí.</td></tr>`;
  if (!$('#expenseDate').value) $('#expenseDate').value = selectedPeriodId === '2026-2sem' ? '2026-05-10' : new Date().toISOString().slice(0, 10);
}

function renderBudget() {
  const breakdown = snapshotBreakdown() || {};
  const operating = budgetItems.filter(item => item.group === 'operating');
  const fixed = budgetItems.filter(item => item.group === 'fixed');
  $('#monthlyBudgetTotal').textContent = money(monthlyTotal());
  $('#operatingWeekly').textContent = money(budgetTotal('operating'));
  $('#fixedWeekly').textContent = money(budgetTotal('fixed'));
  $('#budgetGrandMonthly').textContent = money(monthlyTotal());
  $('#operatingBudgetRows').innerHTML = operating.map(item => budgetRowHtml(item, breakdown[item.id] || 0)).join('');
  $('#fixedBudgetRows').innerHTML = fixed.map(item => budgetRowHtml(item, breakdown[item.id] || 0, true)).join('');
  $('#operatingBudgetTotal').innerHTML = totalRowHtml(budgetTotal('operating'), monthlyTotal('operating'), operating.reduce((sum, item) => sum + (breakdown[item.id] || 0), 0), true);
  $('#fixedBudgetTotal').innerHTML = totalRowHtml(budgetTotal('fixed'), monthlyTotal('fixed'), 0, false);
}

function budgetRowHtml(item, spent, fixed = false) {
  const budget = getBudget(item.id);
  const usage = budget.weekly ? Math.round(spent / budget.weekly * 100) : 0;
  return `<tr><td><strong>${escapeHtml(item.name)}</strong></td><td class="align-right"><input class="budget-input" type="number" min="0" step="0.01" value="${Number(budget.weekly)}" data-budget-id="${item.id}" data-budget-field="weekly" aria-label="Presupuesto semanal de ${escapeHtml(item.name)}"></td><td class="align-right">${money(budget.monthly)}</td>${fixed ? '' : `<td class="align-right amount-cell">${money(spent)}</td><td class="budget-progress"><div class="budget-progress-track"><span style="width:${Math.min(100, usage)}%"></span></div><small>${usage}%</small></td>`}</tr>`;
}

function totalRowHtml(weekly, monthly, spent, showSpent) {
  const usage = weekly ? Math.round(spent / weekly * 100) : 0;
  return `<tr class="total-row"><td>Total</td><td class="align-right">${money(weekly)}</td><td class="align-right">${money(monthly)}</td>${showSpent ? `<td class="align-right">${money(spent)}</td><td>${usage}% usado</td>` : ''}</tr>`;
}

function renderHistory() {
  const allWeeks = periods.flatMap(period => period.weeks.map((week, index) => ({ period, week, index, total: period.id === selectedPeriodId && index === selectedWeekIndex ? selectedTotal() : week.total })));
  const chartWeeks = allWeeks.filter(item => item.total > 0).slice(-18);
  const max = Math.max(...chartWeeks.map(item => item.total), 1);
  $('#historyChart').innerHTML = chartWeeks.map(item => `<div class="chart-column"><div class="chart-bar-wrap"><div class="chart-bar" style="height:${Math.max(3, item.total / max * 100)}%" data-value="${money(item.total)}"></div></div><span class="chart-label" title="${escapeHtml(item.period.name)} · ${escapeHtml(item.week.label)}">${escapeHtml(item.week.label)}</span></div>`).join('');
  $('#historyRows').innerHTML = allWeeks.slice().reverse().map(item => {
    const budget = budgetTotal(); const difference = budget - item.total; const status = item.total === 0 ? ['Sem dados', 'neutral'] : difference < 0 ? ['Excedido', 'over'] : ['En rango', ''];
    return `<tr><td><span class="tag">${escapeHtml(item.period.sheet)}</span></td><td>${escapeHtml(item.week.label)}</td><td class="align-right amount-cell">${money(item.total)}</td><td class="align-right">${money(budget)}</td><td class="align-right" style="color:${difference < 0 ? '#a34641' : 'inherit'}">${difference >= 0 ? '+' : ''}${money(difference)}</td><td><span class="status-pill ${status[1]}">${status[0]}</span></td></tr>`;
  }).join('');
}

function downloadCsv(filename, rows) {
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' }));
  link.download = filename; link.click(); URL.revokeObjectURL(link.href);
}

function bindEvents() {
  document.addEventListener('click', event => {
    const viewButton = event.target.closest('[data-view]');
    if (viewButton) setView(viewButton.dataset.view);
    const deleteButton = event.target.closest('[data-delete-id]');
    if (deleteButton) {
      state.manualEntries = state.manualEntries.filter(entry => entry.id !== deleteButton.dataset.deleteId);
      saveState(); renderDashboard(); renderCapture(); renderBudget(); showToast('Gasto eliminado.');
    }
  });
  $('#periodSelect').addEventListener('change', event => { selectedPeriodId = event.target.value; selectedWeekIndex = 0; renderAll(); });
  $('#weekSelect').addEventListener('change', event => { selectedWeekIndex = Number(event.target.value); renderAll(); });
  $('#captureWeek').addEventListener('change', event => { selectedWeekIndex = Number(event.target.value); $('#weekSelect').value = String(selectedWeekIndex); $('#captureBudget').textContent = money(budgetTotal()); });
  $('#expenseForm').addEventListener('submit', event => {
    event.preventDefault();
    const amount = Number($('#expenseAmount').value);
    if (!amount || amount <= 0) return showToast('Escribe un monto mayor a cero.');
    state.manualEntries.push({ id: `manual-${Date.now()}`, date: $('#expenseDate').value, category: $('#expenseCategory').value, amount, note: $('#expenseNote').value.trim() || 'Sin nota', payment: $('#expensePayment').value, periodId: selectedPeriodId, weekIndex: selectedWeekIndex, source: 'manual' });
    saveState(); event.target.reset(); $('#expenseDate').value = selectedPeriodId === '2026-2sem' ? '2026-05-10' : new Date().toISOString().slice(0, 10); renderAll(); showToast('Gasto guardado y totales actualizados.'); setView('dashboard');
  });
  document.addEventListener('change', event => {
    const input = event.target.closest('[data-budget-id]');
    if (!input) return;
    const value = Math.max(0, Number(input.value) || 0); const id = input.dataset.budgetId;
    state.budgets[id].weekly = value; state.budgets[id].monthly = value * 4; saveState(); renderAll(); showToast('Presupuesto actualizado.');
  });
  $('#exportCsv').addEventListener('click', () => { const rows = [['Fecha', 'Concepto', 'Nota', 'Forma de pago', 'Monto']].concat(movementRows().map(row => [row.date, getItem(row.category)?.name || row.category, row.note, row.payment || 'Excel', row.amount])); downloadCsv(`control-gastos-${selectedPeriodId}.csv`, rows); showToast('CSV descargado.'); });
  $('#historyExport').addEventListener('click', () => { const rows = [['Hoja', 'Semana', 'Gasto', 'Presupuesto semanal', 'Variación']]; periods.forEach(period => period.weeks.forEach((week, index) => rows.push([period.sheet, week.label, index === selectedWeekIndex && period.id === selectedPeriodId ? selectedTotal() : week.total, budgetTotal(), budgetTotal() - week.total]))); downloadCsv('historico-control-gastos.csv', rows); showToast('Histórico descargado.'); });
  $('#resetData').addEventListener('click', () => { if (!window.confirm('¿Restaurar los datos demo y borrar los gastos capturados?')) return; state = defaultState(); saveState(); selectedPeriodId = '2026-2sem'; selectedWeekIndex = 0; renderAll(); showToast('Datos demo restaurados.'); });
}

function renderAll() { renderSelectors(); renderDashboard(); if (activeView === 'capture') renderCapture(); if (activeView === 'budget') renderBudget(); if (activeView === 'history') renderHistory(); }

bindEvents();
renderAll();
