export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <!-- Footer Top Brand & Certification Bar -->
        <div class="footer-top">
          <div class="footer-brand">
            <img src="/assets/mci-logo-transparent.png" alt="MCI Group Logo" class="footer-logo-img" />
            <div>
              <span style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: block;">
                Marine Corporation of India
              </span>
              <span style="font-size: 0.75rem; color: var(--color-primary-fixed-dim); display: block; margin-top: 2px;">
                Statutory Maritime Infrastructure &amp; Technical Fleet Operations
              </span>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; font-size: 0.75rem; color: var(--color-primary-fixed-dim);">
            <span>Class-A Classification</span>
            <span style="display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: var(--color-secondary-container);"></span>
            <span>IMO Registered No. MCI-IN-8840</span>
            <span style="display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: var(--color-secondary-container);"></span>
            <span>ISO 9001:2015 / SOLAS Certified</span>
            <button type="button" class="btn btn-sm btn-outline-white" id="btn-back-top" aria-label="Scroll back to top" title="Scroll back to top">
              <span class="material-symbols-outlined" style="font-size: 16px;">arrow_upward</span>
            </button>
          </div>
        </div>

        <!-- 4-Column Directory Links -->
        <div class="footer-grid">
          <div class="footer-col">
            <h4>Fleet Operations</h4>
            <div class="footer-links">
              <a href="/activities/port-development" data-nav-link>Port Terminal Management</a>
              <a href="/activities/offshore-drilling" data-nav-link>Offshore Energy Fleet</a>
              <a href="/activities/marine-repairs" data-nav-link>Dry Dock Graving Basins</a>
              <a href="/activities/dredging" data-nav-link>Capital Dredging Corridors</a>
              <a href="/global-presence" data-nav-link>Live Fleet Telemetry</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Governance &amp; Class</h4>
            <div class="footer-links">
              <a href="/about" data-nav-link>Institutional Profile</a>
              <a href="/activities/marine-surveys" data-nav-link>Statutory Survey Directorate</a>
              <a href="/investor-relations" data-nav-link>Multi-Tier Governance</a>
              <a href="/investor-relations" data-nav-link>Regulatory Filings</a>
              <a href="/about" data-nav-link>DGS &amp; IACS Accreditations</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Sustainability &amp; Tech</h4>
            <div class="footer-links">
              <a href="/activities/green-technologies" data-nav-link>CII Decarbonization Charter</a>
              <a href="/activities/turbine-engineering" data-nav-link>Propulsion Machinery Overhaul</a>
              <a href="/activities/ship-design" data-nav-link>CFD Naval Architecture</a>
              <a href="/activities/green-technologies" data-nav-link>Cold-Ironing Shore Power</a>
              <a href="/activities/green-technologies" data-nav-link>MARPOL Annex I-VI Compliance</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Group Headquarters</h4>
            <div class="footer-links">
              <span style="color: var(--color-white); font-weight: 600;">"MCI TOWERS"</span>
              <span style="color: var(--color-cool-gray);">25-12-31, Kotaveedhi, Visakhapatnam 530001, Andhra Pradesh</span>
              <a href="tel:+918912561377">Ph: +91 - 891 - 2561377</a>
              <a href="mailto:info@mcigroup.co">Email: info@mcigroup.co</a>
              <a href="/contact" data-nav-link style="color: var(--color-secondary-container); font-weight: 600; margin-top: 4px;">
                → Operational Dispatch Desk
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright & Bottom Disclaimers -->
        <div class="footer-bottom">
          <p>
            &copy; 2024 Marine Corporation of India (MCI). All maritime operations certified under IMO, ISO 9001 &amp; SOLAS standards. Sovereign infrastructure logistics.
          </p>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span>Founded 1990</span>
            <span>&bull;</span>
            <a href="/investor-relations" data-nav-link style="color: var(--color-cool-gray);">Statutory Disclosures</a>
            <span>&bull;</span>
            <a href="/contact" data-nav-link style="color: var(--color-cool-gray);">Regional Contacts</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
