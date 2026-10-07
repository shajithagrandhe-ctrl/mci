import { contactData } from '../data/contact.js';

export function renderContact() {
  return `
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">CONTACT &amp; OPERATIONS DESK</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>24/7 DUTY SUPERINTENDENTS</span>
          </div>
        </div>
      </div>

      <!-- CONTACT HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 100%);">
        <div class="container">
          <div class="badge badge-accent" style="margin-bottom: 1rem;">
            <span class="material-symbols-outlined" style="font-size: 14px;">support_agent</span>
            24/7 CENTRAL DISPATCH // OPERATIONS DESK ONLINE
          </div>
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); max-width: 800px; margin-bottom: 1rem;">
            Operations Dispatch &amp; Contact Directory
          </h1>
          <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); max-width: 680px; line-height: 1.65;">
            Connect with MCI's central duty superintendents for emergency towage, dry dock reservations, salvage interventions, hydrographic surveys, and corporate inquiries across all regional offices.
          </p>
        </div>
      </section>

      <!-- MAIN CONTACT GRID -->
      <section class="section section-white">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: start;">

            <!-- LEFT: HQ DETAILS + REGIONAL OFFICES -->
            <div>
              <!-- HQ CARD -->
              <div class="contact-hq-card" style="background: #111; color: #fff; border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
                  <img src="/assets/mci-logo-transparent.png" alt="MCI Logo" style="height: 44px;" />
                  <div>
                    <div style="font-size: 1rem; font-weight: 800; font-family: var(--font-heading);">Marine Corporation of India</div>
                    <div style="font-size: 0.7rem; color: var(--color-primary-fixed-dim);">Registered Group Headquarters</div>
                  </div>
                </div>
                <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary-container); margin-bottom: 0.5rem; font-weight: 700;">Head Office</div>
                <div style="font-size: 0.975rem; font-weight: 700; margin-bottom: 4px;">${contactData.headOffice.building}</div>
                <div style="font-size: 0.85rem; color: var(--color-primary-fixed-dim); line-height: 1.6; margin-bottom: 1.25rem;">
                  ${contactData.headOffice.addressLine1}<br />
                  ${contactData.headOffice.cityPostal}<br />
                  ${contactData.headOffice.stateCountry}
                </div>
                <div style="display: grid; gap: 0.5rem;">
                  <a href="tel:${contactData.headOffice.phone}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-secondary-container); text-decoration: none; font-weight: 600;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">call</span>
                    ${contactData.headOffice.phone}
                  </a>
                  <a href="tel:${contactData.headOffice.mobile}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-secondary-container); text-decoration: none;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">smartphone</span>
                    ${contactData.headOffice.mobile}
                  </a>
                  <a href="mailto:${contactData.headOffice.email}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-secondary-container); text-decoration: none;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">mail</span>
                    ${contactData.headOffice.email}
                  </a>
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-primary-fixed-dim);">
                    <span class="material-symbols-outlined" style="font-size: 16px;">public</span>
                    ${contactData.headOffice.web}
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-primary-fixed-dim);">
                    <span class="material-symbols-outlined" style="font-size: 16px;">my_location</span>
                    ${contactData.headOffice.coordinates}
                  </div>
                </div>
              </div>

              <!-- REGIONAL OFFICES -->
              <h3 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-slate); margin-bottom: 0.75rem;">Regional Office Network</h3>
              <div style="display: grid; gap: 0.5rem;">
                ${contactData.regionalOffices.map(o => `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    <div>
                      <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary);">${o.label}</div>
                      <a href="mailto:${o.email}" style="font-size: 0.75rem; color: var(--color-secondary-dark); text-decoration: none;">${o.email}</a>
                    </div>
                    <a href="tel:${o.phone}" style="font-size: 0.775rem; color: var(--color-secondary); font-weight: 600; text-decoration: none; white-space: nowrap;">${o.phone}</a>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- RIGHT: INQUIRY FORM -->
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">send</span>
                Direct Inquiry
              </span>
              <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Submit Operational Inquiry</h2>

              <div id="contact-form-success" style="display: none; padding: 1rem 1.25rem; background: #d4f4e4; border: 1px solid #10b981; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.875rem; color: #0a5c35;">
                <strong>✓ Inquiry Received</strong> — Our team will respond within 2 business hours. For urgent matters, call our 24/7 dispatch line directly.
              </div>

              <form id="contact-page-form" style="display: grid; gap: 1rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label" for="cp-name">Full Name <span class="required">*</span></label>
                    <input type="text" class="form-input" id="cp-name" name="name" placeholder="Full name" pattern="[A-Za-z]+(?: [A-Za-z]+)*" minlength="2" maxlength="80" title="Use letters and spaces only." required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="cp-company">Company / Vessel Owner</label>
                    <input type="text" class="form-input" id="cp-company" name="company" placeholder="Shipping Line / Port Authority" />
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label" for="cp-email">Official Email <span class="required">*</span></label>
                    <input type="email" class="form-input" id="cp-email" name="email" placeholder="contact@lineagency.com" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="cp-phone">Contact Phone <span class="required">*</span></label>
                    <input type="tel" class="form-input" id="cp-phone" name="phone" placeholder="10-digit phone number" inputmode="numeric" pattern="[0-9]{10}" minlength="10" maxlength="10" title="Enter exactly 10 digits." required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-category">Inquiry Category <span class="required">*</span></label>
                  <select class="form-select" id="cp-category" name="category" required>
                    <option value="">Select service area...</option>
                    ${contactData.inquiryCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-vessel">Vessel Name &amp; IMO No. (if applicable)</label>
                  <input type="text" class="form-input" id="cp-vessel" name="vessel" placeholder="e.g. M/V SAGAR PRIDE / IMO 9412086 (optional)" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-message">Operational Brief / Message <span class="required">*</span></label>
                  <textarea class="form-textarea" id="cp-message" name="message" required placeholder="Describe your requirement — port of call, berth specifications, timing, cargo type, or survey scope..." style="min-height: 120px;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  <span class="material-symbols-outlined">send</span>
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- OPERATIONAL DESKS -->
      <section class="section section-light" style="padding: 3rem 0;">
        <div class="container">
          <span class="section-eyebrow">
            <span class="material-symbols-outlined" style="font-size: 16px;">terminal</span>
            Operations Centers
          </span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Key Operational Desks</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${contactData.operationalDesks.map(desk => `
              <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                  <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--color-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary-container); font-size: 18px;">anchor</span>
                  </div>
                  <h4 style="font-size: 0.925rem; font-weight: 700; color: var(--color-primary);">${desk.name}</h4>
                </div>
                <p style="font-size: 0.775rem; color: var(--color-slate); margin-bottom: 0.875rem; line-height: 1.5;">${desk.location}</p>
                <div style="display: grid; gap: 5px;">
                  <a href="tel:${desk.phone}" style="font-size: 0.8rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px; font-weight: 600;">
                    <span class="material-symbols-outlined" style="font-size: 14px;">call</span>${desk.phone}
                  </a>
                  <a href="mailto:${desk.email}" style="font-size: 0.8rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>${desk.email}
                  </a>
                  <span style="font-size: 0.775rem; color: var(--color-slate); display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 14px;">radio</span>${desk.radio}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
