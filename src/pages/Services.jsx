import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { SERVICES, STEPS } from '../data/site.js'

export default function Services() {
  usePageMeta(
    'Services | AAYU Realty & Construction, Indore',
    'Plots, flats, row houses, bungalows, commercial property, property guidance and construction services from AAYU Realty & Construction.',
  )
  return (
    <>
      <PageHero
        label="Services"
        title="Property & construction,"
        em="end to end."
        text="Whether you are buying, investing or building, our team supports you from the first conversation to handover."
      />

      <section className="section tight">
        <div className="container">
          <ul className="service-cards">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 0.06} className="service-card">
                <s.icon size={30} strokeWidth={1.3} aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to="/contact" className="link-arrow">Enquire</Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead label="Process" title="How we" em="work with you." />
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="step">
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
