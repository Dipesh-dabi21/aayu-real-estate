import Reveal from './Reveal.jsx'

export default function SectionHead({ label, title, em, intro, align = 'left' }) {
  return (
    <Reveal className={`section-head ${align === 'center' ? 'center' : ''}`}>
      {label && <p className="eyebrow">{label}</p>}
      <h2>
        {title} {em && <em>{em}</em>}
      </h2>
      {intro && <p className="lead">{intro}</p>}
    </Reveal>
  )
}
