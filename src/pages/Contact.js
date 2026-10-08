import { renderContactGlobe } from '../components/ContactGlobe.js';
import { contactData } from '../data/contact.js';

export function renderContact() {
  return `
    <div class="page-transition">
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">CONTACT &amp; OPERATIONS DESK</span>
          </div>
          <div class="breadcrumbs-meta"><span>24/7 DUTY SUPERINTENDENTS</span></div>
        </div>
      </div>

      <section class="contact-globe-section">
        <div class="container">
          <div class="contact-globe-intro">
            <h2>Connect with MCI</h2>
          </div>

          <div class="contact-globe-grid">
            <div class="contact-direct">
              <h3 class="font-lobster">Get in touch</h3>

              <div class="contact-link-list">
                <a class="contact-channel" href="mailto:${contactData.headOffice.email}">
                  <span class="contact-channel-icon"><span class="material-symbols-outlined">mail</span></span>
                  <span>${contactData.headOffice.email}</span>
                </a>
                <a class="contact-channel" href="tel:${contactData.headOffice.phone}">
                  <span class="contact-channel-icon"><span class="material-symbols-outlined">call</span></span>
                  <span>${contactData.headOffice.phone}</span>
                </a>
                <a class="contact-channel" href="tel:${contactData.headOffice.mobile}">
                  <span class="contact-channel-icon"><span class="material-symbols-outlined">support_agent</span></span>
                  <span>${contactData.headOffice.mobile}</span>
                </a>
              </div>

              ${renderContactGlobe()}
            </div>

            <div class="contact-inquiry-panel">
              <div class="contact-panel-heading">
                <h3 class="font-lobster">Send an operational inquiry</h3>
              </div>
              <div class="contact-form-dots" aria-hidden="true"></div>

              <div id="contact-form-success" style="display: none; padding: 1rem 1.25rem; background: #d4f4e4; border: 1px solid #10b981; border-radius: var(--radius-md); font-size: 0.875rem; color: #0a5c35;">
                <strong>Inquiry Received</strong> - Our team will respond within 2 business hours. For urgent matters, call our 24/7 dispatch line directly.
              </div>

              <form id="contact-page-form" class="contact-modern-form">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="cp-name">Full Name <span class="required">*</span></label>
                    <input type="text" class="form-input" id="cp-name" name="name" placeholder="Full name" pattern="[A-Za-z]+(?: [A-Za-z]+)*" minlength="2" maxlength="80" title="Use letters and spaces only." required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="cp-company">Company / Vessel Owner</label>
                    <input type="text" class="form-input" id="cp-company" name="company" placeholder="Shipping Line / Port Authority" />
                  </div>
                </div>
                <div class="form-row">
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
                    ${contactData.inquiryCategories.map((category) => `<option value="${category}">${category}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-vessel">Vessel Name &amp; IMO No. (if applicable)</label>
                  <input type="text" class="form-input" id="cp-vessel" name="vessel" placeholder="e.g. M/V SAGAR PRIDE / IMO 9412086 (optional)" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-message">Operational Brief / Message <span class="required">*</span></label>
                  <textarea class="form-textarea" id="cp-message" name="message" required placeholder="Describe your requirement - port of call, berth specifications, timing, cargo type, or survey scope..." style="min-height: 120px;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg contact-modern-submit">
                  <span>Submit Inquiry</span>
                  <span class="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-light" style="padding: 3rem 0;">
        <div class="container">
          <h2 class="section-title font-lobster" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Key Operational Desks</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${contactData.operationalDesks.map((desk) => `
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
