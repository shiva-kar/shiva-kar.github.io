const STORAGE_KEY = "sk_site_data_v2";
const THEME_KEY = "sk_site_theme";

const DEFAULT_DATA = {
  "meta": {
    "brand": "SK",
    "name": "Shiva Kar",
    "eyebrow": "BCA student · Assam, India",
    "location": "Hojai, Assam, India",
    "accentColor": "#39745a",
    "resumeUrl": "Shiva_Kar_Resume.pdf"
  },
  "contact": {
    "email": "sksmarttech48+protfolio@gmail.com",
    "github": "https://github.com/shiva-kar",
    "linkedin": "https://linkedin.com/in/shiva-kar",
    "twitter": "https://x.com/sk_shivakar",
    "portfolio": "https://shivakar.me"
  },
  "home": {
    "headlinePrefix": "Hey, I’m Shiva.",
    "headlineAccent": "Curious about how things work.",
    "intro": "I study computer applications and spend a lot of my free time building things with code. Lately, that means Java backend development, C, and learning what happens under the hood.",
    "primaryCta": {
      "label": "See what I’m building",
      "href": "projects.html"
    },
    "secondaryCta": {
      "label": "Find me on GitHub",
      "href": "https://github.com/shiva-kar"
    },
    "note": "My favourite kind of learning is building something, hitting a bug, and figuring out why.",
    "cardsKicker": "A FEW THINGS I LIKE",
    "cardsTitle": "Curiosity, in a few directions",
    "cards": [
      {
        "number": "01 / BUILD",
        "title": "Backend things",
        "text": "Java, APIs, databases, and learning to build software that behaves well beyond the happy path.",
        "linkText": "More on this ↗",
        "href": "interests.html#backend"
      },
      {
        "number": "02 / UNPACK",
        "title": "Under the hood",
        "text": "C, processes, memory, file descriptors, and the details that make computers work.",
        "linkText": "More on this ↗",
        "href": "interests.html#systems"
      },
      {
        "number": "03 / PLAY",
        "title": "Game development",
        "text": "Making small game ideas in Godot and Unity, and experimenting with how they feel to play.",
        "linkText": "More on this ↗",
        "href": "interests.html#gamedev"
      }
    ]
  },
  "facts": [
    "I built a Unix-like shell (SXSHELL) in C to understand more about the terminal I use every day.",
    "I enjoy game development and experimenting with gameplay ideas in Godot and Unity.",
    "I’m fascinated by the connection between high-level backend engineering and low-level systems programming.",
    "A good debugging session with GDB or Valgrind teaches me more than a dozen pages of notes.",
    "I like projects that make me ask what the operating system is doing behind the scenes.",
    "I’m currently building a custom HTTP/1.1 server using raw TCP sockets in C.",
    "Switching between Java Spring Boot, C systems code, and game engines gives me fresh perspectives on software design."
  ],
  "interests": {
    "eyebrow": "WHAT KEEPS ME CURIOUS",
    "title": "Things I like learning about",
    "intro": "I like understanding how a thing works, not just learning how to use it. These are the areas I keep coming back to.",
    "items": [
      {
        "id": "backend",
        "number": "01",
        "kicker": "BUILDING APPLICATIONS",
        "title": "Java backend development",
        "description": "I’m learning how backend applications are structured, how APIs communicate, and how data moves reliably between an application and a database. My current direction is Core Java, SQL, and Spring Boot.",
        "Highlight": "Focusing on clean REST API design, relational data modeling, authentication, and writing maintainable server-side logic.",
        "skills": ["Java", "REST APIs", "SQL", "Spring Boot", "PostgreSQL", "Docker"]
      },
      {
        "id": "systems",
        "number": "02",
        "kicker": "UNDER THE HOOD",
        "title": "Systems programming",
        "description": "Writing a shell in C made operating-system concepts feel much more concrete. I enjoy exploring process creation, file descriptors, pipes, memory management, system calls, and what actually happens when a command runs.",
        "Highlight": "Building tools from scratch—like a POSIX shell, an HTTP server, and a mark-and-sweep garbage collector—to demystify OS internals.",
        "skills": ["C", "POSIX", "Linux", "Networking", "Memory Management", "CMake", "Git"]
      },
      {
        "id": "gamedev",
        "number": "03",
        "kicker": "EXPERIMENTING AND PLAYING",
        "title": "Game development",
        "description": "I also enjoy building games and exploring how code, visuals, sound, and player feedback come together. I’ve worked with Godot for 2D projects and Unity for 3D experiments.",
        "Highlight": "Game loops, state machines, physics tuning, and rapid prototyping for pure creative fun.",
        "skills": ["Godot", "Unity", "Blender", "Game Loops", "2D / 3D"]
      }
    ],
    "skillEvidence": [
      {
        "name": "C & Systems Internals",
        "evidence": ["SXSHELL (Unix Shell)", "Custom HTTP Server", "Mark-and-Sweep Garbage Collector", "Git Clone in C"]
      },
      {
        "name": "Java & Spring Boot",
        "evidence": ["Object-Oriented Design", "E-commerce Backend", "Expense Tracker REST API", "URL Shortener"]
      },
      {
        "name": "SQL & Databases",
        "evidence": ["HarvardX CS50 SQL", "PostgreSQL Schema Design", "Query Optimization"]
      },
      {
        "name": "Linux & Developer Tooling",
        "evidence": ["POSIX APIs & Signals", "CMake & Make", "Git Internals", "Docker Containers"]
      }
    ]
  },
  "projects": {
    "eyebrow": "LEARNING BY BUILDING",
    "title": "Projects and experiments",
    "intro": "I learn best by making things, testing them, and figuring out the parts I don’t understand yet. Here are the projects and experiments from that process.",
    "items": [
      {
        "index": "PROJECT 01",
        "title": "SXSHELL",
        "badge": "C · POSIX · CMake",
        "category": "systems",
        "status": "Built",
        "featured": true,
        "description": "A Unix-like shell written from scratch in C. It supports built-in commands, PATH-based command lookup, quoting and escaping, I/O redirection, multi-command pipelines, persistent history, and shell variable expansion.",
        "learning": "Built to understand process management, file descriptors, and the system calls behind terminal commands.",
        "underTheHood": [
          "Uses fork(), execvp(), waitpid(), pipe(), and dup2() for process execution and multi-stage pipelines",
          "Custom tokenizer handling single/double quotes, backslash escaping, and environment variable expansion",
          "Persistent command history and signal handling (SIGINT) so Ctrl+C interrupts child processes without killing the shell"
        ],
        "repoUrl": "https://github.com/shiva-kar/SXSHELL-unix-like-shell",
        "buttonStyle": "dark"
      },
      {
        "index": "PROJECT 02",
        "title": "Custom HTTP Server",
        "badge": "C · Raw sockets · HTTP",
        "category": "systems",
        "status": "In Progress",
        "featured": true,
        "description": "A lightweight HTTP/1.1 server in C, currently in progress, focused on using raw TCP sockets and learning how requests are received, parsed, and answered.",
        "learning": "The goal is to learn more about networking fundamentals by implementing the request-response flow directly.",
        "underTheHood": [
          "POSIX socket lifecycle: socket(), bind(), listen(), accept(), recv(), and send()",
          "Zero-dependency HTTP request line, header parser, and status-code response builder",
          "Static file serving with MIME type detection and concurrent client connection handling"
        ],
        "repoUrl": "https://github.com/shiva-kar/Custom-HTTP-Server-in-C",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 03",
        "title": "Custom Garbage Collector",
        "badge": "C · Memory · Mark & Sweep",
        "category": "systems",
        "status": "In Progress",
        "featured": true,
        "description": "A custom garbage collector in C built to understand manual memory management, heap allocation internals, and automatic object reachability tracking.",
        "learning": "Explores mark-and-sweep collection, root pointer tracing, and allocation metadata at the pointer level.",
        "underTheHood": [
          "Tracks dynamically allocated objects via an intrusive metadata header and allocation list",
          "Mark phase traverses reachable object graphs from registered stack/root pointers",
          "Sweep phase reclaims unmarked heap blocks and prevents memory leaks"
        ],
        "repoUrl": "https://github.com/shiva-kar/garbage-collector",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 04",
        "title": "Git Implementation in C",
        "badge": "C · Hashing · File I/O",
        "category": "systems",
        "status": "In Progress",
        "featured": true,
        "description": "A simplified Git clone written in C to understand content-addressable storage, blob and tree objects, and commit history DAGs.",
        "learning": "Covers binary file I/O, cryptographic hashing, compression, and version control internals from scratch.",
        "underTheHood": [
          "Implements object hashing and content-addressable storage inside .git/objects",
          "Reads and writes blob, tree, and commit objects with header framing",
          "Demystifies how Git snapshots file trees rather than storing simple line diffs"
        ],
        "repoUrl": "https://github.com/shiva-kar/git-implementation",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 05",
        "title": "E-commerce Backend API",
        "badge": "Java · Spring Boot · PostgreSQL",
        "category": "backend",
        "status": "Planned",
        "featured": false,
        "description": "A complete e-commerce REST backend built with Spring Boot, featuring product catalog management, order workflows, JWT authentication, and pagination.",
        "learning": "Focused on enterprise backend architecture, relational database modeling, and clean service-layer separation.",
        "underTheHood": [
          "Layered Spring Boot architecture (Controller → Service → Repository) with Spring Data JPA",
          "Stateless JWT authentication, role-based access control, and request validation",
          "PostgreSQL schema with indexed queries and paginated product endpoints"
        ],
        "repoUrl": "",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 06",
        "title": "Expense Tracker API",
        "badge": "Java · Spring Security · Docker",
        "category": "backend",
        "status": "Planned",
        "featured": false,
        "description": "A secure REST API for personal expense tracking, demonstrating robust CRUD operations, category analytics, Spring Security integration, and Docker containerization.",
        "learning": "Built to practice API security beyond the happy path, error handling, and containerized deployment.",
        "underTheHood": [
          "Spring Security filter chain with BCrypt password hashing and user-scoped data isolation",
          "Normalized SQL schema for transactions, recurring budgets, and monthly aggregations",
          "Docker Compose setup bundling the Spring Boot service and PostgreSQL database"
        ],
        "repoUrl": "",
        "buttonStyle": "outline"
      }
    ]
  },
  "about": {
    "eyebrow": "A LITTLE CONTEXT",
    "title": "Learning by making things",
    "intro": "I’m Shiva, a Bachelor of Computer Applications student at Amity University Online. This page is a small introduction, along with my academic background and current focus.",
    "approachKicker": "HOW I LIKE TO LEARN",
    "approachTitle": "Build first. Understand deeply.",
    "approachParagraphs": [
      "I enjoy projects that force me to look beyond the surface. Building SXSHELL made me think carefully about parsing input, launching processes, handling file descriptors, and dealing with errors.",
      "My current professional direction is Java backend development. Alongside it, systems programming helps me strengthen my understanding of what software depends on underneath.",
      "I also make games as a creative outlet. Switching between backend code, low-level systems work, and game development gives me different ways to solve problems."
    ],
    "currentlyKicker": "RIGHT NOW",
    "currentlyTitle": "What I’m spending time on",
    "currentlyItems": [
      {
        "label": "Java backend",
        "text": "strengthening Java, SQL, and Spring Boot fundamentals."
      },
      {
        "label": "Systems programming",
        "text": "building with C and exploring POSIX interfaces, memory, and networking."
      },
      {
        "label": "Data structures & algorithms",
        "text": "practicing problem-solving and algorithmic thinking in C++ and Java."
      },
      {
        "label": "Learning in public",
        "text": "keeping projects, experiments, and source code available on GitHub."
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Computer Applications (BCA) — Software Engineering",
        "school": "Amity University Online",
        "date": "2025 – 2028 (Expected)",
        "detail": "SGPA: 8.36 (Sem I)",
        "coursework": [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Database Management Systems",
          "Computer Networks",
          "Object-Oriented Programming",
          "Software Engineering"
        ]
      },
      {
        "degree": "Higher Secondary (Class XII) — Science (PCM & CS)",
        "school": "Deshabandhu Bidyapeeth HS School (SEBA/AHSEC, Assam)",
        "date": "Completed 2025",
        "detail": "Physics, Chemistry, Mathematics & Computer Science",
        "coursework": []
      },
      {
        "degree": "Secondary (Class X)",
        "school": "Rabindra Bidyalaya High School, Hojai",
        "date": "Completed 2022",
        "detail": "Board of Secondary Education, Assam",
        "coursework": []
      }
    ],
    "certifications": [
      {
        "name": "CS50x: Introduction to Computer Science",
        "issuer": "HarvardX"
      },
      {
        "name": "CS50 SQL: Databases with SQL",
        "issuer": "HarvardX"
      },
      {
        "name": "Learn C — Skill Path",
        "issuer": "Codecademy"
      },
      {
        "name": "Programming in C and C++",
        "issuer": "Internshala"
      }
    ]
  }
};

