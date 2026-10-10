const STORAGE_KEY = "sk_site_data_v4";
const DRAFT_DIRTY_KEY = "sk_site_draft_dirty_v4";
const THEME_KEY = "sk_site_theme";
const AUTH_SESSION_KEY = "sk_owner_gh_session";
const EXPECTED_OWNER = "shiva-kar";
const EXPECTED_REPO = "shiva-kar/shiva-kar.github.io";

const DEFAULT_DATA = {
  "meta": {
    "brand": "SK",
    "name": "Shiva Kar",
    "eyebrow": "Java & Backend Developer · BCA Student",
    "location": "Hojai, Assam, India",
    "accentColor": "#39745a",
    "resumeUrl": "Shiva_Kar_Resume.pdf?v=2.4.0",
    "githubRepo": "shiva-kar/shiva-kar.github.io"
  },
  "contact": {
    "email": "sksmarttech48@gmail.com",
    "github": "https://github.com/shiva-kar",
    "linkedin": "https://www.linkedin.com/in/shiva-kar",
    "twitter": "https://x.com/sk_shivakar",
    "portfolio": "https://shivakar.me"
  },
  "home": {
    "headlinePrefix": "Hey, I’m Shiva.",
    "headlineAccent": "Curious about how things work.",
    "intro": "I’m a backend-focused Java developer and BCA student who pairs Spring Boot, REST API, and SQL (MySQL, PostgreSQL) skills with systems-level C experience and open-source contributions to Godot Engine.",
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
        "text": "Java, Spring Boot, REST APIs, MySQL & PostgreSQL, and building software that behaves well beyond the happy path.",
        "linkText": "More on this ↗",
        "href": "interests.html#backend"
      },
      {
        "number": "02 / UNPACK",
        "title": "Under the hood",
        "text": "C, processes, raw TCP sockets, memory management, file descriptors, and the details that make computers work.",
        "linkText": "More on this ↗",
        "href": "interests.html#systems"
      },
      {
        "number": "03 / PLAY",
        "title": "Open source & games",
        "text": "Contributing bug fixes to Godot Engine 4.8 (3 merged PRs) and experimenting with game mechanics in Unity and C#.",
        "linkText": "More on this ↗",
        "href": "interests.html#gamedev"
      }
    ]
  },
  "facts": [
    "I’ve merged 3 bug-fix pull requests into Godot Engine 4.8 (#124054, #124170, #123035) out of 11 submitted, with 6 more under review.",
    "I built a POSIX-compliant shell (SXSHELL) in C across 7 modules (~550 lines) with 7 built-ins, 4 redirection operators, and pipelines.",
    "My open-source Next.js Resume Builder has earned 16 GitHub stars and 8 forks.",
    "One of my Godot Engine regression fixes (#124170, fixing script editor tooltips) was merged 33 hours after submission.",
    "I’m currently building a lightweight HTTP/1.1 server using raw TCP sockets in C.",
    "I maintain an 8.84 CGPA (9.33 SGPA in Semester 3) in my BCA degree alongside Harvard CS50x and CS50 SQL certifications.",
    "Switching between Java Spring Boot, low-level C systems code, and open-source game engine contributions gives me fresh perspectives on software design."
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
        "description": "I’m focused on how backend applications are structured, how REST APIs communicate, and how data moves reliably between an application and relational databases like MySQL and PostgreSQL using Java and Spring Boot.",
        "Highlight": "Focusing on clean REST API design, Object-Oriented Programming (OOP), relational data modeling, and shipping reliable server-side services.",
        "skills": ["Java", "Spring Boot", "REST APIs", "SQL", "MySQL", "PostgreSQL", "Docker"]
      },
      {
        "id": "systems",
        "number": "02",
        "kicker": "UNDER THE HOOD",
        "title": "Systems programming",
        "description": "Writing a POSIX shell in C made operating-system concepts feel much more concrete. I enjoy exploring process creation, file descriptors, pipes, raw TCP sockets, memory management, and what actually happens when a command runs.",
        "Highlight": "Building tools from scratch—like SXSHELL (7 modules, 7 built-ins, 4 redirection operators), an HTTP server, and a garbage collector—to demystify OS internals.",
        "skills": ["C", "POSIX", "Linux", "Networking", "Memory Management", "CMake", "Git"]
      },
      {
        "id": "gamedev",
        "number": "03",
        "kicker": "OPEN SOURCE & GAME ENGINE INTERNALS",
        "title": "Open source & game development",
        "description": "I’m an active open-source contributor to the Godot Engine (3 merged pull requests in Godot 4.8 out of 11 submitted) and enjoy exploring game development and graphics programming in Unity and C#.",
        "Highlight": "Navigating large C++ engine codebases, fixing editor regressions in Godot 4.8, and prototyping gameplay systems in Unity.",
        "skills": ["Godot", "Unity", "C#", "Open Source", "Git"]
      }
    ],
    "skillEvidence": [
      {
        "name": "Java & Backend Engineering",
        "evidence": ["Spring Boot & REST APIs", "Object-Oriented Programming (OOP)", "E-commerce & Expense Tracker APIs", "IntelliJ IDEA & Docker"]
      },
      {
        "name": "C & Systems Internals",
        "evidence": ["SXSHELL (7 modules, 4 redirection ops)", "Custom HTTP Server (Raw TCP Sockets)", "Mark-and-Sweep Garbage Collector", "Git Implementation in C"]
      },
      {
        "name": "SQL & Databases",
        "evidence": ["Harvard CS50 SQL Certified", "MySQL & PostgreSQL", "Relational Schema & Query Design"]
      },
      {
        "name": "Open Source & Tooling",
        "evidence": ["Godot Engine 4.8 (3 Merged PRs)", "Resume Builder (16 ★, 8 Forks)", "Catppuccin Obsidian Theme PR", "Linux, Git, CMake & VS Code"]
      }
    ]
  },
  "projects": {
    "eyebrow": "LEARNING BY BUILDING",
    "title": "Projects and experiments",
    "intro": "I learn best by making things, testing them, and figuring out the parts I don’t understand yet. Here are my open-source projects, systems tools, and backend builds.",
    "defaultSort": "pinned",
    "items": [
      {
        "index": "PROJECT 01",
        "title": "SXSHELL — Unix-like Shell",
        "badge": "C · POSIX · CMake",
        "category": "systems",
        "status": "Built",
        "pinned": true,
        "featured": true,
        "updatedAt": "2026-10-10",
        "description": "A POSIX-compliant Unix-like shell written in C across 7 modules (~550 lines) with 7 built-ins, $PATH resolution, quote and escape parsing, 4 redirection operators, multi-command pipelines, persistent history, and $VAR expansion.",
        "learning": "Built to understand process creation, file descriptors, and the POSIX system calls behind terminal execution.",
        "underTheHood": [
          "Implemented 4 redirection operators and multi-command pipelines using fork(), execv(), and dup2()",
          "Built 7 modular C components (~550 lines) supporting 7 built-in commands, $PATH lookup, and quote/escape parsing",
          "Added persistent history with arrow-key navigation, $VAR expansion, and architecture documentation in DOCS.md"
        ],
        "repoUrl": "https://github.com/shiva-kar/SXSHELL-unix-like-shell",
        "buttonStyle": "dark"
      },
      {
        "index": "PROJECT 02",
        "title": "Resume Builder",
        "badge": "TypeScript · Next.js 14",
        "category": "backend",
        "status": "Built",
        "pinned": true,
        "featured": true,
        "updatedAt": "2026-10-08",
        "description": "An open-source resume builder web application featuring live PDF preview and multiple customizable templates, earning 16 GitHub stars and 8 forks from the developer community.",
        "learning": "Focused on clean document state management, real-time PDF rendering, and shipping a polished tool used by other developers.",
        "underTheHood": [
          "Built with TypeScript and Next.js 14 with instant live PDF preview and multi-template switching",
          "Earned 16 GitHub stars and 8 forks through clean UX and structured resume schema state",
          "Supports ATS-friendly formatting, section customization, and one-click PDF export"
        ],
        "repoUrl": "https://github.com/shiva-kar/resume-builder",
        "buttonStyle": "dark"
      },
      {
        "index": "PROJECT 03",
        "title": "Custom HTTP Server",
        "badge": "C · Raw TCP Sockets · HTTP",
        "category": "systems",
        "status": "Planned",
        "pinned": false,
        "featured": true,
        "updatedAt": "2026-10-05",
        "description": "A lightweight HTTP server in C built over raw TCP sockets, focused on request parsing, header inspection, and HTTP response handling from the ground up.",
        "learning": "The goal is to master networking fundamentals by implementing the TCP socket and HTTP request-response lifecycle directly.",
        "underTheHood": [
          "POSIX socket lifecycle: socket(), bind(), listen(), accept(), recv(), and send()",
          "Zero-dependency HTTP request line, header parser, and status-code response builder",
          "Static file serving with MIME type detection and client connection handling"
        ],
        "repoUrl": "https://github.com/shiva-kar/Custom-HTTP-Server-in-C",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 04",
        "title": "Custom Garbage Collector",
        "badge": "C · Memory · Mark & Sweep",
        "category": "systems",
        "status": "Planned",
        "pinned": false,
        "featured": true,
        "updatedAt": "2026-09-20",
        "description": "A custom garbage collector in C built to understand manual memory management, heap allocation internals, and automatic object reachability tracking.",
        "learning": "Explores mark-and-sweep collection, root pointer tracing, and allocation metadata at the pointer level.",
        "underTheHood": [
          "Tracks dynamically allocated objects via an intrusive metadata header and allocation list",
          "Mark phase traverses reachable object graphs from registered stack/root pointers",
          "Sweep phase reclaims unmarked heap blocks and prevents memory leaks"
        ],
        "repoUrl": "",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 05",
        "title": "Git Implementation in C",
        "badge": "C · Hashing · File I/O",
        "category": "systems",
        "status": "Planned",
        "pinned": false,
        "featured": true,
        "updatedAt": "2026-09-12",
        "description": "A simplified Git clone written in C to understand content-addressable storage, blob and tree objects, and commit history DAGs.",
        "learning": "Covers binary file I/O, cryptographic hashing, compression, and version control internals from scratch.",
        "underTheHood": [
          "Implements object hashing and content-addressable storage inside .git/objects",
          "Reads and writes blob, tree, and commit objects with header framing",
          "Demystifies how Git snapshots file trees rather than storing simple line diffs"
        ],
        "repoUrl": "",
        "buttonStyle": "outline"
      },
      {
        "index": "PROJECT 06",
        "title": "E-commerce Backend API",
        "badge": "Java · Spring Boot · PostgreSQL",
        "category": "backend",
        "status": "Planned",
        "pinned": false,
        "featured": false,
        "updatedAt": "2026-08-25",
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
        "index": "PROJECT 07",
        "title": "Expense Tracker API",
        "badge": "Java · Spring Security · Docker",
        "category": "backend",
        "status": "Planned",
        "pinned": false,
        "featured": false,
        "updatedAt": "2026-08-15",
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
    "intro": "I’m Shiva Kar, a backend-focused Java developer, open-source contributor to Godot Engine, and BCA student at Amity University Online (CGPA 8.84). This page covers my open-source experience, academic background, and certifications.",
    "approachKicker": "HOW I LIKE TO LEARN",
    "approachTitle": "Build first. Understand deeply.",
    "approachParagraphs": [
      "I enjoy projects that force me to look beyond the surface. Building SXSHELL (a 7-module POSIX shell in C) made me think carefully about parsing input, launching processes with fork() and execv(), wiring pipelines with dup2(), and handling edge cases.",
      "My primary professional focus is Java backend development—building and shipping REST APIs with Spring Boot, MySQL, and PostgreSQL while grounding my engineering decisions in strong CS fundamentals.",
      "I’m also an active open-source contributor to the Godot Engine (with 3 merged bug-fix pull requests in Godot 4.8 out of 11 submitted), which has taught me how to read large codebases, collaborate with maintainers, and ship production fixes fast."
    ],
    "currentlyKicker": "EXPERIENCE & FOCUS",
    "currentlyTitle": "Open source & what I’m working on",
    "currentlyItems": [
      {
        "label": "Open Source Contributor — Godot Engine (Aug 2026 – Present)",
        "text": "Merged 3 bug-fix PRs into Godot 4.8 (#124054, #124170, #123035) out of 11 submitted (6 under review), including a script tooltip regression fix merged in 33 hours and a Web Editor file-deletion fix."
      },
      {
        "label": "Java & Spring Boot Backend",
        "text": "Building REST APIs with Java, Spring Boot, MySQL, and PostgreSQL, targeting a Java Developer intern or trainee role."
      },
      {
        "label": "Systems Programming in C",
        "text": "Developing a lightweight HTTP server over raw TCP sockets and exploring OS internals, processes, and memory management."
      },
      {
        "label": "Open Source Community & Tooling",
        "text": "Maintaining Resume Builder (16 GitHub stars, 8 forks) and contributing fixes to projects like the Catppuccin Obsidian theme."
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Computer Applications (BCA), Computer Science",
        "school": "Amity University Online, Noida, Uttar Pradesh",
        "date": "Jul 2025 – Nov 2028 (Expected)",
        "detail": "CGPA: 8.84 · SGPA: 9.33 (Semester 3)",
        "coursework": [
          "Data Structures",
          "Java OOP",
          "Operating Systems",
          "DBMS",
          "Computer Networks",
          "Unix Programming"
        ]
      },
      {
        "degree": "Higher Secondary Education (Class XII), Science (PCM & Computer Science)",
        "school": "Deshabandhu Bidyapeeth HS School, Hojai, Assam",
        "date": "Mar 2025",
        "detail": "68% · Physics, Chemistry, Mathematics & Computer Science",
        "coursework": []
      },
      {
        "degree": "Secondary Education (Class X), Elective IT-ITeS",
        "school": "Rabindra Bidyalaya HS School, Hojai, Assam",
        "date": "Mar 2022",
        "detail": "80% · Board of Secondary Education, Assam",
        "coursework": []
      }
    ],
    "certifications": [
      {
        "name": "Harvard CS50x: Introduction to Computer Science",
        "issuer": "Harvard University (CS50)",
        "status": "Completed",
        "url": ""
      },
      {
        "name": "Harvard CS50 SQL: Databases with SQL",
        "issuer": "Harvard University (CS50)",
        "status": "Completed",
        "url": ""
      },
      {
        "name": "Learn C — Skill Path",
        "issuer": "Codecademy",
        "status": "Completed",
        "url": ""
      },
      {
        "name": "Programming in C and C++",
        "issuer": "Internshala",
        "status": "Completed",
        "url": ""
      }
    ]
  }
};

const SKILL_NOTES = {
  "Java": "Core language for my backend path — OOP design, collections, streams, and server-side services.",
  "Spring Boot": "Building layered enterprise backends with dependency injection, JPA, and Spring Security.",
  "REST APIs": "Designing predictable endpoints, status codes, pagination, and request validation.",
  "SQL": "Relational schema modeling, joins, indexing, and queries (certified via Harvard CS50 SQL).",
  "MySQL": "Relational database used alongside Spring Boot for backend persistence and schema modeling.",
  "PostgreSQL": "Primary relational database for my Spring Boot backend projects.",
  "Docker": "Containerizing backend services and databases for consistent development environments.",
  "C": "Used to build SXSHELL (7 modules, ~550 lines), a custom HTTP server, a garbage collector, and a Git clone.",
  "POSIX": "Direct experience with fork(), execv(), pipe(), dup2(), waitpid(), signals, and raw TCP sockets.",
  "Linux": "Daily environment for systems programming, shell scripting, and process debugging.",
  "Networking": "Implementing raw TCP socket servers and HTTP/1.1 request/response parsing from scratch.",
  "Memory Management": "Manual heap management, pointer arithmetic, and building a custom mark-and-sweep GC in C.",
  "CMake": "Structuring multi-module C builds cleanly across platforms.",
  "Git": "Version control for open-source contributions (Godot Engine) + building a Git clone in C.",
  "Godot": "Open Source Contributor to Godot Engine 4.8 — 3 merged bug-fix PRs (#124054, #124170, #123035) out of 11 submitted.",
  "Unity": "Experimenting with 3D gameplay systems, graphics programming, and C# scripting.",
  "C#": "Used for game development and gameplay scripting in Unity.",
  "Open Source": "3 merged PRs in Godot Engine 4.8, 1 merged PR in Catppuccin Obsidian theme, and creator of Resume Builder (16 ★, 8 forks)."
};

function cloneData(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let siteData = cloneData(DEFAULT_DATA);
let currentFactIndex = 0;
let activeProjectFilter = "all";
let activeProjectSort = null;
let projectSearchQuery = "";
let activeStudioTab = "general";

function getTodayDateString() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function reindexProjects() {
  if (!Array.isArray(siteData.projects?.items)) return;
  siteData.projects.items.forEach((p, i) => {
    p.index = `PROJECT ${String(i + 1).padStart(2, "0")}`;
  });
}

/* ===== Helper: Deep Get & Set by Dot Path ===== */
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

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/* ===== Toast Notification ===== */
let toastTimeout = null;
function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "site-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ===== Theme & Accent Management ===== */
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY) || localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch (_) {}
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const icon = document.getElementById("theme-icon");
  const toggleBtn = document.getElementById("theme-toggle-btn") || document.getElementById("theme-toggle");

  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (icon) icon.textContent = "☀";
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (icon) icon.textContent = "☾";
  }

  if (toggleBtn) {
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggleBtn.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  try {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (_) {}
}

function initTheme() {
  applyTheme(getInitialTheme());

  const toggleBtn = document.getElementById("theme-toggle-btn") || document.getElementById("theme-toggle");
  if (toggleBtn && !toggleBtn.dataset.bound) {
    toggleBtn.dataset.bound = "true";
    toggleBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      showToast(next === "dark" ? "Dark theme enabled" : "Light theme enabled");
    });
  }
}

