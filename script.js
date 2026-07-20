const DATA = {
  "name": "Shiva Kar",
  "tagline": "BCA Student",
  "location": "Hojai, Assam, India",
  "bio": "BCA student currently learning C, Java, and backend development through personal projects. My current goal is to build a strong foundation in computer science and backend systems.",
  "contact": {
    "email": "sksmarttech48+protfolio@gmail.com",
    "github": "https://github.com/shiva-kar",
    "linkedin": "https://www.linkedin.com/in/shiva-kar/",
    "twitter": "https://x.com/sk_shivakar",
    "instagram": "https://instagram.com/sk_shivakar",
    "facebook": "https://facebook.com/SHIVAxKAR"
  },
  "nav": [
    { "label": "About", "href": "#about" },
    { "label": "Focus", "href": "#focus" },
    { "label": "Skills", "href": "#skills" },
    { "label": "Projects", "href": "#projects" },
    { "label": "Education", "href": "#education" }
  ],
  "focus": {
    "learning": ["Java", "Spring Boot", "SQL", "DSA"],
    "building": ["Unix Shell (C)", "Backend API (Spring Boot)"],
    "next": ["Redis", "Docker", "Kafka"]
  },
  "skills": [
    {
      "category": "Languages",
      "tags": ["C", "Java", "Python"]
    },
    {
      "category": "Backend",
      "tags": ["Spring Boot (Learning)"]
    },
    {
      "category": "Database",
      "tags": ["SQL", "PostgreSQL"]
    },
    {
      "category": "Tools",
      "tags": ["Git", "Linux", "VS Code", "IntelliJ"]
    },
    {
      "category": "Learning",
      "tags": ["Docker", "Redis"]
    },
    {
      "category": "Concepts",
      "tags": ["OOP", "DSA", "Operating Systems", "Computer Networks"]
    }
  ],
  "education": [
    {
      "degree": "BCA",
      "school": "Amity University Online",
      "date": "Expected 2028"
    }
  ],
  "projects": [
    {
      "title": "Unix Shell",
      "status": "In Progress",
      "desc": "A small Unix shell written in C supporting process creation, piping, redirection and basic built-in commands.",
      "tags": ["C", "Linux API"],
      "github": "https://github.com/shiva-kar/unix-like-shell"
    },
    {
      "title": "Custom HTTP Server",
      "status": "In Progress",
      "desc": "A basic web server using raw POSIX sockets to serve static files.",
      "tags": ["C", "Sockets", "Networking"],
      "github": "https://github.com/shiva-kar/Custom-HTTP-Server-in-C"
    },
    {
      "title": "Git Implementation",
      "status": "In Progress",
      "desc": "A simplified Git clone in C to understand content-addressable storage, blob and tree objects.",
      "tags": ["C", "File I/O"],
      "github": "https://github.com/shiva-kar/git-implementation"
    }
  ],
  "certifications": [
    { "name": "CS50x: Introduction to Computer Science", "issuer": "HarvardX" },
    { "name": "CS50p: Programming with Python", "issuer": "HarvardX" },
    { "name": "CS50 SQL: Databases with SQL", "issuer": "HarvardX" }
  ]
};

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn.querySelector('i');
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      icon.className = 'fa-solid fa-sun';
    } else {
      document.documentElement.removeAttribute('data-theme');
      icon.className = 'fa-solid fa-moon';
    }
    localStorage.setItem('theme', theme);
  }

  // Initial apply
  applyTheme(currentTheme);

  // Toggle on click
  toggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });
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
  const textDiv = document.getElementById('about-text');
  const p = document.createElement('p');
  p.textContent = data.bio;
  textDiv.appendChild(p);
}

function buildFocus(focus) {
  const grid = document.getElementById('focus-grid');
  
  const sections = [
    { title: "Learning", items: focus.learning },
    { title: "Currently Building", items: focus.building },
    { title: "Next", items: focus.next }
  ];

  sections.forEach(sec => {
    const div = document.createElement('div');
    div.className = 'focus-column';
    div.innerHTML = `
      <h3 class="focus-title">${sec.title}</h3>
      <ul class="focus-list">
        ${sec.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    grid.appendChild(div);
  });
}

function buildSkills(skills) {
  const grid = document.getElementById('skills-grid');
  skills.forEach(s => {
    const div = document.createElement('div');
    div.className = 'skill-category';
    div.innerHTML = `
      <div class="skill-cat-name">${s.category}</div>
      <div class="skill-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(div);
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
      </div>
      <span class="edu-date">${e.date}</span>
    `;
    list.appendChild(div);
  });
}

function buildProjects(projects) {
  const grid = document.getElementById('projects-grid');
  projects.forEach(p => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `
      <div class="project-header">
        <h3 class="project-name">${p.title}</h3>
        <span class="project-status">${p.status}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-footer">
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a href="${p.github}" target="_blank" rel="noopener" class="project-link-btn" title="View Source on GitHub">
          <i class="fa-brands fa-github"></i> GitHub
        </a>
      </div>
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
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
    `;
    list.appendChild(div);
  });
}

function buildContact(contact) {
  const list = document.getElementById('contact-links');
  const items = [
    { icon: 'fa-solid fa-envelope',   label: contact.email,                  href: `mailto:${contact.email}` },
    { icon: 'fa-brands fa-github',    label: 'github.com/shiva-kar',         href: contact.github },
    { icon: 'fa-brands fa-linkedin',  label: 'linkedin.com/in/shiva-kar',    href: contact.linkedin }
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

function init(data) {
  initTheme();
  buildNav(data.nav);
  buildHero(data);
  buildAbout(data);
  buildFocus(data.focus);
  buildSkills(data.skills);
  buildEducation(data.education);
  buildProjects(data.projects);
  buildCertifications(data.certifications);
  buildContact(data.contact);
  initScrollSpy();
}

fetch('data.json')
  .then(res => { if (!res.ok) throw new Error('fetch failed'); return res.json(); })
  .then(data => init(data))
  .catch(() => init(DATA));
