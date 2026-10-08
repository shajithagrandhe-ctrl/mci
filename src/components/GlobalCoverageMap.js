export function renderGlobalCoverageMap({ id, ariaLabel, className = '' }) {
  return `
    <section class="coverage-section ${className}" aria-label="${ariaLabel}">
      <div class="coverage-container">
        <div class="coverage-world-map-wrapper" data-coverage-map>
          <canvas
            class="coverage-world-map coverage-globe-canvas"
            data-contact-globe
            role="img"
            aria-label="${ariaLabel}"
          ></canvas>
        </div>
      </div>
    </section>
  `;
}