function applyAccentColor(color) {
  if (!color) return;
  document.documentElement.style.setProperty("--accent", color);
  document.documentElement.style.setProperty(
    "--accent-light",
    `color-mix(in srgb, ${color} 14%, var(--surface))`
  );
}

/* ===== Owner Authentication & Session Management ===== */
function getOwnerSession() {
  try {
    const raw = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.authenticated && parsed.login && parsed.token) {
      return parsed;
    }
  } catch (_) {}
  return null;
}

function setOwnerSession(session) {
  try {
    if (!session) {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    } else {
      sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    }
  } catch (_) {}
}

function isOwnerAuthenticated() {
  return Boolean(getOwnerSession());
}

async function verifyOwnerGitHubToken(token) {
  const cleanToken = String(token || "").trim();
  if (!cleanToken) {
    throw new Error("Please enter a GitHub Personal Access Token.");
  }

  const headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${cleanToken}`,
    "X-GitHub-Api-Version": "2022-11-28"
  };

  const userRes = await fetch("https://api.github.com/user", { headers });
  if (!userRes.ok) {
    throw new Error("Invalid GitHub token (authentication failed with HTTP " + userRes.status + ").");
  }
  const user = await userRes.json();

  const repoName = siteData.meta?.githubRepo || EXPECTED_REPO;
  const repoRes = await fetch(`https://api.github.com/repos/${repoName}`, { headers });
  if (!repoRes.ok) {
    throw new Error(`Could not verify access to repository ${repoName}.`);
  }
  const repo = await repoRes.json();

  const isOwnerUser = String(user.login || "").toLowerCase() === EXPECTED_OWNER.toLowerCase();
  const canPush = Boolean(repo.permissions && (repo.permissions.push || repo.permissions.admin));

  if (!isOwnerUser || !canPush) {
    throw new Error(`Unauthorized: account @${user.login || "unknown"} does not have owner write permission for ${repoName}.`);
  }

  return {
    authenticated: true,
    login: user.login,
    repo: repoName,
    token: cleanToken
  };
}

