import { useState } from 'react'

export const GieLogo = ({ 
  variant = 'full', // 'full' | 'emblem'
  height = 54, 
  className = '',
  theme = 'light' // 'light' | 'dark'
}) => {
  const [imgError, setImgError] = useState(false)

  // Clean fallback SVG representing the official GIE emblem & typography
  const renderFallbackSvg = () => (
    <div 
      className={`gie-logo-svg-wrap ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px',
        userSelect: 'none'
      }}
    >
      {/* Official Circular GIE Seal Emblem */}
      <svg 
        width={height} 
        height={height} 
        viewBox="0 0 160 160" 
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))' }}
        aria-label="Geological Institute of Ethiopia Emblem"
      >
        <defs>
          <path
            id="textPathTop"
            d="M 28 80 A 52 52 0 0 1 132 80"
          />
          <path
            id="textPathBottom"
            d="M 134 80 A 54 54 0 0 1 26 80"
          />
          <radialGradient id="sealGold" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#fff3cd" />
            <stop offset="100%" stopColor="#eed78b" />
          </radialGradient>
        </defs>

        {/* Outer Circle Ring with Official Warm Yellow/Gold */}
        <circle cx="80" cy="80" r="76" fill="url(#sealGold)" stroke="#1a202c" strokeWidth="2.5" />
        <circle cx="80" cy="80" r="54" fill="#ffffff" stroke="#1a202c" strokeWidth="2" />

        {/* Top Arc Amharic Script: የኢትዮጵያ ጂኦሎጂካል ኢንስቲትዩት */}
        <text fontSize="8.5" fontWeight="bold" fill="#111827" letterSpacing="0.6">
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            የኢትዮጵያ ጂኦሎጂካል ኢንስቲትዩት
          </textPath>
        </text>

        {/* Separator Dots */}
        <circle cx="21" cy="80" r="2" fill="#111827" />
        <circle cx="139" cy="80" r="2" fill="#111827" />

        {/* Bottom Arc English Text: GEOLOGICAL INSTITUTE OF ETHIOPIA */}
        <text fontSize="7.2" fontWeight="700" fill="#111827" letterSpacing="0.4" fontFamily="sans-serif">
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            GEOLOGICAL INSTITUTE OF ETHIOPIA
          </textPath>
        </text>

        {/* Inner Map of Ethiopia (Earth Brown Silhouette) */}
        <path
          d="M 64 54 
             C 74 51, 88 53, 94 60 
             C 102 67, 107 72, 105 84 
             C 103 94, 94 105, 84 108 
             C 74 110, 68 104, 62 96 
             C 56 88, 54 75, 56 66 
             Z"
          fill="#7c4a20"
          stroke="#4a2c13"
          strokeWidth="1"
        />

        {/* Crossed Geological Rock Hammers (Picks) */}
        {/* Hammer 1 (Top-Left to Bottom-Right) */}
        <g transform="rotate(45 80 80)">
          {/* Blue Handle */}
          <rect x="77.5" y="44" width="5" height="72" rx="2.5" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="0.8" />
          {/* Silver Pick Head */}
          <path d="M 66 45 Q 80 43 94 45 L 94 51 Q 80 49 66 51 Z" fill="#94a3b8" stroke="#334155" strokeWidth="0.8" />
          <path d="M 66 45 L 61 48 L 66 51 Z" fill="#cbd5e1" stroke="#334155" strokeWidth="0.8" />
          <rect x="91" y="45" width="4" height="6" fill="#64748b" />
        </g>

        {/* Hammer 2 (Top-Right to Bottom-Left) */}
        <g transform="rotate(-45 80 80)">
          {/* Blue Handle */}
          <rect x="77.5" y="44" width="5" height="72" rx="2.5" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="0.8" />
          {/* Silver Pick Head */}
          <path d="M 66 45 Q 80 43 94 45 L 94 51 Q 80 49 66 51 Z" fill="#94a3b8" stroke="#334155" strokeWidth="0.8" />
          <path d="M 66 45 L 61 48 L 66 51 Z" fill="#cbd5e1" stroke="#334155" strokeWidth="0.8" />
          <rect x="91" y="45" width="4" height="6" fill="#64748b" />
        </g>

        {/* GIE Letters Across the Center */}
        <text 
          x="80" 
          y="85" 
          textAnchor="middle" 
          fontSize="17" 
          fontWeight="900" 
          fontFamily="'Times New Roman', serif"
          fill="#ffffff" 
          stroke="#1e293b" 
          strokeWidth="1.2"
          paintOrder="stroke fill"
          letterSpacing="0.5"
        >
          GIE
        </text>
      </svg>

      {/* Dual Language Typography (matching user uploaded image) */}
      {variant === 'full' && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
          <span 
            style={{ 
              fontFamily: "'Times New Roman', 'Georgia', serif", 
              fontWeight: 800, 
              fontSize: '1.15rem', 
              lineHeight: 1.15,
              color: theme === 'dark' ? '#ffffff' : '#0f172a',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap'
            }}
          >
            Ethiopian Geological Institute
          </span>
          <span 
            style={{ 
              fontWeight: 700, 
              fontSize: '1.05rem', 
              lineHeight: 1.25,
              marginTop: '2px',
              color: theme === 'dark' ? '#cbd5e1' : '#0f172a',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap'
            }}
          >
            የኢትዮጵያ ጂኦሎጂካል ኢንስቲትዩት
          </span>
        </div>
      )}
    </div>
  )

  if (imgError) {
    return renderFallbackSvg()
  }

  // Use the high-resolution logo image asset uploaded/configured for GIE
  return (
    <div 
      className={`gie-logo-container ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src="/gielogo.jpg"
        alt="Ethiopian Geological Institute - የኢትዮጵያ ጂኦሎጂካል ኢንስቲትዩት"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          borderRadius: '4px',
          display: 'block'
        }}
        onError={() => setImgError(true)}
      />
    </div>
  )
}
