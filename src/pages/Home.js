import { activitiesData } from '../data/activities.js';
export function renderHome() {
  const homeDivisions = activitiesData.slice(0, 6);

  return `
    <div class="page-transition">
      <!-- HERO SECTION -->
      <section class="hero" id="home-hero">
        <div class="hero-bg">
          <video class="hero-bg-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
            <source src="/assets/ship-coming-to-frame.mp4" type="video/mp4" />
          </video>
          <div class="hero-gradient"></div>
        </div>

        <div class="container hero-content">
          <h1 class="hero-title">
            Sovereign Maritime Infrastructure, Heavy Engineering &amp; Strategic Ocean Logistics
          </h1>

          <div class="hero-actions">
            <a href="#capabilities" class="btn btn-accent btn-lg">
              <span>Operational Capabilities</span>
              <span class="material-symbols-outlined" style="font-size: 18px;">arrow_downward</span>
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
              <h2 class="section-title">
                Sovereign Industrial Capabilities &amp; Deepwater Logistics
              </h2>
            </div>
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

          <div class="map-container prompt-map-container" aria-label="Animated global operations route map">
            <div class="world-map-stage home-world-map-stage">
              <div class="world-map-grid" aria-hidden="true"></div>
              <svg class="world-map-svg" viewBox="0 0 800 400" role="img" aria-label="Animated maritime corridor network">
                <defs>
                  <linearGradient id="home-route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
                    <stop offset="8%" stop-color="#111111" stop-opacity="0.95" />
                    <stop offset="92%" stop-color="#111111" stop-opacity="0.95" />
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                  </linearGradient>
                  <filter id="home-point-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path class="world-map-land" d="M102 122c30-28 76-26 100 0 20 22 15 54-16 70-34 18-88 7-104-24-8-16-4-32 20-46Zm177-22c31-10 78-2 99 24 20 25 14 61-14 80-29 20-75 14-99-12-24-27-20-77 14-92Zm193 34c38-38 113-24 146 14 39 45 24 116-36 137-58 20-139-13-151-72-5-26 5-55 41-79Zm-40 168c26-10 62-5 78 13 18 19 10 46-15 57-27 12-66 0-78-24-9-18-3-37 15-46Zm-295-17c25-7 58 1 71 20 14 21 3 47-22 55-27 8-62-6-72-30-8-19 0-38 23-45Z" />

                <path class="world-route route-delay-0 home-world-route" d="M548 212 Q506 148 465 190" />
                <path class="world-route route-delay-1 home-world-route" d="M548 212 Q604 180 660 224" />
                <path class="world-route route-delay-2 home-world-route" d="M548 212 Q480 240 410 210" />
                <path class="world-route route-delay-3 home-world-route" d="M410 210 Q350 166 292 188" />
                <path class="world-route route-delay-4 home-world-route" d="M548 212 Q528 270 482 314" />
                <path class="world-route route-delay-5 home-world-route" d="M548 212 Q454 126 352 108" />

                <g class="world-point" transform="translate(548 212)">
                  <circle r="15" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="12" y="-10">New Delhi</text>
                </g>
                <g class="world-point" transform="translate(465 190)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="-84" y="-8">Gulf Desk</text>
                </g>
                <g class="world-point" transform="translate(660 224)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="-4" y="28">Malacca</text>
                </g>
                <g class="world-point" transform="translate(410 210)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="-86" y="26">Arabian Sea</text>
                </g>
                <g class="world-point" transform="translate(292 188)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="-38" y="-16">Lisbon</text>
                </g>
                <g class="world-point" transform="translate(482 314)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="-22" y="30">Nairobi</text>
                </g>
                <g class="world-point" transform="translate(352 108)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#home-point-glow)"></circle>
                  <text x="-36" y="-15">London</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA / INITIATE FLEET DISPATCH -->
      <section class="section section-light" id="desk-cta">
        <div class="container">
          <div class="cta-banner">
            <div class="cta-banner-content">
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
