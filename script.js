// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const NAV_HEIGHT_OFFSET = 80;

function setActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - NAV_HEIGHT_OFFSET;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--text)'
          : 'var(--text-muted)';
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });

// ===== Intersection Observer for fade-in on scroll =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.skill-category, .project-card, .stat-card, .contact-link-item, .exp-card, .edu-card, .cert-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
