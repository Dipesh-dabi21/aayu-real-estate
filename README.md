# AAYU Realty & Construction — Website

Vite + React (JSX) + Framer Motion + Lucide icons. Multi-page (hash routing, so it works on any static host without server rules):
Home · About · Projects · Services · Reviews · Contact.

## Run it

Requires Node.js 18+.

```bash
npm install
npm run dev        # development server (http://localhost:5173)
npm run build      # production build into dist/
npm run preview    # preview the production build (http://localhost:4173)
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Add your photographs (important)

Copy these files into `public/images/` using **exactly** these names:

| File | Used for |
| --- | --- |
| `entrance-wide.jfif` | Home hero |
| `entrance-front.jfif` | About / Residential Plots card |
| `landscape.jfif` | Flats card / Projects page |
| `promenade.jfif` | Row Houses card / About |
| `aayu-office.webp` | About page / Commercial card |

Until a file is present, the site shows a neutral architectural illustration instead of a broken image.
Image paths are listed in `src/data/site.js` (`IMG`). If your photos use `.jpg`, just change the names there.

## Where to edit content

- `src/data/site.js` — phone, address, links, services, FAQs, reviews, Google rating/count.
- `src/pages/*` — page layouts and copy.
- `src/styles.css` — colours and fonts are CSS variables at the top.

## Enquiry form

Validates name, phone and interest, then opens WhatsApp (`wa.me/919977257737`) with a pre-filled message.
No backend: nothing is stored or emailed by the site.

## Verify before launch

- [ ] Phone / WhatsApp number: +91 99772 57737
- [ ] Address: 72 CH, Sukhliya Main Road, Sukhlia, Sector CH, Sukhliya, Indore, MP 452010 (check the map pin)
- [ ] Instagram: https://www.instagram.com/aayureality/
- [ ] Google rating (5.0) and review count (48) — client-supplied; confirm on the live Google profile
- [ ] The 4 reviews are used as supplied by the client; confirm each reviewer is fine with being shown, and that review links open correctly
- [ ] Replace the Google link in `SITE.googleSearch` with the official Google Business Profile / review link
- [ ] Add real project names, prices, sizes, amenities, approvals, RERA numbers and possession dates only once verified (Projects page currently says "On request")
- [ ] Mission/vision, "About" story and FAQ wording — confirm they reflect the business
- [ ] Add visiting hours if desired (Contact page)
- [ ] Photos: confirm you own or may publish all images; captions must not describe parks/entrances as interiors or completed homes
- [ ] Add a privacy policy / terms page if required for your hosting or advertising
