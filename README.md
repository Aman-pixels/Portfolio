# Aman Kundal — Portfolio

A responsive React portfolio with an editorial layout, selected project previews, an accessible mobile menu, and direct contact links.

## Run locally

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static host. The site assumes hosting at the domain root.

## Edit the content

- `src/components/UI/Hero.jsx`: introduction and resume link.
- `src/components/UI/Projects.jsx`: project details, technologies, and live URLs.
- `src/components/UI/About.jsx`: biography.
- `src/components/UI/Skills.jsx`: toolkit and learning interests.
- `src/components/UI/Experience.jsx`: learning milestones.
- `src/components/UI/Contact.jsx`: email and social profiles.
- `src/portfolio.css`: colors, typography, responsive layouts, and motion preferences.
- `public/Aman_Resume.pdf`: downloadable resume.

The WebP assets in `public` are optimized copies of the original portfolio images. Keep the originals when preparing new exports. Fonts load from Google Fonts with system fallbacks.

Before publishing, update the Open Graph and Twitter image tags in `index.html` to use the absolute production URL of `/social-preview.jpg`.

## Browser checks

Verified at 320, 390, 600, 768, 1024, and 1440 pixels: no horizontal overflow, mobile menu and Escape behavior, section navigation, email copy, resume availability, and no runtime errors.

The production build also passed automated axe checks for WCAG 2 A/AA and WCAG 2.1 AA at mobile and desktop widths. Automated checks do not replace a full accessibility review.
