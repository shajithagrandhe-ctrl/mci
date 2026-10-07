import { investorData } from '../data/investor.js';

export function renderInvestorRelations() {
  return `
    <div class="page-transition">
      <section class="section section-dark investor-hero">
        <div class="container">
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); max-width: 800px; margin-bottom: 1rem;">Investor Relations</h1>
          <p style="font-size: 0.975rem; color: #d6d6d6; max-width: 680px; line-height: 1.65;">MCI maintains clear, direct communication with investors and stakeholders.</p>
        </div>
      </section>

      <section class="section section-white">
        <div class="container">
          <span class="section-eyebrow">Investment Framework</span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 2rem;">Strategic Investment Pillars</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${investorData.pillars.map(p => `
              <div style="background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; border-top: 3px solid var(--color-secondary);">
                <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary); display: block; margin-bottom: 0.75rem;">${p.code}</span>
                <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.75rem;">${p.title}</h3>
                <p style="font-size: 0.85rem; color: var(--color-on-surface-variant); line-height: 1.65; margin-bottom: 1rem;">${p.desc}</p>
                <div style="font-size: 0.75rem; background: var(--color-surface-container); color: var(--color-secondary-dark); padding: 0.5rem 0.75rem; border-radius: var(--radius-md); font-weight: 600;">CAPEX FOCUS: ${p.capexFocus}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="section section-light">
        <div class="container">
          <span class="section-eyebrow">Investor Contact</span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Direct Investor Relations</h2>
          <div class="investor-profile-card">
            <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI investor relations office" />
            <div>
              <h3>Mr. John Mathew</h3>
              <p>Investor Relation Officer</p>
              <p>MCI Group of Companies</p>
              <a href="mailto:info@mcigroup.co">Email: info@mcigroup.co</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
