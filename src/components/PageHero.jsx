import Reveal from './Reveal.jsx'

export default function PageHero({ label, title, em, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal y={14}>
          <p className="eyebrow">{label}</p>
          <h1>
            {title} <em>{em}</em>
          </h1>
          {text && <p className="lead">{text}</p>}
        </Reveal>
      </div>
    </section>
  )
}
