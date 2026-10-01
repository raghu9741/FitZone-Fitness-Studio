# FitZone Fitness Studio

## Overview

FitZone is a polished static website concept for a fictional fitness studio in Bengaluru. It demonstrates how a small-business website can combine clear conversion paths, responsive layout, accessible interactions, and a distinctive visual identity without a framework or build step.

## Live Demo

Local development URL: `http://localhost:5500`

Production URL: `[Add after deployment]`

## Screenshots

No screenshots are included yet. Capture these after the final review:

- `assets/screenshots/desktop-home.png` at 1440 x 900
- `assets/screenshots/desktop-programs.png` at 1440 x 1200
- `assets/screenshots/desktop-pricing.png` at 1440 x 1200
- `assets/screenshots/desktop-contact.png` at 1440 x 1200
- `assets/screenshots/mobile-home.png` at 375 x 812

Add the images to `assets/screenshots/` and link them here before publishing to GitHub.

## Features

- Responsive mobile-first layout
- Sticky navigation with active section state
- Accessible mobile menu with Escape-key support
- Hero, about, programs, benefits, trainers, pricing, testimonials, CTA and contact sections
- Testimonial carousel with accessible slide state
- Frontend-only contact form validation
- Transparent demo-form status message
- Scroll reveal animations with reduced-motion support
- Phone, email, WhatsApp and Google Maps links
- SEO metadata, Open Graph tags, canonical placeholder and JSON-LD
- Back-to-top control and lazy-loaded below-the-fold images

## Technologies

- HTML5
- CSS3 custom properties, Grid, Flexbox and media queries
- Vanilla JavaScript
- Google Fonts: DM Sans and Space Grotesk
- Font Awesome icons via CDN
- Bundled JPG photography in `assets/images/`

## Project Structure

```text
fitzone-website/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── assets/
    ├── images/       # Bundled photography; confirm usage rights before publishing
    ├── icons/
    ├── logo/
    └── screenshots/  # Add real captured screenshots before publishing
```

## Responsive Design

The layout was checked for horizontal overflow at 375px, 480px, 620px, 768px, 1024px and 1440px. The carousel is clipped on narrow screens so translated slides cannot create horizontal page overflow.

## Accessibility

The project includes semantic headings, descriptive image alt text, form labels, visible `:focus-visible` styles, a skip link, live form status, keyboard-friendly controls, mobile menu Escape support, and reduced-motion handling.

## SEO

The page includes a title, description, robots directive, canonical placeholder, Open Graph metadata, semantic headings and fictional `HealthClub` JSON-LD. Replace the `example.com` URLs with the real deployed URL before launch.

## Performance

The site has no build step or heavy JavaScript framework. The hero image remains eager for the first view; below-the-fold content images use lazy loading. Google Fonts and Font Awesome are external CDN dependencies and should be self-hosted for a production client if performance and privacy requirements demand it.

## How to Run Locally

Open the folder in VS Code and run:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Lighthouse Testing

Open the deployed or local URL in Chrome, open DevTools, select the **Lighthouse** tab, choose **Mobile** or **Desktop**, select Performance, Accessibility, Best Practices and SEO, then click **Analyze page load**. Record the actual scores; do not add claimed scores to this README until tested.

## Future Improvements

- Confirm image usage rights and replace sample photography as needed
- Connect the demo form to a service such as Formspree or Netlify Forms
- Replace the Google Maps search link with a confirmed embed after the address is real
- Self-host fonts and icons if the deployed client site needs tighter performance control

## Disclaimer

FitZone Fitness Studio is a fictional/demo business created for a portfolio project. The contact details, membership plans, testimonials, address and structured data are sample content and should be replaced or verified before use for a real business.

## Author

Portfolio project by [raghu9741](https://github.com/raghu9741).

## Suggested GitHub Repository

- Name: `FitZone-Fitness-Studio`
- Description: `Modern responsive fitness studio website built with HTML, CSS and vanilla JavaScript.`
- Topics: `html`, `css`, `javascript`, `responsive-design`, `frontend`, `fitness`, `website`, `portfolio`
