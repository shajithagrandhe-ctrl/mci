import { activitiesData } from '../data/activities.js';

export function renderMegaMenu() {
  return `
    <div class="mega-menu" id="activities-mega-menu" role="region" aria-label="Activities Mega Menu">
      <div class="container mega-inner">
        <div class="mega-sidebar">
          <div>
            <span class="mega-sidebar-title">Engineering Verticals</span>
            <h3 class="mega-sidebar-heading">Sovereign Industrial Capabilities</h3>
            <p class="mega-sidebar-desc">
              Explore MCI's eight specialized marine engineering, deep-draft infrastructure, and fleet operations divisions.
            </p>
          </div>
          <div style="margin-top: 1.5rem;">
            <a href="/activities" class="btn btn-secondary btn-sm" data-nav-link>
              <span>Browse Full Directory</span>
              <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="mega-grid">
          ${activitiesData.map(act => `
            <a href="/activities/${act.id}" class="mega-item" data-nav-link>
              <div class="mega-item-icon">
                <span class="material-symbols-outlined">${getCategoryIcon(act.id)}</span>
              </div>
              <div class="mega-item-info">
                <h4>${act.navLabel || act.title}</h4>
                <p>${act.summary.slice(0, 80)}...</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function getCategoryIcon(id) {
  const map = {
    'port-development': 'forklift',
    'offshore-drilling': 'oil_barrel',
    'marine-repairs': 'build',
    'turbine-engineering': 'settings',
    'marine-surveys': 'fact_check',
    'green-technologies': 'eco',
    'ship-design': 'architecture',
    'dredging': 'waves'
  };
  return map[id] || 'anchor';
}
