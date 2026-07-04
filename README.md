# CA STUDIO — Website

An **interactive** marketing site for **CA STUDIO** (Chartered Accountancy services),
built as a single-page app with **Vite + React + React Router + Tailwind CSS**.

## Tech stack

- **Vite** — dev server + production build
- **React 18** + **React Router 6** — component UI + client-side routing
- **Tailwind CSS 3** — styling (compiled, not CDN)
- Deployed as a static SPA on **Netlify**

## Interactive features

- Client-side routing (instant page changes, no full reload)
- Scroll-reveal animations (`IntersectionObserver` — `components/Reveal.jsx`)
- Animated count-up statistics (`components/Stat.jsx`)
- Expandable FAQ accordion (`components/Accordion.jsx`)
- Stateful mobile menu (`components/Navbar.jsx`)
- Floating back-to-top button (`components/BackToTop.jsx`)
- Contact form with live validation + Netlify Forms submission

## Project structure

```
index.html            # Vite entry (mounts React)
src/
  main.jsx            # React root + Router
  App.jsx             # Route table
  index.css           # Tailwind + custom styles (glass, gradients, reveal)
  components/         # Navbar, Footer, Layout, Background, Reveal, Stat,
                      # BackToTop, Accordion, CTA, ScrollToTop
  pages/              # Home, About, Services, Contact, Success, NotFound
public/
  favicon.svg
  __forms.html        # static form for Netlify Forms detection (SPA workaround)
tailwind.config.js
vite.config.js
netlify.toml          # build + SPA redirect + headers
```

## Develop locally

```bash
npm install       # once
npm run dev        # http://localhost:5173  (hot reload)
```

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # preview the production build locally
```

## Deploy (Netlify)

Configured in `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- SPA fallback redirect so deep links (`/about`, `/contact`) work on refresh

Any push to `main` triggers an automatic redeploy.

### Contact form

Uses **Netlify Forms**. Because a React SPA renders its form on the client,
`public/__forms.html` holds a hidden static copy of the form so Netlify's
build-time crawler registers it. The live React form POSTs to `/`
(url-encoded, with `form-name=contact`) and then routes to `/success`.
Submissions appear under **Forms** in the Netlify dashboard.

## ✏️ Before going live — update placeholders

In `src/pages/Contact.jsx` (and wherever they appear):

- **Phone** — currently `+91 00000 00000`
- **Address / city** — currently `Your City, India`

The contact email is `official.castud@gmail.com`.
