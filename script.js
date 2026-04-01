// ============================================================
// PORTFOLIO RENDERER — reads data.json and builds the page
// To update content: edit data.json only. Never touch this file.
// ============================================================

async function loadData() {
  const res = await fetch('data.json');
  return res.json();
}

function buildNav(nav) {
  const ul = document.getElementById('nav-links');
  nav.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.href}">${item.label}</a>`;
    ul.appendChild(li);
  });
}

function buildHero(data) {
  document.getElementById('hero-location').textContent = `// ${data.location}`;
  document.getElementById('hero-name').textContent = data.name;
  document.getElementById('hero-tagline').textContent = data.tagline;
  document.getElementById('hero-bio').textContent = data.bio;
}

function buildAbout(data) {
  // Bio paragraph
  const textDiv = document.getElementById('about-text');
  const p = document.createElement('p');
  p.textContent = data.bio;
  textDiv.appendChild(p);

  // Stat cards
  const statsDiv = document.getElementById('about-stats');
  data.stats.forEach(s => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `<div class="stat-num">${s.value}</div><div class="stat-label">${s.label}</div>`;
    statsDiv.appendChild(card);
  });
}

function buildSkills(skills) {
  const grid = document.getElementById('skills-grid');
  skills.forEach(s => {
    const div = document.createElement('div');
    div.className = 'skill-category';
    div.innerHTML = `
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-cat-name">${s.category}</div>
      <div class="skill-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(div);
  });
}

function buildExperience(experience) {
  const list = document.getElementById('experience-list');
  experience.forEach(e => {
    const div = document.createElement('div');
    div.className = 'exp-card';
    div.innerHTML = `
      <div class="exp-header">
        <div>
          <h3 class="exp-title">${e.title}</h3>
          <p class="exp-org">${e.org} · ${e.location}</p>
        </div>
        <span class="exp-date">${e.date}</span>
      </div>
      <ul class="exp-bullets">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    `;
    list.appendChild(div);
  });
}

function buildEducation(education) {
  const list = document.getElementById('edu-list');
  education.forEach(e => {
    const div = document.createElement('div');
    div.className = 'edu-card';
    div.innerHTML = `
      <div class="edu-left">
        <h3 class="edu-degree">${e.degree}</h3>
        <p class="edu-school">${e.school}</p>
        ${e.note ? `<p class="edu-grade">${e.note}</p>` : ''}
      </div>
      <span class="edu-date">${e.date}</span>
    `;
    list.appendChild(div);
  });
}

function buildProjects(projects) {
  const grid = document.getElementById('projects-grid');
  projects.forEach(p => {
    const links = [
      p.github ? `<a href="${p.github}" target="_blank" class="project-link" title="GitHub"><i class="fa-brands fa-github"></i></a>` : '',
      p.demo   ? `<a href="${p.demo}"   target="_blank" class="project-link" title="Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''
    ].join('');

    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `
      <div class="project-header">
        <span class="project-icon">${p.icon}</span>
        <div style="display:flex;align-items:center;gap:0.6rem;">
          ${links}
          <span class="project-status">${p.status}</span>
        </div>
      </div>
      <h3 class="project-name">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(div);
  });
}

function buildCertifications(certs) {
  const list = document.getElementById('cert-list');
  certs.forEach(c => {
    const div = document.createElement('div');
    div.className = 'cert-card';
    div.innerHTML = `
      <div class="cert-icon">🎓</div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
    `;
    list.appendChild(div);
  });
}

function buildContact(contact) {
  const list = document.getElementById('contact-links');
  const items = [
    { icon: 'fa-solid fa-envelope',  label: contact.email,                   href: `mailto:${contact.email}` },
    { icon: 'fa-brands fa-github',   label: 'github.com/shiva-kar',          href: contact.github },
    { icon: 'fa-brands fa-linkedin', label: 'linkedin.com/in/shiva-kar',     href: contact.linkedin },
    { icon: 'fa-brands fa-x-twitter',label: 'x.com/sk_shivakar',             href: contact.twitter },
    { icon: 'fa-brands fa-instagram',label: 'instagram.com/sk_shivakar',     href: contact.instagram },
    { icon: 'fa-brands fa-facebook', label: 'facebook.com/SHIVAxKAR',        href: contact.facebook },
  ];
  items.forEach(item => {
    const a = document.createElement('a');
    a.className = 'contact-link-item';
    a.href = item.href;
    if (!item.href.startsWith('mailto')) { a.target = '_blank'; a.rel = 'noopener'; }
    a.innerHTML = `<span class="contact-link-icon"><i class="${item.icon}"></i></span>${item.label}`;
    list.appendChild(a);
  });
}

// ===== Active nav link on scroll =====
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : 'var(--text-muted)';
        });
      }
    });
  }, { passive: true });
}

// ===== Scroll reveal =====
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.skill-category, .project-card, .stat-card, .contact-link-item, .exp-card, .edu-card, .cert-card'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== INIT =====
loadData().then(data => {
  buildNav(data.nav);
  buildHero(data);
  buildAbout(data);
  buildSkills(data.skills);
  buildEducation(data.education);
  buildProjects(data.projects);
  buildCertifications(data.certifications);
  buildContact(data.contact);
  initScrollSpy();
  initReveal();
}).catch(err => {
  console.error('Failed to load data.json:', err);
});