function validateSiteData(data) {
  if (!data || typeof data !== "object") {
    return "Invalid site data structure.";
  }
  if (!data.home?.headlinePrefix?.trim() || !data.home?.intro?.trim()) {
    return "Home page headline and intro cannot be empty.";
  }
  if (!Array.isArray(data.facts) || data.facts.length === 0 || data.facts.some((f) => !String(f).trim())) {
    return "At least one non-empty fun fact is required.";
  }
  if (!Array.isArray(data.projects?.items) || data.projects.items.length === 0) {
    return "At least one project is required.";
  }
  for (let i = 0; i < data.projects.items.length; i++) {
    const p = data.projects.items[i];
    if (!p.title?.trim()) return `Project #${i + 1} is missing a title.`;
    if (!p.description?.trim()) return `Project "${p.title}" is missing a description.`;
    if (!p.badge?.trim()) return `Project "${p.title}" is missing a technology badge.`;
    if (p.repoUrl && !/^https?:\/\/.+/i.test(p.repoUrl.trim())) {
      return `Project "${p.title}" has an invalid repository URL (must start with http:// or https://).`;
    }
  }
  if (data.contact?.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.email.trim())) {
    return "Contact email address format is invalid.";
  }
  return null;
}

async function publishSiteDataToGitHub() {
  const session = getOwnerSession();
  if (!session || !session.token) {
    throw new Error("Unauthorized: You must sign in as the repository owner before publishing.");
  }

  const validationError = validateSiteData(siteData);
  if (validationError) {
    throw new Error(validationError);
  }

  const repoName = session.repo || siteData.meta?.githubRepo || EXPECTED_REPO;
  const apiUrl = `https://api.github.com/repos/${repoName}/contents/data.json`;
  const headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${session.token}`,
    "Content-Type": "application/json",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  const getRes = await fetch(apiUrl, { headers, cache: "no-store" });
  if (!getRes.ok) {
    throw new Error(`Failed to fetch current data.json metadata from GitHub (HTTP ${getRes.status}).`);
  }
  const fileMeta = await getRes.json();

  const formattedJson = JSON.stringify(siteData, null, 2) + "\n";
  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: "chore(content): update portfolio data.json via owner editor",
      content: utf8ToBase64(formattedJson),
      sha: fileMeta.sha,
      branch: "main"
    })
  });

  if (!putRes.ok) {
    let errDetail = `HTTP ${putRes.status}`;
    try {
      const errJson = await putRes.json();
      if (errJson.message) errDetail = errJson.message;
    } catch (_) {}
    throw new Error(`GitHub publish failed: ${errDetail}`);
  }

  const result = await putRes.json();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    sessionStorage.removeItem(DRAFT_DIRTY_KEY);
  } catch (_) {}
  return result.commit?.sha ? result.commit.sha.slice(0, 7) : "latest";
}

function saveSiteDataDraft(notify = false) {
  if (!isOwnerAuthenticated()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    sessionStorage.setItem(DRAFT_DIRTY_KEY, "true");
    if (notify) showToast("Draft saved in browser.");
  } catch (e) {
    console.error("Failed to save draft", e);
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

function getActiveFacts() {
  const list = Array.isArray(siteData.facts) && siteData.facts.length > 0 ? siteData.facts : DEFAULT_DATA.facts;
  return list.filter((f) => String(f || "").trim().length > 0);
}

function initFunFactWidget() {
  const factText = document.getElementById("fact-text");
  const factButton = document.getElementById("fact-button");
  const factCounter = document.getElementById("fact-counter");

  if (!factText || !factButton) return;

  const renderFactAtIndex = (index, animate = false) => {
    const facts = getActiveFacts();
    if (facts.length === 0) return;
    currentFactIndex = ((index % facts.length) + facts.length) % facts.length;

    if (factCounter) {
      const currentNum = String(currentFactIndex + 1).padStart(2, "0");
      const totalNum = String(facts.length).padStart(2, "0");
      factCounter.textContent = `${currentNum} / ${totalNum}`;
    }

    const nextText = facts[currentFactIndex];
    if (!animate) {
      factText.textContent = nextText;
      return;
    }

    factText.classList.add("fact-switching");
    factText.textContent = nextText;
    requestAnimationFrame(() => {
      setTimeout(() => {
        factText.classList.remove("fact-switching");
      }, 90);
    });
  };

  // Sync currentFactIndex with whatever text is currently displayed
  const initialFacts = getActiveFacts();
  const currentDisplayed = factText.textContent.trim();
  const foundIdx = initialFacts.findIndex((f) => f.trim() === currentDisplayed);
  currentFactIndex = foundIdx >= 0 ? foundIdx : 0;
  renderFactAtIndex(currentFactIndex, false);

  if (!factButton.dataset.bound) {
    factButton.dataset.bound = "true";
    factButton.addEventListener("click", () => {
      const facts = getActiveFacts();
      if (facts.length <= 1) {
        renderFactAtIndex(0, false);
        return;
      }

      // Advance to the next distinct fact, guaranteeing it never repeats the currently displayed fact
      let nextIndex = (currentFactIndex + 1) % facts.length;
      if (facts[nextIndex].trim() === factText.textContent.trim()) {
        nextIndex = (nextIndex + 1) % facts.length;
      }
      renderFactAtIndex(nextIndex, true);
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
                    `<span class="badge rounded-pill text-bg-light interactive-badge" role="button" tabindex="0" aria-pressed="false" data-skill="${escapeHtml(skill)}" title="Click to see how I use ${escapeHtml(skill)}">${escapeHtml(skill)}</span>`
                )
                .join("")}
            </div>
            <div class="skill-note-panel" aria-live="polite"></div>
          </div>
        </section>`
      )
      .join("");

    const activateBadge = (badge) => {
      const skill = badge.getAttribute("data-skill");
      const section = badge.closest(".interest-detail");
      const panel = section?.querySelector(".skill-note-panel");
      const note = SKILL_NOTES[skill] || `${skill} — part of my ongoing hands-on learning and project stack.`;

      listContainer.querySelectorAll(".interactive-badge").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      badge.classList.add("active");
      badge.setAttribute("aria-pressed", "true");

      if (panel) {
        panel.innerHTML = `<strong>${escapeHtml(skill)}:</strong> ${escapeHtml(note)}`;
        panel.classList.add("visible");
      }
      showToast(`${skill}: ${note}`);
    };

    listContainer.querySelectorAll(".interactive-badge").forEach((badge) => {
      badge.addEventListener("click", () => activateBadge(badge));
      badge.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateBadge(badge);
        }
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

function matchesProjectFilter(item, filter, query) {
  const category = String(item.category || "").toLowerCase().trim();
  const status = String(item.status || "").toLowerCase().trim();
  const isPinned = Boolean(item.pinned);

  let categoryMatch = true;
  if (filter === "pinned") {
    categoryMatch = isPinned;
  } else if (filter === "systems") {
    categoryMatch = category === "systems";
  } else if (filter === "backend") {
    categoryMatch = category === "backend";
  } else if (filter === "active") {
    categoryMatch = status !== "planned";
  } else if (filter === "planned") {
    categoryMatch = status === "planned";
  }

  if (!categoryMatch) return false;

  const q = String(query || "").toLowerCase().trim();
  if (!q) return true;

  const haystack = [
    item.title,
    item.badge,
    item.category,
    item.status,
    item.updatedAt,
    isPinned ? "pinned" : "",
    item.description,
    item.learning,
    ...(Array.isArray(item.underTheHood) ? item.underTheHood : [])
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

function getStatusRank(status) {
  const s = String(status || "").toLowerCase().trim();
  if (s === "built") return 0;
  if (s === "in progress") return 1;
  return 2;
}

function sortProjectsList(entries, sortMode) {
  const mode = sortMode || siteData.projects?.defaultSort || "pinned";
  return [...entries].sort((a, b) => {
    // Pinned projects always float to the top
    const pinA = Boolean(a.item.pinned);
    const pinB = Boolean(b.item.pinned);
    if (pinA !== pinB) return pinA ? -1 : 1;

    if (mode === "updated") {
      const dateA = String(a.item.updatedAt || "");
      const dateB = String(b.item.updatedAt || "");
      if (dateA !== dateB) return dateB.localeCompare(dateA);
      return a.originalIndex - b.originalIndex;
    }

    if (mode === "status") {
      const rankDiff = getStatusRank(a.item.status) - getStatusRank(b.item.status);
      if (rankDiff !== 0) return rankDiff;
      const dateA = String(a.item.updatedAt || "");
      const dateB = String(b.item.updatedAt || "");
      if (dateA !== dateB) return dateB.localeCompare(dateA);
      return a.originalIndex - b.originalIndex;
    }

    if (mode === "title") {
      return String(a.item.title || "").localeCompare(String(b.item.title || ""));
    }

    // Default ("pinned"): preserve editor list order within pinned and unpinned groups
    return a.originalIndex - b.originalIndex;
  });
}

function renderProjectsPage() {
  const eyebrow = document.getElementById("projects-eyebrow");
  const title = document.getElementById("projects-title");
  const intro = document.getElementById("projects-intro");
  const grid = document.getElementById("projects-grid-container");
  const countLabel = document.getElementById("project-count-label");
  const searchInput = document.getElementById("project-search-input");
  const sortSelect = document.getElementById("project-sort-select");

  if (eyebrow) eyebrow.textContent = siteData.projects.eyebrow;
  if (title) title.textContent = siteData.projects.title;
  if (intro) intro.textContent = siteData.projects.intro;

  if (!grid) return;

  const effectiveSort = activeProjectSort || siteData.projects.defaultSort || "pinned";
  if (sortSelect && sortSelect.value !== effectiveSort) {
    sortSelect.value = effectiveSort;
  }

  const allItems = Array.isArray(siteData.projects.items) ? siteData.projects.items : [];
  const filtered = sortProjectsList(
    allItems
      .map((item, originalIndex) => ({ item, originalIndex }))
      .filter(({ item }) => matchesProjectFilter(item, activeProjectFilter, projectSearchQuery)),
    effectiveSort
  );

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${allItems.length} project${allItems.length === 1 ? "" : "s"}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="project-empty-state">
          <h3>No matching projects found</h3>
          <p>No projects match the current filter${projectSearchQuery ? ` ("${escapeHtml(projectSearchQuery)}")` : ""}.</p>
          <button type="button" class="btn btn-outline-dark" id="reset-project-filters-btn">Reset filters</button>
        </div>
      </div>
    `;
    const resetBtn = document.getElementById("reset-project-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeProjectFilter = "all";
        projectSearchQuery = "";
        if (searchInput) searchInput.value = "";
        document.querySelectorAll(".filter-pill").forEach((p) => {
          const isAll = p.getAttribute("data-filter") === "all";
          p.classList.toggle("active", isAll);
          p.setAttribute("aria-selected", String(isAll));
        });
        renderProjectsPage();
      });
    }
  } else {
    grid.innerHTML = filtered
      .map(({ item, originalIndex }) => {
        const isPlanned = String(item.status || "").toLowerCase() === "planned";
        const isPinned = Boolean(item.pinned);
        const btnClass = item.buttonStyle === "dark" ? "btn-dark" : "btn-outline-dark";
        const hoodList =
          Array.isArray(item.underTheHood) && item.underTheHood.length > 0
            ? `
            <button type="button" class="hood-toggle" aria-expanded="false"><span>+ Under the hood</span></button>
            <div class="hood-panel">
              <ul>
                ${item.underTheHood.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}
              </ul>
            </div>`
            : "";

        const repoAction =
          item.repoUrl && item.repoUrl.trim()
            ? `<a class="btn ${btnClass}" href="${escapeHtml(item.repoUrl)}" target="_blank" rel="noopener noreferrer">View repository ↗</a>`
            : `<span class="planned-repo-tag">Planned — repository not yet public</span>`;

        const updatedTag =
          item.updatedAt && String(item.updatedAt).trim()
            ? `<span class="project-updated-tag">Updated: ${escapeHtml(item.updatedAt)}</span>`
            : "";

        return `
          <div class="col-lg-6 project-col" data-category="${escapeHtml(item.category)}" data-status="${escapeHtml(item.status)}" data-pinned="${String(isPinned)}">
            <article class="card project-card ${isPinned ? "pinned-card" : ""} h-100">
              <div class="card-body d-flex flex-column">
                <div class="project-card-top">
                  <span class="badge rounded-pill text-bg-light" data-editable="projects.items.${originalIndex}.badge">${escapeHtml(item.badge)}</span>
                  <div class="project-meta-right">
                    ${isPinned ? `<span class="pinned-pill" title="Pinned project">📌 Pinned</span>` : ""}
                    <span class="status-pill ${isPlanned ? "status-planned" : ""}" data-editable="projects.items.${originalIndex}.status">${escapeHtml(item.status)}</span>
                    <span class="project-index" data-editable="projects.items.${originalIndex}.index">${escapeHtml(item.index)}</span>
                  </div>
                </div>
                <h2 class="card-title" data-editable="projects.items.${originalIndex}.title">${escapeHtml(item.title)}</h2>
                <p class="card-text" data-editable="projects.items.${originalIndex}.description">${escapeHtml(item.description)}</p>
                <p class="project-learning" data-editable="projects.items.${originalIndex}.learning">${escapeHtml(item.learning)}</p>
                ${hoodList}
                <div class="project-actions">
                  ${repoAction}
                  ${updatedTag}
                </div>
              </div>
            </article>
          </div>`;
      })
      .join("");
  }

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

  // Bind filter pills
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    if (pill.dataset.bound) return;
    pill.dataset.bound = "true";
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((p) => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");
      activeProjectFilter = pill.getAttribute("data-filter") || "all";
      renderProjectsPage();
      if (document.body.classList.contains("inline-edit-active") && isOwnerAuthenticated()) {
        enableInlineEditing(true);
      }
    });
  });

  // Bind sort select
  if (sortSelect && !sortSelect.dataset.bound) {
    sortSelect.dataset.bound = "true";
    sortSelect.addEventListener("change", () => {
      activeProjectSort = sortSelect.value;
      renderProjectsPage();
      if (document.body.classList.contains("inline-edit-active") && isOwnerAuthenticated()) {
        enableInlineEditing(true);
      }
    });
  }

  // Bind search input
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = "true";
    searchInput.addEventListener("input", () => {
      projectSearchQuery = searchInput.value;
      renderProjectsPage();
    });
  }
}

function activateAboutTab(tabPaneId, updateHash = false) {
  const buttons = document.querySelectorAll(".about-tab-btn");
  const panes = document.querySelectorAll(".about-tab-pane");
  if (!buttons.length || !panes.length) return;

  buttons.forEach((btn) => {
    const isMatch = btn.getAttribute("data-tab") === tabPaneId;
    btn.classList.toggle("active", isMatch);
    btn.setAttribute("aria-selected", String(isMatch));
    if (isMatch && updateHash) {
      const hashName = btn.getAttribute("data-hash");
      if (hashName && history.replaceState) {
        history.replaceState(null, "", `#${hashName}`);
      }
    }
  });

  panes.forEach((pane) => {
    pane.classList.toggle("active", pane.id === tabPaneId);
  });
}

