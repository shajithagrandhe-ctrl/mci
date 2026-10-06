import './css/main.css';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderContactModal } from './components/ContactModal.js';
import { renderHome } from './pages/Home.js';
import { renderAbout } from './pages/About.js';
import { renderActivities } from './pages/Activities.js';
import { renderActivityDetail } from './pages/ActivityDetail.js';
import { renderGroup } from './pages/Group.js';
import { renderGlobalPresence } from './pages/GlobalPresence.js';
import { renderInvestorRelations } from './pages/InvestorRelations.js';
import { renderContact } from './pages/Contact.js';

const THEME_KEY = 'mci-theme';

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

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

function getPageTitle(path) {
  const activityDetailMatch = path.match(/^\/activities\/(.+)$/);
  if (activityDetailMatch) return 'Activities — MCI Marine Corporation of India';
  const titles = {
    '/': 'MCI — Marine Corporation of India | Sovereign Maritime Infrastructure & Engineering',
    '/about': 'About MCI — Marine Corporation of India',
    '/activities': 'Activities & Services — MCI Marine Corporation of India',
    '/group': 'Group Companies — MCI Marine Corporation of India',
    '/global-presence': 'Global Presence — MCI Marine Corporation of India',
    '/investor-relations': 'Investor Relations — MCI Marine Corporation of India',
    '/contact': 'Contact Us — MCI Marine Corporation of India',
  };
  return titles[path] || titles['/'];
}

function mount(path) {
  const header = document.getElementById('header-root');
  const page   = document.getElementById('page-root');
  const footer = document.getElementById('footer-root');
  const modals = document.getElementById('modals-root');

  header.innerHTML = renderHeader(path);
  page.innerHTML   = renderPage(path);
  footer.innerHTML = renderFooter();
  modals.innerHTML = renderContactModal();

  applyTheme(localStorage.getItem(THEME_KEY) || 'light');

  document.title = getPageTitle(path);
  window.scrollTo({ top: 0, behavior: 'instant' });

  attachGlobalListeners();
}

// ── SPA NAVIGATION ────────────────────────────────────────────────────────────
function navigate(href) {
  history.pushState(null, '', href);
  mount(href);
}

function attachGlobalListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = document.documentElement.dataset.theme || 'light';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
    themeToggle.querySelector('.material-symbols-outlined').textContent = currentTheme === 'dark' ? 'light_mode' : 'dark_mode';
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      themeToggle.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
      themeToggle.querySelector('.material-symbols-outlined').textContent = nextTheme === 'dark' ? 'light_mode' : 'dark_mode';
    });
  }

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

  // Dispatch modal
  const btnOpen  = document.getElementById('btn-open-dispatch');
  const modal    = document.getElementById('dispatch-modal');
  const btnClose = document.getElementById('close-dispatch-modal');
  const btnCancel = document.getElementById('cancel-dispatch-modal');
  function openModal() {
    modal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  }
  btnOpen?.addEventListener('click', openModal);
  btnClose?.addEventListener('click', closeModal);
  btnCancel?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  // Dispatch form
  const dispatchForm = document.getElementById('modal-dispatch-form');
  dispatchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const alert = document.getElementById('modal-form-alert');
    if (alert) {
      alert.style.display = 'block';
      alert.style.background = '#d4f4e4';
      alert.style.color = '#0a5c35';
      alert.style.border = '1px solid #10b981';
      alert.innerHTML = '<strong>✓ Dispatch Request Submitted</strong> — Our duty superintendent will contact you within 60 minutes via the provided email and phone.';
      dispatchForm.reset();
      setTimeout(closeModal, 3000);
    }
  });

  // Contact page form
  const contactForm = document.getElementById('contact-page-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const successEl = document.getElementById('contact-form-success');
    if (successEl) {
      successEl.style.display = 'block';
      contactForm.reset();
    }
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
