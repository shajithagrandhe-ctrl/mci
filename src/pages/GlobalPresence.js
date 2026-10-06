import { globalPresenceData } from '../data/presence.js';

export function renderGlobalPresence() {
  return `
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">GLOBAL PRESENCE</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>14 ACTIVE SEA CORRIDORS</span>
            <span>LIVE FLEET TELEMETRY</span>
          </div>
        </div>
      </div>

      <!-- HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #001c28 0%, #071a2b 50%, #0d2f4f 100%);">
        <div class="container">
          <span class="section-eyebrow" style="color: var(--color-secondary-container);">
            <span class="material-symbols-outlined" style="font-size: 16px;">satellite_alt</span>
            Live Maritime Operations Network
          </span>
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-top: 0.5rem; margin-bottom: 1rem;">
            Strategic Global Presence &amp; Fleet Network
          </h1>
          <p style="font-size: 0.95rem; color: var(--color-primary-fixed-dim); max-width: 700px; line-height: 1.65; margin-bottom: 2.5rem;">
            MCI's maritime network spans primary shipping lanes across the Indian Ocean Region, with forward fleet commands positioned at critical strategic choke points from the Gulf of Aden to the Strait of Malacca.
          </p>

          <!-- OVERVIEW METRICS -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 600px;">
            ${globalPresenceData.overviewMetrics.map(m => `
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg); padding: 1.25rem; text-align: center;">
                <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">${m.value}</div>
                <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim); margin-top: 4px;">${m.label}</div>
                <div style="font-size: 0.65rem; color: var(--color-primary-fixed-dim); opacity: 0.6; margin-top: 2px;">${m.sub}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- MAP SECTION -->
      <section class="section section-dark" style="padding: 0;">
        <div style="position: relative; overflow: hidden; height: 340px;">
          <img src="/assets/images/asset_15_global_presence.jpg" alt="Global maritime operations map" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(7,26,43,0.58) 0%, rgba(7,26,43,0.16) 60%, rgba(7,26,43,0.48) 100%);"></div>
          <div style="position: absolute; inset: 0; display: flex; align-items: center;">
            <div class="container">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 800px;">
                ${[
                  { corridor: 'Arabian Sea Corridor', status: 'Tier 1 — Active' },
                  { corridor: 'Bay of Bengal Channel', status: 'Tier 1 — Active' },
                  { corridor: 'Strait of Malacca Transit', status: 'Escort Operations' },
                  { corridor: 'Suez Canal Approach', status: 'Alliance Tier' },
                ].map(c => `
                  <div class="corridor-card">
                    <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary-container); margin-bottom: 4px;">
                      <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #10b981; margin-right: 6px; vertical-align: middle; animation: pulse-ring 2s infinite;"></span>
                      ${c.status}
                    </div>
                    <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-white);">${c.corridor}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STATION TABS -->
      <section class="section section-white">
        <div class="container">
          <span class="section-eyebrow">
            <span class="material-symbols-outlined" style="font-size: 16px;">anchor</span>
            Maritime Command Stations
          </span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Forward Operating Bases &amp; Command Facilities</h2>

          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-border); padding-bottom: 0.75rem;">
            ${globalPresenceData.stations.map((s, i) => `
              <button class="station-tab ${i === 0 ? 'active' : ''}" data-station="${s.id}" type="button">
                <span class="material-symbols-outlined" style="font-size: 14px;">anchor</span>
                ${s.name.split('&')[0].trim()}
              </button>
            `).join('')}
          </div>

          ${globalPresenceData.stations.map((s, i) => `
            <div class="station-panel ${i === 0 ? 'active' : ''}" id="panel-${s.id}">
              <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2.5rem; align-items: start;">
                <div>
                  <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary); display: block; margin-bottom: 4px;">${s.region}</span>
                  <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.5rem;">${s.name}</h3>
                  <div style="font-size: 0.75rem; color: var(--color-slate); margin-bottom: 1rem; display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 13px;">location_on</span>
                    ${s.coords}
                  </div>
                  <p style="font-size: 0.875rem; color: var(--color-on-surface-variant); line-height: 1.65; margin-bottom: 1.5rem;">${s.desc}</p>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                    ${s.specs.map(spec => `
                      <div style="background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.75rem;">
                        <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-slate); margin-bottom: 4px;">${spec.label}</div>
                        <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-primary);">${spec.value}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
                <div>
                  <div style="background: var(--color-primary); color: #fff; border-radius: var(--radius-lg); padding: 1.5rem;">
                    <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary-container); margin-bottom: 1rem; font-weight: 700;">Station Command</div>
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                      <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-secondary-dark); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                        <span class="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <div style="font-size: 0.875rem; font-weight: 700;">${s.superintendent}</div>
                        <div style="font-size: 0.7rem; color: var(--color-primary-fixed-dim);">Station Superintendent</div>
                      </div>
                    </div>
                    <a href="tel:${s.phone}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-secondary-container); text-decoration: none; margin-bottom: 0.5rem;">
                      <span class="material-symbols-outlined" style="font-size: 16px;">call</span>
                      ${s.phone}
                    </a>
                    <a href="mailto:${s.email}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-secondary-container); text-decoration: none;">
                      <span class="material-symbols-outlined" style="font-size: 16px;">mail</span>
                      ${s.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FLEET TELEMETRY -->
      <section class="section section-light" style="padding: 3rem 0;">
        <div class="container">
          <span class="section-eyebrow">
            <span class="material-symbols-outlined" style="font-size: 16px;">radar</span>
            Live Fleet Telemetry
          </span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Active Fleet Status Board</h2>
          <div class="spec-table-wrapper">
            <table class="spec-table">
              <thead>
                <tr>
                  <th>Vessel Name</th>
                  <th>IMO No.</th>
                  <th>Type</th>
                  <th>Current Position</th>
                  <th>Heading</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${[
                  { name: 'MCI SAGAR PRIDE', imo: '9412086', type: 'TSHD Dredger', pos: 'Vizhinjam Roads', hdg: '270° West', status: 'operational' },
                  { name: 'MCI KAVERI', imo: '9337401', type: 'TSHD (12,000m³)', pos: 'Arabian Sea Ch. 7', hdg: '085° East', status: 'operational' },
                  { name: 'MCI VIJAY TUGS-01', imo: '9448821', type: 'ASD Tug (85T)', pos: 'JNPT Outer Anch.', hdg: 'Standby', status: 'standby' },
                  { name: 'MCI OFFSHORE SUPP-03', imo: '9512330', type: 'AHTS (DP2)', pos: 'KG Basin Block 98', hdg: '010° North', status: 'operational' },
                  { name: 'MCI SURVEY LAUNCH 01', imo: '9290177', type: 'Hydrographic Survey', pos: 'Paradip Approach', hdg: '180° South', status: 'operational' },
                  { name: 'MCI ENERGY BARGE-04', imo: '9388502', type: 'FSO Barge', pos: 'Kakinada Anch.', hdg: 'At Anchor', status: 'standby' },
                ].map(v => `
                  <tr>
                    <td style="font-weight: 700; color: var(--color-primary);">${v.name}</td>
                    <td style="font-size: 0.8rem; color: var(--color-slate);">${v.imo}</td>
                    <td style="font-size: 0.8rem;">${v.type}</td>
                    <td style="font-size: 0.8rem;">${v.pos}</td>
                    <td style="font-size: 0.8rem;">${v.hdg}</td>
                    <td><span class="status-chip ${v.status}">${v.status === 'operational' ? 'Underway' : 'Standby'}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  `;
}
