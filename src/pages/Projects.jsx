import { useState } from 'react'
import { MessageCircle, Info } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Img from '../components/Img.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { CATEGORIES, SITE, IMG } from '../data/site.js'

const FILTERS = [{ id: 'all', title: 'All' }, ...CATEGORIES.map(({ id, title }) => ({ id, title }))]

export default function Projects() {
  usePageMeta(
    'Properties & Projects | AAYU Realty & Construction, Indore',
    'Explore residential plots, flats, row houses, bungalows and commercial property with AAYU Realty & Construction in Indore.',
  )
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? CATEGORIES : CATEGORIES.filter((c) => c.id === filter)

  const wa = (title) =>
    `${SITE.whatsapp}?text=${encodeURIComponent(`Hello AAYU Realty & Construction, I would like details about: ${title}.`)}`

  return (
    <>
      <PageHero
        label="Properties"
        title="Property types &"
        em="projects."
        text="The kinds of property we help clients buy and build. Current projects, pricing and availability are shared directly — just ask."
      />

      <section className="section tight">
        <div className="container">
          <p className="notice"><Info size={16} aria-hidden="true" /> Photographs show community entrances, open spaces and our office. Project names, prices, sizes and availability are provided on enquiry.</p>

          <div className="filters" role="group" aria-label="Filter property type">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={filter === f.id ? 'active' : ''}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.title}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {list.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 0.07} className="project-card">
                <div className="card-media"><Img src={c.image} alt={c.alt} /></div>
                <div className="card-body">
                  <c.icon size={22} strokeWidth={1.4} aria-hidden="true" />
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                  <dl className="spec">
                    <div><dt>Location</dt><dd>Indore — shared on enquiry</dd></div>
                    <div><dt>Price</dt><dd>On request</dd></div>
                    <div><dt>Availability</dt><dd>Confirm with team</dd></div>
                  </dl>
                  <a className="btn btn-dark btn-small" href={wa(c.title)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={15} aria-hidden="true" /> Enquire on WhatsApp
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Looking for something specific?</p>
            <h2>Tell us what you <em>need.</em></h2>
            <p>Not sure which option suits you? Share your budget, area and timeline and we will suggest what fits — including options that may not be listed online.</p>
            <a className="btn btn-gold" href="#/contact">Send an enquiry</a>
          </Reveal>
          <Reveal delay={0.1}>
            <Img className="rounded" src={IMG.landscape} alt="Landscaped open space within a residential community" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
