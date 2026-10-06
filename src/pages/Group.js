import { groupEntitiesData } from '../data/group.js';

export function renderGroup() {
  return `
    <div class="page-transition">
      <!-- GROUP HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 100%);">
        <div class="container">
          <div class="profile-grid">
            <div>
              <div class="badge badge-accent" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined" style="font-size: 14px;">corporate_fare</span>
                ESTABLISHED 1990 // MULTI-ENTITY CONGLOMERATE
              </div>
              <h1 class="hero-title hero-title-slab" style="font-size: clamp(1.8rem, 3.5vw, 2.8rem); margin-bottom: 1rem;">
                MCI Group of Companies
              </h1>
              <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); line-height: 1.65; max-width: 600px; margin-bottom: 2rem;">
                The Marine Corporation of India Group operates as a diversified maritime industrial conglomerate spanning sovereign infrastructure engineering, international trade, independent marine assurance, and technical fleet management across global sea lanes.
              </p>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 480px;">
                <div style="text-align: center;">
                  <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">4</div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim);">Group Entities</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">34+</div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim);">Years Legacy</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">5</div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim);">Nations Active</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI Group Operations" style="width: 100%; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);" />
            </div>
          </div>
        </div>
      </section>

      <!-- GROUP ENTITIES -->
      <section class="section section-white">
        <div class="container">
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 2rem;">Constituent Companies &amp; Divisions</h2>
          <div style="display: grid; gap: 1.5rem;">
            ${groupEntitiesData.map((entity, i) => `
              <details class="group-entity-card group-entity-disclosure" style="border-left: 4px solid ${i === 0 ? 'var(--color-secondary)' : 'var(--color-border)'};">
                <summary>
                  <span>${entity.name}</span>
                  <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="group-entity-details">
                  <div class="group-entity-header">
                    <div>
                      <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary); display: block; margin-bottom: 4px;">${entity.incorporation}${i === 0 ? ' // FLAGSHIP' : ''}</span>
                      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary); margin-bottom: 4px;">${entity.name}</h3>
                      <span style="font-size: 0.8rem; color: var(--color-slate);">${entity.designation}</span>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                      <div class="group-location">
                        <span class="material-symbols-outlined" style="font-size: 13px; vertical-align: middle; margin-right: 3px;">location_on</span>
                        ${entity.hq}
                      </div>
                    </div>
                  </div>
                  <p style="font-size: 0.875rem; color: var(--color-on-surface-variant); line-height: 1.65; margin: 1rem 0;">${entity.desc}</p>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                    ${entity.coreCapabilities.map(cap => `
                      <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-charcoal-navy);">
                        <span class="material-symbols-outlined" style="font-size: 14px; color: var(--color-secondary); flex-shrink: 0;">check_circle</span>
                        ${cap}
                      </div>
                    `).join('')}
                  </div>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--color-border);">
                    ${entity.accreditations.map(acc => `
                      <span style="font-size: 0.7rem; background: var(--color-surface-container); color: var(--color-secondary-dark); padding: 3px 10px; border-radius: var(--radius-full); font-weight: 700; border: 1px solid var(--color-border);">${acc}</span>
                    `).join('')}
                  </div>
                </div>
              </details>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- INTERNATIONAL OFFICES -->
      <section class="section section-light" style="padding: 3rem 0;">
        <div class="container">
          <span class="section-eyebrow international-eyebrow">
            <span class="earth-icon" aria-hidden="true">🌍</span>
            International Network
          </span>
          <h2 class="section-title regional-heading" style="margin-top: 0.5rem; margin-bottom: 2rem;">Regional Office Locations</h2>
          <div class="regional-office-list">
            ${[
              { country: 'India', flag: '🇮🇳', city: 'Visakhapatnam & Mumbai', role: 'Flagship Registered HQ', email: 'india@mcigroup.co', phone: '+91 891 2561377' },
              { country: 'UAE', flag: '🇦🇪', city: 'Dubai', role: 'GCC Maritime Hub', email: 'dubai@mcigroup.co', phone: '+971 4 388-9100' },
              { country: 'Singapore', flag: '🇸🇬', city: 'Singapore', role: 'Asia-Pacific Liaison', email: 'singapore@mcigroup.co', phone: '+65 6778-4200' },
              { country: 'Sri Lanka', flag: '🇱🇰', city: 'Colombo', role: 'IOR Station', email: 'lanka@mcigroup.co', phone: '+94 11 243-7800' },
              { country: 'Russia', flag: '🇷🇺', city: 'Saint Petersburg', role: 'Baltic Office', email: 'russia@mcigroup.co', phone: '+7 812 320-1400' },
            ].map(office => `
              <details class="regional-office-card">
                <summary>
                  <span>${office.city}</span>
                  <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="regional-office-details">
                  <div style="font-size: 1.4rem; margin-bottom: 0.35rem;">${office.flag}</div>
                  <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary); margin-bottom: 4px;">${office.role}</div>
                  <h4 style="font-size: 0.975rem; font-weight: 700; color: var(--color-primary); margin-bottom: 2px;">${office.country}</h4>
                  <a href="tel:${office.phone}" style="font-size: 0.775rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 13px;">call</span>${office.phone}
                  </a>
                  <a href="mailto:${office.email}" style="font-size: 0.775rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 13px;">mail</span>${office.email}
                  </a>
                </div>
              </details>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
