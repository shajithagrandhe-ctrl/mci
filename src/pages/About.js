import { groupEntitiesData } from '../data/group.js';
import { renderNotchedInfoCard } from '../components/NotchedCard.js';

export function renderAbout() {
  return `
    <div class="page-transition">
      <!-- ABOUT HERO -->
      <section class="section section-white">
        <div class="container">
          <div class="profile-grid">
            <div>
              <h1 class="hero-title font-lobster" style="color: var(--color-primary); margin-bottom: 1rem;">
                Architects of Sovereign Maritime Power &amp; Ocean Infrastructure
              </h1>
              <p style="font-size: 1rem; color: var(--color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">
                Established to spearhead maritime self-reliance and commercial industrial capability, the Marine Corporation of India (MCI) anchors national port capacity, high-tonnage engineering modernization, and strategic deep-sea fairway maintenance across global sea lanes.
              </p>

              <div class="about-stats-row" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
                <div>
                  <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary);">1990</div>
                  <div style="font-size: 0.75rem; color: var(--color-slate); font-weight: 600;">FOUNDING YEAR</div>
                  <div style="font-size: 0.7rem; color: var(--color-secondary);">34+ Years Operational Legacy</div>
                </div>
                <div>
                  <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary);">142</div>
                  <div style="font-size: 0.75rem; color: var(--color-slate); font-weight: 600;">ACTIVE FLEET</div>
                  <div style="font-size: 0.7rem; color: var(--color-secondary);">Sovereign &amp; Auxiliary Units</div>
                </div>
                <div>
                  <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary);">100%</div>
                  <div style="font-size: 0.75rem; color: var(--color-slate); font-weight: 600;">CLASS AUDITED</div>
                  <div style="font-size: 0.7rem; color: var(--color-secondary);">SOLAS &amp; IMO Tier-III Ready</div>
                </div>
              </div>
            </div>

            <div class="profile-media-box">
              <img src="/assets/images/asset_1_about_mci.jpg" alt="MCI Central Operations & Command Tower" class="profile-img" />
              <div class="profile-floating-badge">
                <h4>
                  <span class="material-symbols-outlined" style="font-size: 16px;">domain</span>
                  MCI Central Operations &amp; Command Tower
                </h4>
                <p>24/7 Vessel Traffic Service (VTS) &amp; Deep-Water Port Command.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STRATEGIC MANDATES & CORE PHILOSOPHY -->
      <section class="section section-light">
        <div class="container">
          <div class="section-header-row">
            <div>
              <h2 class="section-title font-lobster">Strategic Mandates &amp; Core Philosophy</h2>
            </div>
          </div>

          <div class="mandate-card-grid">
            ${renderNotchedInfoCard({
              title: 'Sovereign Readiness &amp; Security',
              description: 'Guaranteed fairway maintenance for strategic maritime passages, emergency deep-water salvage contingencies, and sovereign channel accessibility under all geopolitical and environmental conditions.',
              image: '/assets/images/asset_14_dredging_marine.jpg',
              imageAlt: 'Marine infrastructure operating in challenging waters',
            })}
            ${renderNotchedInfoCard({
              title: 'Classification Integrity',
              description: 'Adhering rigorously to Indian Register of Shipping (IRS), IACS unified requirements, and International Maritime Organization (IMO) SOLAS conventions across the entire engineering lifecycle.',
              image: '/assets/images/asset_21_ship_design_nav.jpg',
              imageAlt: 'Technical marine engineering and classification work',
            })}
            ${renderNotchedInfoCard({
              title: 'Decarbonization &amp; Green Corridors',
              description: 'Executing the national maritime green transition through cold-ironing shore electrification, dual-fuel LNG bunkering facilities, and low-wake hull engineering for delicate marine ecosystems.',
              image: '/assets/images/asset_20_maritime_green_.jpg',
              imageAlt: 'Low-carbon maritime corridor operations',
            })}
          </div>
        </div>
      </section>

      <!-- SOVEREIGN GOVERNANCE MATRIX & GROUP COMPANIES -->
      <section class="section section-white">
        <div class="container">
          <div class="profile-grid">
            <div class="profile-media-box">
              <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI Executive Boardroom & Leadership" class="profile-img" />
            </div>

            <div>
              <h2 class="section-title font-lobster" style="margin-bottom: 1rem;">Sovereign Governance Matrix</h2>

              <div style="margin-bottom: 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.65rem;">
                  ${groupEntitiesData.map(ent => `
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--color-primary); background: var(--color-surface-container-low); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                      <span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-secondary);">check_circle</span>
                      <span>${ent.name}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 1rem;">
                <a href="/group" class="btn btn-primary" data-nav-link>
                  <span>Explore Group Structure</span>
                  <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                </a>
                <a href="/investor-relations" class="btn btn-secondary" data-nav-link>
                  <span>Read Annual Charter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}