const SKILL_NOTES = {
  "Java": "Core language for my backend path — OOP design, collections, streams, and server-side services.",
  "REST APIs": "Designing predictable endpoints, status codes, pagination, and request validation.",
  "SQL": "Relational schema modeling, joins, indexing, and queries (certified via HarvardX CS50 SQL).",
  "Spring Boot": "Building layered enterprise backends with dependency injection, JPA, and Spring Security.",
  "PostgreSQL": "Primary relational database for my Spring Boot backend projects.",
  "Docker": "Containerizing backend services and databases for consistent development environments.",
  "C": "Used to build SXSHELL, a custom HTTP server, a mark-and-sweep garbage collector, and a Git clone.",
  "POSIX": "Direct experience with fork(), execvp(), pipe(), dup2(), waitpid(), signals, and raw sockets.",
  "Linux": "Daily environment for systems programming, shell scripting, and process debugging.",
  "Networking": "Implementing TCP socket servers and HTTP/1.1 request/response parsing from scratch.",
  "Memory Management": "Manual heap management, pointer arithmetic, and building a custom mark-and-sweep GC in C.",
  "CMake": "Structuring multi-file C builds cleanly across platforms.",
  "Git": "Version control for all public projects + building a Git clone in C to understand .git/objects.",
  "Godot": "Building 2D games, node-based scenes, and responsive player mechanics.",
  "Unity": "Experimenting with 3D gameplay systems and C# scripting.",
  "Blender": "Creating low-poly 3D assets and props for game experiments."
};

