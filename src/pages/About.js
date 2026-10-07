import { groupEntitiesData } from '../data/group.js';

export function renderAbout() {
  return `
    <div class="page-transition">
      <!-- ABOUT HERO -->
      <section class="section section-white">
        <div class="container">
          <div class="profile-grid">
            <div>
              <h1 class="hero-title" style="color: var(--color-primary); margin-bottom: 1rem;">
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
              <span class="section-eyebrow">Institutional Foundation</span>
              <h2 class="section-title">Strategic Mandates &amp; Core Philosophy</h2>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
            <div class="card" style="padding: 1.75rem;">
              <div class="suite-icon" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined">shield</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">
                Sovereign Readiness &amp; Security
              </h3>
              <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.5; margin-bottom: 1.25rem;">
                Guaranteed fairway maintenance for strategic maritime passages, emergency deep-water salvage contingencies, and sovereign channel accessibility under all geopolitical and environmental conditions.
              </p>
            </div>

            <div class="card" style="padding: 1.75rem;">
              <div class="suite-icon" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined">rule</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">
                Classification Integrity
              </h3>
              <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.5; margin-bottom: 1.25rem;">
                Adhering rigorously to Indian Register of Shipping (IRS), IACS unified requirements, and International Maritime Organization (IMO) SOLAS conventions across the entire engineering lifecycle.
              </p>
            </div>

            <div class="card" style="padding: 1.75rem;">
              <div class="suite-icon" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined">eco</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">
                Decarbonization &amp; Green Corridors
              </h3>
              <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.5; margin-bottom: 1.25rem;">
                Executing the national maritime green transition through cold-ironing shore electrification, dual-fuel LNG bunkering facilities, and low-wake hull engineering for delicate marine ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SOVEREIGN GOVERNANCE MATRIX & GROUP COMPANIES -->
      <section class="section section-white">
        <div class="container">
          <div class="profile-grid">
            <div class="profile-media-box">
              <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI Executive Boardroom & Leadership" class="profile-img" />
              <div class="profile-floating-badge" style="max-width: 320px;">
                <h4>
                  <span class="material-symbols-outlined" style="font-size: 16px;">meeting_room</span>
                  Executive Assembly
                </h4>
                <p>Governing board overseeing strategic capital and statutory fleet operations.</p>
              </div>
            </div>

            <div>
              <span class="section-eyebrow">Executive Stewardship &amp; Oversight</span>
              <h2 class="section-title" style="margin-bottom: 1rem;">Sovereign Governance Matrix</h2>
              <blockquote style="font-size: 0.95rem; font-style: italic; color: var(--color-on-surface-variant); border-left: 3px solid var(--color-secondary); padding-left: 1rem; margin-bottom: 1.5rem;">
                "Our fiduciary duty spans beyond standard balance sheets. As custodians of maritime gateway capabilities, every nautical mile dredged, vessel built, and terminal automated must advance national resilience and commercial flow."
              </blockquote>

              <div style="margin-bottom: 1.5rem;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-slate); letter-spacing: 0.05em; display: block; margin-bottom: 0.75rem;">
                  The Group Companies of MCI:
                </span>
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

      <!-- CONSULT WITH OPERATIONS CTA -->
      <section class="section section-dark">
        <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--color-white); margin-bottom: 0.25rem;">
              Consult with Sovereign Operations Directorate
            </h2>
            <p style="font-size: 0.875rem; color: var(--color-primary-fixed-dim);">
              Direct protocol line for defense coordination, port infrastructure tenders, and deep-water dredge operations.
            </p>
          </div>
          <div style="display: flex; gap: 1rem;">
            <a href="/investor-relations" class="btn btn-outline-white" data-nav-link>
              <span class="material-symbols-outlined" style="font-size: 16px;">download</span>
              <span>Download Corporate Profile PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}
