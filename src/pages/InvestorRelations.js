import { investorData } from '../data/investor.js';

export function renderInvestorRelations() {
  return `
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">INVESTOR RELATIONS</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>STATUTORY DISCLOSURES // GOVERNANCE</span>
          </div>
        </div>
      </div>

      <!-- INVESTOR HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 100%);">
        <div class="container">
          <div class="badge badge-accent" style="margin-bottom: 1rem;">
            <span class="material-symbols-outlined" style="font-size: 14px;">account_balance</span>
            TRANSPARENT GOVERNANCE // FIDUCIARY STANDARDS
          </div>
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); max-width: 800px; margin-bottom: 1rem;">
            Investor Relations &amp; Corporate Governance
          </h1>
          <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); max-width: 680px; line-height: 1.65;">
            MCI operates under rigorous multi-tier governance, statutory audit regimes, and institutional transparency standards ensuring fiduciary responsibility to all stakeholders.
          </p>
        </div>
      </section>

      <!-- STRATEGIC INVESTMENT PILLARS -->
      <section class="section section-white">
        <div class="container">
          <span class="section-eyebrow">
            <span class="material-symbols-outlined" style="font-size: 16px;">trending_up</span>
            Investment Framework
          </span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 2rem;">Strategic Investment Pillars</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${investorData.pillars.map((p, i) => `
              <div style="background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; border-top: 3px solid var(--color-secondary);">
                <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary); display: block; margin-bottom: 0.75rem;">${p.code}</span>
                <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.75rem;">${p.title}</h3>
                <p style="font-size: 0.85rem; color: var(--color-on-surface-variant); line-height: 1.65; margin-bottom: 1rem;">${p.desc}</p>
                <div style="font-size: 0.75rem; background: var(--color-surface-container); color: var(--color-secondary-dark); padding: 0.5rem 0.75rem; border-radius: var(--radius-md); font-weight: 600;">
                  <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle; margin-right: 4px;">flag</span>
                  CAPEX FOCUS: ${p.capexFocus}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- GOVERNANCE TIERS -->
      <section class="section section-light" style="padding: 3rem 0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">shield</span>
                Multi-Tier Governance
              </span>
              <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Corporate Governance Architecture</h2>
              <div style="display: grid; gap: 1rem;">
                ${investorData.governanceTiers.map(tier => `
                  <div style="display: flex; gap: 1rem; padding: 1.25rem; background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
                    <div style="flex-shrink: 0; width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--color-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800; text-align: center; line-height: 1.2;">
                      ${tier.tier.replace('LEVEL ', 'L')}
                    </div>
                    <div>
                      <h4 style="font-size: 0.925rem; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">${tier.title}</h4>
                      <p style="font-size: 0.8rem; color: var(--color-on-surface-variant); line-height: 1.6;">${tier.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- INVESTOR CONTACTS -->
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">contact_phone</span>
                Investor Contacts
              </span>
              <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Direct Institutional Contacts</h2>
              <div style="display: grid; gap: 1rem;">
                ${investorData.contacts.map(c => `
                  <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.25rem; box-shadow: var(--shadow-sm);">
                    <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary); margin-bottom: 4px;">${c.role}</div>
                    <p style="font-size: 0.8rem; color: var(--color-slate); margin-bottom: 0.75rem;">${c.desc}</p>
                    <div style="display: grid; gap: 4px;">
                      <a href="tel:${c.phone}" style="font-size: 0.8rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px;">
                        <span class="material-symbols-outlined" style="font-size: 14px;">call</span>${c.phone}
                      </a>
                      <a href="mailto:${c.email}" style="font-size: 0.8rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px;">
                        <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>${c.email}
                      </a>
                      <span style="font-size: 0.75rem; color: var(--color-slate); display: flex; align-items: center; gap: 4px;">
                        <span class="material-symbols-outlined" style="font-size: 14px;">schedule</span>${c.hours}
                      </span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- DOCUMENT REPOSITORY -->
      <section class="section section-white">
        <div class="container">
          <span class="section-eyebrow">
            <span class="material-symbols-outlined" style="font-size: 16px;">folder_open</span>
            Document Repository
          </span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Statutory Filings &amp; Corporate Documents</h2>
          <div style="display: grid; gap: 1rem;">
            ${investorData.filings.map(f => `
              <div style="display: flex; align-items: center; gap: 1.5rem; padding: 1.25rem 1.5rem; background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
                <div style="flex-shrink: 0; width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--color-primary-marine); display: flex; align-items: center; justify-content: center;">
                  <span class="material-symbols-outlined" style="color: var(--color-secondary-container);">description</span>
                </div>
                <div style="flex: 1; min-width: 0;">
                  <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary); margin-bottom: 2px;">${f.category.toUpperCase()} DOCUMENT</div>
                  <h4 style="font-size: 0.925rem; font-weight: 700; color: var(--color-primary); margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${f.title}</h4>
                  <p style="font-size: 0.775rem; color: var(--color-slate);">${f.desc}</p>
                </div>
                <div style="flex-shrink: 0; text-align: right;">
                  <div style="font-size: 0.75rem; color: var(--color-slate); margin-bottom: 4px;">${f.date} • ${f.size}</div>
                  <button type="button" class="btn btn-secondary btn-sm doc-download-btn" data-file="${f.fileName}">
                    <span class="material-symbols-outlined" style="font-size: 14px;">download</span>
                    <span>Request Access</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
