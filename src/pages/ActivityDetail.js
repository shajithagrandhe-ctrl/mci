import { activitiesData } from '../data/activities.js';

export function renderActivityDetail(id) {
  const act = activitiesData.find(a => a.id === id);
  if (!act) {
    return `<div class="page-transition"><div class="container" style="padding: 6rem 0; text-align: center;"><h1 style="color: var(--color-primary);">Division Not Found</h1><a href="/activities" data-nav-link class="btn btn-primary" style="margin-top: 1.5rem;">Back to Activities</a></div></div>`;
  }

  const idx = activitiesData.indexOf(act);
  const prev = activitiesData[idx - 1];
  const next = activitiesData[idx + 1];

  return `
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <a href="/activities" data-nav-link>ACTIVITIES</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">${act.sectorCode}</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>FULL OPERATIONAL STATUS</span>
            <span>${act.sectorCode}</span>
          </div>
        </div>
      </div>

      <!-- HERO -->
      <section class="section section-dark" style="padding: 0; position: relative; min-height: 420px; display: flex; align-items: flex-end;">
        <div style="position: absolute; inset: 0; overflow: hidden;">
          <img src="${act.heroImage}" alt="${act.heroAlt}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,26,43,0.97) 0%, rgba(7,26,43,0.65) 50%, rgba(7,26,43,0.2) 100%);"></div>
        </div>
        <div class="container" style="position: relative; z-index: 1; padding: 3rem var(--gutter-desktop);">
          <h1 class="hero-title" style="font-size: clamp(1.6rem, 3.5vw, 2.8rem); max-width: 800px;">${act.title}</h1>
          <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); max-width: 720px; line-height: 1.65; margin-top: 1rem;">${act.summary}</p>
        </div>
      </section>

      <!-- METRICS BAR -->
      <section class="activity-metrics-bar" style="padding: 1.5rem 0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
            ${act.metrics.map(m => `
              <div style="text-align: center; padding: 0.5rem;">
                <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: #ffffff;">${m.value}</div>
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; margin-top: 4px;">${m.label}</div>
                <div style="font-size: 0.7rem; color: #d6d6d6; margin-top: 2px;">${m.sub}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- SERVICE SUITES -->
      <section class="section section-white">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">verified</span>
                Verified Service Portfolio
              </span>
              <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Core Technical Capabilities</h2>
              ${act.suites ? act.suites.map(suite => `
                <div class="suite-card">
                  <div class="suite-icon">
                    <span class="material-symbols-outlined">${suite.icon}</span>
                  </div>
                  <div>
                    <h4 style="font-size: 0.975rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.375rem;">${suite.title}</h4>
                    <p style="font-size: 0.85rem; color: var(--color-on-surface-variant); line-height: 1.6; margin-bottom: 0.5rem;">${suite.desc}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.375rem;">
                      ${suite.specs.map(s => `<span style="font-size: 0.7rem; background: var(--color-surface-container); color: var(--color-secondary); padding: 2px 8px; border-radius: 3px; font-weight: 600;">${s}</span>`).join('')}
                    </div>
                  </div>
                </div>
              `).join('') : ''}
            </div>

            <div>
              ${act.verifiedServices ? `
                <div style="background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem;">
                  <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-slate); margin-bottom: 1rem;">
                    <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle; margin-right: 4px;">checklist</span>
                    Verified Services Manifest
                  </div>
                  <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.5rem;">
                    ${act.verifiedServices.map(s => `
                      <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--color-charcoal-navy);">
                        <span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-secondary); flex-shrink: 0;">check_circle</span>
                        ${s}
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}

              ${act.caseStudy ? `
                <div class="activity-case-study" style="border-radius: var(--radius-lg); padding: 1.5rem;">
                  <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary-container); display: block; margin-bottom: 0.5rem;">${act.caseStudy.tag}</span>
                  <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem;">${act.caseStudy.title}</h4>
                  <div style="font-size: 0.8rem; line-height: 1.6; color: var(--color-primary-fixed-dim);">
                    <strong style="color: var(--color-secondary-container);">Challenge:</strong> ${act.caseStudy.challenge}
                  </div>
                  <div style="font-size: 0.8rem; line-height: 1.6; color: var(--color-primary-fixed-dim); margin-top: 0.5rem;">
                    <strong style="color: var(--color-secondary-container);">Solution:</strong> ${act.caseStudy.solution}
                  </div>
                  <div style="display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    ${act.caseStudy.stats.map(s => `
                      <div style="text-align: center; flex: 1;">
                        <div style="font-size: 1rem; font-weight: 800; color: var(--color-secondary-container);">${s.value}</div>
                        <div style="font-size: 0.65rem; color: var(--color-primary-fixed-dim); margin-top: 2px;">${s.label}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </section>

      <!-- SPEC TABLE -->
    </div>
  `;
}
