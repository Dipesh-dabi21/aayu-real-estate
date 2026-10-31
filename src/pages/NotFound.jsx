import { Link } from 'react-router-dom'
import usePageMeta from '../components/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page not found | AAYU Realty & Construction', 'The page you are looking for does not exist.')
  return (
    <section className="page-hero not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page <em>moved on.</em></h1>
        <p className="lead">Let’s get you back to somewhere familiar.</p>
        <Link to="/" className="btn btn-dark">Back to home</Link>
      </div>
    </section>
  )
}
