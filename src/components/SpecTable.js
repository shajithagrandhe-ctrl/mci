export function renderSpecTable(tableData, tableId = 'spec-table') {
  if (!tableData) return '';

  return `
    <div class="card" style="padding: 1.75rem; margin-top: 2.5rem;" id="${tableId}-container">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
        <div>
          <span class="badge badge-accent" style="margin-bottom: 0.35rem;">REGISTRY MANIFEST // ACTIVE TELEMETRY</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary);">${tableData.title}</h3>
        </div>
        
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <div style="position: relative; min-width: 220px;">
            <span class="material-symbols-outlined" style="position: absolute; left: 10px; top: 9px; font-size: 18px; color: var(--color-slate);">search</span>
            <input type="text" placeholder="Search manifest..." class="form-input table-search" data-table-id="${tableId}" style="padding-left: 2.2rem; font-size: 0.8rem; padding-top: 0.45rem; padding-bottom: 0.45rem;" />
          </div>
          <button type="button" class="btn btn-sm btn-secondary export-csv-btn" data-table-id="${tableId}">
            <span class="material-symbols-outlined" style="font-size: 16px;">download</span>
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div class="table-container">
        <table class="mci-table" id="${tableId}">
          <thead>
            <tr>
              ${tableData.headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${tableData.rows.map(r => `
              <tr class="table-row">
                <td>
                  <strong>${r.c1}</strong>
                  <span class="row-hover-card">
                    <strong>${r.c1}</strong>
                    <span>${r.c2} • ${r.c3} • ${r.status}</span>
                    <span>${r.c4} corridor capacity with ${r.c5} under ${r.status.toLowerCase()}</span>
                  </span>
                </td>
                <td>${r.c2}</td>
                <td>${r.c3}</td>
                <td>${r.c4}</td>
                <td>${r.c5}</td>
                ${r.c6 ? `<td>${r.c6}</td>` : ''}
                <td>
                  <span class="badge ${r.statusType === 'operational' ? 'badge-operational' : 'badge-standby'}">
                    <span class="pulse-dot ${r.statusType === 'operational' ? 'pulse-dot-green' : ''}"></span>
                    ${r.status}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div style="font-size: 0.725rem; color: var(--color-slate); margin-top: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
        <span>Displaying ${tableData.rows.length} verified registry units under direct operational command</span>
        <span>HYDROGRAPHIC SOUNDING DATUM: CHART DATUM (CD)</span>
      </div>
    </div>
  `;
}
