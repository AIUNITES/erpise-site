// ERPise - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        navLinks?.classList.remove('active');
      }
    });
  });
  
  // Navbar background on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
      } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
      }
    });
  }
  
  // Form submission feedback
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function() {
      setTimeout(() => {
        alert('Thank you for your message! We\'ll be in touch soon.');
      }, 500);
    });
  }
});