let siteData = structuredClone(DEFAULT_DATA);
let currentFactIndex = 0;
let activeProjectFilter = "all";
let activeStudioTab = "general";

/* ===== Helper: Deep Get & Set by Dot Path ===== */
function getByPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function setByPath(obj, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((acc, part) => {
    if (acc[part] === undefined) acc[part] = {};
    return acc[part];
  }, obj);
  target[last] = value;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ===== Toast Notification ===== */
let toastTimeout = null;
function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ===== Theme & Accent Management ===== */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const currentTheme = savedTheme || "light";
  applyTheme(currentTheme);

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      showToast(next === "dark" ? "Dark theme enabled" : "Warm light theme enabled");
    });
  }
}

function applyTheme(theme) {
  const icon = document.getElementById("theme-icon");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (icon) icon.textContent = "☀";
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (icon) icon.textContent = "☾";
  }
  localStorage.setItem(THEME_KEY, theme);
}

function applyAccentColor(color) {
  if (!color) return;
  document.documentElement.style.setProperty("--accent", color);
  document.documentElement.style.setProperty(
    "--accent-light",
    `color-mix(in srgb, ${color} 14%, var(--surface))`
  );
}

/* ===== Save & Reset State ===== */
function saveSiteData(notify = false) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    if (notify) showToast("Saved changes to browser!");
  } catch (e) {
    console.error("Failed to save site data", e);
  }
}

/* ===== Page Renderers ===== */
function renderCommon() {
  applyAccentColor(siteData.meta?.accentColor);
  const brandEl = document.getElementById("brand-text");
  if (brandEl && siteData.meta?.brand) {
    brandEl.textContent = siteData.meta.brand;
  }
}

function renderHomePage() {
  const eyebrow = document.getElementById("hero-eyebrow");
  const prefix = document.getElementById("hero-headline-prefix");
  const accent = document.getElementById("hero-headline-accent");
  const intro = document.getElementById("hero-intro");
  const note = document.getElementById("hero-note");
  const kicker = document.getElementById("home-cards-kicker");
  const cardsTitle = document.getElementById("interests-title");
  const grid = document.getElementById("home-cards-grid");

  if (eyebrow) eyebrow.textContent = siteData.meta.eyebrow;
  if (prefix) prefix.textContent = siteData.home.headlinePrefix;
  if (accent) accent.textContent = siteData.home.headlineAccent;
  if (intro) intro.textContent = siteData.home.intro;
  if (note) note.textContent = siteData.home.note;
  if (kicker) kicker.textContent = siteData.home.cardsKicker;
  if (cardsTitle) cardsTitle.textContent = siteData.home.cardsTitle;

  if (grid && Array.isArray(siteData.home.cards)) {
    grid.innerHTML = siteData.home.cards
      .map(
        (c, idx) => `
        <div class="col-md-4">
          <article class="card interest-card h-100">
            <div class="card-body">
              <span class="card-number" data-editable="home.cards.${idx}.number">${escapeHtml(c.number)}</span>
              <h3 class="card-title" data-editable="home.cards.${idx}.title">${escapeHtml(c.title)}</h3>
              <p class="card-text" data-editable="home.cards.${idx}.text">${escapeHtml(c.text)}</p>
              <a href="${escapeHtml(c.href)}" class="card-link">${escapeHtml(c.linkText || "More on this ↗")}</a>
            </div>
          </article>
        </div>`
      )
      .join("");
  }

  initFunFactWidget();
}

