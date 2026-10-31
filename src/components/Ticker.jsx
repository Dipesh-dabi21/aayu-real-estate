const ITEMS = [
  'Residential Plots',
  'Flats & Apartments',
  'Row Houses',
  'Bungalows',
  'Commercial Property',
  'Property Guidance',
  'Construction Services',
]

export default function Ticker() {
  const row = (hidden) => (
    <ul className="ticker-row" aria-hidden={hidden || undefined}>
      {ITEMS.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <i aria-hidden="true">✦</i>
        </li>
      ))}
    </ul>
  )
  return (
    <div className="ticker" role="region" aria-label="What AAYU offers">
      <div className="ticker-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
