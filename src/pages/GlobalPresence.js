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

      <!-- PROMPT MAP SECTION -->
      <section class="section section-dark global-prompt-map-section">
        <div class="container">
          <div class="world-map-shell" aria-label="Global maritime network routes">
            <div class="world-map-copy">
              <span class="network-kicker">Global Network</span>
              <h2>Connected Maritime Corridors</h2>
              <p>
                Animated route paths connect MCI command desks with strategic maritime corridors across India, the Gulf, Africa, Europe, and Southeast Asia.
              </p>
            </div>

            <div class="world-map-stage">
              <div class="world-map-grid" aria-hidden="true"></div>
              <svg class="world-map-svg" viewBox="0 0 800 400" role="img" aria-label="Prompt-style global route map">
                <defs>
                  <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
                    <stop offset="10%" stop-color="#111111" stop-opacity="0.95" />
                    <stop offset="90%" stop-color="#111111" stop-opacity="0.95" />
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                  </linearGradient>
                  <filter id="point-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path class="world-map-land" d="M102 122c30-28 76-26 100 0 20 22 15 54-16 70-34 18-88 7-104-24-8-16-4-32 20-46Zm177-22c31-10 78-2 99 24 20 25 14 61-14 80-29 20-75 14-99-12-24-27-20-77 14-92Zm193 34c38-38 113-24 146 14 39 45 24 116-36 137-58 20-139-13-151-72-5-26 5-55 41-79Zm-40 168c26-10 62-5 78 13 18 19 10 46-15 57-27 12-66 0-78-24-9-18-3-37 15-46Zm-295-17c25-7 58 1 71 20 14 21 3 47-22 55-27 8-62-6-72-30-8-19 0-38 23-45Z" />

                <path class="world-route route-delay-0" d="M548 212 Q506 148 465 190" />
                <path class="world-route route-delay-1" d="M548 212 Q604 180 660 224" />
                <path class="world-route route-delay-2" d="M548 212 Q480 240 410 210" />
                <path class="world-route route-delay-3" d="M410 210 Q350 166 292 188" />
                <path class="world-route route-delay-4" d="M548 212 Q528 270 482 314" />
                <path class="world-route route-delay-5" d="M548 212 Q454 126 352 108" />

                <g class="world-point" transform="translate(548 212)">
                  <circle r="15" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="12" y="-10">New Delhi</text>
                </g>
                <g class="world-point" transform="translate(465 190)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="-84" y="-8">Gulf Desk</text>
                </g>
                <g class="world-point" transform="translate(660 224)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="-4" y="28">Malacca</text>
                </g>
                <g class="world-point" transform="translate(410 210)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="-86" y="26">Arabian Sea</text>
                </g>
                <g class="world-point" transform="translate(292 188)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="-38" y="-16">Lisbon</text>
                </g>
                <g class="world-point" transform="translate(482 314)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="-22" y="30">Nairobi</text>
                </g>
                <g class="world-point" transform="translate(352 108)">
                  <circle r="13" class="pulse-ring"></circle>
                  <circle r="5" filter="url(#point-glow)"></circle>
                  <text x="-36" y="-15">London</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}