function initFunFactWidget() {
  const factText = document.getElementById("fact-text");
  const factButton = document.getElementById("fact-button");
  const factCounter = document.getElementById("fact-counter");

  if (!factText || !factButton) return;

  const updateFactView = (animate = false) => {
    const facts = siteData.facts?.length ? siteData.facts : DEFAULT_DATA.facts;
    if (currentFactIndex >= facts.length) currentFactIndex = 0;

    if (factCounter) {
      const currentNum = String(currentFactIndex + 1).padStart(2, "0");
      const totalNum = String(facts.length).padStart(2, "0");
      factCounter.textContent = `${currentNum} / ${totalNum}`;
    }

    if (!animate) {
      factText.textContent = facts[currentFactIndex];
      return;
    }

    factText.classList.add("fact-switching");
    setTimeout(() => {
      factText.textContent = facts[currentFactIndex];
      factText.classList.remove("fact-switching");
    }, 150);
  };

  updateFactView(false);

  if (!factButton.dataset.bound) {
    factButton.dataset.bound = "true";
    factButton.addEventListener("click", () => {
      const facts = siteData.facts?.length ? siteData.facts : DEFAULT_DATA.facts;
      currentFactIndex = (currentFactIndex + 1) % facts.length;
      updateFactView(true);
    });
  }
}

function renderInterestsPage() {
  const eyebrow = document.getElementById("interests-eyebrow");
  const title = document.getElementById("interests-title");
  const intro = document.getElementById("interests-intro");
  const listContainer = document.getElementById("interests-list-container");
  const evidenceGrid = document.getElementById("evidence-grid");

  if (eyebrow) eyebrow.textContent = siteData.interests.eyebrow;
  if (title) title.textContent = siteData.interests.title;
  if (intro) intro.textContent = siteData.interests.intro;

  if (listContainer && Array.isArray(siteData.interests.items)) {
    listContainer.innerHTML = siteData.interests.items
      .map(
        (item, idx) => `
        <section class="section-block interest-detail" id="${escapeHtml(item.id)}" aria-labelledby="${escapeHtml(item.id)}-title">
          <span class="detail-number">${escapeHtml(item.number)}</span>
          <div>
            <p class="section-kicker" data-editable="interests.items.${idx}.kicker">${escapeHtml(item.kicker)}</p>
            <h2 id="${escapeHtml(item.id)}-title" data-editable="interests.items.${idx}.title">${escapeHtml(item.title)}</h2>
            <p data-editable="interests.items.${idx}.description">${escapeHtml(item.description)}</p>
            ${
              item.Highlight
                ? `<p class="interest-highlight" data-editable="interests.items.${idx}.Highlight">${escapeHtml(item.Highlight)}</p>`
                : ""
            }
            <div class="skill-list" aria-label="Related topics">
              ${(item.skills || [])
                .map(
                  (skill) =>
                    `<span class="badge rounded-pill text-bg-light interactive-badge" data-skill="${escapeHtml(skill)}" title="Click to see how I use ${escapeHtml(skill)}">${escapeHtml(skill)}</span>`
                )
                .join("")}
            </div>
          </div>
        </section>`
      )
      .join("");

    listContainer.querySelectorAll(".interactive-badge").forEach((badge) => {
      badge.addEventListener("click", () => {
        const skill = badge.getAttribute("data-skill");
        listContainer.querySelectorAll(".interactive-badge").forEach((b) => b.classList.remove("active"));
        badge.classList.add("active");
        const note = SKILL_NOTES[skill] || `${skill} — part of my ongoing hands-on learning and project stack.`;
        showToast(`${skill}: ${note}`);
      });
    });
  }

  if (evidenceGrid && Array.isArray(siteData.interests.skillEvidence)) {
    evidenceGrid.innerHTML = siteData.interests.skillEvidence
      .map(
        (cat) => `
        <div class="evidence-card">
          <div class="evidence-root">${escapeHtml(cat.name)}</div>
          ${(cat.evidence || [])
            .map((ev, i, arr) => {
              const branch = i === arr.length - 1 ? "└──" : "├──";
              return `<div class="evidence-item"><span class="evidence-branch">${branch}</span> ${escapeHtml(ev)}</div>`;
            })
            .join("")}
        </div>`
      )
      .join("");
  }
}

