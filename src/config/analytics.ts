/**
 * Google Analytics & Google Search Console Configuration
 * 
 * Instructions:
 * 1. Google Analytics (GA4):
 *    - Sign in to https://analytics.google.com
 *    - Create a GA4 property and get your Measurement ID (e.g. 'G-XXXXXXXXXX')
 *    - Paste it in 'measurementId' below, or set VITE_GA_MEASUREMENT_ID in your environment
 * 
 * 2. Google Search Console:
 *    - Sign in to https://search.google.com/search-console
 *    - Add your domain and select 'HTML tag' verification
 *    - Copy the content attribute string (e.g. 'google-site-verification=abc123xyz')
 *    - Paste it in 'searchConsoleVerification' below
 */

export const GOOGLE_CONFIG = {
  // Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)
  measurementId: ((import.meta as any).env?.VITE_GA_MEASUREMENT_ID as string) || 'G-B7JJY67YQ2',

  // Google Search Console HTML Tag Verification code
  searchConsoleVerification: ((import.meta as any).env?.VITE_GOOGLE_SITE_VERIFICATION as string) || 'JXhHwIbPUfoDMRsKmNuriR4Vp18jECoYnGaxPsnw9_Q',

  // Canonical base domain
  siteUrl: 'https://jknordsourcing.com',
};
