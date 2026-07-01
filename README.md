# CA STUDIO — Website

A fast, static multi-page marketing site for **CA STUDIO** (Chartered Accountancy services).
Built with plain HTML + [Tailwind CSS (Play CDN)](https://tailwindcss.com/docs/installation/play-cdn) and a little vanilla JS. No build step required.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, services preview, testimonial, CTA |
| `about.html` | Philosophy + "Why Choose Us / The Edge" |
| `services.html` | The three core services in detail |
| `contact.html` | Contact details + working contact form |
| `success.html` | Thank-you page shown after the form is submitted |
| `404.html` | Custom "page not found" |

## Shared assets

- `assets/styles.css` — glassmorphism, gradients, animations, form styles
- `assets/tailwind-config.js` — brand colours + font (loaded after the Tailwind CDN)
- `assets/main.js` — mobile menu toggle + footer year
- `assets/favicon.svg` — logo/favicon

## Contact form

The contact form uses **[Netlify Forms](https://docs.netlify.com/forms/setup/)** — it works automatically once the
site is deployed on Netlify (submissions appear under **Forms** in the Netlify dashboard).
No server code needed. On success, visitors are sent to `success.html`.

## Deploy (Netlify)

This repo is a static site, so Netlify just publishes the files as-is:

- **Build command:** *(empty)*
- **Publish directory:** `.` (repo root) — configured in `netlify.toml`

Any push to `main` triggers an automatic redeploy.

## ✏️ Before going live — update these placeholders

In `contact.html` (and the footers), replace:

- **Phone number** — currently `+91 00000 00000`
- **Address / city** — currently `Your City, India`

The contact email is set to `official.castud@gmail.com`.

## Local preview

Just open `index.html` in a browser, or run a tiny static server:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```