function renderProjectsPage() {
  const eyebrow = document.getElementById("projects-eyebrow");
  const title = document.getElementById("projects-title");
  const intro = document.getElementById("projects-intro");
  const grid = document.getElementById("projects-grid-container");
  const countLabel = document.getElementById("project-count-label");

  if (eyebrow) eyebrow.textContent = siteData.projects.eyebrow;
  if (title) title.textContent = siteData.projects.title;
  if (intro) intro.textContent = siteData.projects.intro;

  if (!grid) return;

  const allItems = siteData.projects.items || [];
  const filtered = allItems
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) => {
      if (activeProjectFilter === "all") return true;
      if (activeProjectFilter === "systems") return item.category === "systems";
      if (activeProjectFilter === "backend") return item.category === "backend";
      if (activeProjectFilter === "active") return item.status !== "Planned";
      return true;
    });

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${allItems.length} project${allItems.length === 1 ? "" : "s"}`;
  }

  grid.innerHTML = filtered
    .map(({ item, originalIndex }) => {
      const isPlanned = item.status === "Planned";
      const btnClass = item.buttonStyle === "dark" ? "btn-dark" : "btn-outline-dark";
      const hoodList = Array.isArray(item.underTheHood) && item.underTheHood.length > 0
        ? `
          <button type="button" class="hood-toggle" aria-expanded="false"><span>+ Under the hood</span></button>
          <div class="hood-panel">
            <ul>
              ${item.underTheHood.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}
            </ul>
          </div>`
        : "";

      const repoBtn = item.repoUrl
        ? `<a class="btn ${btnClass}" href="${escapeHtml(item.repoUrl)}" target="_blank" rel="noopener noreferrer">View repository ↗</a>`
        : `<span class="btn btn-outline-dark disabled" aria-disabled="true">Repository coming soon</span>`;

      return `
        <div class="col-lg-6 project-col">
          <article class="card project-card h-100">
            <div class="card-body d-flex flex-column">
              <div class="project-card-top">
                <span class="badge rounded-pill text-bg-light" data-editable="projects.items.${originalIndex}.badge">${escapeHtml(item.badge)}</span>
                <div class="project-meta-right">
                  <span class="status-pill ${isPlanned ? "status-planned" : ""}" data-editable="projects.items.${originalIndex}.status">${escapeHtml(item.status)}</span>
                  <span class="project-index" data-editable="projects.items.${originalIndex}.index">${escapeHtml(item.index)}</span>
                </div>
              </div>
              <h2 class="card-title" data-editable="projects.items.${originalIndex}.title">${escapeHtml(item.title)}</h2>
              <p class="card-text" data-editable="projects.items.${originalIndex}.description">${escapeHtml(item.description)}</p>
              <p class="project-learning" data-editable="projects.items.${originalIndex}.learning">${escapeHtml(item.learning)}</p>
              ${hoodList}
              <div class="project-actions">
                ${repoBtn}
              </div>
            </div>
          </article>
        </div>`;
    })
    .join("");

  // Bind Under-the-hood toggles
  grid.querySelectorAll(".hood-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if (!panel) return;
      const isOpen = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.querySelector("span").textContent = isOpen ? "− Hide internals" : "+ Under the hood";
    });
  });

  // Bind filter pills once
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    if (pill.dataset.bound) return;
    pill.dataset.bound = "true";
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeProjectFilter = pill.getAttribute("data-filter") || "all";
      renderProjectsPage();
      if (document.body.classList.contains("inline-edit-active")) {
        enableInlineEditing(true);
      }
    });
  });
}

function renderAboutPage() {
  const eyebrow = document.getElementById("about-eyebrow");
  const title = document.getElementById("about-title");
  const intro = document.getElementById("about-intro");
  const paragraphs = document.getElementById("about-paragraphs");
  const currentlyList = document.getElementById("about-currently-list");
  const eduList = document.getElementById("about-edu-list");
  const certList = document.getElementById("about-cert-list");

  if (eyebrow) eyebrow.textContent = siteData.about.eyebrow;
  if (title) title.textContent = siteData.about.title;
  if (intro) intro.textContent = siteData.about.intro;

  if (paragraphs && Array.isArray(siteData.about.approachParagraphs)) {
    paragraphs.innerHTML = siteData.about.approachParagraphs
      .map((p, idx) => `<p data-editable="about.approachParagraphs.${idx}">${escapeHtml(p)}</p>`)
      .join("");
  }

  if (currentlyList && Array.isArray(siteData.about.currentlyItems)) {
    currentlyList.innerHTML = siteData.about.currentlyItems
      .map(
        (item, idx) =>
          `<li class="list-group-item"><strong data-editable="about.currentlyItems.${idx}.label">${escapeHtml(item.label)}:</strong> <span data-editable="about.currentlyItems.${idx}.text">${escapeHtml(item.text)}</span></li>`
      )
      .join("");
  }

  if (eduList && Array.isArray(siteData.about.education)) {
    eduList.innerHTML = siteData.about.education
      .map(
        (edu, idx) => `
        <div class="edu-item">
          <div class="edu-top">
            <h3 class="edu-degree" data-editable="about.education.${idx}.degree">${escapeHtml(edu.degree)}</h3>
            <span class="edu-date" data-editable="about.education.${idx}.date">${escapeHtml(edu.date)}</span>
          </div>
          <p class="edu-school" data-editable="about.education.${idx}.school">${escapeHtml(edu.school)}${edu.detail ? ` · ${escapeHtml(edu.detail)}` : ""}</p>
          ${
            Array.isArray(edu.coursework) && edu.coursework.length
              ? `<div class="edu-coursework">${edu.coursework.map((c) => `<span>${escapeHtml(c)}</span>`).join("")}</div>`
              : ""
          }
        </div>`
      )
      .join("");
  }

  if (certList && Array.isArray(siteData.about.certifications)) {
    certList.innerHTML = siteData.about.certifications
      .map(
        (cert, idx) => `
        <div class="cert-box">
          <h3 data-editable="about.certifications.${idx}.name">${escapeHtml(cert.name)}</h3>
          <p data-editable="about.certifications.${idx}.issuer">${escapeHtml(cert.issuer)}</p>
        </div>`
      )
      .join("");
  }

  // Bind About Tabs
  document.querySelectorAll(".about-tab-btn").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      document.querySelectorAll(".about-tab-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      document.querySelectorAll(".about-tab-pane").forEach((pane) => pane.classList.remove("active"));
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add("active");
    });
  });

  // Bind Copy Email Button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn && !copyBtn.dataset.bound) {
    copyBtn.dataset.bound = "true";
    copyBtn.addEventListener("click", () => {
      const email = siteData.contact?.email || copyBtn.getAttribute("data-email");
      navigator.clipboard?.writeText(email);
      showToast(`Copied ${email} to clipboard!`);
    });
  }
}

function renderActivePage() {
  renderCommon();
  const page = document.body.getAttribute("data-page");
  if (page === "home") renderHomePage();
  else if (page === "interests") renderInterestsPage();
  else if (page === "projects") renderProjectsPage();
  else if (page === "about") renderAboutPage();

  if (document.body.classList.contains("inline-edit-active")) {
    enableInlineEditing(true);
  }
}

/* ===== Inline Click-to-Edit Mode ===== */
function enableInlineEditing(enabled) {
  document.body.classList.toggle("inline-edit-active", enabled);
  const editables = document.querySelectorAll("[data-editable]");
  editables.forEach((el) => {
    if (enabled) {
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "false");
      if (!el.dataset.inlineBound) {
        el.dataset.inlineBound = "true";
        el.addEventListener("blur", () => {
          const path = el.getAttribute("data-editable");
          if (path) {
            setByPath(siteData, path, el.textContent.trim());
            saveSiteData(false);
            renderStudioBody();
          }
        });
      }
    } else {
      el.removeAttribute("contenteditable");
    }
  });
}

/* ===== Interactive SXSHELL Terminal Modal ===== */
function injectTerminalModal() {
  if (document.getElementById("sxshell-modal")) return;

  const backdrop = document.createElement("div");
  backdrop.id = "sxshell-modal";
  backdrop.className = "terminal-backdrop";
  backdrop.innerHTML = `
    <div class="terminal-window" role="dialog" aria-modal="true" aria-label="SXSHELL Interactive Terminal">
      <div class="terminal-titlebar">
        <div class="terminal-dots">
          <span id="term-close-dot" title="Close"></span>
          <span></span>
          <span></span>
        </div>
        <span>sxshell — shiva@portfolio:~ (Ctrl+K)</span>
        <button type="button" id="term-close-btn" style="background:none;border:none;color:#93a195;font-size:0.78rem;cursor:pointer;">[esc]</button>
      </div>
      <div class="terminal-body" id="term-output">
        <div class="term-line">Welcome to <strong>SXSHELL v1.2 (web emulator)</strong> — inspired by my POSIX shell in C.</div>
        <div class="term-line">Click a command or type below:
          <span class="term-cmd-chip" data-cmd="help">help</span>
          <span class="term-cmd-chip" data-cmd="whoami">whoami</span>
          <span class="term-cmd-chip" data-cmd="projects">projects</span>
          <span class="term-cmd-chip" data-cmd="skills">skills</span>
          <span class="term-cmd-chip" data-cmd="fact">fact</span>
          <span class="term-cmd-chip" data-cmd="edit">edit</span>
          <span class="term-cmd-chip" data-cmd="theme">theme</span>
        </div>
      </div>
      <form class="terminal-input-row" id="term-form">
        <span class="term-prompt">shiva@sxshell:~$</span>
        <input type="text" class="terminal-input" id="term-input" placeholder="Type a command (e.g. help, ls, projects, cd about)..." autocomplete="off" />
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);

  const output = document.getElementById("term-output");
  const input = document.getElementById("term-input");
  const form = document.getElementById("term-form");

  const closeTerminal = () => backdrop.classList.remove("open");
  document.getElementById("term-close-btn").addEventListener("click", closeTerminal);
  document.getElementById("term-close-dot").addEventListener("click", closeTerminal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeTerminal();
  });

  function printLine(text, isCommand = false) {
    const div = document.createElement("div");
    div.className = "term-line";
    if (isCommand) {
      div.innerHTML = `<span class="term-prompt">shiva@sxshell:~$</span> ${escapeHtml(text)}`;
    } else {
      div.textContent = text;
    }
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  function runCommand(raw) {
    const cmdLine = raw.trim();
    if (!cmdLine) return;
    printLine(cmdLine, true);
    const [cmd, ...args] = cmdLine.toLowerCase().split(/\s+/);

    switch (cmd) {
      case "help":
        printLine(
          "Available commands:\n" +
            "  whoami          — Short bio & direction\n" +
            "  ls / pages      — List pages on this website\n" +
            "  cd <page>       — Navigate to home, interests, projects, or about\n" +
            "  projects        — List my software projects\n" +
            "  skills          — Print evidence-based skill tree\n" +
            "  fact            — Print a random fun fact\n" +
            "  contact         — Show email & GitHub/LinkedIn links\n" +
            "  theme           — Toggle light / dark theme\n" +
            "  edit            — Open the Interactive Site Studio\n" +
            "  clear           — Clear terminal output"
        );
        break;
      case "whoami":
        printLine(`${siteData.meta.name} (${siteData.meta.eyebrow})\n${siteData.home.intro}`);
        break;
      case "ls":
      case "pages":
        printLine("index.html (Home)   interests.html (Interests)   projects.html (Projects)   about.html (About)   Shiva_Kar_Resume.pdf");
        break;
      case "cd":
      case "open": {
        const target = (args[0] || "").replace(".html", "");
        const map = {
          home: "index.html",
          index: "index.html",
          "~": "index.html",
          interests: "interests.html",
          projects: "projects.html",
          about: "about.html",
          resume: "Shiva_Kar_Resume.pdf"
        };
        if (map[target]) {
          printLine(`Navigating to ${map[target]}...`);
          setTimeout(() => {
            window.location.href = map[target];
          }, 250);
        } else {
          printLine(`cd: no such page '${args[0] || ""}'. Try: cd home | cd interests | cd projects | cd about`);
        }
        break;
      }
      case "projects":
        printLine(
          siteData.projects.items
            .map((p) => `• [${p.status}] ${p.title} (${p.badge}) — ${p.description}`)
            .join("\n")
        );
        break;
      case "skills":
        printLine(
          siteData.interests.skillEvidence
            .map((s) => `${s.name}\n  └── ${s.evidence.join(", ")}`)
            .join("\n")
        );
        break;
      case "fact": {
        const facts = siteData.facts || DEFAULT_DATA.facts;
        const pick = facts[Math.floor(Math.random() * facts.length)];
        printLine(`✳ ${pick}`);
        break;
      }
      case "contact":
        printLine(
          `Email:    ${siteData.contact.email}\nGitHub:   ${siteData.contact.github}\nLinkedIn: ${siteData.contact.linkedin}`
        );
        break;
      case "theme": {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        printLine(`Switched theme to ${next}.`);
        break;
      }
      case "edit":
        closeTerminal();
        openStudioDrawer();
        break;
      case "clear":
        output.innerHTML = "";
        break;
      default:
        printLine(`sxshell: command not found: ${cmd}. Type 'help' for available commands.`);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    runCommand(input.value);
    input.value = "";
  });

  backdrop.querySelectorAll(".term-cmd-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      runCommand(chip.getAttribute("data-cmd"));
      input.focus();
    });
  });

  const openBtn = document.getElementById("open-terminal-btn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      backdrop.classList.add("open");
      setTimeout(() => input.focus(), 60);
    });
  }
}

