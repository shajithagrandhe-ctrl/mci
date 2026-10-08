import './css/main.css';
import { attachContactGlobe } from './components/ContactGlobe.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderHome } from './pages/Home.js';
import { renderAbout } from './pages/About.js';
import { renderActivities } from './pages/Activities.js';
import { renderActivityDetail } from './pages/ActivityDetail.js';
import { renderGroup } from './pages/Group.js';
import { renderGlobalPresence } from './pages/GlobalPresence.js';
import { renderInvestorRelations } from './pages/InvestorRelations.js';
import { renderContact } from './pages/Contact.js';

// ── ROUTER ───────────────────────────────────────────────────────────────────
function getRoute() {
  return window.location.pathname;
}

function renderPage(path) {
  const activityDetailMatch = path.match(/^\/activities\/(.+)$/);
  if (activityDetailMatch) {
    return renderActivityDetail(activityDetailMatch[1]);
  }
  switch (path) {
    case '/':            return renderHome();
    case '/about':       return renderAbout();
    case '/activities':  return renderActivities();
    case '/group':       return renderGroup();
    case '/global-presence': return renderGlobalPresence();
    case '/investor-relations': return renderInvestorRelations();
    case '/contact':     return renderContact();
    default:             return renderHome();
  }
}

function mount(path) {
  const header = document.getElementById('header-root');
  const page   = document.getElementById('page-root');
  const footer = document.getElementById('footer-root');

  header.innerHTML = renderHeader(path);
  page.innerHTML   = renderPage(path);
  footer.innerHTML = renderFooter();
  document.title = 'MCI';
  window.scrollTo({ top: 0, behavior: 'instant' });

  attachGlobalListeners();
}

// ── SPA NAVIGATION ────────────────────────────────────────────────────────────
function navigate(href) {
  history.pushState(null, '', href);
  mount(href);
}

