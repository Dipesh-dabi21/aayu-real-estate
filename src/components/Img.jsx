import { useState } from 'react'

/** Decorative architectural fallback shown if a photo is missing or fails to load. */
function Fallback({ label }) {
  return (
    <div className="img-fallback" role="img" aria-label={label}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="fbSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d9dccb" />
            <stop offset="1" stopColor="#efe9da" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#fbSky)" />
        <rect y="220" width="400" height="80" fill="#a9b39a" opacity=".55" />
        <g fill="none" stroke="#6b7457" strokeWidth="2" opacity=".85">
          <path d="M70 220V120l50-30 50 30v100" />
          <path d="M170 220V90h70v130" />
          <path d="M240 220V140l45-25 45 25v80" />
          <path d="M40 220h320" />
        </g>
        <g fill="#c9a45c" opacity=".8">
          <rect x="108" y="150" width="14" height="18" />
          <rect x="190" y="110" width="12" height="16" />
          <rect x="212" y="110" width="12" height="16" />
          <rect x="190" y="150" width="12" height="16" />
          <rect x="212" y="150" width="12" height="16" />
          <rect x="278" y="165" width="14" height="18" />
        </g>
      </svg>
    </div>
  )
}

export default function Img({ src, alt, eager = false, className = '', style }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={className} style={style}>
        <Fallback label={alt} />
      </div>
    )
  }
  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
