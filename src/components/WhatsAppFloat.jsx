import { MessageCircle } from 'lucide-react'
import { SITE } from '../data/site.js'

export default function WhatsAppFloat() {
  const href = `${SITE.whatsapp}?text=${encodeURIComponent('Hello AAYU Realty & Construction, I would like to know more about your properties.')}`
  return (
    <a className="wa-float" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with AAYU on WhatsApp">
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
