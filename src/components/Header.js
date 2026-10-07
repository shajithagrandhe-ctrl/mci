import { renderMegaMenu } from './MegaMenu.js';
import { activitiesData } from '../data/activities.js';

export function renderHeader(currentPath) {
  const isActivitiesActive = currentPath.startsWith('/activities');
  
  return `
    <header class="site-header" id="main-header">
      <!-- Main Navigation Strip -->
      <div class="container header-main">
        <!-- Brand Identity with Official Logo -->
        <a href="/" class="brand-anchor" data-nav-link aria-label="Marine Corporation of India Home">
          <img src="/assets/mci-logo-transparent.png" alt="Marine Corporation of India Logo" class="brand-logo-img" />
          <div class="brand-text-block">
            <span class="brand-name">MCI</span>
            <span class="brand-subtext">Sovereign Infrastructure &amp; Maritime Fleet</span>
          </div>
        </a>

        <!-- Desktop Navigation Bar -->
        <nav class="nav-desktop" aria-label="Main Navigation">
          <a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}" data-nav-link>Home</a>
          <a href="/about" class="nav-link ${currentPath === '/about' ? 'active' : ''}" data-nav-link>About</a>
          
          <div class="nav-has-mega">
            <a href="/activities" class="nav-link ${isActivitiesActive ? 'active' : ''}" data-nav-link id="nav-activities-trigger">
              Activities
            </a>
            ${renderMegaMenu()}
          </div>

          <a href="/group" class="nav-link ${currentPath === '/group' ? 'active' : ''}" data-nav-link>Group</a>
          <a href="/global-presence" class="nav-link ${currentPath === '/global-presence' ? 'active' : ''}" data-nav-link>Global Presence</a>
          <a href="/investor-relations" class="nav-link ${currentPath === '/investor-relations' ? 'active' : ''}" data-nav-link>Investor Relations</a>
          <a href="/contact" class="nav-link ${currentPath === '/contact' ? 'active' : ''}" data-nav-link>Contact</a>
        </nav>

        <!-- Right Quick Actions -->
        <div class="header-actions">
          <!-- Mobile Hamburger Toggle -->
          <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="drawer-scrim" id="drawer-scrim"></div>
      <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div class="mobile-drawer-header">
          <div class="brand-anchor">
            <img src="/assets/mci-logo-transparent.png" alt="MCI Logo" style="height: 38px;" />
            <div class="brand-text-block">
              <span class="brand-name" style="font-size: 0.9rem;">MCI</span>
              <span class="brand-subtext" style="font-size: 0.6rem;">Group of Companies</span>
            </div>
          </div>
          <button type="button" class="btn btn-sm" id="close-drawer" aria-label="Close Navigation" style="padding: 4px;">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav class="mobile-nav-list">
          <a href="/" class="mobile-nav-link ${currentPath === '/' ? 'active' : ''}" data-nav-link>
            <span>Home</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/about" class="mobile-nav-link ${currentPath === '/about' ? 'active' : ''}" data-nav-link>
            <span>About</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          
          <div>
            <div class="mobile-nav-link" id="mobile-activities-toggle" style="cursor: pointer;">
              <span>Activities</span>
              <span class="material-symbols-outlined" id="mobile-acc-arrow" style="font-size: 18px;">expand_more</span>
            </div>
            <div class="mobile-activities-accordion" id="mobile-activities-acc">
              <a href="/activities" class="mobile-sub-link" style="font-weight: 700; color: var(--color-secondary);" data-nav-link>
                • Master Activities Directory
              </a>
              ${activitiesData.map(act => `
                <a href="/activities/${act.id}" class="mobile-sub-link" data-nav-link>
                  ${act.navLabel || act.title}
                </a>
              `).join('')}
            </div>
          </div>

          <a href="/group" class="mobile-nav-link ${currentPath === '/group' ? 'active' : ''}" data-nav-link>
            <span>Group</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/global-presence" class="mobile-nav-link ${currentPath === '/global-presence' ? 'active' : ''}" data-nav-link>
            <span>Global Presence</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/investor-relations" class="mobile-nav-link ${currentPath === '/investor-relations' ? 'active' : ''}" data-nav-link>
            <span>Investor Relations</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/contact" class="mobile-nav-link ${currentPath === '/contact' ? 'active' : ''}" data-nav-link>
            <span>Contact</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
        </nav>

        <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--color-border);">
          <div style="font-size: 0.75rem; color: var(--color-slate); margin-bottom: 0.5rem;">CENTRAL DISPATCH:</div>
          <a href="tel:+912222610940" class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;">
            <span class="material-symbols-outlined">call</span>
            <span>+91 22 2261-0940</span>
          </a>
          <a href="tel:+918912561377" class="btn btn-secondary" style="width: 100%;">
            <span class="material-symbols-outlined">location_city</span>
            <span>HQ: +91 891 2561377</span>
          </a>
        </div>
      </div>
    </header>
  `;
}