function syncAboutTabFromHash() {
  const hash = (window.location.hash || "").replace(/^#/, "").toLowerCase();
  if (hash === "certifications" || hash === "cert-pane") {
    activateAboutTab("cert-pane", false);
  } else if (hash === "contact" || hash === "direct-contact" || hash === "contact-pane") {
    activateAboutTab("contact-pane", false);
  } else if (hash === "education" || hash === "edu-pane") {
    activateAboutTab("edu-pane", false);
  }
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
      .map((cert, idx) => {
        const hasUrl = cert.url && /^https?:\/\/.+/i.test(cert.url.trim());
        const metaRight = hasUrl
          ? `<a class="cert-link" href="${escapeHtml(cert.url.trim())}" target="_blank" rel="noopener noreferrer">Verify credential ↗</a>`
          : `<span>${escapeHtml(cert.status || "Completed")}</span>`;
        return `
        <div class="cert-box">
          <h3 data-editable="about.certifications.${idx}.name">${escapeHtml(cert.name)}</h3>
          <p class="cert-issuer" data-editable="about.certifications.${idx}.issuer">${escapeHtml(cert.issuer)}</p>
          <div class="cert-meta">
            ${metaRight}
          </div>
        </div>`;
      })
      .join("");
  }

  // Update Direct Contact email links from siteData.contact.email
  const emailAddr = siteData.contact?.email || DEFAULT_DATA.contact.email;
  const directEmailLink = document.getElementById("direct-email-link");
  const sendEmailBtn = document.getElementById("send-email-btn");
  const copyBtn = document.getElementById("copy-email-btn");

  if (directEmailLink) {
    directEmailLink.href = `mailto:${emailAddr}`;
    directEmailLink.textContent = emailAddr;
  }
  if (sendEmailBtn) {
    sendEmailBtn.href = `mailto:${emailAddr}`;
  }
  if (copyBtn) {
    copyBtn.setAttribute("data-email", emailAddr);
  }

  // Bind About Tabs
  document.querySelectorAll(".about-tab-btn").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      activateAboutTab(targetId, true);
    });
  });

  syncAboutTabFromHash();
  if (!window.__aboutHashBound) {
    window.__aboutHashBound = true;
    window.addEventListener("hashchange", syncAboutTabFromHash);
  }

  // Bind Copy Email Button with fallback
  if (copyBtn && !copyBtn.dataset.bound) {
    copyBtn.dataset.bound = "true";
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.getAttribute("data-email") || siteData.contact?.email || DEFAULT_DATA.contact.email;
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
          copied = true;
        }
      } catch (_) {}

      if (!copied) {
        const temp = document.createElement("textarea");
        temp.value = email;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        try {
          document.execCommand("copy");
          copied = true;
        } catch (_) {}
        document.body.removeChild(temp);
      }

      copyBtn.textContent = "✓ Email Copied";
      showToast(`Copied ${email} to clipboard!`);
      setTimeout(() => {
        copyBtn.textContent = "Copy Email Address";
      }, 2200);
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

  if (document.body.classList.contains("inline-edit-active") && isOwnerAuthenticated()) {
    enableInlineEditing(true);
  }
}

