# CA Studio — Interactive Firm Website

> A fast, interactive single-page marketing site for a Chartered Accountancy firm, built
> with React and Vite and deployed as a static SPA on Netlify.

<p>
  <img alt="React" src="https://img.shields.io/badge/React%2018-61DAFB?logo=react&logoColor=black">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white">
  <img alt="React Router" src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white">
</p>

---

## ✨ Highlights

- **Single-page app** — client-side routing with React Router 6 for instant navigation and no full-page reloads, with an SPA fallback so deep links survive a refresh.
- **Hand-built interactions** — scroll-reveal animations via `IntersectionObserver`, animated count-up statistics, an expandable FAQ accordion, a floating back-to-top button, and a stateful responsive mobile menu, each as a reusable component.
- **Real contact form** — live client-side validation plus Netlify Forms submission (with the static-form workaround that lets Netlify's crawler register an SPA form).
- **Production build pipeline** — Vite build to a static `dist/`, deployed on Netlify with automatic redeploys on every push to `main`.
- **Compiled Tailwind** — Tailwind CSS 3 compiled at build time (not CDN) with custom glass/gradient styling.

## 🧰 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Framework** | React 18, React Router 6 |
| **Build** | Vite |
| **Styling** | Tailwind CSS 3 (compiled), custom CSS |
| **Hosting** | Netlify (static SPA + Netlify Forms) |

## 🚀 Quick Start

```bash
npm install     # once
npm run dev     # http://localhost:5173  (hot reload)
npm run build   # static site -> dist/
```

Full project structure, deployment, and contact-form details are below.

---

<details>
<summary><strong>📖 Full documentation</strong> (click to expand)</summary>


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

</details>
