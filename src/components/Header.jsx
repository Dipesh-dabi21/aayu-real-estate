import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAV, SITE } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'solid' : ''} ${pathname === '/' && !scrolled && !open ? 'on-hero' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="wordmark" aria-label="AAYU Realty & Construction — home">
          <span className="wordmark-main">AAYU</span>
          <span className="wordmark-sub">Realty &amp; Construction</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={SITE.phoneTel}>
            <Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-small btn-gold">Enquire</Link>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <a className="btn btn-dark" href={SITE.phoneTel}>
            <Phone size={16} aria-hidden="true" /> Call {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-gold">Send an enquiry</Link>
        </div>
      </div>
    </header>
  )
}
