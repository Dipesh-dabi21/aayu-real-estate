import { ExternalLink, Star } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { REVIEWS, SITE } from '../data/site.js'

export default function Reviews() {
  usePageMeta(
    'Client Reviews | AAYU Realty & Construction, Indore',
    'Read what clients say about AAYU Realty & Construction on Google.',
  )
  return (
    <>
      <PageHero
        label="Client reviews"
        title="Trusted by"
        em="Indore families."
        text="Real feedback from clients, taken from Google reviews."
      />

      <section className="section tight">
        <div className="container">
          <Reveal className="rating-banner">
            <div>
              <p className="big-rating">{SITE.googleRating}</p>
              <div className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
            </div>
            <p>
              Rated {SITE.googleRating} on Google across {SITE.googleReviewCount} reviews. See every review on our official
              Google profile.
            </p>
            <a className="btn btn-dark" href={SITE.googleSearch} target="_blank" rel="noopener noreferrer">
              View on Google <ExternalLink size={15} aria-hidden="true" />
            </a>
          </Reveal>

          <div className="review-masonry">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.08}>
                <ReviewCard review={r} featured={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal className="panel share-panel">
            <h3>Worked with AAYU?</h3>
            <p>We would love to hear about your experience. A Google review helps other families find a trustworthy partner.</p>
            <a className="btn btn-outline" href={SITE.googleSearch} target="_blank" rel="noopener noreferrer">
              Leave a Google review
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
