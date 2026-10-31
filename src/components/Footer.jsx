import { Link } from 'react-router-dom'
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'
import { NAV, SITE } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="wordmark-main light">AAYU</p>
          <p className="footer-tag">Realty &amp; Construction</p>
          <p className="footer-text">
            Homes, plots and commercial property in Indore — with honest guidance and careful construction.
          </p>
        </div>

        <div>
          <h3 className="footer-h">Explore</h3>
          <ul className="footer-list">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-h">Visit us</h3>
          <address className="footer-address">
            <MapPin size={16} aria-hidden="true" />
            <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
              {SITE.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </a>
          </address>
        </div>

        <div>
          <h3 className="footer-h">Get in touch</h3>
          <ul className="footer-list">
            <li><a href={SITE.phoneTel}><Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}</a></li>
            <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} aria-hidden="true" /> WhatsApp</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={15} aria-hidden="true" /> @aayureality</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} AAYU Realty &amp; Construction. All rights reserved.</p>
        <p>Property details, pricing and availability are shared on enquiry and subject to change.</p>
      </div>
    </footer>
  )
}