/* ===== Interactive Site Studio / Live Editor Drawer ===== */
function injectStudioDrawer() {
  if (document.getElementById("studio-drawer")) return;

  const drawer = document.createElement("aside");
  drawer.id = "studio-drawer";
  drawer.className = "studio-drawer";
  drawer.setAttribute("aria-label", "Interactive Site Editor");
  drawer.innerHTML = `
    <div class="studio-header">
      <h3><span style="color:var(--accent)">✎</span> Interactive Site Studio</h3>
      <button type="button" class="tool-btn" id="close-studio-btn">Close ✕</button>
    </div>
    <div class="studio-mode-bar">
      <div>
        <strong>Click-to-Edit on Page</strong>
        <div style="font-size:0.72rem;color:var(--muted);">Click any outlined text on the page to edit directly</div>
      </div>
      <input type="checkbox" id="inline-edit-toggle" style="width:18px;height:18px;accent-color:var(--accent);cursor:pointer;" />
    </div>
    <div class="studio-tabs" id="studio-tabs">
      <button type="button" class="studio-tab active" data-tab="general">Style &amp; Hero</button>
      <button type="button" class="studio-tab" data-tab="projects">Projects</button>
      <button type="button" class="studio-tab" data-tab="facts">Fun Facts</button>
      <button type="button" class="studio-tab" data-tab="about">About &amp; Focus</button>
    </div>
    <div class="studio-body" id="studio-body"></div>
    <div class="studio-footer">
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <button type="button" class="btn btn-dark" id="studio-download-btn" style="padding:7px 12px;font-size:0.78rem;">Download data.json ↓</button>
        <button type="button" class="btn btn-outline-dark" id="studio-copy-btn" style="padding:7px 12px;font-size:0.78rem;">Copy JSON</button>
      </div>
      <button type="button" class="tool-btn" id="studio-reset-btn" title="Restore original defaults">Reset</button>
    </div>
  `;
  document.body.appendChild(drawer);

  document.getElementById("close-studio-btn").addEventListener("click", () => {
    drawer.classList.remove("open");
  });

  const openBtn = document.getElementById("open-studio-btn");
  if (openBtn) {
    openBtn.addEventListener("click", openStudioDrawer);
  }

  const inlineToggle = document.getElementById("inline-edit-toggle");
  inlineToggle.addEventListener("change", (e) => {
    enableInlineEditing(e.target.checked);
    showToast(e.target.checked ? "Click any outlined text on the page to edit!" : "Inline editing turned off");
  });

  drawer.querySelectorAll(".studio-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      drawer.querySelectorAll(".studio-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeStudioTab = tab.getAttribute("data-tab");
      renderStudioBody();
    });
  });

  document.getElementById("studio-download-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(siteData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Downloaded updated data.json!");
  });

  document.getElementById("studio-copy-btn").addEventListener("click", () => {
    navigator.clipboard?.writeText(JSON.stringify(siteData, null, 2));
    showToast("Copied data.json to clipboard!");
  });

  document.getElementById("studio-reset-btn").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    siteData = structuredClone(DEFAULT_DATA);
    renderActivePage();
    renderStudioBody();
    showToast("Restored default site content");
  });

  renderStudioBody();
}

