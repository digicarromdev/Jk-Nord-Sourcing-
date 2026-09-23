import { GOOGLE_CONFIG } from '../config/analytics';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Initializes Google Analytics 4 (gtag.js) and Google Search Console verification.
 */
export function initGoogleIntegrations(): void {
  // 1. Google Search Console Verification Meta Tag
  if (GOOGLE_CONFIG.searchConsoleVerification) {
    let metaTag = document.querySelector('meta[name="google-site-verification"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'google-site-verification');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', GOOGLE_CONFIG.searchConsoleVerification);
  }

  // 2. Google Analytics 4 (gtag.js)
  const gaId = GOOGLE_CONFIG.measurementId;
  if (!gaId || typeof window === 'undefined') {
    return;
  }

  // Check if already injected via index.html or dynamic script
  if (document.getElementById('google-analytics-script') || typeof window.gtag === 'function') {
    return;
  }

  // Create script tag for gtag.js
  const script = document.createElement('script');
  script.id = 'google-analytics-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', gaId, {
    send_page_view: true,
  });
}

/**
 * Tracks a page view in Google Analytics
 */
export function trackPageView(pageName: string, title?: string): void {
  if (typeof window !== 'undefined' && window.gtag && GOOGLE_CONFIG.measurementId) {
    window.gtag('event', 'page_view', {
      page_title: title || `${pageName.toUpperCase()} | JK NordSourcing`,
      page_path: `/${pageName}`,
      page_location: window.location.href,
    });
  }
}

/**
 * Tracks a custom event in Google Analytics (e.g., RFQ submit, email click)
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window !== 'undefined' && window.gtag && GOOGLE_CONFIG.measurementId) {
    window.gtag('event', eventName, params);
  }
}
