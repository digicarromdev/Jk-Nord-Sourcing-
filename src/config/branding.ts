/**
 * Brand Configuration for JK NordSourcing
 * 
 * To use a custom logo:
 * 1. Recommended Aspect Ratio: 4:1 (e.g. 400x100px or 800x200px @2x Retina)
 * 2. Format: Transparent PNG, WebP, or SVG
 * 3. Set 'customLogoUrl' below (and optionally 'customLogoDarkUrl' for dark backgrounds)
 */

export interface BrandConfig {
  companyName: string;
  tagline: string;
  /**
   * Primary Logo URL (used on white/light backgrounds such as the default navbar).
   * Can be an external URL (e.g. 'https://example.com/logo.png')
   * or a local file in /public (e.g. '/logo.png').
   * If empty string, the built-in SVG logo will be rendered.
   */
  customLogoUrl: string;

  /**
   * Optional Dark-mode Logo URL (used on dark navy backgrounds such as the footer or scrolled navbar).
   * If left empty, it will fall back to 'customLogoUrl' or the built-in dark SVG logo.
   */
  customLogoDarkUrl: string;
}

export const BRAND_CONFIG: BrandConfig = {
  companyName: 'JK NordSourcing',
  tagline: 'European Sourcing Partner',
  // Paste your custom logo URL here:
  customLogoUrl: 'https://i.ibb.co/QFBpfbRz/400-x-100-px.png',
  // Optional: Paste your dark-background logo URL here (white/gold on dark navy):
  customLogoDarkUrl: 'https://i.ibb.co/HDYYbwYN/navy-blue.png',
};
