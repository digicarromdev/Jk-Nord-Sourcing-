import { PageId } from '../types';

export const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  services: '/services',
  who: '/who-we-are',
  about: '/about',
  process: '/process',
  contact: '/contact',
  rfq: '/rfq',
};

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'JK NordSourcing | European Sourcing & Procurement Partner',
  services: 'Industrial Sourcing & Manufacturing Services | JK NordSourcing',
  who: 'Who We Are | Nordic Engineering Governance | JK NordSourcing',
  about: 'About Us & Leadership | JK NordSourcing',
  process: '6-Stage Procurement & Quality Process | JK NordSourcing',
  contact: 'Contact Procurement Desk | JK NordSourcing',
  rfq: 'Submit Industrial RFQ | JK NordSourcing',
};

/**
 * Parses current window pathname and hash to determine current PageId.
 */
export function getPageFromUrl(): PageId {
  if (typeof window === 'undefined') return 'home';

  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

  // Check pathname first
  if (path === '/services' || path.startsWith('/services')) return 'services';
  if (path === '/rfq' || path.startsWith('/rfq')) return 'rfq';
  if (path === '/who-we-are' || path === '/who' || path.startsWith('/who')) return 'who';
  if (path === '/about' || path === '/about-us' || path.startsWith('/about')) return 'about';
  if (path === '/process' || path === '/our-process' || path.startsWith('/process')) return 'process';
  if (path === '/contact' || path === '/contact-us' || path.startsWith('/contact')) return 'contact';

  // Fallback to hash if on root
  if (hash === 'services') return 'services';
  if (hash === 'rfq') return 'rfq';
  if (hash === 'who-we-are' || hash === 'who') return 'who';
  if (hash === 'about' || hash === 'about-us') return 'about';
  if (hash === 'process' || hash === 'our-process') return 'process';
  if (hash === 'contact') return 'contact';

  return 'home';
}

/**
 * Returns canonical URL path for a given PageId.
 */
export function getUrlForPage(page: PageId): string {
  return PAGE_ROUTES[page] || '/';
}

/**
 * Pushes browser history and updates document title.
 */
export function pushPageToUrl(page: PageId, replace = false): void {
  if (typeof window === 'undefined') return;

  const targetPath = getUrlForPage(page);
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (currentPath !== targetPath || window.location.hash) {
    if (replace) {
      window.history.replaceState({ page }, '', targetPath);
    } else {
      window.history.pushState({ page }, '', targetPath);
    }
  }

  if (PAGE_TITLES[page]) {
    document.title = PAGE_TITLES[page];
  }
}
