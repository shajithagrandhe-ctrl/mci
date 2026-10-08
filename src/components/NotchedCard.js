function renderArrow() {
  return `
    <span class="notched-card-arrow" aria-hidden="true">
      <span class="material-symbols-outlined">arrow_outward</span>
    </span>
  `;
}

export function renderNotchedMediaCard({ href, image, imageAlt, title }) {
  return `
    <a href="${href}" class="division-card notched-card notched-card-media" data-nav-link>
      <div class="division-media notched-card-cover">
        <img src="${image}" alt="${imageAlt}" class="division-img" />
        <span class="notched-card-fillet notched-card-fillet-vertical" aria-hidden="true"></span>
        <span class="notched-card-fillet notched-card-fillet-horizontal" aria-hidden="true"></span>
        <span class="notched-card-cutout" aria-hidden="true"></span>
        ${renderArrow()}
      </div>
      <div class="division-body">
        <h3 class="division-name">${title}</h3>
      </div>
    </a>
  `;
}

export function renderNotchedInfoCard({ title, description, image, imageAlt }) {
  return `
    <article class="notched-card notched-card-info">
      <div class="notched-card-cover notched-card-info-cover">
        <img src="${image}" alt="${imageAlt}" class="notched-card-info-image" />
        <div class="notched-card-info-wash" aria-hidden="true"></div>
        <span class="notched-card-fillet notched-card-fillet-vertical" aria-hidden="true"></span>
        <span class="notched-card-fillet notched-card-fillet-horizontal" aria-hidden="true"></span>
        <span class="notched-card-cutout" aria-hidden="true"></span>
      </div>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `;
}
