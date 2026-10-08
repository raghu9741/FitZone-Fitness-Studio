# 🏋️ FitZone Fitness Studio

### Modern Responsive Fitness Studio Website

FitZone Fitness Studio is a modern, responsive fitness studio website designed as a frontend portfolio project for a fictional fitness business in Bengaluru.

The website focuses on **strong visual design, responsive layouts, accessibility, smooth interactions, conversion-focused sections, and a professional fitness brand experience** — built without React, Bootstrap, Tailwind CSS, or a backend.

---

## 🌐 Live Demo

**Website:**  
https://raghu9741.github.io/FitZone-Fitness-Studio/

---

## 📸 Project Preview

FitZone includes a complete fitness studio landing experience with:

- Hero section
- About section
- Fitness programs
- Why FitZone section
- Trainers
- Membership pricing
- Testimonials
- Call-to-action sections
- Contact form
- Location information
- Responsive navigation
- Mobile-friendly layouts

---

# ✨ Features

## 🏠 Hero Section

The homepage introduces the FitZone brand with:

- Strong fitness-focused headline
- Bengaluru location branding
- Primary call-to-action
- Program exploration link
- Member statistics
- Responsive hero imagery

---

## 💪 Fitness Programs

The website presents multiple training programs:

- Strength Training
- Personal Training
- Cardio Fitness
- Functional Training
- Weight Loss
- Group Classes

Each program includes a short description and a call-to-action.

---

## 👨‍🏫 Trainer Section

The trainer section showcases fitness professionals with dedicated profile cards and photography.

The project includes trainer assets for:

- Arjun
- Priya
- Rahul

---

## 💳 Membership Pricing

The pricing section presents different membership options with:

- Plan names
- Pricing
- Plan descriptions
- Feature lists
- Popular-plan highlighting
- Call-to-action buttons

---

## ⭐ Testimonials

The website includes an interactive testimonial carousel.

Users can:

- Navigate between testimonials
- View the active testimonial
- Use previous/next controls
- Navigate using keyboard-accessible controls

---

## 📱 Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive layouts are implemented using CSS media queries, Grid, and Flexbox.

---

## 📞 Contact Section

The contact area provides:

- Phone contact
- Email contact
- WhatsApp action
- Location information
- Opening hours
- Contact form
- Google Maps link

The contact form performs **frontend-side validation** and prepares the submitted information as a WhatsApp message.

> This project does not use a backend form-processing service.

---

# ♿ Accessibility

Accessibility considerations are included throughout the project.

Features include:

- Semantic HTML
- Skip-to-content link
- Descriptive image alt text
- Form labels
- Keyboard-friendly navigation
- `:focus-visible` styles
- Accessible mobile navigation
- Escape-key support for the mobile menu
- ARIA attributes
- Reduced-motion support

Users who enable reduced motion can avoid most animation effects.

---

# 🎨 Design

FitZone uses a modern fitness-oriented visual identity featuring:

- Dark sections
- Bright lime-green primary accent
- Coral secondary accent
- Large typography
- High-contrast layouts
- Photography-driven sections
- Card-based content
- Responsive spacing
- Smooth transitions

The design uses:

**DM Sans** and **Space Grotesk** through Google Fonts.

---

# 🛠️ Technology Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript

## CSS

- CSS Custom Properties
- CSS Grid
- Flexbox
- Media Queries
- Responsive Design
- CSS Transitions
- CSS Animations

## JavaScript

- DOM Manipulation
- Event Listeners
- Intersection Observer API
- Form Validation
- Testimonial Carousel
- Responsive Navigation
- Smooth Scrolling
- WhatsApp message generation

## External Resources

- Google Fonts
- Font Awesome

## Deployment

- GitHub
- GitHub Pages

---

# 📂 Project Structure

```text
FitZone-Fitness-Studio/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
│
├── assets/
│   ├── icons/
│   │   ├── bolt.svg
│   │   ├── dumbbell.svg
│   │   └── heart-pulse.svg
│   │
│   ├── images/
│   │   ├── about.jpg
│   │   ├── hero.jpg
│   │   ├── map-texture.jpg
│   │   ├── program-cardio.jpg
│   │   ├── program-functional.jpg
│   │   ├── program-strength.jpg
│   │   ├── testimonial-1.jpg
│   │   ├── testimonial-2.jpg
│   │   ├── testimonial-3.jpg
│   │   ├── trainer-arjun.jpg
│   │   ├── trainer-priya.jpg
│   │   └── trainer-rahul.jpg
│   │
│   └── logo/
│       └── fitzone-mark.svg
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

# 🚀 Run Locally

## 1. Clone the Repository

```bash
git clone https://github.com/raghu9741/FitZone-Fitness-Studio.git
```

Move into the project:

```bash
cd FitZone-Fitness-Studio
```

---

## 2. Start a Local Server

Because the project is a static website, no package installation or build process is required.

Using Python:

```bash
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

---

# 🌐 Deployment

The project can be deployed directly using **GitHub Pages**.

The repository also contains a GitHub Actions workflow:

```text
.github/workflows/deploy.yml
```

This allows the website to be deployed automatically through GitHub Actions.

---

# 🔄 How the Website Works

```text
User
 │
 ▼
FitZone Homepage
 │
 ├── About
 │
 ├── Programs
 │
 ├── Trainers
 │
 ├── Pricing
 │
 ├── Testimonials
 │
 └── Contact
        │
        ▼
   Form Validation
        │
        ▼
   WhatsApp Message
```

---

# 🧠 JavaScript Functionality

The project uses Vanilla JavaScript for interactive behavior.

### Navigation

- Mobile menu toggle
- Active navigation section
- Sticky header behavior
- Escape-key menu closing

### Scrolling

- Smooth anchor scrolling
- Scroll-based navigation state
- Back-to-top button

### Animations

The project uses the **Intersection Observer API** to reveal content as users scroll.

### Testimonials

The testimonial carousel supports:

- Previous button
- Next button
- Active slide state
- Accessible slide state

### Contact Form

The form validates:

- Name
- Email
- Phone number
- Message

After successful validation, the form generates a WhatsApp message containing the submitted information.

---

# 🔍 SEO

The website includes basic SEO implementation:

- Page title
- Meta description
- Robots directive
- Canonical URL
- Open Graph metadata
- Semantic HTML structure
- Descriptive image alt text
- JSON-LD structured data

The structured data represents FitZone as a fictional `HealthClub` business.

---

# ⚡ Performance

The project intentionally avoids a heavy frontend framework or build system.

Performance-related implementation includes:

- Lazy loading for below-the-fold images
- Lightweight Vanilla JavaScript
- CSS-based layouts
- Responsive image usage
- Minimal dependencies
- No frontend framework bundle

Google Fonts and Font Awesome are loaded through external CDNs.

---

# 📱 Responsive Breakpoints

The layout adapts to different screen sizes including:

```text
Mobile
   ↓
Tablet
   ↓
Laptop
   ↓
Desktop
```

The CSS includes responsive handling for navigation, grids, cards, typography, forms,
