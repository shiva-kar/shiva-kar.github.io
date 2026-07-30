const DATA = {
  "name": "Shiva Kar",
  "tagline": "BCA Student",
  "location": "Hojai, Assam, India",
  "bio": "Second-year BCA student at Amity University Online (expected Jan 2028). I am building a foundation in software engineering with a focus on backend systems. Currently learning C for low-level fundamentals and Java/Spring Boot for backend development. As a hobby, I make games in Godot and Unity using GDScript and C#.",
  "contact": {
    "email": "sksmarttech48+protfolio@gmail.com",
    "github": "https://github.com/shiva-kar",
    "linkedin": "https://www.linkedin.com/in/shiva-kar/"
  },
  "nav": [
    { "label": "About", "href": "#about" },
    { "label": "Focus", "href": "#focus" },
    { "label": "Skills", "href": "#skills" },
    { "label": "Projects", "href": "#projects" },
    { "label": "Education", "href": "#education" }
  ],
  "focus": [
    "Java & Spring Boot",
    "Data Structures & Algorithms (Java)",
    "Systems Programming in C",
    "Linux & Git",
    "SQL & PostgreSQL"
  ],
  "skills": [
    {
      "name": "C",
      "evidence": ["Unix Shell", "HTTP Server"]
    },
    {
      "name": "Java",
      "evidence": ["Student Management API"]
    },
    {
      "name": "SQL",
      "evidence": ["PostgreSQL Integration"]
    },
    {
      "name": "Linux",
      "evidence": ["Shell Programming", "Process Management"]
    }
  ],
  "education": [
    {
      "degree": "BCA",
      "school": "Amity University Online",
      "date": "Expected 2028",
      "coursework": [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks",
        "Object-Oriented Programming",
        "Software Engineering"
      ]
    }
  ],
  "projects": [
    {
      "title": "Unix Shell",
      "status": "In Progress",
      "desc": "Building a POSIX-style shell to understand process creation, command parsing, file descriptors, pipes, and Unix system calls.",
      "tags": ["C", "Linux API"],
      "github": "https://github.com/shiva-kar/unix-like-shell"
    },
    {
      "title": "Custom HTTP Server",
      "status": "In Progress",
      "desc": "Building an HTTP/1.1 server from scratch using TCP sockets to understand networking, request parsing, and concurrent connection handling.",
      "tags": ["C", "Sockets", "Networking"],
      "github": "https://github.com/shiva-kar/Custom-HTTP-Server-in-C"
    },
    {
      "title": "Git Implementation",
      "status": "In Progress",
      "desc": "A simplified Git clone in C to understand content-addressable storage, blob and tree objects.",
      "tags": ["C", "File I/O"],
      "github": "https://github.com/shiva-kar/git-implementation"
    },
    {
      "title": "RESTful Student Management API",
      "status": "Planned",
      "desc": "A Spring Boot backend exposing CRUD operations, JWT-based authentication, and PostgreSQL persistence. Designed to demonstrate REST API design, database integration, and backend architecture.",
      "tags": ["Java", "Spring Boot", "PostgreSQL"],
      "github": ""
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
  // Since focus is now a simple array, we render it as a single list
  const div = document.createElement('div');
  div.className = 'focus-column';
  div.innerHTML = `
    <ul class="focus-list">
      ${focus.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
  grid.appendChild(div);
}

function buildSkills(skills) {
  const grid = document.getElementById('skills-grid');
  skills.forEach(s => {
    const div = document.createElement('div');
    div.className = 'skill-tree-category';
    
    // Create the tree structure text
    const evidenceHtml = s.evidence.map(ev => {
      return `<div class="tree-item"><span class="tree-branch">├──</span> ${ev}</div>`;
    }).join('');

    div.innerHTML = `
      <div class="tree-root">${s.name}</div>
      ${evidenceHtml}
    `;
    grid.appendChild(div);
  });
}

function buildEducation(education) {
  const list = document.getElementById('edu-list');
  education.forEach(e => {
    const div = document.createElement('div');
    div.className = 'edu-card';
    
    let courseworkHtml = '';
    if (e.coursework && e.coursework.length > 0) {
      courseworkHtml = `
        <div class="edu-coursework">
          <strong>Relevant Coursework:</strong>
          <ul class="coursework-list">
            ${e.coursework.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    div.innerHTML = `
      <div class="edu-left">
        <h3 class="edu-degree">${e.degree}</h3>
        <p class="edu-school">${e.school}</p>
        ${courseworkHtml}
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
    
    // Conditionally render the GitHub button
    const githubBtn = p.github 
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link-btn" title="View Source on GitHub">
           <i class="fa-brands fa-github"></i> GitHub
         </a>`
      : '';
      
    // Handle the title link based on whether there's a github link
    const titleHtml = p.github 
      ? `<a href="${p.github}" target="_blank" rel="noopener">${p.title}</a>`
      : p.title;

    div.innerHTML = `
      <div class="project-header">
        <h3 class="project-name">${titleHtml}</h3>
        <span class="project-status">${p.status}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-footer">
        <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        ${githubBtn}
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
  const items = [];
  if (contact.email) items.push({ icon: 'fa-solid fa-envelope', label: contact.email, href: `mailto:${contact.email}` });
  if (contact.github) items.push({ icon: 'fa-brands fa-github', label: contact.github.replace('https://', ''), href: contact.github });
  if (contact.linkedin) items.push({ icon: 'fa-brands fa-linkedin', label: contact.linkedin.replace('https://www.', '').replace(/\/$/, ''), href: contact.linkedin });
  
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
