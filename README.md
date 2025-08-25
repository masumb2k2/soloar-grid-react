# Soloar Grid Power Ltd – React + Tailwind + Framer Motion

A fully responsive, animated, professional website for **Soloar Grid Power Ltd.**
Built with **React**, **Tailwind CSS**, **Framer Motion**, **React Router**, and **Formspree**.

## Pages
- Home (`/`), About (`/about`), Products/Services (`/products`), Projects (`/projects`), Blog (`/blog`), Contact (`/contact`), Careers (`/careers`)

## Quick Start
```bash
npm install
npm run dev
# build:
npm run build && npm run preview
```

## Configure Email (Contact Form)
- Open `src/pages/Contact.jsx`
- Replace `'YOUR_FORMSPREE_ID'` in `useForm('YOUR_FORMSPREE_ID')` with your Formspree form ID (from https://formspree.io).

## Live Chat
- Paste your **tawk.to** script in `index.html` (see commented block).

## Map
- Update the Google Maps `iframe` URL in `src/pages/Contact.jsx` with your exact office embed link.

## Dark Mode & Colors
- Indigo‑based palette using Tailwind default `indigo` scale.
- Dark mode toggle in header (stored in localStorage).

## Deploy
- Netlify / Vercel: run `npm run build`, deploy the `dist/` folder.
- Any static host: upload `dist/` after build.
