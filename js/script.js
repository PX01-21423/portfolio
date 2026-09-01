// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navbar = document.getElementById('navbar');
const burger = document.getElementById('navBurger');
burger.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.navbar__links a').forEach((link) => {
  link.addEventListener('click', () => navbar.classList.remove('nav-open'));
});

// Contact form -> opens the visitor's email client with a pre-filled message.
// This is a static site with no backend, so this is the zero-setup default.
// See README.md for how to swap this for Formspree/EmailJS if you want
// submissions to land without opening an email app.
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  window.location.href = `mailto:jordan.cruz@example.com?subject=${subject}&body=${body}`;
});
