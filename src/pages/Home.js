import { activitiesData } from '../data/activities.js';
export function renderHome() {
  const homeDivisions = activitiesData.slice(0, 6);

  return `
    <div class="page-transition">
      <!-- HERO SECTION -->
      <section class="hero" id="home-hero">
        <div class="hero-bg">
          <img src="/assets/images/asset_18_home.jpg" alt="Panoramic view of container ships and escort vessels at twilight" class="hero-bg-img" />
          <div class="hero-gradient"></div>
        </div>

        <div class="container hero-content">
          <h1 class="hero-title">
            Sovereign Maritime Infrastructure, Heavy Engineering &amp; Strategic Ocean Logistics
          </h1>

          <p class="hero-desc">
            Marine Corporation of India deploys end-to-end deepwater engineering, state-of-the-art vessel maintenance, dredging infrastructure, and commercial energy fleet logistics safeguarding national and international trade corridors.
          </p>

          <div class="hero-actions">
            <a href="/activities" class="btn btn-accent btn-lg" data-nav-link>
              <span>Explore Operational Capabilities</span>
              <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
            </a>
            <a href="/global-presence" class="btn btn-outline-white btn-lg" data-nav-link>
              <span class="material-symbols-outlined" style="font-size: 18px;">satellite_alt</span>
              <span>Launch Fleet Telemetry Portal</span>
            </a>
          </div>

          <div class="workflow-strip">
            <div class="workflow-step">
              <strong>Explore</strong>
              <span>Choose a maritime capability or operating region.</span>
            </div>
            <div class="workflow-step">
              <strong>Inspect</strong>
              <span>Open the capability sheet or station profile for details.</span>
            </div>
            <div class="workflow-step">
              <strong>Dispatch</strong>
              <span>Contact operations when the requirement is ready.</span>
            </div>
          </div>
        </div>

      </section>

      <!-- CORE DIVISIONS BENTO GRID -->
      <section class="section section-light" id="capabilities">
        <div class="container">
          <div class="section-header-row">
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">grid_view</span>
                Core Maritime Divisions
              </span>
              <h2 class="section-title">
                Sovereign Industrial Capabilities &amp; Deepwater Logistics
              </h2>
            </div>
            <p class="section-subtitle">
              Precision-engineered marine interventions deployed across strategic ocean sectors, commercial energy support, and coastal harbor expansions.
            </p>
          </div>

          <div class="bento-grid coverflow-grid">
            ${homeDivisions.map((div, i) => `
              <a href="/activities/${div.id}" class="division-card" data-nav-link>
                <div class="division-media">
                  <img src="${div.heroImage}" alt="${div.heroAlt}" class="division-img" />
                  <div class="division-tag">
                    <span class="material-symbols-outlined" style="font-size: 14px;">anchor</span>
                    <span>${div.sectorCode}</span>
                  </div>
                </div>
                <div class="division-body">
                  <div>
                    <h3 class="division-name">${div.title}</h3>
                    <p class="division-desc">${div.summary}</p>
                  </div>
                  <div class="division-footer">
                    <span>${div.metrics[0].value} ${div.metrics[0].label}</span>
                    <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- INSTITUTIONAL PROFILE & CREDIBILITY -->
      <section class="section section-white" id="corporate-profile">
        <div class="container">
          <div class="profile-grid">
            <!-- Left Column: HQ Imagery & Telemetry Callout -->
            <div class="profile-media-box">
              <img src="/assets/images/asset_1_about_mci.jpg" alt="MCI Corporate Headquarters & Operations Control Center" class="profile-img" />
              <div class="profile-floating-badge">
                <h4>
                  <span class="material-symbols-outlined" style="font-size: 16px;">domain</span>
                  Central Command Tower
                </h4>
                <p>
                  Centralized vessel telemetry, satellite routing control, and emergency incident dispatch in Mumbai &amp; Visakhapatnam HQ.
                </p>
              </div>
            </div>

            <!-- Right Column: Institutional Profile & Accreditations -->
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">account_balance</span>
                Institutional Profile
              </span>
              <h2 class="section-title" style="margin-bottom: 1rem;">
                Sovereign Trust Safeguarding National Oceanic Corridors
              </h2>
              <p class="premium-prose" style="margin-bottom: 1rem;">
                Established under national infrastructure mandates, the Marine Corporation of India (MCI) provides the institutional backbone for national maritime resilience, specialized deep-sea towage, salvage operations, and maritime asset integrity across the Indian Ocean Region (IOR).
              </p>
              <p class="premium-prose" style="margin-bottom: 1.5rem;">
                Our multi-disciplinary team brings together naval architects, master mariners, salvage engineers, and regulatory specialists executing operations in full compliance with United Nations IMO protocols and international classification society requirements.
              </p>

              <div>
                <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-slate); display: block; margin-bottom: 0.75rem;">
                  Statutory Accreditations &amp; Class Approvals
                </span>
                <div class="accreditations-grid">
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">verified</span>
                    <div>
                      <strong>DGS</strong>
                      <span>Govt. of India</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">shield</span>
                    <div>
                      <strong>IRS</strong>
                      <span>Indian Register</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">waves</span>
                    <div>
                      <strong>IWAI</strong>
                      <span>Inland Waterways</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">public</span>
                    <div>
                      <strong>IMO / SOLAS</strong>
                      <span>UN Maritime</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">map</span>
                    <div>
                      <strong>IHO S-44</strong>
                      <span>Hydrographic Class</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">military_tech</span>
                    <div>
                      <strong>ISO 9001/14001</strong>
                      <span>Bureau Veritas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GLOBAL REACH & MARITIME CORRIDORS TEASER -->
      <section class="section section-dark" id="global-ports">
        <div class="container">
          <div class="section-header-row">
            <div>
              <span class="section-eyebrow" style="color: var(--color-secondary-container);">
                <span class="material-symbols-outlined" style="font-size: 16px;">hub</span>
                Operational Geography
              </span>
              <h2 class="section-title">
                Strategic Global Reach &amp; Primary Shipping Corridors
              </h2>
            </div>
            <a href="/global-presence" class="btn btn-outline-white" data-nav-link>
              <span>View Global Presence Directory</span>
              <span class="material-symbols-outlined" style="font-size: 16px;">open_in_new</span>
            </a>
          </div>

          <div class="map-container">
            <img src="/assets/images/asset_15_global_presence.jpg" alt="Executive corporate world map with maritime shipping corridors" class="map-bg-img" />
            <div class="map-lux-overlay"></div>
            <div class="map-scanline"></div>
            <div class="map-node map-node-india"><span></span></div>
            <div class="map-node map-node-gulf"><span></span></div>
            <div class="map-node map-node-malacca"><span></span></div>
            <div class="map-node map-node-europe"><span></span></div>
            <div class="map-route map-route-1"></div>
            <div class="map-route map-route-2"></div>
            <div class="map-corridors-overlay">
              <div class="corridor-item">
                <span>Strait of Malacca Transit</span>
                <strong>Active Escort Tier 1</strong>
              </div>
              <div class="corridor-item">
                <span>Arabian Sea Hub</span>
                <strong>Nhava Sheva &amp; Kandla</strong>
              </div>
              <div class="corridor-item">
                <span>Bay of Bengal Channel</span>
                <strong>Visakhapatnam &amp; Paradip</strong>
              </div>
              <div class="corridor-item">
                <span>Middle East Gulf Route</span>
                <strong>Direct Tanker Support</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA / INITIATE FLEET DISPATCH -->
      <section class="section section-light" id="desk-cta">
        <div class="container">
          <div class="cta-banner">
            <div class="cta-banner-content">
              <div class="badge badge-accent" style="margin-bottom: 0.75rem;">
                <span class="material-symbols-outlined" style="font-size: 14px;">speed</span>
                24/7 Rapid Mobilization
              </div>
              <h2 class="section-title" style="margin-bottom: 0.5rem;">
                Initiate Fleet Dispatch &amp; Operational Inquiry
              </h2>
              <p style="font-size: 0.95rem; color: var(--color-on-surface-variant); line-height: 1.55;">
                Connect directly with our central duty superintendents for emergency towage, scheduled dry dock reservations, salvage interventions, or sovereign hydrographic project planning.
              </p>
            </div>

            <div class="cta-banner-actions">
              <a href="tel:+912222610940" class="btn btn-primary btn-lg">
                <span class="material-symbols-outlined">call</span>
                <span>+91 22 2261-0940</span>
              </a>
              <a href="/contact" class="btn btn-secondary btn-lg" data-nav-link>
                <span class="material-symbols-outlined">mail</span>
                <span>Send Dispatch Request</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
