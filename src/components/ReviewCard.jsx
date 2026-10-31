import { Star, ExternalLink } from 'lucide-react'

export default function ReviewCard({ review, featured = false }) {
  return (
    <figure className={`review-card ${featured ? 'featured' : ''}`}>
      <div className="stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      {review.title && <p className="review-title">{review.title}</p>}
      <blockquote>“{review.text}”</blockquote>
      <figcaption>
        <span className="review-name">{review.name}</span>
        <a href={review.link} target="_blank" rel="noopener noreferrer">
          Google review <ExternalLink size={13} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  )
}
