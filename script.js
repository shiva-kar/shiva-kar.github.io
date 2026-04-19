// ============================================================
// PORTFOLIO RENDERER
// Data is embedded below. To update content, edit the DATA
// object directly, or replace with a fetch() if serving via HTTP.
// ============================================================

const DATA = {
		"name": "Shiva Kar",
		"tagline": "Systems Programmer & Future Backend SDE",
		"location": "Hojai, Assam, India",
		"bio": "BCA student at Amity University Online, building a rigorous foundation in systems programming and transitioning into enterprise Backend Engineering. My focus is on deep technical fundamentals — not frameworks or hype. I follow a structured engineering path: C (Systems) → Java (DSA & Spring Boot Backend) → Python (Scripting) → Backend SDE → Distributed Systems → MAANG.",
		"contact": {
			"email": "sksmarttech48+protfolio@gmail.com",
			"github": "https://github.com/shiva-kar",
			"linkedin": "https://www.linkedin.com/in/shiva-kar/",
			"twitter": "https://x.com/sk_shivakar",
			"instagram": "https://instagram.com/sk_shivakar",
			"facebook": "https://facebook.com/SHIVAxKAR"
		},
		"nav": [
			{ "label": "About",          "href": "#about" },
			{ "label": "Skills",         "href": "#skills" },
			{ "label": "Education",      "href": "#education" },
			{ "label": "Projects",       "href": "#projects" },
			{ "label": "Certifications", "href": "#certifications" },
			{ "label": "Contact",        "href": "#contact" }
		],
		"stats": [
			{ "value": "C",    "label": "Primary Language" },
			{ "value": "BCA",  "label": "Degree Program"   },
			{ "value": "8.36", "label": "Sem I SGPA"       },
			{ "value": "1",    "label": "Active Project"   }
		],
		"skills": [
			{
				"icon": "⚙️",
				"category": "Systems Programming",
				"tags": ["C", "Pointers", "Memory Management", "File I/O", "Bit Manipulation"]
			},
			{
				"icon": "🖥️",
				"category": "Operating Systems",
				"tags": ["Linux / Unix", "Processes", "System Calls", "Signals", "Shell"]
			},
			{
				"icon": "📐",
				"category": "Data Structures & Algorithms",
				"tags": ["Arrays", "Linked Lists", "Sorting", "Recursion", "Problem Solving"]
			},
			{
				"icon": "🛠️",
				"category": "Dev Tools",
				"tags": ["Git", "GCC", "Command-line", "Debugging"]
			},
			{
				"icon": "🧩",
				"category": "Concepts",
				"tags": ["Object-Oriented Programming", "Process Management", "Version Control", "OS Internals"]
			},
			{
				"icon": "🚀",
				"category": "Upcoming (Stage 2)",
				"tags": ["Java", "Spring Boot", "PostgreSQL", "Docker"]
			}
		],
		"education": [
			{
				"degree": "Bachelor of Computer Applications (BCA)",
				"school": "Amity University Online · Noida, India",
				"date": "Jul 2025 – Nov 2028",
				"note": "SGPA: 8.36 (Sem I)"
			},
			{
				"degree": "Higher Secondary (Class XII) — Science (PCM & CS)",
				"school": "Deshabandhu Bidyapeeth HS School · Hojai",
				"date": "Jul 2022 – Mar 2025",
				"note": "Grade: 68% · Coursework: C++ (Fundamentals), SQL (Basics)"
			},
			{
				"degree": "Secondary Education (Class X)",
				"school": "Rabindra Bidyalaya High School · Hojai",
				"date": "Jan 2017 – Mar 2022",
				"note": "Grade: 80%"
			}
		],
		"projects": [
			{
				"icon": "🐚",
				"title": "Unix-like Shell",
				"status": "Active Development",
				"desc": "Building a minimal Unix shell in C with command parsing, execution via fork/exec, and process management. Covers system calls, file descriptors, signal handling, and piping fundamentals.",
				"tags": ["C", "System Calls", "Process Management"],
				"github": "https://github.com/shiva-kar/unix-like-shell",
				"demo": ""
			},
			{
				"icon": "🌐",
				"title": "Custom HTTP Server",
				"status": "Upcoming",
				"desc": "Implementing a basic web server using raw POSIX sockets to serve static files. Bridging the gap between operating systems and backend web infrastructure.",
				"tags": ["C", "Networking", "Sockets"],
				"github": "https://github.com/shiva-kar/Custom-HTTP-Server-in-C",
				"demo": ""
			},
			{
				"icon": "🌿",
				"title": "Git Implementation (Core)",
				"status": "Upcoming",
				"desc": "Building a simplified Git clone in C to understand content-addressable storage, blob and tree objects, and commit history. Covers file I/O, hashing, and version control internals from scratch.",
				"tags": ["C", "File I/O", "Hashing"],
				"github": "https://github.com/shiva-kar/git-implementation",
				"demo": ""
			}
		],
		"certifications": [
			{ "name": "CS50x: Introduction to Computer Science", "issuer": "HarvardX" },
			{ "name": "CS50p: Programming with Python", "issuer": "HarvardX" },
			{ "name": "CS50 SQL: Databases with SQL", "issuer": "HarvardX" }
		],
		"languages": ["English (Professional)", "Hindi (Full Professional)", "Bengali (Native)"],
		"interests": [
			"Backend engineering and distributed systems architecture",
			"Systems programming, memory management, and OS internals",
			"Algorithms, debugging, and low-level performance optimization",
			"Cloud and platform infrastructure engineering"
		]
};

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
  const textDiv = document.getElementById('about-text');
  const p = document.createElement('p');
  p.textContent = data.bio;
  textDiv.appendChild(p);

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

function buildEducation(education) {
  const list = document.getElementById('edu-list');
  education.forEach(e => {
    const note = Array.isArray(e.note) ? e.note.join(' · ') : (e.note || '');
    const div = document.createElement('div');
    div.className = 'edu-card';
    div.innerHTML = `
      <div class="edu-left">
        <h3 class="edu-degree">${e.degree}</h3>
        <p class="edu-school">${e.school}</p>
        ${note ? `<p class="edu-grade">${note}</p>` : ''}
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
    { icon: 'fa-solid fa-envelope',   label: contact.email,                  href: `mailto:${contact.email}` },
    { icon: 'fa-brands fa-github',    label: 'github.com/shiva-kar',         href: contact.github },
    { icon: 'fa-brands fa-linkedin',  label: 'linkedin.com/in/shiva-kar',    href: contact.linkedin },
    { icon: 'fa-brands fa-x-twitter', label: 'x.com/sk_shivakar',            href: contact.twitter },
    { icon: 'fa-brands fa-instagram', label: 'instagram.com/sk_shivakar',    href: contact.instagram },
    { icon: 'fa-brands fa-facebook',  label: 'facebook.com/SHIVAxKAR',       href: contact.facebook },
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
    '.skill-category, .project-card, .stat-card, .contact-link-item, .edu-card, .cert-card'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== INIT =====
function init(data) {
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
}

// Try fetch first (works on GitHub Pages / local server),
// fall back to embedded DATA (works on file://)
fetch('data.json')
  .then(res => { if (!res.ok) throw new Error('fetch failed'); return res.json(); })
  .then(data => init(data))
  .catch(() => init(DATA));
