import { activitiesData } from '../data/activities.js';

export function renderActivities() {
  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'infrastructure', label: 'Port & Infrastructure' },
    { id: 'energy', label: 'Energy & Offshore' },
    { id: 'engineering', label: 'Marine Engineering' },
    { id: 'sustainability', label: 'Green & Sustainability' },
  ];

  const categoryMap = {
    'port-development': 'infrastructure',
    'offshore-drilling': 'energy',
    'marine-repairs': 'engineering',
    'turbine-engineering': 'engineering',
    'marine-surveys': 'engineering',
    'green-technologies': 'sustainability',
    'ship-design': 'engineering',
    'dredging': 'infrastructure',
  };

  return `
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">ACTIVITIES &amp; SERVICES</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>8 ACTIVE DIVISIONS</span>
            <span>FULL OPERATIONAL STATUS</span>
          </div>
        </div>
      </div>

      <!-- ACTIVITIES HERO -->
      <section class="section section-dark activities-hero" style="padding: 3rem 0 2rem; position: relative; overflow: hidden;">
        <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 60%, #176b9c22 100%); z-index: 0;"></div>
        <div class="container" style="position: relative; z-index: 1;">
          <h1 class="section-title activity-hero-heading font-lobster" style="margin-top: 0.5rem; font-size: clamp(1.8rem, 3vw, 2.6rem);">
            Sovereign Maritime Industrial Capabilities
          </h1>
          <p style="font-size: 0.95rem; color: var(--color-primary-fixed-dim); max-width: 700px; line-height: 1.65; margin-top: 0.75rem; margin-bottom: 2rem;">
            Eight precision-engineered marine divisions spanning deepwater port infrastructure, energy fleet logistics, commercial shipyard engineering, hydrographic surveys, green propulsion technologies, and naval architectural design.
          </p>

          <!-- FILTER PILLS -->
          <div class="filter-pills">
            ${categories.map((c, i) => `
              <button class="filter-pill ${i === 0 ? 'active' : ''}" data-filter="${c.id}" type="button">${c.label}</button>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ACTIVITIES GRID -->
      <section class="section section-light" style="padding-top: 2.5rem;">
        <div class="container">
          <div class="activities-grid coverflow-grid">
            ${activitiesData.map(act => `
              <a href="/activities/${act.id}" class="activity-card" data-nav-link data-category="${categoryMap[act.id] || 'engineering'}">
                <div class="activity-card-media">
                  <img src="${act.heroImage}" alt="${act.heroAlt}" class="activity-card-img" loading="lazy" />
                  <div class="activity-card-overlay"></div>
                </div>
                <div class="activity-card-body">
                  <h3 class="activity-card-title">${act.title}</h3>
                  <div class="activity-card-cta">
                    <span>View Full Capability Sheet</span>
                    <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

    </div>
  `;
}
