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

    </div>
  `;
}