/* ===== Inline Click-to-Edit Mode (Owner Only) ===== */
function enableInlineEditing(enabled) {
  if (enabled && !isOwnerAuthenticated()) {
    openOwnerEditFlow();
    return;
  }
  document.body.classList.toggle("inline-edit-active", enabled);
  const editables = document.querySelectorAll("[data-editable]");
  editables.forEach((el) => {
    if (enabled) {
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "false");
      if (!el.dataset.inlineBound) {
        el.dataset.inlineBound = "true";
        el.addEventListener("blur", () => {
          if (!isOwnerAuthenticated()) return;
          const path = el.getAttribute("data-editable");
          if (path) {
            setByPath(siteData, path, el.textContent.trim());
            saveSiteDataDraft(false);
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
          <span class="term-cmd-chip" data-cmd="resume">resume</span>
          <span class="term-cmd-chip" data-cmd="fact">fact</span>
          <span class="term-cmd-chip" data-cmd="contact">contact</span>
          <span class="term-cmd-chip" data-cmd="theme">theme</span>
        </div>
      </div>
      <form class="terminal-input-row" id="term-form">
        <span class="term-prompt">shiva@sxshell:~$</span>
        <input type="text" class="terminal-input" id="term-input" placeholder="Type a command (e.g. help, resume, projects, cd about)..." autocomplete="off" />
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);

  const output = document.getElementById("term-output");
  const input = document.getElementById("term-input");
  const form = document.getElementById("term-form");
  const openBtn = document.getElementById("open-terminal-btn");

  const setTerminalOpen = (open) => {
    backdrop.classList.toggle("open", open);
    if (openBtn) openBtn.setAttribute("aria-expanded", String(open));
    if (open) setTimeout(() => input?.focus(), 50);
  };

  document.getElementById("term-close-btn")?.addEventListener("click", () => setTerminalOpen(false));
  document.getElementById("term-close-dot")?.addEventListener("click", () => setTerminalOpen(false));
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) setTerminalOpen(false);
  });

  function printLine(text, isCommand = false) {
    if (!output) return;
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
            "  cd <page>       — Navigate to home, interests, projects, about, or resume\n" +
            "  resume          — Open Shiva_Kar_Resume.pdf in a new tab\n" +
            "  projects        — List my software projects\n" +
            "  skills          — Print evidence-based skill tree\n" +
            "  fact            — Print a random fun fact\n" +
            "  contact         — Show email & GitHub/LinkedIn links\n" +
            "  theme           — Toggle light / dark theme\n" +
            "  edit            — Open Owner Portfolio Editor (requires owner sign-in)\n" +
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
      case "resume": {
        const resumeUrl = siteData.meta?.resumeUrl || "Shiva_Kar_Resume.pdf?v=2.3.0";
        printLine(`Opening ${resumeUrl}...`);
        window.open(resumeUrl, "_blank", "noopener,noreferrer");
        break;
      }
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
          resume: siteData.meta?.resumeUrl || "Shiva_Kar_Resume.pdf?v=2.3.0"
        };
        if (map[target]) {
          printLine(`Navigating to ${map[target]}...`);
          setTimeout(() => {
            window.location.href = map[target];
          }, 200);
        } else {
          printLine(`cd: no such page '${args[0] || ""}'. Try: cd home | cd interests | cd projects | cd about | cd resume`);
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
        const facts = getActiveFacts();
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
        setTerminalOpen(false);
        openOwnerEditFlow();
        break;
      case "clear":
        if (output) output.innerHTML = "";
        break;
      default:
        printLine(`sxshell: command not found: ${cmd}. Type 'help' for available commands.`);
    }
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input) {
      runCommand(input.value);
      input.value = "";
    }
  });

  backdrop.querySelectorAll(".term-cmd-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      runCommand(chip.getAttribute("data-cmd"));
      input?.focus();
    });
  });

  if (openBtn && !openBtn.dataset.bound) {
    openBtn.dataset.bound = "true";
    openBtn.addEventListener("click", () => {
      const isOpen = backdrop.classList.contains("open");
      setTerminalOpen(!isOpen);
    });
  }
}

