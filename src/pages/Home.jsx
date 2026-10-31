import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Phone, Star, MapPin } from 'lucide-react'
import Img from '../components/Img.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Ticker from '../components/Ticker.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { SITE, IMG, CATEGORIES, SERVICES, PROMISES, STEPS, REVIEWS, FAQS } from '../data/site.js'

export default function Home() {
  usePageMeta(
    'AAYU Realty & Construction | Real Estate & Construction in Indore',
    'AAYU Realty & Construction in Sukhliya, Indore — residential plots, flats, row houses, bungalows, commercial property, property guidance and construction services.',
  )

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Img className="hero-img" src={IMG.heroWide} alt="Wide view of a planned residential community entrance in Indore" eager />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <Reveal y={16}>
            <p className="eyebrow light"><MapPin size={14} aria-hidden="true" /> Sukhliya · Indore, Madhya Pradesh</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Find a place to <em>belong</em>.<br />Built with care.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-lead">
              Plots, homes and commercial property across Indore — with honest guidance and construction you can trust,
              from the first conversation to the final handover.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-gold">Book a consultation <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/projects" className="btn btn-ghost-light">Explore properties</Link>
            </div>
          </Reveal>
        </div>
        <div className="container hero-badge-wrap">
          <a className="hero-badge" href={SITE.googleSearch} target="_blank" rel="noopener noreferrer">
            <span className="stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </span>
            <span><strong>{SITE.googleRating}</strong> on Google · {SITE.googleReviewCount} reviews</span>
          </a>
        </div>
      </section>

      <Ticker />

      {/* ABOUT SNIPPET */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-media">
            <Reveal>
              <Img className="about-img-a" src={IMG.entrance} alt="Gateway entrance photograph of a residential development" />
            </Reveal>
            <Reveal delay={0.12}>
              <Img className="about-img-b" src={IMG.promenade} alt="Paved pedestrian promenade lined with street lights" />
            </Reveal>
          </div>
          <div className="about-copy">
            <SectionHead
              label="About AAYU"
              title="A real estate partner who"
              em="listens first."
              intro="AAYU Realty & Construction is an Indore-based real estate and construction business. We help families, first-time buyers and investors find the right property — and, when you are ready, we build it."
            />
            <Reveal delay={0.1}>
              <p>
                Buying property is one of the biggest decisions you will make. Our approach is simple: clear information, honest
                opinions and steady support at every step, so that you feel confident rather than rushed.
              </p>
              <ul className="stat-row">
                <li><strong>{SITE.googleRating}</strong><span>Google rating</span></li>
                <li><strong>7</strong><span>Property &amp; construction services</span></li>
                <li><strong>1:1</strong><span>Personal guidance</span></li>
              </ul>
              <Link to="/about" className="link-arrow">Our story <ArrowRight size={16} aria-hidden="true" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead
            label="Properties"
            title="Spaces to"
            em="live, build & invest."
            intro="Browse the kinds of property we work with. Specific projects, pricing and availability are shared directly on enquiry."
          />
          <div className="feature-grid">
            {CATEGORIES.slice(0, 3).map((c, i) => (
              <Reveal key={c.id} delay={i * 0.08} className={`feature-card f${i}`}>
                <Link to="/projects" className="card-link" aria-label={`${c.title} — view properties`}>
                  <div className="card-media"><Img src={c.image} alt={c.alt} /></div>
                  <div className="card-body">
                    <p className="eyebrow">{`0${i + 1}`}</p>
                    <h3>{c.title}</h3>
                    <p>{c.blurb}</p>
                    <span className="card-more">Enquire <ArrowUpRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/projects" className="btn btn-outline">View all property types</Link>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="section promise">
        <div className="container">
          <SectionHead label="Our promise" title="What you can" em="expect from us." />
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

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHead label="Services" title="Everything under" em="one roof." intro="From finding the right plot to handing over the keys." />
          <ul className="service-list">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 0.06} className="service-item">
                <s.icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead label="How it works" title="A simple, clear" em="path to your property." />
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

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <SectionHead label="Client trust" title="Words from" em="our clients." intro={`Rated ${SITE.googleRating} on Google by ${SITE.googleReviewCount} clients. Here is some of what they say.`} />
          <div className="review-grid">
            <Reveal><ReviewCard review={REVIEWS[0]} featured /></Reveal>
            <div className="review-stack">
              {REVIEWS.slice(1, 4).map((r, i) => (
                <Reveal key={r.name} delay={0.08 * (i + 1)}><ReviewCard review={r} /></Reveal>
              ))}
            </div>
          </div>
          <div className="center-cta">
            <Link to="/reviews" className="btn btn-outline">Read all reviews</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-tint">
        <div className="container faq-wrap">
          <SectionHead label="FAQ" title="Questions" em="we often hear." />
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <h2>Ready to find <em>your place?</em></h2>
          <p>Talk to us about plots, homes, commercial space or construction. We are happy to help — no pressure.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-gold">Send an enquiry</Link>
            <a className="btn btn-ghost-light" href={SITE.phoneTel}><Phone size={16} aria-hidden="true" /> {SITE.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  )
}
