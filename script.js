/* ─── Custom Cursor ─── */
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = -100, mouseY = -100;
let cursorX = -100, cursorY = -100;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
  document.body.classList.add('cursor-visible');
});

document.addEventListener('mouseleave', () => {
  document.body.classList.remove('cursor-visible');
});

// Smooth cursor lag
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover state on interactive elements
document.querySelectorAll('a, button, .project-card, .ext-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ─── Nav: scroll class ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── Mobile nav toggle ─── */
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
let mobileOpen = false;

navToggle.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  navMobile.classList.toggle('open', mobileOpen);
  // Animate hamburger icon
  const spans = navToggle.querySelectorAll('span');
  if (mobileOpen) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

// Close mobile nav on link click
navMobile.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileOpen = false;
    navMobile.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  });
});

/* ─── Scroll Reveal ─── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -48px 0px'
});

reveals.forEach(el => revealObserver.observe(el));

/* ─── Smooth scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── Subtle parallax on orbs ─── */
const orbs = document.querySelectorAll('.orb');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  orbs[0] && (orbs[0].style.transform = `translateX(-60%) translateY(${y * 0.08}px)`);
  orbs[1] && (orbs[1].style.transform = `translateY(${-y * 0.05}px)`);
  orbs[2] && (orbs[2].style.transform = `translateY(${y * 0.06}px)`);
}, { passive: true });
