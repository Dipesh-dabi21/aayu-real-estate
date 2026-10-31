import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Solid background after scrolling a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll + Esc to close + auto-close when resized to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const navLinks = (
    <>
      {NAV.map((n) => (
        <NavLink
          key={n.to}
          to={n.to}
          end={n.to === "/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {n.label}
        </NavLink>
      ))}
    </>
  );

  // The mobile menu is rendered straight into <body> (a portal), so no header
  // style can ever clip or shrink it.
  const mobileMenu = open
    ? createPortal(
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <nav aria-label="Mobile">{navLinks}</nav>
          <div className="mobile-menu-foot">
            <a className="btn btn-dark" href={SITE.phoneTel}>
              <Phone size={16} aria-hidden="true" /> Call {SITE.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-gold">
              Send an enquiry
            </Link>
          </div>
        </div>,
        document.body,
      )
    : null;

  const state = [
    scrolled || open ? "solid" : "",
    pathname === "/" && !scrolled && !open ? "on-hero" : "",
  ].join(" ");

  return (
    <>
      <header className={`site-header ${state}`}>
        <div className="container header-inner">
          <Link
            to="/"
            className="wordmark"
            aria-label="AAYU Realty & Construction — home"
          >
            <span className="wordmark-main">AAYU</span>
            <span className="wordmark-sub">Realty &amp; Construction</span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {navLinks}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={SITE.phoneTel}>
              <Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-gold header-cta">
              Enquire
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