/* ===== Owner Authentication Modal & Owner Editor Drawer ===== */
function injectAuthAndStudioModals() {
  if (!document.getElementById("owner-auth-modal")) {
    const authBackdrop = document.createElement("div");
    authBackdrop.id = "owner-auth-modal";
    authBackdrop.className = "auth-modal-backdrop";
    authBackdrop.innerHTML = `
      <div class="auth-modal-card" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
        <div class="auth-modal-header">
          <h3 id="auth-modal-title"><span style="color:var(--accent);">🔒</span> Owner Sign-In</h3>
          <button type="button" class="tool-btn" id="close-auth-modal-btn">Close ✕</button>
        </div>
        <p class="auth-modal-desc">
          Editing this portfolio is restricted to the site owner (<strong>@${EXPECTED_OWNER}</strong>).
          Enter a GitHub Fine-Grained Personal Access Token with <code>Contents: Read &amp; Write</code> permission for <code>${EXPECTED_REPO}</code> to unlock editing and publish changes directly to GitHub.
        </p>
        <div class="auth-error-msg" id="auth-error-msg" role="alert"></div>
        <form id="owner-auth-form">
          <div class="studio-field">
            <label for="owner-gh-token-input">GitHub Personal Access Token</label>
            <input type="password" id="owner-gh-token-input" placeholder="github_pat_... or ghp_..." autocomplete="off" required />
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px;">
            <button type="submit" class="btn btn-dark" id="owner-auth-submit-btn">Verify &amp; Unlock Editor</button>
            <button type="button" class="btn btn-outline-dark" id="owner-auth-cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(authBackdrop);

    const closeAuthModal = () => {
      authBackdrop.classList.remove("open");
      const openBtn = document.getElementById("open-studio-btn");
      if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    };

    document.getElementById("close-auth-modal-btn")?.addEventListener("click", closeAuthModal);
    document.getElementById("owner-auth-cancel-btn")?.addEventListener("click", closeAuthModal);
    authBackdrop.addEventListener("click", (e) => {
      if (e.target === authBackdrop) closeAuthModal();
    });

    const authForm = document.getElementById("owner-auth-form");
    const tokenInput = document.getElementById("owner-gh-token-input");
    const errorEl = document.getElementById("auth-error-msg");
    const submitBtn = document.getElementById("owner-auth-submit-btn");

    authForm?.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (errorEl) {
        errorEl.classList.remove("visible");
        errorEl.textContent = "";
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Verifying with GitHub...";
      }

      try {
        const session = await verifyOwnerGitHubToken(tokenInput?.value);
        setOwnerSession(session);
        if (tokenInput) tokenInput.value = "";
        closeAuthModal();
        openStudioDrawer();
        showToast(`Authenticated as @${session.login}`);
      } catch (err) {
        if (errorEl) {
          errorEl.textContent = err.message || "Authentication failed.";
          errorEl.classList.add("visible");
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Verify & Unlock Editor";
        }
      }
    });
  }

  if (!document.getElementById("studio-drawer")) {
    const drawer = document.createElement("aside");
    drawer.id = "studio-drawer";
    drawer.className = "studio-drawer";
    drawer.setAttribute("aria-label", "Owner Portfolio Editor");
    drawer.innerHTML = `
      <div class="studio-header">
        <h3><span style="color:var(--accent)">✎</span> Owner Portfolio Editor</h3>
        <button type="button" class="tool-btn" id="close-studio-btn">Close ✕</button>
      </div>
      <div class="studio-auth-bar">
        <span id="studio-auth-status">Signed in as @${EXPECTED_OWNER}</span>
        <button type="button" class="tool-btn" id="studio-signout-btn" style="padding:2px 8px;font-size:0.72rem;">Sign Out</button>
      </div>
      <div class="studio-mode-bar">
        <div>
          <strong>Click-to-Edit on Page</strong>
          <div style="font-size:0.72rem;color:var(--muted);">Click any outlined text on the page to edit directly</div>
        </div>
        <input type="checkbox" id="inline-edit-toggle" style="width:18px;height:18px;accent-color:var(--accent);cursor:pointer;" />
      </div>
      <div class="studio-tabs" id="studio-tabs">
        <button type="button" class="studio-tab active" data-tab="general">Home &amp; Style</button>
        <button type="button" class="studio-tab" data-tab="projects">Projects</button>
        <button type="button" class="studio-tab" data-tab="about">About &amp; Links</button>
        <button type="button" class="studio-tab" data-tab="facts">Fun Facts</button>
      </div>
      <div class="studio-status-banner" id="studio-status-banner" role="status"></div>
      <div class="studio-body" id="studio-body"></div>
      <div class="studio-footer">
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="btn btn-dark" id="studio-publish-btn" style="padding:7px 12px;font-size:0.78rem;">Publish to GitHub ↑</button>
          <button type="button" class="btn btn-outline-dark" id="studio-download-btn" style="padding:7px 12px;font-size:0.78rem;">Download JSON ↓</button>
        </div>
        <button type="button" class="tool-btn" id="studio-reset-btn" title="Discard local draft">Reset Draft</button>
      </div>
    `;
    document.body.appendChild(drawer);

    const closeDrawer = () => {
      drawer.classList.remove("open");
      const openBtn = document.getElementById("open-studio-btn");
      if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    };

    document.getElementById("close-studio-btn")?.addEventListener("click", closeDrawer);

    document.getElementById("studio-signout-btn")?.addEventListener("click", () => {
      setOwnerSession(null);
      enableInlineEditing(false);
      const inlineToggle = document.getElementById("inline-edit-toggle");
      if (inlineToggle) inlineToggle.checked = false;
      closeDrawer();
      showToast("Signed out of owner session.");
    });

    const inlineToggle = document.getElementById("inline-edit-toggle");
    inlineToggle?.addEventListener("change", (e) => {
      if (!isOwnerAuthenticated()) {
        e.target.checked = false;
        closeDrawer();
        openOwnerEditFlow();
        return;
      }
      enableInlineEditing(e.target.checked);
      showToast(e.target.checked ? "Inline page editing enabled" : "Inline page editing disabled");
    });

    drawer.querySelectorAll(".studio-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        drawer.querySelectorAll(".studio-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        activeStudioTab = tab.getAttribute("data-tab");
        renderStudioBody();
      });
    });

    const statusBanner = document.getElementById("studio-status-banner");
    const setStatusBanner = (msg, type) => {
      if (!statusBanner) return;
      statusBanner.className = "studio-status-banner";
      if (!msg) {
        statusBanner.textContent = "";
        return;
      }
      statusBanner.textContent = msg;
      statusBanner.classList.add(type === "error" ? "error" : "success");
    };

    const publishBtn = document.getElementById("studio-publish-btn");
    publishBtn?.addEventListener("click", async () => {
      setStatusBanner("", "");
      const validationErr = validateSiteData(siteData);
      if (validationErr) {
        setStatusBanner(validationErr, "error");
        return;
      }
      publishBtn.disabled = true;
      publishBtn.textContent = "Publishing...";
      try {
        const shortSha = await publishSiteDataToGitHub();
        setStatusBanner(`Published to GitHub (commit ${shortSha})! Changes are saved to data.json.`, "success");
        showToast("Published changes to GitHub!");
      } catch (err) {
        setStatusBanner(err.message || "Failed to publish to GitHub.", "error");
      } finally {
        publishBtn.disabled = false;
        publishBtn.textContent = "Publish to GitHub ↑";
      }
    });

    document.getElementById("studio-download-btn")?.addEventListener("click", () => {
      const validationErr = validateSiteData(siteData);
      if (validationErr) {
        setStatusBanner(validationErr, "error");
        return;
      }
      setStatusBanner("", "");
      const blob = new Blob([JSON.stringify(siteData, null, 2) + "\n"], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.click();
      URL.revokeObjectURL(url);
      showToast("Downloaded updated data.json!");
    });

    document.getElementById("studio-reset-btn")?.addEventListener("click", () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
        sessionStorage.removeItem(DRAFT_DIRTY_KEY);
      } catch (_) {}
      siteData = cloneData(DEFAULT_DATA);
      setStatusBanner("Restored default portfolio data.", "success");
      renderActivePage();
      renderStudioBody();
      showToast("Restored default site content");
    });
  }

  const openBtn = document.getElementById("open-studio-btn");
  if (openBtn && !openBtn.dataset.bound) {
    openBtn.dataset.bound = "true";
    openBtn.addEventListener("click", openOwnerEditFlow);
  }
}

function openOwnerEditFlow() {
  if (isOwnerAuthenticated()) {
    openStudioDrawer();
  } else {
    const authModal = document.getElementById("owner-auth-modal");
    const openBtn = document.getElementById("open-studio-btn");
    if (authModal) {
      authModal.classList.add("open");
      if (openBtn) openBtn.setAttribute("aria-expanded", "true");
      setTimeout(() => document.getElementById("owner-gh-token-input")?.focus(), 50);
    }
  }
}

function openStudioDrawer() {
  if (!isOwnerAuthenticated()) {
    openOwnerEditFlow();
    return;
  }
  const drawer = document.getElementById("studio-drawer");
  const openBtn = document.getElementById("open-studio-btn");
  const session = getOwnerSession();
  const statusEl = document.getElementById("studio-auth-status");
  if (statusEl && session) {
    statusEl.textContent = `✓ Authenticated as @${session.login}`;
  }
  if (drawer) {
    drawer.classList.add("open");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    renderStudioBody();
  }
}

function renderStudioBody() {
  const container = document.getElementById("studio-body");
  if (!container || !isOwnerAuthenticated()) return;

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
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });
  } else if (activeStudioTab === "projects") {
    const currentDefaultSort = siteData.projects.defaultSort || "pinned";
    container.innerHTML = `
      <div class="studio-sort-bar">
        <div class="studio-field" style="margin-bottom:10px;">
          <label>Default Sort Order on Page</label>
          <select data-bind="projects.defaultSort">
            <option value="pinned" ${currentDefaultSort === "pinned" ? "selected" : ""}>Pinned &amp; Custom List Order</option>
            <option value="updated" ${currentDefaultSort === "updated" ? "selected" : ""}>Recently Updated (Pinned First)</option>
            <option value="status" ${currentDefaultSort === "status" ? "selected" : ""}>Status: Built → Planned (Pinned First)</option>
            <option value="title" ${currentDefaultSort === "title" ? "selected" : ""}>Alphabetical A–Z (Pinned First)</option>
          </select>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
          <div style="display:flex;gap:5px;flex-wrap:wrap;">
            <button type="button" class="studio-action-btn" id="studio-sort-date-btn" title="Reorder project list by Pinned + Newest Date">Sort List by Date ↓</button>
            <button type="button" class="studio-action-btn" id="studio-sort-status-btn" title="Reorder project list by Pinned + Status (Built → Planned)">Sort List by Status</button>
          </div>
          <button type="button" class="btn btn-dark" id="add-project-btn" style="padding:5px 11px;font-size:0.75rem;">+ Add Project</button>
        </div>
      </div>
      <div style="margin-bottom:8px;font-size:0.75rem;color:var(--muted);">
        ${siteData.projects.items.length} projects · Use <strong>📌 Pin</strong>, <strong>⚡ Update &amp; Top</strong>, or <strong>⇈ / ↑ / ↓</strong> to shift order.
      </div>
      ${siteData.projects.items
        .map(
          (p, idx) => `
          <div class="studio-card-item ${p.pinned ? "pinned-studio-item" : ""}">
            <div class="studio-card-item-header">
              <span>${escapeHtml(p.index)} — ${escapeHtml(p.title)}</span>
              <div class="studio-project-actions">
                <button type="button" class="studio-action-btn pin-project-btn ${p.pinned ? "pinned-active" : ""}" data-index="${idx}" title="${p.pinned ? "Unpin project" : "Pin project to top"}">
                  ${p.pinned ? "📌 Pinned" : "📌 Pin"}
                </button>
                <button type="button" class="studio-action-btn bump-project-btn" data-index="${idx}" title="Set updated date to today and move to top">
                  ⚡ Update &amp; Top
                </button>
                <button type="button" class="studio-action-btn top-project-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""} title="Move to top (#1)">
                  ⇈ Top
                </button>
                <button type="button" class="studio-action-btn up-project-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""} title="Shift up">
                  ↑
                </button>
                <button type="button" class="studio-action-btn down-project-btn" data-index="${idx}" ${idx === siteData.projects.items.length - 1 ? "disabled" : ""} title="Shift down">
                  ↓
                </button>
                <button type="button" class="studio-action-btn delete-action delete-project-btn" data-index="${idx}" title="Delete project">
                  Delete
                </button>
              </div>
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
              <label>Status, Category &amp; Updated Date</label>
              <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                <select data-bind="projects.items.${idx}.status">
                  <option value="Built" ${p.status === "Built" ? "selected" : ""}>Built</option>
                  <option value="In Progress" ${p.status === "In Progress" ? "selected" : ""}>In Progress</option>
                  <option value="Planned" ${p.status === "Planned" ? "selected" : ""}>Planned</option>
                </select>
                <select data-bind="projects.items.${idx}.category">
                  <option value="systems" ${p.category === "systems" ? "selected" : ""}>Systems &amp; C</option>
                  <option value="backend" ${p.category === "backend" ? "selected" : ""}>Backend &amp; Java</option>
                </select>
                <input type="date" data-bind="projects.items.${idx}.updatedAt" value="${escapeHtml(p.updatedAt || "")}" title="Last updated date" />
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
            <div class="studio-field">
              <label>Under the Hood Bullets (one per line)</label>
              <textarea data-hood-index="${idx}" style="min-height:66px;">${escapeHtml(Array.isArray(p.underTheHood) ? p.underTheHood.join("\n") : "")}</textarea>
            </div>
            <div class="studio-field" style="margin-bottom:0;">
              <label>GitHub URL (optional for Planned)</label>
              <input type="url" data-bind="projects.items.${idx}.repoUrl" value="${escapeHtml(p.repoUrl)}" placeholder="https://github.com/..." />
            </div>
          </div>`
        )
        .join("")}
    `;

    document.getElementById("add-project-btn")?.addEventListener("click", () => {
      siteData.projects.items.unshift({
        index: "PROJECT 01",
        title: "New Project",
        badge: "Java · Spring Boot",
        category: "backend",
        status: "In Progress",
        pinned: false,
        featured: true,
        updatedAt: getTodayDateString(),
        description: "Describe what this project does and how it is architected.",
        learning: "Key engineering concept explored in this project.",
        underTheHood: ["Core implementation and architecture details"],
        repoUrl: "https://github.com/shiva-kar",
        buttonStyle: "dark"
      });
      reindexProjects();
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    document.getElementById("studio-sort-date-btn")?.addEventListener("click", () => {
      siteData.projects.items.sort((a, b) => {
        const pinA = Boolean(a.pinned);
        const pinB = Boolean(b.pinned);
        if (pinA !== pinB) return pinA ? -1 : 1;
        return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
      });
      reindexProjects();
      saveSiteDataDraft(false);
      renderActivePage();
      renderStudioBody();
      showToast("Sorted project list by Pinned + Newest Date!");
    });

    document.getElementById("studio-sort-status-btn")?.addEventListener("click", () => {
      siteData.projects.items.sort((a, b) => {
        const pinA = Boolean(a.pinned);
        const pinB = Boolean(b.pinned);
        if (pinA !== pinB) return pinA ? -1 : 1;
        const rankDiff = getStatusRank(a.status) - getStatusRank(b.status);
        if (rankDiff !== 0) return rankDiff;
        return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
      });
      reindexProjects();
      saveSiteDataDraft(false);
      renderActivePage();
      renderStudioBody();
      showToast("Sorted project list by Pinned + Status!");
    });

    container.querySelectorAll(".pin-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const item = siteData.projects.items[idx];
        if (!item) return;
        item.pinned = !item.pinned;
        if (item.pinned) {
          // Move newly pinned item to the end of the pinned group at the top
          siteData.projects.items.splice(idx, 1);
          let insertAt = 0;
          while (insertAt < siteData.projects.items.length && siteData.projects.items[insertAt].pinned) {
            insertAt++;
          }
          siteData.projects.items.splice(insertAt, 0, item);
        }
        reindexProjects();
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
        showToast(item.pinned ? `Pinned "${item.title}" to top` : `Unpinned "${item.title}"`);
      });
    });

    container.querySelectorAll(".bump-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const item = siteData.projects.items[idx];
        if (!item) return;
        item.updatedAt = getTodayDateString();
        siteData.projects.items.splice(idx, 1);
        if (item.pinned) {
          siteData.projects.items.unshift(item);
        } else {
          let insertAt = 0;
          while (insertAt < siteData.projects.items.length && siteData.projects.items[insertAt].pinned) {
            insertAt++;
          }
          siteData.projects.items.splice(insertAt, 0, item);
        }
        reindexProjects();
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
        showToast(`Updated "${item.title}" (${item.updatedAt}) & moved to top!`);
      });
    });

    container.querySelectorAll(".top-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx <= 0 || idx >= siteData.projects.items.length) return;
        const [item] = siteData.projects.items.splice(idx, 1);
        siteData.projects.items.unshift(item);
        reindexProjects();
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
        showToast(`Moved "${item.title}" to #1`);
      });
    });

    container.querySelectorAll(".up-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx <= 0 || idx >= siteData.projects.items.length) return;
        const temp = siteData.projects.items[idx - 1];
        siteData.projects.items[idx - 1] = siteData.projects.items[idx];
        siteData.projects.items[idx] = temp;
        reindexProjects();
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".down-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx < 0 || idx >= siteData.projects.items.length - 1) return;
        const temp = siteData.projects.items[idx + 1];
        siteData.projects.items[idx + 1] = siteData.projects.items[idx];
        siteData.projects.items[idx] = temp;
        reindexProjects();
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".delete-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (siteData.projects.items.length <= 1) {
          showToast("At least one project must remain.");
          return;
        }
        const idx = Number(btn.getAttribute("data-index"));
        const removed = siteData.projects.items.splice(idx, 1)[0];
        reindexProjects();
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
        if (removed) showToast(`Deleted "${removed.title}"`);
      });
    });

    container.querySelectorAll("[data-hood-index]").forEach((textarea) => {
      textarea.addEventListener("input", () => {
        if (!isOwnerAuthenticated()) return;
        const idx = Number(textarea.getAttribute("data-hood-index"));
        if (!siteData.projects.items[idx]) return;
        siteData.projects.items[idx].underTheHood = textarea.value
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        saveSiteDataDraft(false);
        renderActivePage();
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
        <input type="email" data-bind="contact.email" value="${escapeHtml(siteData.contact.email)}" />
      </div>
      <div class="studio-field">
        <label>GitHub Profile URL</label>
        <input type="url" data-bind="contact.github" value="${escapeHtml(siteData.contact.github)}" />
      </div>
      <div class="studio-field">
        <label>LinkedIn Profile URL</label>
        <input type="url" data-bind="contact.linkedin" value="${escapeHtml(siteData.contact.linkedin)}" />
      </div>
    `;
  } else if (activeStudioTab === "facts") {
    container.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:0.78rem;color:var(--muted);">Interactive "One more thing…" facts (${siteData.facts.length})</span>
        <button type="button" class="btn btn-dark" id="add-fact-btn" style="padding:5px 11px;font-size:0.76rem;">+ Add Fact</button>
      </div>
      ${siteData.facts
        .map(
          (fact, idx) => `
          <div class="studio-card-item">
            <div class="studio-card-item-header">
              <span>Fact #${idx + 1}</span>
              <div class="studio-project-actions">
                <button type="button" class="studio-action-btn up-fact-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""} title="Move fact up">↑</button>
                <button type="button" class="studio-action-btn down-fact-btn" data-index="${idx}" ${idx === siteData.facts.length - 1 ? "disabled" : ""} title="Move fact down">↓</button>
                <button type="button" class="studio-action-btn delete-action delete-fact-btn" data-index="${idx}">Remove</button>
              </div>
            </div>
            <div class="studio-field" style="margin-bottom:0;">
              <textarea data-bind="facts.${idx}" rows="3">${escapeHtml(fact)}</textarea>
            </div>
          </div>`
        )
        .join("")}
    `;

    document.getElementById("add-fact-btn")?.addEventListener("click", () => {
      siteData.facts.unshift("A new fun fact about what I’m building or learning right now.");
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".up-fact-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx <= 0 || idx >= siteData.facts.length) return;
        const tmp = siteData.facts[idx - 1];
        siteData.facts[idx - 1] = siteData.facts[idx];
        siteData.facts[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".down-fact-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx < 0 || idx >= siteData.facts.length - 1) return;
        const tmp = siteData.facts[idx + 1];
        siteData.facts[idx + 1] = siteData.facts[idx];
        siteData.facts[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".delete-fact-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (siteData.facts.length <= 1) return;
        siteData.facts.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });
  }

  const autoResizeTextarea = (ta) => {
    ta.style.height = "auto";
    ta.style.height = `${Math.max(68, ta.scrollHeight + 2)}px`;
  };

  container.querySelectorAll("textarea").forEach((ta) => {
    autoResizeTextarea(ta);
    ta.addEventListener("input", () => autoResizeTextarea(ta));
  });

  // Bind live input changes
  container.querySelectorAll("[data-bind]").forEach((input) => {
    input.addEventListener("input", () => {
      if (!isOwnerAuthenticated()) return;
      const path = input.getAttribute("data-bind");
      setByPath(siteData, path, input.value);
      saveSiteDataDraft(false);
      renderActivePage();
    });
  });
}

/* ===== Global Keyboard Shortcuts ===== */
function initKeyboardShortcuts() {
  if (window.__skShortcutsBound) return;
  window.__skShortcutsBound = true;

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const modal = document.getElementById("sxshell-modal");
      if (modal) {
        const nextOpen = !modal.classList.contains("open");
        modal.classList.toggle("open", nextOpen);
        document.getElementById("open-terminal-btn")?.setAttribute("aria-expanded", String(nextOpen));
        if (nextOpen) {
          setTimeout(() => document.getElementById("term-input")?.focus(), 50);
        }
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "e") {
      e.preventDefault();
      openOwnerEditFlow();
    } else if (e.key === "Escape") {
      document.getElementById("sxshell-modal")?.classList.remove("open");
      document.getElementById("owner-auth-modal")?.classList.remove("open");
      document.getElementById("studio-drawer")?.classList.remove("open");
      document.getElementById("open-terminal-btn")?.setAttribute("aria-expanded", "false");
      document.getElementById("open-studio-btn")?.setAttribute("aria-expanded", "false");
    }
  });
}

/* ===== Synchronous Bootstrap + Async Data Hydration ===== */
function bootstrapSite() {
  // 1. Apply theme & bind header controls immediately (synchronously)
  initTheme();
  injectTerminalModal();
  injectAuthAndStudioModals();
  initKeyboardShortcuts();

  // 2. If owner has an active authenticated session and an unsaved local draft, load draft
  let hasUnsavedDraft = false;
  if (isOwnerAuthenticated()) {
    try {
      hasUnsavedDraft = sessionStorage.getItem(DRAFT_DIRTY_KEY) === "true";
      const savedDraft = localStorage.getItem(STORAGE_KEY);
      if (hasUnsavedDraft && savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed && parsed.home && parsed.projects) {
          siteData = parsed;
        }
      }
    } catch (_) {}
  }

  // 3. Render active page and bind all page interactions immediately
  renderActivePage();

  // 4. Fetch latest published data.json in background
  fetch("data.json?v=2.4.0", { cache: "no-store" })
    .then((res) => (res.ok ? res.json() : null))
    .then((json) => {
      if (json && json.home && json.projects && !hasUnsavedDraft) {
        siteData = json;
        renderActivePage();
        if (document.getElementById("studio-drawer")?.classList.contains("open")) {
          renderStudioBody();
        }
      }
    })
    .catch(() => {
      // Uses DEFAULT_DATA when offline or on file:// protocol
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrapSite);
} else {
  bootstrapSite();
}