function attachGlobalListeners() {
  attachContactGlobe();
  attachOriginButtons();
  attachShutterTextListeners();
  attachCoverageMapListeners();

  // Nav links
  document.querySelectorAll('[data-nav-link]').forEach(el => {
    el.removeEventListener('click', handleNavClick);
    el.addEventListener('click', handleNavClick);
  });

  // Normalize phone links so they open the system phone handler consistently.
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    const raw = link.getAttribute('href')?.replace(/^tel:/, '') || link.textContent || '';
    const normalized = raw.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
    if (normalized) link.setAttribute('href', `tel:${normalized}`);
  });

  // Mobile drawer
  const toggle = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const scrim  = document.getElementById('drawer-scrim');
  const close  = document.getElementById('close-drawer');
  function openDrawer() {
    drawer?.classList.add('open');
    scrim?.classList.add('open');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer?.classList.remove('open');
    scrim?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  toggle?.addEventListener('click', openDrawer);
  close?.addEventListener('click', closeDrawer);
  scrim?.addEventListener('click', closeDrawer);

  // Mobile activities accordion
  const mobileToggle = document.getElementById('mobile-activities-toggle');
  const mobileAcc    = document.getElementById('mobile-activities-acc');
  const mobileArrow  = document.getElementById('mobile-acc-arrow');
  mobileToggle?.addEventListener('click', () => {
    const isOpen = mobileAcc?.classList.toggle('open');
    if (mobileArrow) mobileArrow.textContent = isOpen ? 'expand_less' : 'expand_more';
  });

  // Contact page form
  const contactForm = document.getElementById('contact-page-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const message = [
      'MCI Contact Inquiry',
      `Name: ${data.get('name')}`,
      `Company / Vessel Owner: ${data.get('company') || 'Not provided'}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Category: ${data.get('category')}`,
      `Vessel / IMO: ${data.get('vessel') || 'Not provided'}`,
      `Message: ${data.get('message')}`,
    ].join('\n');
    window.location.href = `https://wa.me/919059483826?text=${encodeURIComponent(message)}`;
  });

  // Header scroll effect
  const mainHeader = document.getElementById('main-header');
  function onScroll() {
    if (mainHeader) {
      if (window.scrollY > 50) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  }
  window.removeEventListener('scroll', onScroll);
  window.addEventListener('scroll', onScroll, { passive: true });

  // Back to top
  const btnTop = document.getElementById('btn-back-top');
  btnTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Keep the home hero media looping even if autoplay policies interrupt playback.
  const heroVideo = document.querySelector('.hero-bg-video');
  if (heroVideo) {
    heroVideo.loop = true;
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.addEventListener('ended', () => {
      heroVideo.currentTime = 0;
      heroVideo.play().catch(() => {});
    });
    heroVideo.play().catch(() => {});
  }

  // Activity filter tabs
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      document.querySelectorAll('.activity-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Investor doc downloads (UI-only)
  document.querySelectorAll('.doc-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const alert = document.createElement('div');
      alert.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:#071a2b;color:#fff;padding:1rem 1.5rem;border-radius:8px;font-size:0.875rem;z-index:9999;box-shadow:0 8px 32px rgba(0,0,0,0.3);';
      alert.innerHTML = '<strong>Download Initiated</strong><br>Document access subject to NDA verification.';
      document.body.appendChild(alert);
      setTimeout(() => alert.remove(), 4000);
    });
  });

  // Presence station tabs
  document.querySelectorAll('.station-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.station-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.station-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(`panel-${tab.dataset.station}`);
      target?.classList.add('active');
    });
  });

  // Table search
  document.querySelectorAll('.table-search').forEach(input => {
    input.addEventListener('input', () => {
      const tableId = input.dataset.tableId;
      const query = input.value.toLowerCase();
      const table = document.getElementById(tableId);
      if (!table) return;
      table.querySelectorAll('tbody tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
      });
    });
  });

  // CSV Export
  document.querySelectorAll('.export-csv-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tableId = btn.dataset.tableId;
      const table = document.getElementById(tableId);
      if (!table) return;
      const rows = Array.from(table.querySelectorAll('tr'));
      const csv = rows.map(row =>
        Array.from(row.querySelectorAll('th, td'))
          .map(cell => `"${cell.textContent.trim().replace(/"/g, '""')}"`)
          .join(',')
      ).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${tableId}-mci.csv`;
      a.click(); URL.revokeObjectURL(url);
    });
  });
}

function attachCoverageMapListeners() {
  document.querySelectorAll('[data-coverage-map]').forEach((map) => {
    const hotspot = map.querySelector('.india-hotspot');
    const overlay = map.querySelector('.services-overlay');
    const close = map.querySelector('.close-services');

    const setOpen = (isOpen) => {
      map.classList.toggle('is-open', isOpen);
      hotspot?.setAttribute('aria-expanded', String(isOpen));
      overlay?.setAttribute('aria-hidden', String(!isOpen));
    };

    hotspot?.addEventListener('pointerenter', () => setOpen(true));
    hotspot?.addEventListener('click', () => setOpen(!map.classList.contains('is-open')));
    map.addEventListener('pointerleave', () => setOpen(false));
    close?.addEventListener('click', (event) => {
      event.stopPropagation();
      setOpen(false);
      hotspot?.focus();
    });
    map.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        hotspot?.focus();
      }
    });
  });
}

function attachShutterTextListeners() {
  document.querySelectorAll('[data-shutter-text]').forEach((title) => {
    const replay = () => {
      const animatedCharacters = title.querySelectorAll('.shutter-character-main, .shutter-character-slice');
      animatedCharacters.forEach((character) => {
        character.style.animation = 'none';
      });
      void title.offsetWidth;
      animatedCharacters.forEach((character) => {
        character.style.removeProperty('animation');
      });
    };

    title.addEventListener('click', replay);
    title.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        replay();
      }
    });
  });
}

function attachOriginButtons() {
  document.querySelectorAll('button, a.btn').forEach((control) => {
    if (control.dataset.originButton === 'true') return;
    control.dataset.originButton = 'true';
    control.classList.add('origin-button');

    const fill = document.createElement('span');
    fill.className = 'origin-fill';
    fill.setAttribute('aria-hidden', 'true');
    control.appendChild(fill);

    const setOrigin = (event) => {
      const rect = control.getBoundingClientRect();
      const x = event ? event.clientX - rect.left : rect.width / 2;
      const y = event ? event.clientY - rect.top : rect.height / 2;
      const diameter = Math.ceil(2 * Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y),
      ));
      fill.style.left = `${x}px`;
      fill.style.top = `${y}px`;
      fill.style.width = `${diameter}px`;
      fill.style.height = `${diameter}px`;
      requestAnimationFrame(() => {
        fill.classList.add('visible');
        control.classList.add('origin-filled');
      });
    };

    const clearFill = () => {
      fill.classList.remove('visible');
      control.classList.remove('origin-filled');
    };

    control.addEventListener('pointerenter', setOrigin);
    control.addEventListener('pointerdown', setOrigin);
    control.addEventListener('pointerleave', clearFill);
    control.addEventListener('blur', clearFill);
    control.addEventListener('focus', () => {
      if (control.matches(':focus-visible')) setOrigin();
    });
  });
}

function handleNavClick(e) {
  const el = e.currentTarget;
  const href = el.getAttribute('href');
  if (href && href.startsWith('/')) {
    e.preventDefault();
    // close any open drawer
    document.getElementById('mobile-drawer')?.classList.remove('open');
    document.getElementById('drawer-scrim')?.classList.remove('open');
    document.body.style.overflow = '';
    navigate(href);
  }
}

// ── POPSTATE (BACK/FORWARD) ───────────────────────────────────────────────────
window.addEventListener('popstate', () => mount(getRoute()));

// ── INITIAL MOUNT ─────────────────────────────────────────────────────────────
mount(getRoute());
