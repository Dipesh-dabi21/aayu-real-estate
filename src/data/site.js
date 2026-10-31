import {
  LandPlot,
  Building2,
  Home,
  Castle,
  Store,
  Compass,
  HardHat,
} from 'lucide-react'

export const SITE = {
  name: 'AAYU Realty & Construction',
  short: 'AAYU',
  phoneDisplay: '+91 99772 57737',
  phoneTel: 'tel:+919977257737',
  whatsappNumber: '919977257737',
  whatsapp: 'https://wa.me/919977257737',
  instagram: 'https://www.instagram.com/aayureality/',
  address: '72 CH, Sukhliya Main Road, Sukhlia, Sector CH, Sukhliya, Indore, Madhya Pradesh 452010',
  addressLines: ['72 CH, Sukhliya Main Road', 'Sukhlia, Sector CH, Sukhliya', 'Indore, Madhya Pradesh 452010'],
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('72 CH, Sukhliya Main Road, Sukhlia, Indore, Madhya Pradesh 452010'),
  mapEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('72 CH, Sukhliya Main Road, Sukhlia, Indore, Madhya Pradesh 452010') +
    '&output=embed',
  // Client-provided — verify before launch (see README).
  googleRating: '5.0',
  googleReviewCount: '48',
  googleSearch: 'https://www.google.com/search?q=aayu+construction+indore',
}

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export const IMG = {
  heroWide: 'images/entrance-wide.jfif',
  entrance: 'images/entrance-front.jfif',
  landscape: 'images/landscape.jfif',
  promenade: 'images/promenade.jfif',
  office: 'images/aayu-office.webp',
}

export const CATEGORIES = [
  {
    id: 'plots',
    title: 'Residential Plots',
    icon: LandPlot,
    blurb: 'Land to build your own vision on, with guidance on location, access and paperwork.',
    image: IMG.entrance,
    alt: 'Gateway entrance of a residential community in Indore',
  },
  {
    id: 'flats',
    title: 'Flats & Apartments',
    icon: Building2,
    blurb: 'Apartment homes for first-time buyers, growing families and investors.',
    image: IMG.landscape,
    alt: 'Landscaped open space within a residential community',
  },
  {
    id: 'rowhouses',
    title: 'Row Houses',
    icon: Home,
    blurb: 'Independent-feeling homes within planned neighbourhoods and tree-lined streets.',
    image: IMG.promenade,
    alt: 'Paved pedestrian promenade with street lights',
  },
  {
    id: 'bungalows',
    title: 'Bungalows',
    icon: Castle,
    blurb: 'Spacious standalone homes, from selecting the plot to custom construction.',
    image: IMG.heroWide,
    alt: 'Wide view of a community entrance',
  },
  {
    id: 'commercial',
    title: 'Commercial Property',
    icon: Store,
    blurb: 'Shops, offices and commercial spaces on well-connected roads.',
    image: IMG.office,
    alt: 'AAYU Realty & Construction office signage',
  },
]

export const SERVICES = [
  { icon: LandPlot, title: 'Residential Plots', text: 'Help finding and evaluating plots that suit your budget, location and building plans.' },
  { icon: Building2, title: 'Flats & Apartments', text: 'Curated apartment options with honest comparisons, site visits and clear next steps.' },
  { icon: Home, title: 'Row Houses', text: 'Planned row-house communities for families who want space, privacy and neighbours.' },
  { icon: Castle, title: 'Bungalows', text: 'Standalone homes — buy ready options or build your own from the ground up.' },
  { icon: Store, title: 'Commercial Property', text: 'Shops, showrooms and office spaces for businesses and long-term investors.' },
  { icon: Compass, title: 'Property Guidance', text: 'Straight-talking advice on locations, pricing and the buying process, from first call to handover.' },
  { icon: HardHat, title: 'Construction Services', text: 'End-to-end home and building construction with clear communication at every stage.' },
]

export const PROMISES = [
  { n: '01', title: 'Transparent', text: 'Clear conversations about options, costs and process — no surprises, no pressure.' },
  { n: '02', title: 'Quality-minded', text: 'Construction decisions guided by durability and finish, not shortcuts.' },
  { n: '03', title: 'Personal', text: 'You deal with a real person who knows your brief and stays in touch.' },
  { n: '04', title: 'Rooted in Indore', text: 'Local knowledge of neighbourhoods, roads and growth corridors across the city.' },
]

export const STEPS = [
  { title: 'Tell us your needs', text: 'Share your budget, preferred area and the kind of property you are looking for.' },
  { title: 'Shortlist together', text: 'We suggest suitable options and explain the pros and cons of each.' },
  { title: 'Visit the site', text: 'See the property in person and ask every question you have.' },
  { title: 'Guidance on paperwork', text: 'We walk you through the process. Always confirm legal documents with your own advisor.' },
  { title: 'Build or move in', text: 'Start construction with us or settle into your new property.' },
]

// Client-provided Google reviews (supplied by the business). Do not add others unless verified & permissioned.
export const REVIEWS = [
  {
    name: 'COPS FITNESS',
    rating: 5,
    title: 'Highly Professional and Reliable!',
    text:
      'I had a fantastic experience with AAYU Realty and Construction. From the initial consultation to project completion, their team was professional, transparent, and detail-oriented. The construction quality is top-notch, and they used premium materials without cutting corners. They completed my home on time and within budget, which is rare in today’s market. Highly recommend them for anyone looking for honest and high-quality real estate and construction services!',
    link: 'https://www.google.com/maps/contrib/109864557080864362343/reviews?hl=en-GB',
  },
  {
    name: 'Amit Paliwal',
    rating: 5,
    text: 'Best rate, cooperative nature, good service.',
    link: 'https://www.google.com/maps/contrib/117214277462147322578/reviews?hl=en-GB',
  },
  {
    name: 'Krishna Gurjar',
    rating: 5,
    text: 'Property seller in best — Lalit Sir.',
    link: 'https://www.google.com/maps/contrib/111938290305455779929/reviews?hl=en-GB',
  },
  {
    name: 'Vijit Sharma',
    rating: 5,
    text:
      'Mr. Lalit Sharma is a very professional and helping consultant and by far the best real estate person in Indore for any property related matter.',
    link: 'https://www.google.com/maps/contrib/103180515429215932081/reviews?hl=en-GB',
  },
]

export const FAQS = [
  {
    q: 'What types of property can AAYU help me with?',
    a: 'Residential plots, flats and apartments, row houses, bungalows and commercial property, along with property guidance and construction services.',
  },
  {
    q: 'Can you build on a plot I already own?',
    a: 'Yes — construction services are available. Share your plot details and requirements and we will discuss what is possible.',
  },
  {
    q: 'Do I need to book a site visit?',
    a: 'A quick call or WhatsApp message is all it takes. We will arrange a visit at a time that suits you.',
  },
  {
    q: 'Will you help me understand the paperwork?',
    a: 'We guide you through the general process. For legal verification of titles and approvals, please also consult your own legal advisor.',
  },
  {
    q: 'How do I get current availability and pricing?',
    a: 'Availability and pricing change often, so we share the latest details directly. Call or WhatsApp us on +91 99772 57737.',
  },
]
