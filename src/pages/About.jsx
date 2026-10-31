import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Img from '../components/Img.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { IMG, PROMISES, SITE } from '../data/site.js'

export default function About() {
  usePageMeta(
    'About Us | AAYU Realty & Construction, Indore',
    'Learn about AAYU Realty & Construction — an Indore real estate and construction business built on transparency, quality and personal guidance.',
  )
  return (
    <>
      <PageHero
        label="About us"
        title="Real estate, built on"
        em="trust."
        text="AAYU Realty & Construction helps people in Indore buy, build and invest in property with confidence."
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <Img className="rounded tall" src={IMG.office} alt="AAYU Realty & Construction office signage in Sukhliya, Indore" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our story</p>
            <h2>A local business with a <em>personal</em> approach.</h2>
            <p>
              Based in Sukhliya, Indore, AAYU Realty &amp; Construction brings together two things buyers usually have to find
              separately: property advice and construction. That means one team that understands your goals from the
              first site visit through to the finished building.
            </p>
            <p>
              We work with residential plots, flats and apartments, row houses, bungalows and commercial property, and we
              offer construction services for clients who want to build. Whatever the project, our aim is the same — clear
              communication, fair dealing and quality you can see.
            </p>
            <p>
              Clients often tell us what stood out was how approachable and transparent the team is. We take that as the
              best compliment we could ask for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead label="Mission & vision" title="Where we are" em="headed." />
          <div className="two-col">
            <Reveal className="panel">
              <h3>Our mission</h3>
              <p>To make buying and building property in Indore simple, transparent and stress-free by giving every client honest advice and dependable service.</p>
            </Reveal>
            <Reveal delay={0.1} className="panel">
              <h3>Our vision</h3>
              <p>To be the name Indore families think of first when they want a trustworthy real estate and construction partner.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Values" title="How we" em="work." />
          <ul className="promise-grid">
            {PROMISES.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 0.07} className="promise-item">
                <span className="promise-n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-text">
          <SectionHead label="Why AAYU" title="Why clients" em="choose us." />
          <Reveal>
            <ul className="check-list">
              <li>Property guidance and construction from the same team</li>
              <li>Straight answers on options, costs and process</li>
              <li>Site visits arranged around your schedule</li>
              <li>Local knowledge of Indore’s neighbourhoods and roads</li>
              <li>Rated {SITE.googleRating} on Google by clients</li>
            </ul>
            <Link to="/contact" className="btn btn-gold">Talk to us <ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
