const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

function closeMenu() {
  primaryNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  document.body.classList.toggle('menu-open', isOpen);
});

primaryNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && primaryNav.classList.contains('open')) {
    closeMenu();
    menuToggle.focus();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (target.id === 'main-content') target.focus({ preventScroll: true });
    }
  });
});

function updateNavigation() {
  header.classList.toggle('scrolled', window.scrollY > 20);
  let currentSection = 'home';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 160) currentSection = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`));
}
window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const testimonials = [...document.querySelectorAll('.testimonial')];
const previousButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const count = document.querySelector('.carousel-count b');
let activeTestimonial = 0;

function showTestimonial(index) {
  activeTestimonial = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, itemIndex) => {
    const isActive = itemIndex === activeTestimonial;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-hidden', String(!isActive));
  });
  count.textContent = String(activeTestimonial + 1).padStart(2, '0');
}
showTestimonial(0);
previousButton.addEventListener('click', () => showTestimonial(activeTestimonial - 1));
nextButton.addEventListener('click', () => showTestimonial(activeTestimonial + 1));

const form = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');
const fields = {
  name: { input: document.querySelector('#name'), error: document.querySelector('#name-error'), message: 'Please enter your name.' },
  email: { input: document.querySelector('#email'), error: document.querySelector('#email-error'), message: 'Please enter a valid email.' },
  phone: { input: document.querySelector('#phone'), error: document.querySelector('#phone-error'), message: 'Please enter a valid phone number.' },
  message: { input: document.querySelector('#message'), error: document.querySelector('#message-error'), message: 'Please tell us how we can help.' },
};

function setFieldError(field, message = '') {
  field.error.textContent = message;
  field.input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValid = fields.name.input.value.trim().length > 1;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.input.value.trim());
  const phoneValue = fields.phone.input.value.trim();
  const phoneDigits = phoneValue.replace(/\D/g, '');
  const phoneValid = /^\+?[\d\s()-]+$/.test(phoneValue) && phoneDigits.length >= 10 && phoneDigits.length <= 15;
  const messageValid = fields.message.input.value.trim().length > 5;
  const checks = [[fields.name, nameValid], [fields.email, emailValid], [fields.phone, phoneValid], [fields.message, messageValid]];
  checks.forEach(([field, isValid]) => setFieldError(field, isValid ? '' : field.message));
  if (!nameValid || !emailValid || !phoneValid || !messageValid) {
    statusMessage.className = 'form-status error';
    statusMessage.textContent = 'Please check the highlighted fields and try again.';
    return;
  }
  const interest = document.querySelector('#interest').value;
  const whatsappMessage = [
    `Hi FitZone, I'm ${fields.name.input.value.trim()}.`,
    `Email: ${fields.email.input.value.trim()}`,
    `Phone: ${phoneValue}`,
    `Interested in: ${interest}`,
    '',
    fields.message.input.value.trim(),
  ].join('\n');
  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  form.reset();
  Object.values(fields).forEach((field) => setFieldError(field));
  statusMessage.className = 'form-status success';
  statusMessage.textContent = 'Your message is ready in WhatsApp. Review it and tap Send to contact us.';
});

document.querySelector('.back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
