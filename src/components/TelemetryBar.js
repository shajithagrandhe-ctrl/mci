export function renderTelemetryBar() {
  return `
    <div class="telemetry-ticker" id="telemetry">
      <div class="container ticker-inner">
        <div class="ticker-item">
          <span class="pulse-dot"></span>
          <span class="ticker-metric" id="ticker-vessels">142</span>
          <span>Vessels Actively Deployed</span>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-item">
          <span class="material-symbols-outlined" style="color: var(--color-secondary-container); font-size: 16px;">verified_user</span>
          <span class="ticker-metric">100%</span>
          <span>IMO / SOLAS Ratified</span>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-item">
          <span class="material-symbols-outlined" style="color: var(--color-secondary-container); font-size: 16px;">dock</span>
          <span class="ticker-metric">4</span>
          <span>Dry Dock Graving Facilities</span>
        </div>
        <div class="ticker-divider"></div>
        <div class="ticker-item">
          <span class="material-symbols-outlined" style="color: var(--color-secondary-container); font-size: 16px;">support_agent</span>
          <span>24/7 Operations Desk:</span>
          <a href="tel:+912222610940" style="color: var(--color-secondary-fixed); font-weight: 700; text-decoration: underline;">
            +91 22 2261-0940
          </a>
        </div>
      </div>
    </div>
  `;
}