function openStudioDrawer() {
  const drawer = document.getElementById("studio-drawer");
  if (drawer) {
    drawer.classList.add("open");
    renderStudioBody();
  }
}

function renderStudioBody() {
  const container = document.getElementById("studio-body");
  if (!container) return;

  const swatches = [
    { name: "Forest Green", color: "#39745a" },
    { name: "Terracotta", color: "#b85d3b" },
    { name: "Ocean Slate", color: "#2b5b84" },
    { name: "Amber Ink", color: "#9a6b26" },
    { name: "Plum", color: "#6c4675" }
  ];

  if (activeStudioTab === "general") {
    container.innerHTML = `
      <div class="studio-field">
        <label>Accent Color</label>
        <div class="color-swatches">
          ${swatches
            .map(
              (s) =>
                `<button type="button" class="color-swatch ${siteData.meta.accentColor === s.color ? "active" : ""}" style="background:${s.color}" data-color="${s.color}" title="${s.name}"></button>`
            )
            .join("")}
        </div>
      </div>
      <div class="studio-field">
        <label>Eyebrow Status</label>
        <input type="text" data-bind="meta.eyebrow" value="${escapeHtml(siteData.meta.eyebrow)}" />
      </div>
      <div class="studio-field">
        <label>Hero Headline (Line 1)</label>
        <input type="text" data-bind="home.headlinePrefix" value="${escapeHtml(siteData.home.headlinePrefix)}" />
      </div>
      <div class="studio-field">
        <label>Hero Headline (Accent Line 2)</label>
        <input type="text" data-bind="home.headlineAccent" value="${escapeHtml(siteData.home.headlineAccent)}" />
      </div>
      <div class="studio-field">
        <label>Home Intro Paragraph</label>
        <textarea data-bind="home.intro">${escapeHtml(siteData.home.intro)}</textarea>
      </div>
      <div class="studio-field">
        <label>Callout Note (✳)</label>
        <textarea data-bind="home.note">${escapeHtml(siteData.home.note)}</textarea>
      </div>
    `;

    container.querySelectorAll(".color-swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        siteData.meta.accentColor = btn.getAttribute("data-color");
        saveSiteData(false);
        renderActivePage();
        renderStudioBody();
      });
    });
  } else if (activeStudioTab === "projects") {
    container.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:0.78rem;color:var(--muted);">${siteData.projects.items.length} projects</span>
        <button type="button" class="btn btn-dark" id="add-project-btn" style="padding:5px 11px;font-size:0.76rem;">+ Add Project</button>
      </div>
      ${siteData.projects.items
        .map(
          (p, idx) => `
          <div class="studio-card-item">
            <div class="studio-card-item-header">
              <span>${escapeHtml(p.index)} — ${escapeHtml(p.title)}</span>
              <button type="button" class="tool-btn delete-project-btn" data-index="${idx}" style="padding:2px 7px;font-size:0.7rem;">Delete</button>
            </div>
            <div class="studio-field">
              <label>Title</label>
              <input type="text" data-bind="projects.items.${idx}.title" value="${escapeHtml(p.title)}" />
            </div>
            <div class="studio-field">
              <label>Tech Stack Badge</label>
              <input type="text" data-bind="projects.items.${idx}.badge" value="${escapeHtml(p.badge)}" />
            </div>
            <div class="studio-field">
              <label>Status &amp; Category</label>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                <input type="text" data-bind="projects.items.${idx}.status" value="${escapeHtml(p.status)}" placeholder="Built / In Progress / Planned" />
                <select data-bind="projects.items.${idx}.category">
                  <option value="systems" ${p.category === "systems" ? "selected" : ""}>Systems &amp; C</option>
                  <option value="backend" ${p.category === "backend" ? "selected" : ""}>Backend &amp; Java</option>
                </select>
              </div>
            </div>
            <div class="studio-field">
              <label>Description</label>
              <textarea data-bind="projects.items.${idx}.description">${escapeHtml(p.description)}</textarea>
            </div>
            <div class="studio-field">
              <label>Learning Note</label>
              <input type="text" data-bind="projects.items.${idx}.learning" value="${escapeHtml(p.learning)}" />
            </div>
            <div class="studio-field" style="margin-bottom:0;">
              <label>GitHub URL</label>
              <input type="text" data-bind="projects.items.${idx}.repoUrl" value="${escapeHtml(p.repoUrl)}" placeholder="https://github.com/..." />
            </div>
          </div>`
        )
        .join("")}
    `;

    document.getElementById("add-project-btn").addEventListener("click", () => {
      const nextNum = String(siteData.projects.items.length + 1).padStart(2, "0");
      siteData.projects.items.unshift({
        index: `PROJECT ${nextNum}`,
        title: "New Experiment",
        badge: "Java · Spring Boot",
        category: "backend",
        status: "In Progress",
        featured: true,
        description: "Describe what this project does and why you built it.",
        learning: "Key takeaway or system concept explored in this project.",
        underTheHood: ["Implemented core architecture and tests"],
        repoUrl: "https://github.com/shiva-kar",
        buttonStyle: "dark"
      });
      saveSiteData(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.projects.items.splice(idx, 1);
        saveSiteData(true);
        renderActivePage();
        renderStudioBody();
      });
    });
  } else if (activeStudioTab === "facts") {
    container.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:0.78rem;color:var(--muted);">Interactive "One more thing…" facts</span>
        <button type="button" class="btn btn-dark" id="add-fact-btn" style="padding:5px 11px;font-size:0.76rem;">+ Add Fact</button>
      </div>
      ${siteData.facts
        .map(
          (fact, idx) => `
          <div class="studio-card-item">
            <div class="studio-card-item-header">
              <span>Fact #${idx + 1}</span>
              <button type="button" class="tool-btn delete-fact-btn" data-index="${idx}" style="padding:2px 7px;font-size:0.7rem;">Remove</button>
            </div>
            <textarea data-bind="facts.${idx}" style="width:100%;min-height:58px;">${escapeHtml(fact)}</textarea>
          </div>`
        )
        .join("")}
    `;

    document.getElementById("add-fact-btn").addEventListener("click", () => {
      siteData.facts.push("A new fun fact about what I’m building or learning right now.");
      saveSiteData(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-fact-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (siteData.facts.length <= 1) return;
        siteData.facts.splice(idx, 1);
        saveSiteData(true);
        renderActivePage();
        renderStudioBody();
      });
    });
  } else if (activeStudioTab === "about") {
    container.innerHTML = `
      <div class="studio-field">
        <label>About Page Intro</label>
        <textarea data-bind="about.intro">${escapeHtml(siteData.about.intro)}</textarea>
      </div>
      <div class="studio-field">
        <label>Approach Paragraph 1</label>
        <textarea data-bind="about.approachParagraphs.0">${escapeHtml(siteData.about.approachParagraphs[0])}</textarea>
      </div>
      <div class="studio-field">
        <label>Approach Paragraph 2</label>
        <textarea data-bind="about.approachParagraphs.1">${escapeHtml(siteData.about.approachParagraphs[1])}</textarea>
      </div>
      <div class="studio-field">
        <label>Approach Paragraph 3</label>
        <textarea data-bind="about.approachParagraphs.2">${escapeHtml(siteData.about.approachParagraphs[2])}</textarea>
      </div>
      <div class="studio-field">
        <label>Contact Email</label>
        <input type="text" data-bind="contact.email" value="${escapeHtml(siteData.contact.email)}" />
      </div>
    `;
  }

  // Bind live input changes
  container.querySelectorAll("[data-bind]").forEach((input) => {
    input.addEventListener("input", () => {
      const path = input.getAttribute("data-bind");
      setByPath(siteData, path, input.value);
      saveSiteData(false);
      renderActivePage();
    });
  });
}

