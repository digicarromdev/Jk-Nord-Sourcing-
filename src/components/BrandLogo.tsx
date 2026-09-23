import React, { useState } from 'react';
import { BRAND_CONFIG } from '../config/branding';

interface BrandLogoProps {
  /**
   * 'light': Optimized for white / light backgrounds (matches '400 x 100 px .png')
   * 'dark': Optimized for dark navy / dark backgrounds (matches 'navy blue.png')
   */
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
  /**
   * Optional direct logo URL override. If not passed, checks BRAND_CONFIG.
   */
  logoUrl?: string;
}

// Generate the 10 faceted triangular faces for a 3D beveled star
function render3DStar(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  rotationDeg: number,
  isDark: boolean,
  key: string | number
) {
  const rotRad = (rotationDeg * Math.PI) / 180;
  const outerPoints: [number, number][] = [];
  const innerPoints: [number, number][] = [];

  for (let i = 0; i < 5; i++) {
    const aOuter = rotRad + (i * 2 * Math.PI) / 5 - Math.PI / 2;
    const aInner = rotRad + (i * 2 * Math.PI) / 5 + Math.PI / 5 - Math.PI / 2;
    outerPoints.push([cx + rOuter * Math.cos(aOuter), cy + rOuter * Math.sin(aOuter)]);
    innerPoints.push([cx + rInner * Math.cos(aInner), cy + rInner * Math.sin(aInner)]);
  }

  const highlightFaces = [];
  const shadowFaces = [];

  for (let i = 0; i < 5; i++) {
    const prevInner = innerPoints[(i + 4) % 5];
    const currOuter = outerPoints[i];
    const currInner = innerPoints[i];

    // Left facet: from center to prev inner valley to outer tip (highlight)
    highlightFaces.push(
      <polygon
        key={`h-${i}`}
        points={`${cx},${cy} ${prevInner[0]},${prevInner[1]} ${currOuter[0]},${currOuter[1]}`}
        fill={isDark ? 'url(#starFacetLightDark)' : 'url(#starFacetLight)'}
      />
    );

    // Right facet: from center to outer tip to current inner valley (shadow)
    shadowFaces.push(
      <polygon
        key={`s-${i}`}
        points={`${cx},${cy} ${currOuter[0]},${currOuter[1]} ${currInner[0]},${currInner[1]}`}
        fill={isDark ? 'url(#starFacetShadowDark)' : 'url(#starFacetShadow)'}
      />
    );
  }

  return (
    <g key={key} className="transition-transform duration-300">
      {/* Outer subtle shadow/stroke for light mode */}
      {!isDark && (
        <polygon
          points={outerPoints
            .map((p, i) => `${p[0]},${p[1]} ${innerPoints[i][0]},${innerPoints[i][1]}`)
            .join(' ')}
          fill="none"
          stroke="#78350f"
          strokeWidth="0.75"
          strokeLinejoin="round"
          opacity="0.6"
        />
      )}
      {highlightFaces}
      {shadowFaces}
    </g>
  );
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = 'h-10 w-auto',
  showSubtitle = true,
  logoUrl,
}) => {
  const isDark = variant === 'dark';
  const [imageError, setImageError] = useState(false);

  // Check if a custom logo URL is specified
  const activeCustomUrl = isDark
    ? (logoUrl || BRAND_CONFIG.customLogoDarkUrl || BRAND_CONFIG.customLogoUrl)
    : (logoUrl || BRAND_CONFIG.customLogoUrl);

  // If custom logo URL is provided and has not errored, render high-res image
  if (activeCustomUrl && !imageError) {
    return (
      <img
        src={activeCustomUrl}
        alt={BRAND_CONFIG.companyName}
        className={`${className} object-contain select-none`}
        onError={() => setImageError(true)}
      />
    );
  }

  // Fallback to built-in high-precision SVG vector logo
  // The 6 stars along the left crescent arc
  const starsData = [
    { cx: 66, cy: 22, rOuter: 10.5, rInner: 4.6, rot: 15 },
    { cx: 44, cy: 30, rOuter: 9.6, rInner: 4.2, rot: -2 },
    { cx: 28, cy: 45, rOuter: 8.8, rInner: 3.8, rot: -18 },
    { cx: 18, cy: 64, rOuter: 8.0, rInner: 3.5, rot: -32 },
    { cx: 17, cy: 84, rOuter: 7.2, rInner: 3.1, rot: -46 },
    { cx: 24, cy: 101, rOuter: 6.2, rInner: 2.7, rot: -60 },
  ];

  return (
    <svg
      viewBox="0 0 460 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      style={{ display: 'block' }}
      aria-label="JK NordSourcing Logo"
    >
      <defs>
        {/* GOLD GRADIENTS */}
        {/* Main 3D Metallic Gold (for NORDSOURCING & K Swooshes) */}
        <linearGradient id={isDark ? 'goldMainDark' : 'goldMainLight'} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff8db" />
          <stop offset="18%" stopColor="#fde047" />
          <stop offset="42%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#b4831f" />
          <stop offset="92%" stopColor="#85530e" />
          <stop offset="100%" stopColor="#543004" />
        </linearGradient>

        {/* Diagonal Sheen Gold */}
        <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#eab308" />
          <stop offset="65%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>

        {/* Horizontal Gold for Tagline & Rules */}
        <linearGradient id="goldHorizontal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="20%" stopColor="#eab308" />
          <stop offset="50%" stopColor="#fde047" />
          <stop offset="80%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Star Facet Highlights */}
        <linearGradient id="starFacetLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
        <linearGradient id="starFacetShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>

        <linearGradient id="starFacetLightDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#fef9c3" />
          <stop offset="75%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="starFacetShadowDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="65%" stopColor="#854d0e" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>

        {/* SILVER CHROME GRADIENTS (For J and JK) */}
        <linearGradient id={isDark ? 'silverDark' : 'silverLight'} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="78%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor={isDark ? '#475569' : '#334155'} />
        </linearGradient>

        <linearGradient id="silverSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e2e8f0" />
          <stop offset="75%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Filter: Drop shadow for 3D Bevel effect */}
        <filter id="logoBevelFilter" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow
            dx="0.8"
            dy="1.8"
            stdDeviation="1.2"
            floodColor={isDark ? '#000000' : '#1e293b'}
            floodOpacity={isDark ? '0.75' : '0.4'}
          />
        </filter>

        <filter id="goldGlowDark" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#fde047" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* ========================================================
          1. THE 6 3D FACETED GOLD STARS (CRESCENT ARC)
          ======================================================== */}
      <g id="stars-arc">
        {starsData.map((s, idx) =>
          render3DStar(s.cx, s.cy, s.rOuter, s.rInner, s.rot, isDark, idx)
        )}
      </g>

      {/* ========================================================
          2. THE MONOGRAM EMBLEM (SILVER "J" & GOLD "K" SWOOSHES)
          ======================================================== */}
      <g id="monogram-emblem" filter="url(#logoBevelFilter)">
        {/* --- SILVER ROMAN "J" --- */}
        <g id="letter-J">
          {/* In light mode: crisp dark outline for high contrast on white */}
          {!isDark && (
            <path
              d="M 50 36 L 76 36 L 76 41.5 L 68 41.5 L 68 83 C 68 96 61 106.5 45 107.5 C 33 108.5 24 102 24 93.5 C 24 88 28 84 32.5 84 C 36 84 38.5 86.5 38.5 90 C 38.5 94.5 35 97 31 97.5 C 34.5 101.5 41 102.5 48 101.5 C 57.5 100 60.5 92 60.5 83 L 60.5 41.5 L 50 41.5 Z"
              fill="#0f172a"
              opacity="0.35"
              transform="translate(0.8, 1.2)"
            />
          )}

          {/* Actual J path */}
          <path
            d="M 50 36 L 76 36 L 76 41.5 L 68 41.5 L 68 83 C 68 96 61 106.5 45 107.5 C 33 108.5 24 102 24 93.5 C 24 88 28 84 32.5 84 C 36 84 38.5 86.5 38.5 90 C 38.5 94.5 35 97 31 97.5 C 34.5 101.5 41 102.5 48 101.5 C 57.5 100 60.5 92 60.5 83 L 60.5 41.5 L 50 41.5 Z"
            fill={`url(#${isDark ? 'silverDark' : 'silverLight'})`}
            stroke={isDark ? '#e2e8f0' : '#475569'}
            strokeWidth={isDark ? '0.5' : '0.8'}
          />

          {/* J Top Highlight ridge */}
          <path
            d="M 51 37.5 L 75 37.5 L 75 39 L 66.5 39 L 66.5 82 C 66.5 93 60 102 47 103.5"
            stroke="#ffffff"
            strokeWidth="0.75"
            strokeLinecap="round"
            opacity="0.8"
            fill="none"
          />
        </g>

        {/* --- DYNAMIC GOLD METALLIC "K" SWOOSHES --- */}
        <g id="letter-K">
          {/* Shadow outline for light mode */}
          {!isDark && (
            <g opacity="0.3" fill="#451a03">
              {/* Upper wing shadow */}
              <path d="M 68 64 C 74 61 88 54 108 47 C 126 40 137 36 139 35 C 137 39 122 51 101 62 C 86 70 76 74 72 76 Z" />
              {/* Lower leg swoosh shadow */}
              <path d="M 70 65 C 78 72 90 85 102 96 C 114 106 123 109 125 109 C 121 108 107 100 95 90 C 82 78 74 71 70 65 Z" />
            </g>
          )}

          {/* Upper Right Tapered Wing / Arm of K */}
          <path
            d="M 67 63 C 74 60 88 53 107 46 C 124 39 135 35 137 34 C 135 38 120 50 100 61 C 86 69 76 73 71 75 Z"
            fill={`url(#${isDark ? 'goldMainDark' : 'goldMainLight'})`}
            stroke={isDark ? '#fef08a' : '#92400e'}
            strokeWidth={isDark ? '0.4' : '0.6'}
          />

          {/* Lower Right Gracefully Swept Leg / Tail of K */}
          <path
            d="M 69 66 C 77 73 89 85 101 95 C 112 104 122 108 124 108 C 120 107 106 99 94 89 C 82 78 74 71 69 66 Z"
            fill={`url(#${isDark ? 'goldMainDark' : 'goldMainLight'})`}
            stroke={isDark ? '#fef08a' : '#92400e'}
            strokeWidth={isDark ? '0.4' : '0.6'}
          />

          {/* Central Connecting / Crossing Ribbon */}
          <path
            d="M 58 56 C 68 53 79 56 87 64 C 78 69 68 70 60 67 Z"
            fill="url(#goldSheen)"
            stroke={isDark ? '#fde047' : '#b45309'}
            strokeWidth="0.5"
          />

          {/* Sweeping Highlight Arc Across the K */}
          <path
            d="M 136 34.5 C 120 42 98 56 80 67 C 94 79 108 92 123 107.5"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.8"
            fill="none"
          />
        </g>
      </g>

      {/* ========================================================
          3. MAIN WORDMARK: "JK NORDSOURCING"
          ======================================================== */}
      <g id="wordmark" filter="url(#logoBevelFilter)">
        {/* --- "JK" (SILVER CHROME ROMAN SERIF) --- */}
        {/* Subtle shadow layer for light mode */}
        {!isDark && (
          <text
            x="142"
            y="74"
            fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
            fontWeight="800"
            fontSize="36.5"
            fill="#0f172a"
            opacity="0.3"
            letterSpacing="1.5"
            dx="0.8"
            dy="1.2"
          >
            JK
          </text>
        )}

        <text
          x="142"
          y="74"
          fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
          fontWeight="800"
          fontSize="36.5"
          fill={`url(#${isDark ? 'silverDark' : 'silverLight'})`}
          stroke={isDark ? '#ffffff' : '#334155'}
          strokeWidth={isDark ? '0.3' : '0.6'}
          letterSpacing="1.5"
        >
          JK
        </text>

        {/* --- "NORDSOURCING" (3D BEVELED METALLIC GOLD ROMAN SERIF) --- */}
        {/* Dark drop shadow for contrast in light mode */}
        {!isDark && (
          <text
            x="200"
            y="74"
            fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
            fontWeight="900"
            fontSize="36.5"
            fill="#451a03"
            opacity="0.45"
            letterSpacing="0.8"
            dx="0.8"
            dy="1.4"
          >
            NORDSOURCING
          </text>
        )}

        <text
          x="200"
          y="74"
          fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
          fontWeight="900"
          fontSize="36.5"
          fill={`url(#${isDark ? 'goldMainDark' : 'goldMainLight'})`}
          stroke={isDark ? '#fef9c3' : '#78350f'}
          strokeWidth={isDark ? '0.4' : '0.65'}
          letterSpacing="0.8"
        >
          NORDSOURCING
        </text>

        {/* Highlight Specular overlay on NORDSOURCING */}
        <text
          x="200"
          y="73"
          fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif"
          fontWeight="900"
          fontSize="36.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          letterSpacing="0.8"
          opacity={isDark ? '0.65' : '0.4'}
        >
          NORDSOURCING
        </text>
      </g>

      {/* ========================================================
          4. SUBTITLE & HORIZONTAL RULES: "EUROPEAN SOURCING & QUALITY PARTNER"
          ======================================================== */}
      {showSubtitle && (
        <g id="tagline-row">
          {/* Left Rule */}
          <line
            x1="142"
            y1="89"
            x2="170"
            y2="89"
            stroke="url(#goldHorizontal)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Subtitle Text */}
          <text
            x="176"
            y="92.5"
            fontFamily="'Inter', 'Manrope', system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="9.8"
            fill="url(#goldHorizontal)"
            letterSpacing="2.2"
            stroke={isDark ? 'none' : '#78350f'}
            strokeWidth={isDark ? '0' : '0.2'}
          >
            EUROPEAN SOURCING &amp; QUALITY PARTNER
          </text>

          {/* Right Rule */}
          <line
            x1="428"
            y1="89"
            x2="456"
            y2="89"
            stroke="url(#goldHorizontal)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
};

export default BrandLogo;
