import { Phone, MapPin, Instagram, MessageCircle, Clock } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import usePageMeta from '../components/usePageMeta.js'
import { SITE } from '../data/site.js'

export default function Contact() {
  usePageMeta(
    'Contact Us | AAYU Realty & Construction, Indore',
    'Contact AAYU Realty & Construction at 72 CH, Sukhliya Main Road, Indore. Call or WhatsApp +91 99772 57737.',
  )
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s talk about"
        em="your property."
        text="Call, message or visit our office. We usually respond fastest on WhatsApp."
      />

      <section className="section tight">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <ul>
              <li>
                <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
                <div><h3>Call</h3><a href={SITE.phoneTel}>{SITE.phoneDisplay}</a></div>
              </li>
              <li>
                <MessageCircle size={20} strokeWidth={1.5} aria-hidden="true" />
                <div><h3>WhatsApp</h3><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
              </li>
              <li>
                <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>Office</h3>
                  <address>
                    <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
                      {SITE.addressLines.map((l) => <span key={l}>{l}</span>)}
                    </a>
                  </address>
                </div>
              </li>
              <li>
                <Instagram size={20} strokeWidth={1.5} aria-hidden="true" />
                <div><h3>Instagram</h3><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">@aayureality</a></div>
              </li>
              <li>
                <Clock size={20} strokeWidth={1.5} aria-hidden="true" />
                <div><h3>Visiting hours</h3><p>Please call ahead to confirm timings and book a site visit.</p></div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="contact-form-card">
            <h2>Send an <em>enquiry</em></h2>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="map-section" aria-label="Map showing AAYU Realty & Construction office">
        <iframe
          title="Map of AAYU Realty & Construction, Sukhliya, Indore"
          src={SITE.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="container map-link">
          <a className="btn btn-dark btn-small" href={SITE.mapLink} target="_blank" rel="noopener noreferrer">
            <MapPin size={15} aria-hidden="true" /> Open in Google Maps
          </a>
        </div>
      </section>
    </>
  )
}