/* ===== Global Keyboard Shortcuts ===== */
function initKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const modal = document.getElementById("sxshell-modal");
      if (modal) {
        modal.classList.toggle("open");
        if (modal.classList.contains("open")) {
          setTimeout(() => document.getElementById("term-input")?.focus(), 50);
        }
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "e") {
      e.preventDefault();
      const drawer = document.getElementById("studio-drawer");
      if (drawer) drawer.classList.toggle("open");
    } else if (e.key === "Escape") {
      document.getElementById("sxshell-modal")?.classList.remove("open");
      document.getElementById("studio-drawer")?.classList.remove("open");
    }
  });
}

/* ===== Bootstrap & Initialization ===== */
async function bootstrapSite() {
  initTheme();

  try {
    const res = await fetch("data.json", { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      if (json && json.home && json.projects) {
        siteData = json;
      }
    }
  } catch (_) {
    // Fallback to DEFAULT_DATA when opened via file://
  }

  const savedCustom = localStorage.getItem(STORAGE_KEY);
  if (savedCustom) {
    try {
      const parsed = JSON.parse(savedCustom);
      if (parsed && parsed.home && parsed.projects) {
        siteData = parsed;
      }
    } catch (_) {}
  }

  renderActivePage();
  injectTerminalModal();
  injectStudioDrawer();
  initKeyboardShortcuts();
}

document.addEventListener("DOMContentLoaded", bootstrapSite);
