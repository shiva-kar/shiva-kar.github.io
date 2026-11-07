const STORAGE_KEY = "sk_site_data_v6";
const DRAFT_DIRTY_KEY = "sk_site_draft_dirty_v6";
const THEME_KEY = "sk_site_theme";
const AUTH_SESSION_KEY = "sk_owner_gh_session";
const EXPECTED_OWNER = "shiva-kar";
const EXPECTED_REPO = "shiva-kar/shiva-kar.github.io";

const DEFAULT_DATA = {
  "meta": {
    "brand": "SK",
    "name": "Shiva Kar",
    "eyebrow": "Java Backend Developer · BCA Student",
    "location": "Hojai, Assam, India",
    "accentColor": "#39745a",
    "resumeUrl": "Shiva_Kar_Resume.pdf?v=3.0.0",
    "githubRepo": "shiva-kar/shiva-kar.github.io"
  },
  "contact": {
    "email": "sksmarttech48@gmail.com",
    "phone": "+91 9101488645",
    "github": "https://github.com/shiva-kar",
    "linkedin": "https://linkedin.com/in/shiva-kar",
    "portfolio": "https://shivakar.me",
    "location": "Hojai, Assam, India"
  },
  "home": {
    "headlinePrefix": "Hi, I'm Shiva Kar.",
    "headlineAccent": "Building backend applications with Java and Spring Boot.",
    "intro": "I'm a Computer Science undergraduate at Amity University Online, focused on Java backend engineering. I build REST-based applications, work with databases and backend infrastructure, and contribute to the Godot Engine open-source project.",
    "primaryCta": {
      "label": "View Projects",
      "href": "projects.html"
    },
    "secondaryCta": {
      "label": "GitHub Profile",
      "href": "https://github.com/shiva-kar"
    },
    "note": "I'm interested in Java backend development opportunities, particularly internships and early-career software engineering roles.",
    "highlights": [
      {
        "label": "BCA Computer Science",
        "detail": "CGPA 8.84/10"
      },
      {
        "label": "6 Merged PRs",
        "detail": "Godot Engine"
      },
      {
        "label": "Java Backend",
        "detail": "Spring Boot · PostgreSQL"
      },
      {
        "label": "Based in",
        "detail": "Hojai, Assam, India"
      }
    ],
    "cardsKicker": "THREE ENGINEERING AREAS",
    "cardsTitle": "What I work on",
    "cards": [
      {
        "number": "01 / BACKEND",
        "title": "Java Backend Engineering",
        "text": "Spring Boot REST APIs, PostgreSQL, Redis, JPA/Hibernate, authentication, transaction management, and automated testing.",
        "linkText": "View projects →",
        "href": "projects.html"
      },
      {
        "number": "02 / SYSTEMS",
        "title": "Systems Programming",
        "text": "C, POSIX system calls, process management, pipelines, I/O redirection, and operating systems fundamentals.",
        "linkText": "View SXSHELL →",
        "href": "https://github.com/shiva-kar/SXSHELL-unix-like-shell"
      },
      {
        "number": "03 / OPEN SOURCE",
        "title": "Open-Source Development",
        "text": "15 pull requests submitted to Godot Engine — 6 merged, 7 open, 2 closed. Contributions span the editor, GUI, GDScript, and web platform.",
        "linkText": "Open source →",
        "href": "opensource.html"
      }
    ],
    "visibility": {
      "showHighlights": true,
      "showCards": true,
      "showSkills": true,
      "showFeaturedProjects": true,
      "showOpenSourcePreview": true,
      "showEducationPreview": true,
      "showContact": true
    }
  },
  "facts": [
    {
      "text": "I've submitted 15 pull requests to Godot Engine — 6 merged, 7 open, and 2 closed — across editor, GUI, GDScript, and web platform areas.",
      "enabled": true
    },
    {
      "text": "I built SXSHELL, a modular Unix-like shell in C with 7 modules (~550 lines), pipelines, I/O redirection, and POSIX system calls.",
      "enabled": true
    },
    {
      "text": "My E-Commerce Backend API implements transactional order processing with concurrency-safe inventory reservation.",
      "enabled": true
    },
    {
      "text": "The API Rate Limiter uses Redis-backed Token Bucket algorithm with atomic Lua scripts for concurrent request handling.",
      "enabled": true
    },
    {
      "text": "I maintain an 8.84 CGPA in my BCA degree at Amity University Online alongside Harvard CS50x and CS50 SQL certifications.",
      "enabled": true
    },
    {
      "text": "One of my Godot Engine regression fixes (#124170, script editor tooltip positioning) was merged 33 hours after submission.",
      "enabled": true
    },
    {
      "text": "Working across Java Spring Boot, C systems programming, and open-source engine internals gives me different perspectives on software design.",
      "enabled": true
    }
  ],
  "skills": {
    "eyebrow": "TECHNICAL SKILLS",
    "title": "Technologies and tools",
    "intro": "Working primarily with Java and Spring Boot, with additional experience in C, SQL, and POSIX systems programming.",
    "categories": [
      {
        "name": "Languages",
        "items": [
          "Java",
          "C",
          "SQL"
        ]
      },
      {
        "name": "Java & Backend Development",
        "items": [
          "Core Java",
          "Object-Oriented Programming",
          "Collections",
          "Generics",
          "Multithreading",
          "Spring Boot",
          "Spring Framework",
          "Spring MVC",
          "Spring Data JPA",
          "Hibernate",
          "Spring Security",
          "REST APIs",
          "JWT",
          "Dependency Injection",
          "Transaction Management",
          "Exception Handling"
        ]
      },
      {
        "name": "Databases",
        "items": [
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Database Design"
        ]
      },
      {
        "name": "Testing & Development Tools",
        "items": [
          "JUnit 5",
          "Mockito",
          "Spring Boot Test",
          "Integration Testing",
          "Maven",
          "Git",
          "GitHub",
          "Docker",
          "Docker Compose",
          "Flyway",
          "OpenAPI"
        ]
      },
      {
        "name": "Computer Science & Systems",
        "items": [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Computer Networks",
          "Linux",
          "POSIX System Calls",
          "Sockets",
          "Memory Management",
          "Concurrency"
        ]
      }
    ]
  },
  "projects": {
    "eyebrow": "PROJECTS",
    "title": "What I've built",
    "intro": "Two Java backend applications, a systems programming project, and open-source contributions to a large C++ codebase.",
    "defaultSort": "pinned",
    "items": [
      {
        "index": "PROJECT 01",
        "title": "E-Commerce Backend API",
        "badge": "Java · Spring Boot · PostgreSQL",
        "category": "backend",
        "status": "Built",
        "pinned": true,
        "featured": true,
        "updatedAt": "",
        "description": "An e-commerce backend built with Java and Spring Boot, providing REST APIs for product management, shopping carts, orders, and user accounts, with PostgreSQL persistence and secure authentication.",
        "learning": "Layered controller-service-repository architecture with transactional order processing and concurrency-safe inventory reservation.",
        "underTheHood": [
          "Layered REST API architecture with DTO-based request/response handling, validation, and centralized exception handling",
          "Spring Security with JWT authentication, password hashing, and role-based authorization for protected endpoints",
          "Spring Data JPA with Hibernate, Flyway migrations, relational entity relationships, and database constraints",
          "Transactional inventory reservation with locking-based concurrency control to prevent overselling under simultaneous requests",
          "JUnit 5 and Mockito for service-layer testing, integration tests, and transaction consistency verification"
        ],
        "repoUrl": "",
        "docsUrl": "",
        "buttonStyle": "dark",
        "id": "ecommerce-api",
        "tags": [
          "Java",
          "Spring Boot",
          "Spring Security",
          "PostgreSQL",
          "Flyway",
          "Docker Compose"
        ],
        "liveUrl": "",
        "visible": true
      },
      {
        "index": "PROJECT 02",
        "title": "API Rate Limiter & Usage Metering Service",
        "badge": "Java · Spring Boot · Redis",
        "category": "backend",
        "status": "Built",
        "pinned": true,
        "featured": true,
        "updatedAt": "",
        "description": "A Redis-backed API rate-limiting service using the Token Bucket algorithm to enforce configurable per-user and per-API-key request limits, with usage metering and concurrency-safe request handling.",
        "learning": "Backend infrastructure and algorithmic engineering — not a CRUD application, but a service focused on algorithms, atomic operations, concurrency, and HTTP behaviour.",
        "underTheHood": [
          "Token Bucket algorithm with configurable request limits, per-user and per-API-key restrictions, and controlled burst handling",
          "Redis-backed rate-limit state with TTL-based expiration and atomic Lua scripts for concurrent request handling",
          "HTTP 429 Too Many Requests responses, Retry-After headers, rate-limit headers, and usage metering",
          "JUnit 5 and Mockito for boundary tests, expiration tests, and concurrent-burst test scenarios"
        ],
        "repoUrl": "",
        "docsUrl": "",
        "buttonStyle": "dark",
        "id": "rate-limiter",
        "tags": [
          "Java",
          "Spring Boot",
          "Redis",
          "Token Bucket",
          "Docker"
        ],
        "liveUrl": "",
        "visible": true
      },
      {
        "index": "PROJECT 03",
        "title": "SXSHELL — Unix-like Shell",
        "badge": "C · POSIX · CMake",
        "category": "systems",
        "status": "Built",
        "pinned": false,
        "featured": true,
        "updatedAt": "",
        "description": "A modular Unix-like shell implemented in C, with command parsing, process execution, pipelines, and I/O redirection using POSIX system calls.",
        "learning": "Demonstrates systems programming fundamentals — process management, file descriptors, and low-level command execution.",
        "underTheHood": [
          "Seven modules (~550 lines) with separation of command parsing and process execution",
          "Pipelines and I/O redirection using fork(), execv(), and dup2()",
          "Built-in commands, executable lookup, $PATH resolution, and quote/escape parsing"
        ],
        "repoUrl": "https://github.com/shiva-kar/SXSHELL-unix-like-shell",
        "buttonStyle": "outline",
        "id": "sxshell",
        "tags": [
          "C",
          "POSIX",
          "CMake",
          "Linux"
        ],
        "liveUrl": "",
        "visible": true
      }
    ]
  },
  "opensource": {
    "eyebrow": "OPEN-SOURCE CONTRIBUTIONS",
    "title": "Godot Engine",
    "intro": "I contribute to the Godot Engine open-source project, working on editor, GUI, GDScript, and web platform issues. This involves reading and modifying a large C++ codebase, debugging regressions, and responding to maintainer code review.",
    "repo": "https://github.com/godotengine/godot",
    "prsUrl": "https://github.com/godotengine/godot/pulls?q=is%3Apr+author%3Ashiva-kar",
    "dates": "August 2026 – Present",
    "stats": {
      "submitted": 15,
      "merged": 6,
      "open": 7,
      "closed": 2
    },
    "selectedPRs": [
      {
        "title": "Integer zoom and fractional display scaling",
        "description": "Fixed zoom behaviour involving integer zoom and fractional display scales.",
        "pr": 124942,
        "status": "merged",
        "url": "https://github.com/godotengine/godot/pull/124942",
        "featured": true
      },
      {
        "title": "Save on Focus Loss — deleted scene recreation",
        "description": "Fixed an issue where the Save on Focus Loss setting recreated deleted open scenes.",
        "pr": 124931,
        "status": "merged",
        "url": "https://github.com/godotengine/godot/pull/124931",
        "featured": true
      },
      {
        "title": "Resource reference count management",
        "description": "Fixed resource reference counts not updating when resetting a property.",
        "pr": 124789,
        "status": "merged",
        "url": "https://github.com/godotengine/godot/pull/124789",
        "featured": true
      },
      {
        "title": "Script editor tooltip positioning",
        "description": "Fixed script tooltips appearing outside the script editor boundaries.",
        "pr": 124170,
        "status": "merged",
        "url": "https://github.com/godotengine/godot/pull/124170",
        "featured": true
      },
      {
        "title": "Tooltip text interaction",
        "description": "Disabled text selection in diagnostic tooltips to prevent unintended interaction.",
        "pr": 124054,
        "status": "merged",
        "url": "https://github.com/godotengine/godot/pull/124054",
        "featured": true
      },
      {
        "title": "Web Editor file deletion",
        "description": "Fixed a file-deletion error in the Web Editor.",
        "pr": 123035,
        "status": "merged",
        "url": "https://github.com/godotengine/godot/pull/123035",
        "featured": true
      },
      {
        "title": "Diagnostic tooltip restructuring",
        "description": "Proposed a revision for a diagnostic tooltip feature following review from four maintainers: moved row construction into a dedicated class and fixed hover-state bugs.",
        "pr": 123310,
        "status": "open",
        "url": "https://github.com/godotengine/godot/pull/123310",
        "featured": true
      }
    ],
    "orgName": "Godot Engine",
    "areas": "Editor, GUI, GDScript, Web Platform",
    "visible": true
  },
  "about": {
    "eyebrow": "ABOUT",
    "title": "About me",
    "intro": "I'm a BCA Computer Science student at Amity University Online with a focus on Java backend development.",
    "approachKicker": "BACKGROUND",
    "approachTitle": "What I work on",
    "approachParagraphs": [
      "My work includes building Spring Boot applications, working with PostgreSQL and Redis, and implementing backend functionality involving authentication, data persistence, transactions, and concurrency.",
      "Alongside application development, I contribute to the Godot Engine open-source project, where I have worked on editor, GUI, and web-platform issues. I have also built SXSHELL, a Unix-like shell in C using POSIX system calls.",
      "I'm particularly interested in backend engineering, software design, debugging, and understanding how applications behave beyond their frameworks."
    ],
    "currentlyKicker": "CAREER DIRECTION",
    "currentlyTitle": "What I'm looking for",
    "currentlyItems": [
      {
        "label": "Target roles",
        "text": "Java Developer Intern, Java Backend Developer Intern, Spring Boot Developer Intern, or Backend Software Engineer Intern."
      },
      {
        "label": "Primary focus",
        "text": "Java backend engineering — Spring Boot, REST APIs, PostgreSQL, Redis, authentication, and automated testing."
      },
      {
        "label": "Open-source experience",
        "text": "Contributor to Godot Engine with 15 submitted PRs (6 merged, 7 open, 2 closed) across editor, GUI, GDScript, and web platform."
      },
      {
        "label": "Systems programming",
        "text": "SXSHELL (Unix-like shell in C), POSIX system calls, process management, and operating systems fundamentals."
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Computer Applications (BCA), Computer Science",
        "school": "Amity University Online",
        "date": "Jul 2025 – Nov 2028 (Expected)",
        "detail": "CGPA: 8.84/10",
        "coursework": [
          "Object-Oriented Programming (Java)",
          "Data Structures using C",
          "Operating Systems",
          "Database Management Systems",
          "Computer Networks",
          "Unix and Shell Programming"
        ]
      },
      {
        "degree": "Class XII, Science",
        "school": "Deshabandhu Bidyapith H.S. School, Hojai, Assam",
        "date": "2022–2025",
        "detail": "68%",
        "coursework": []
      }
    ],
    "certifications": [
      {
        "name": "CS50x: Introduction to Computer Science",
        "issuer": "Harvard University (CS50)",
        "status": "Completed",
        "url": ""
      },
      {
        "name": "CS50 SQL: Introduction to Databases with SQL",
        "issuer": "Harvard University (CS50)",
        "status": "Completed",
        "url": ""
      }
    ],
    "languages": [
      {
        "language": "Bengali",
        "proficiency": "Native"
      },
      {
        "language": "Hindi",
        "proficiency": "Professional"
      },
      {
        "language": "English",
        "proficiency": "Professional"
      }
    ]
  },
  "schemaVersion": 6
};

const SKILL_NOTES = {
  "Java": "Core language for my backend path — OOP design, collections, multithreading, and Spring Boot services.",
  "Spring Boot": "Building layered enterprise backends with dependency injection, Spring Data JPA, and Spring Security.",
  "REST APIs": "Designing predictable endpoints, HTTP status codes, pagination, and request validation.",
  "SQL": "Relational schema modeling, joins, indexing, and queries (certified via Harvard CS50 SQL).",
  "MySQL": "Relational database used for backend persistence, constraints, and relational queries.",
  "PostgreSQL": "Primary relational database for my Spring Boot backend projects, with Flyway migrations.",
  "Redis": "In-memory caching and distributed rate limiting with TTL-based expiration and atomic Lua scripts.",
  "Docker": "Containerizing backend services and PostgreSQL databases with Docker Compose.",
  "C": "Used to build SXSHELL (7 modules, ~550 lines) with process management, pipes, and I/O redirection.",
  "POSIX": "Direct experience with fork(), execv(), dup2(), pipes, signals, and system calls.",
  "Linux": "Development environment for systems programming, shell scripting, and process debugging.",
  "Git": "Version control for open-source contributions (Godot Engine) and personal projects.",
  "Godot": "Open Source Contributor to Godot Engine — 6 merged pull requests out of 15 submitted.",
  "Open Source": "15 submitted pull requests to Godot Engine (6 merged, 7 open, 2 closed) across editor, GUI, GDScript, and web platform."
};


function cloneData(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function normalizeAndMigrateSiteData(raw) {
  if (!raw || typeof raw !== "object") {
    raw = cloneData(DEFAULT_DATA);
  }
  const d = cloneData(raw);
  d.schemaVersion = 6;

  // meta
  d.meta = d.meta || {};
  d.meta.brand = d.meta.brand || "SK";
  d.meta.name = d.meta.name || "Shiva Kar";
  d.meta.eyebrow = d.meta.eyebrow || "Java Backend Developer · BCA Student";
  d.meta.location = d.meta.location || "Hojai, Assam, India";
  d.meta.accentColor = d.meta.accentColor || "#39745a";
  d.meta.resumeUrl = d.meta.resumeUrl || "Shiva_Kar_Resume.pdf?v=3.0.0";
  d.meta.githubRepo = d.meta.githubRepo || EXPECTED_REPO;

  // contact
  d.contact = d.contact || {};
  d.contact.email = d.contact.email || "sksmarttech48@gmail.com";
  d.contact.phone = d.contact.phone || "+91 9101488645";
  d.contact.github = d.contact.github || "https://github.com/shiva-kar";
  d.contact.linkedin = d.contact.linkedin || "https://linkedin.com/in/shiva-kar";
  d.contact.portfolio = d.contact.portfolio || "https://shivakar.me";
  d.contact.location = d.contact.location || "Hojai, Assam, India";

  // home
  d.home = d.home || {};
  d.home.headlinePrefix = d.home.headlinePrefix || "Hi, I'm Shiva Kar.";
  d.home.headlineAccent = d.home.headlineAccent || "Building backend applications with Java and Spring Boot.";
  d.home.intro = d.home.intro || "I'm a Computer Science undergraduate at Amity University Online, focused on Java backend engineering. I build REST-based applications, work with databases and backend infrastructure, and contribute to the Godot Engine open-source project.";
  d.home.primaryCta = d.home.primaryCta || { label: "View Projects", href: "projects.html" };
  d.home.secondaryCta = d.home.secondaryCta || { label: "GitHub Profile", href: "https://github.com/shiva-kar" };
  d.home.note = d.home.note || "I'm interested in Java backend development opportunities, particularly internships and early-career software engineering roles.";
  d.home.highlights = Array.isArray(d.home.highlights) && d.home.highlights.length > 0 ? d.home.highlights : cloneData(DEFAULT_DATA.home.highlights);
  d.home.cardsKicker = d.home.cardsKicker || "THREE ENGINEERING AREAS";
  d.home.cardsTitle = d.home.cardsTitle || "What I work on";
  d.home.cards = Array.isArray(d.home.cards) && d.home.cards.length > 0 ? d.home.cards : cloneData(DEFAULT_DATA.home.cards);
  d.home.visibility = Object.assign({
    showHighlights: true,
    showCards: true,
    showSkills: true,
    showFeaturedProjects: true,
    showOpenSourcePreview: true,
    showEducationPreview: true,
    showContact: true
  }, d.home.visibility || {});

  // facts: normalize strings into objects { text, enabled }
  if (Array.isArray(d.facts)) {
    d.facts = d.facts.map((f) => {
      if (typeof f === "string") return { text: f, enabled: true };
      if (f && typeof f === "object") {
        return {
          text: String(f.text || "").trim(),
          enabled: f.enabled !== false
        };
      }
      return { text: "", enabled: true };
    }).filter((f) => f.text.length > 0);
  } else {
    d.facts = cloneData(DEFAULT_DATA.facts);
  }

  // skills
  d.skills = d.skills || {};
  d.skills.eyebrow = d.skills.eyebrow || "TECHNICAL SKILLS";
  d.skills.title = d.skills.title || "Technologies and tools";
  d.skills.intro = d.skills.intro || "Working primarily with Java and Spring Boot, with additional experience in C, SQL, and POSIX systems programming.";
  if (!Array.isArray(d.skills.categories) || d.skills.categories.length === 0) {
    d.skills.categories = cloneData(DEFAULT_DATA.skills.categories);
  } else {
    d.skills.categories = d.skills.categories.map((c) => ({
      name: String(c.name || "Category").trim(),
      items: Array.isArray(c.items) ? c.items.map((s) => String(s).trim()).filter(Boolean) : []
    }));
  }

  // projects
  d.projects = d.projects || {};
  d.projects.eyebrow = d.projects.eyebrow || "PROJECTS";
  d.projects.title = d.projects.title || "What I've built";
  d.projects.intro = d.projects.intro || "Two Java backend applications, a systems programming project, and open-source contributions to a large C++ codebase.";
  d.projects.defaultSort = d.projects.defaultSort || "pinned";
  if (!Array.isArray(d.projects.items) || d.projects.items.length === 0) {
    d.projects.items = cloneData(DEFAULT_DATA.projects.items);
  } else {
    d.projects.items = d.projects.items.map((p, idx) => {
      const id = p.id || String(p.title || `project-${idx + 1}`).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return {
        id,
        index: p.index || `PROJECT ${String(idx + 1).padStart(2, "0")}`,
        title: String(p.title || "Untitled Project").trim(),
        badge: String(p.badge || "Java · Spring Boot").trim(),
        tags: Array.isArray(p.tags) ? p.tags : (p.badge ? p.badge.split("·").map((t) => t.trim()).filter(Boolean) : []),
        category: p.category || "backend",
        status: p.status || "Built",
        pinned: Boolean(p.pinned),
        featured: p.featured !== false,
        visible: p.visible !== false,
        updatedAt: p.updatedAt || "",
        description: String(p.description || "").trim(),
        learning: String(p.learning || "").trim(),
        underTheHood: Array.isArray(p.underTheHood) ? p.underTheHood.map((u) => String(u).trim()).filter(Boolean) : [],
        repoUrl: String(p.repoUrl || "").trim(),
        docsUrl: String(p.docsUrl || "").trim(),
        liveUrl: String(p.liveUrl || "").trim(),
        buttonStyle: p.buttonStyle || "dark"
      };
    });
  }

  // opensource
  d.opensource = d.opensource || {};
  d.opensource.eyebrow = d.opensource.eyebrow || "OPEN-SOURCE CONTRIBUTIONS";
  d.opensource.title = d.opensource.title || "Godot Engine";
  d.opensource.orgName = d.opensource.orgName || "Godot Engine";
  d.opensource.areas = d.opensource.areas || "Editor, GUI, GDScript, Web Platform";
  d.opensource.intro = d.opensource.intro || "I contribute to the Godot Engine open-source project, working on editor, GUI, GDScript, and web platform issues. This involves reading and modifying a large C++ codebase, debugging regressions, and responding to maintainer code review.";
  d.opensource.repo = d.opensource.repo || "https://github.com/godotengine/godot";
  d.opensource.prsUrl = d.opensource.prsUrl || "https://github.com/godotengine/godot/pulls?q=is%3Apr+author%3Ashiva-kar";
  d.opensource.dates = d.opensource.dates || "August 2026 – Present";
  d.opensource.visible = d.opensource.visible !== false;
  d.opensource.stats = Object.assign({
    submitted: 15,
    merged: 6,
    open: 7,
    closed: 2
  }, d.opensource.stats || {});
  if (!Array.isArray(d.opensource.selectedPRs)) {
    d.opensource.selectedPRs = cloneData(DEFAULT_DATA.opensource.selectedPRs);
  } else {
    d.opensource.selectedPRs = d.opensource.selectedPRs.map((pr) => {
      const num = Number(pr.pr) || 0;
      return {
        pr: num,
        title: String(pr.title || "").trim(),
        description: String(pr.description || "").trim(),
        status: String(pr.status || "merged").toLowerCase(),
        url: pr.url || (num ? `https://github.com/godotengine/godot/pull/${num}` : ""),
        featured: pr.featured !== false
      };
    });
  }

  // about
  d.about = d.about || {};
  d.about.eyebrow = d.about.eyebrow || "ABOUT";
  d.about.title = d.about.title || "About me";
  d.about.intro = d.about.intro || "I'm a BCA Computer Science student at Amity University Online with a focus on Java backend development.";
  d.about.approachKicker = d.about.approachKicker || "BACKGROUND";
  d.about.approachTitle = d.about.approachTitle || "What I work on";
  d.about.approachParagraphs = Array.isArray(d.about.approachParagraphs) ? d.about.approachParagraphs : cloneData(DEFAULT_DATA.about.approachParagraphs);
  d.about.currentlyKicker = d.about.currentlyKicker || "CAREER DIRECTION";
  d.about.currentlyTitle = d.about.currentlyTitle || "What I'm looking for";
  d.about.currentlyItems = Array.isArray(d.about.currentlyItems) ? d.about.currentlyItems : cloneData(DEFAULT_DATA.about.currentlyItems);
  d.about.education = Array.isArray(d.about.education) ? d.about.education : cloneData(DEFAULT_DATA.about.education);
  d.about.certifications = Array.isArray(d.about.certifications) ? d.about.certifications : cloneData(DEFAULT_DATA.about.certifications);
  d.about.languages = Array.isArray(d.about.languages) ? d.about.languages : cloneData(DEFAULT_DATA.about.languages);

  return d;
}

function migrateStorageToV6() {
  try {
    const v6Data = localStorage.getItem(STORAGE_KEY);
    if (!v6Data) {
      const olderData = localStorage.getItem("sk_site_data_v5") || localStorage.getItem("sk_site_data_v4");
      if (olderData) {
        const parsed = JSON.parse(olderData);
        const migrated = normalizeAndMigrateSiteData(parsed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      }
    }
    const v6Dirty = sessionStorage.getItem(DRAFT_DIRTY_KEY);
    if (!v6Dirty) {
      const olderDirty = sessionStorage.getItem("sk_site_draft_dirty_v5") || sessionStorage.getItem("sk_site_draft_dirty_v4");
      if (olderDirty) {
        sessionStorage.setItem(DRAFT_DIRTY_KEY, olderDirty);
      }
    }
  } catch (err) {
    console.warn("Storage migration warning:", err);
  }
}

let siteData = cloneData(DEFAULT_DATA);
let currentFactIndex = 0;
let activeProjectFilter = "all";
let activeProjectSort = null;
let projectSearchQuery = "";
let activeStudioTab = "home";

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
  if (!Array.isArray(data.facts) || data.facts.length === 0) {
    return "At least one fun fact is required.";
  }
  const enabledFacts = data.facts.filter((f) => (typeof f === "object" ? f.enabled !== false && f.text?.trim() : String(f).trim()));
  if (enabledFacts.length === 0) {
    return "At least one enabled, non-empty fun fact is required.";
  }
  if (!Array.isArray(data.projects?.items) || data.projects.items.length === 0) {
    return "At least one project is required.";
  }
  const seenIds = new Set();
  for (let i = 0; i < data.projects.items.length; i++) {
    const p = data.projects.items[i];
    if (!p.title?.trim()) return `Project #${i + 1} is missing a title.`;
    if (!p.description?.trim()) return `Project "${p.title}" is missing a description.`;
    if (!p.badge?.trim()) return `Project "${p.title}" is missing a technology badge.`;
    if (p.id) {
      if (seenIds.has(p.id)) {
        return `Duplicate project ID "${p.id}". Each project must have a unique ID.`;
      }
      seenIds.add(p.id);
    }
    if (p.repoUrl && !/^https?:\/\/.+/i.test(p.repoUrl.trim())) {
      return `Project "${p.title}" has an invalid repository URL (must start with http:// or https://).`;
    }
    if (p.liveUrl && !/^https?:\/\/.+/i.test(p.liveUrl.trim())) {
      return `Project "${p.title}" has an invalid live demo URL (must start with http:// or https://).`;
    }
    if (p.docsUrl && !/^https?:\/\/.+/i.test(p.docsUrl.trim())) {
      return `Project "${p.title}" has an invalid documentation URL (must start with http:// or https://).`;
    }
  }
  if (!Array.isArray(data.skills?.categories) || data.skills.categories.length === 0) {
    return "At least one skills category is required.";
  }
  for (let i = 0; i < data.skills.categories.length; i++) {
    const cat = data.skills.categories[i];
    if (!cat.name?.trim()) return `Skill category #${i + 1} is missing a name.`;
    if (!Array.isArray(cat.items) || cat.items.length === 0) return `Skill category "${cat.name}" has no skills listed.`;
  }
  if (data.opensource?.stats) {
    const { submitted, merged, open, closed } = data.opensource.stats;
    if (submitted < 0 || merged < 0 || open < 0 || closed < 0) {
      return "Open-source contribution stats cannot be negative.";
    }
  }
  if (data.contact?.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.email.trim())) {
    return "Contact email address format is invalid.";
  }
  if (data.contact?.github && !/^https?:\/\/.+/i.test(data.contact.github.trim())) {
    return "Contact GitHub URL must start with http:// or https://";
  }
  if (data.contact?.linkedin && !/^https?:\/\/.+/i.test(data.contact.linkedin.trim())) {
    return "Contact LinkedIn URL must start with http:// or https://";
  }
  return null;
}

function updateDraftStatusPill(status) {
  const pill = document.getElementById("studio-draft-pill");
  if (!pill) return;
  pill.className = `studio-draft-pill ${status}`;
  if (status === "saved") {
    pill.textContent = "Saved locally";
  } else if (status === "dirty") {
    pill.textContent = "Unsaved draft";
  } else if (status === "publishing") {
    pill.textContent = "Publishing...";
  }
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

  updateDraftStatusPill("publishing");

  let getRes;
  try {
    getRes = await fetch(apiUrl, { headers, cache: "no-store" });
  } catch (_) {
    updateDraftStatusPill("dirty");
    throw new Error("Network error connecting to GitHub. Please check your connection.");
  }

  if (getRes.status === 401) {
    updateDraftStatusPill("dirty");
    throw new Error("GitHub token has expired or is invalid (HTTP 401). Please sign out and sign in again.");
  }
  if (getRes.status === 403) {
    updateDraftStatusPill("dirty");
    throw new Error(`Account @${session.login} lacks write permissions for ${repoName} (HTTP 403). Ensure token has Contents: Read & Write.`);
  }
  if (getRes.status === 404) {
    updateDraftStatusPill("dirty");
    throw new Error(`Repository or data.json not found on GitHub at ${repoName} (HTTP 404).`);
  }
  if (!getRes.ok) {
    updateDraftStatusPill("dirty");
    throw new Error(`Failed to fetch current data.json metadata from GitHub (HTTP ${getRes.status}).`);
  }

  const fileMeta = await getRes.json();
  const formattedJson = JSON.stringify(siteData, null, 2) + "\n";

  let putRes;
  try {
    putRes = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: "chore(content): update portfolio data.json via owner editor",
        content: utf8ToBase64(formattedJson),
        sha: fileMeta.sha,
        branch: "main"
      })
    });
  } catch (_) {
    updateDraftStatusPill("dirty");
    throw new Error("Network error publishing changes to GitHub. Please check your connection.");
  }

  if (!putRes.ok) {
    updateDraftStatusPill("dirty");
    let errDetail = `HTTP ${putRes.status}`;
    try {
      const errJson = await putRes.json();
      if (errJson.message) errDetail = errJson.message;
    } catch (_) {}
    if (putRes.status === 409) {
      throw new Error("Conflict (HTTP 409): data.json was updated on GitHub by another commit. Please reset draft or refresh before publishing.");
    }
    throw new Error(`GitHub publish failed: ${errDetail}`);
  }

  const result = await putRes.json();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    sessionStorage.removeItem(DRAFT_DIRTY_KEY);
    updateDraftStatusPill("saved");
  } catch (_) {}
  return result.commit?.sha ? result.commit.sha.slice(0, 7) : "latest";
}

function saveSiteDataDraft(notify = false) {
  if (!isOwnerAuthenticated()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    sessionStorage.setItem(DRAFT_DIRTY_KEY, "true");
    updateDraftStatusPill("dirty");
    if (notify) showToast("Draft saved in browser.");
  } catch (e) {
    console.error("Failed to save draft", e);
  }
}

function showStudioConfirmModal({ title, message, confirmBtnText = "Confirm", isDanger = false, onConfirm }) {
  let modal = document.getElementById("studio-confirm-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "studio-confirm-modal";
    modal.className = "studio-modal-backdrop";
    modal.innerHTML = `
      <div class="studio-modal-box" role="dialog" aria-modal="true" aria-labelledby="studio-confirm-title">
        <h4 class="studio-modal-title" id="studio-confirm-title"></h4>
        <div class="studio-modal-content" id="studio-confirm-msg"></div>
        <div class="studio-modal-actions">
          <button type="button" class="btn btn-outline-dark" id="studio-confirm-cancel">Cancel</button>
          <button type="button" class="btn btn-dark" id="studio-confirm-ok">Confirm</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const titleEl = document.getElementById("studio-confirm-title");
  const msgEl = document.getElementById("studio-confirm-msg");
  const okBtn = document.getElementById("studio-confirm-ok");
  const cancelBtn = document.getElementById("studio-confirm-cancel");

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.innerHTML = message;
  if (okBtn) {
    okBtn.textContent = confirmBtnText;
    okBtn.className = isDanger ? "btn btn-danger" : "btn btn-dark";
  }

  const closeModal = () => {
    modal.classList.remove("open");
  };

  const newOkBtn = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOkBtn, okBtn);
  newOkBtn.addEventListener("click", () => {
    closeModal();
    if (typeof onConfirm === "function") onConfirm();
  });

  const newCancelBtn = cancelBtn.cloneNode(true);
  cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
  newCancelBtn.addEventListener("click", closeModal);

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  modal.classList.add("open");
}

function handleStudioImportJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const rawText = e.target.result;
      const parsed = JSON.parse(rawText);
      const normalized = normalizeAndMigrateSiteData(parsed);
      const validationErr = validateSiteData(normalized);
      if (validationErr) {
        showToast("Validation Error: " + validationErr);
        return;
      }

      const projCount = normalized.projects?.items?.length || 0;
      const catCount = normalized.skills?.categories?.length || 0;
      const prCount = normalized.opensource?.selectedPRs?.length || 0;
      const factCount = normalized.facts?.length || 0;

      showStudioConfirmModal({
        title: "Import Portfolio Data?",
        message: `<p>You are about to import portfolio data from <strong>${escapeHtml(file.name)}</strong>.</p>
          <ul style="margin:10px 0;padding-left:18px;">
            <li><strong>${projCount}</strong> projects</li>
            <li><strong>${catCount}</strong> skill categories</li>
            <li><strong>${prCount}</strong> Godot PRs</li>
            <li><strong>${factCount}</strong> facts</li>
          </ul>
          <p style="color:var(--muted);font-size:0.8rem;">This will replace your current editor draft. You can review all sections before publishing to GitHub.</p>`,
        confirmBtnText: "Import & Apply",
        isDanger: false,
        onConfirm: () => {
          siteData = normalized;
          saveSiteDataDraft(true);
          updateDraftStatusPill("dirty");
          renderActivePage();
          renderStudioBody();
          showToast("Portfolio data imported successfully!");
        }
      });
    } catch (err) {
      showToast("Failed to parse JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

/* ===== Page Renderers ===== */
function renderCommon() {
  applyAccentColor(siteData.meta?.accentColor);
  const brandEl = document.getElementById("brand-text");
  if (brandEl && siteData.meta?.brand) {
    brandEl.textContent = siteData.meta.brand;
  }
  if (siteData.meta?.resumeUrl) {
    document.querySelectorAll('a[href*="Resume.pdf"]').forEach((a) => {
      a.href = siteData.meta.resumeUrl;
    });
  }
}

function renderHomePage() {
  const eyebrow = document.getElementById("hero-eyebrow");
  const prefix = document.getElementById("hero-headline-prefix");
  const accent = document.getElementById("hero-headline-accent");
  const intro = document.getElementById("hero-intro");
  const note = document.getElementById("hero-note");
  const kicker = document.getElementById("home-cards-kicker");
  const cardsTitle = document.getElementById("areas-title") || document.getElementById("interests-title");
  const grid = document.getElementById("home-cards-grid");

  if (eyebrow && siteData.meta?.eyebrow) eyebrow.textContent = siteData.meta.eyebrow;
  if (prefix && siteData.home?.headlinePrefix) prefix.textContent = siteData.home.headlinePrefix;
  if (accent && siteData.home?.headlineAccent) accent.textContent = siteData.home.headlineAccent;
  if (intro && siteData.home?.intro) intro.textContent = siteData.home.intro;
  if (note && siteData.home?.note) note.textContent = siteData.home.note;
  if (kicker && siteData.home?.cardsKicker) kicker.textContent = siteData.home.cardsKicker;
  if (cardsTitle && siteData.home?.cardsTitle) cardsTitle.textContent = siteData.home.cardsTitle;

  // Highlights Bar
  const highlightsEl = document.getElementById("hero-highlights");
  const highlightsSection = highlightsEl ? highlightsEl.closest(".highlights-bar") : null;
  if (highlightsSection) {
    highlightsSection.style.display = siteData.home?.visibility?.showHighlights === false ? "none" : "";
  }
  if (highlightsEl && Array.isArray(siteData.home?.highlights)) {
    highlightsEl.innerHTML = siteData.home.highlights
      .map(
        (h, idx) => `
        <div class="highlight-item">
          <span class="highlight-label" data-editable="home.highlights.${idx}.label">${escapeHtml(h.label)}</span>
          <span class="highlight-detail" data-editable="home.highlights.${idx}.detail">${escapeHtml(h.detail)}</span>
        </div>`
      )
      .join("");
  }

  // Focus Cards Grid
  const cardsSection = grid ? grid.closest(".section-block") : null;
  if (cardsSection) {
    cardsSection.style.display = siteData.home?.visibility?.showCards === false ? "none" : "";
  }
  if (grid && Array.isArray(siteData.home?.cards)) {
    grid.innerHTML = siteData.home.cards
      .map(
        (c, idx) => `
        <div class="col-md-4">
          <article class="card interest-card h-100">
            <div class="card-body">
              <span class="card-number" data-editable="home.cards.${idx}.number">${escapeHtml(c.number)}</span>
              <h3 class="card-title" data-editable="home.cards.${idx}.title">${escapeHtml(c.title)}</h3>
              <p class="card-text" data-editable="home.cards.${idx}.text">${escapeHtml(c.text)}</p>
              <a href="${escapeHtml(c.href)}" class="card-link">${escapeHtml(c.linkText || "View details →")}</a>
            </div>
          </article>
        </div>`
      )
      .join("");
  }

  // Skills Grid on Home
  const skillsGrid = document.getElementById("skills-grid");
  const skillsSection = skillsGrid ? skillsGrid.closest(".section-block") : null;
  if (skillsSection) {
    skillsSection.style.display = siteData.home?.visibility?.showSkills === false ? "none" : "";
  }
  if (skillsGrid && Array.isArray(siteData.skills?.categories)) {
    skillsGrid.innerHTML = siteData.skills.categories
      .map(
        (cat, cIdx) => `
        <div class="skill-category">
          <h3 class="skill-category-name" data-editable="skills.categories.${cIdx}.name">${escapeHtml(cat.name)}</h3>
          <div class="skill-chips">
            ${cat.items.map((it) => `<span class="skill-chip">${escapeHtml(it)}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");
  }

  // Visibilities for other homepage sections
  const featSection = document.getElementById("featured-projects-title")?.closest(".section-block");
  if (featSection) featSection.style.display = siteData.home?.visibility?.showFeaturedProjects === false ? "none" : "";

  const ossSection = document.getElementById("oss-preview-title")?.closest(".section-block");
  if (ossSection) ossSection.style.display = siteData.home?.visibility?.showOpenSourcePreview === false ? "none" : "";

  const eduSection = document.getElementById("edu-preview-title")?.closest(".section-block");
  if (eduSection) eduSection.style.display = siteData.home?.visibility?.showEducationPreview === false ? "none" : "";

  const contactSection = document.getElementById("contact");
  if (contactSection) contactSection.style.display = siteData.home?.visibility?.showContact === false ? "none" : "";

  initFunFactWidget();
}

function getActiveFacts() {
  if (!Array.isArray(siteData.facts) || siteData.facts.length === 0) {
    return DEFAULT_DATA.facts.map((f) => (typeof f === "object" ? f.text : f));
  }
  return siteData.facts
    .filter((f) => (typeof f === "object" ? f.enabled !== false && f.text?.trim() : String(f).trim()))
    .map((f) => (typeof f === "object" ? f.text.trim() : String(f).trim()));
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
  if (item.visible === false) return false;
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

  if (eyebrow) eyebrow.textContent = siteData.projects.eyebrow;
  if (title) title.textContent = siteData.projects.title;
  if (intro) intro.textContent = siteData.projects.intro;

  // Sync static project sections (ecommerce, ratelimiter, sxshell)
  const allItems = Array.isArray(siteData.projects?.items) ? siteData.projects.items : [];
  allItems.forEach((p) => {
    const sec = document.getElementById(p.id) || (p.id === "ecommerce-api" ? document.getElementById("ecommerce") : null) || (p.id === "rate-limiter" ? document.getElementById("ratelimiter") : null);
    if (sec) {
      sec.style.display = p.visible === false ? "none" : "";
      const secTitle = sec.querySelector("h2");
      if (secTitle) secTitle.textContent = p.title;
      const kicker = sec.querySelector(".section-kicker");
      if (kicker) kicker.textContent = `${p.index} · ${p.category.toUpperCase()}`;
      const chips = sec.querySelector(".skill-chips");
      if (chips && Array.isArray(p.tags) && p.tags.length) {
        chips.innerHTML = p.tags.map((t) => `<span class="skill-chip">${escapeHtml(t)}</span>`).join("");
      }
      const desc = sec.querySelector(".project-detail-body > p");
      if (desc) desc.textContent = p.description;
      const repoBtn = sec.querySelector(".project-detail-actions a, .project-actions a");
      if (repoBtn) {
        if (p.repoUrl) {
          repoBtn.href = p.repoUrl;
          repoBtn.style.display = "";
        } else {
          repoBtn.style.display = "none";
        }
      }
    }
  });

  const grid = document.getElementById("projects-grid-container");
  if (!grid) return;

  const countLabel = document.getElementById("project-count-label");
  const searchInput = document.getElementById("project-search-input");
  const sortSelect = document.getElementById("project-sort-select");

  const effectiveSort = activeProjectSort || siteData.projects.defaultSort || "pinned";
  if (sortSelect && sortSelect.value !== effectiveSort) {
    sortSelect.value = effectiveSort;
  }

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
            : "";

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
    });
  });

  if (sortSelect && !sortSelect.dataset.bound) {
    sortSelect.dataset.bound = "true";
    sortSelect.addEventListener("change", () => {
      activeProjectSort = sortSelect.value;
      renderProjectsPage();
    });
  }

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

function renderOpensourcePage() {
  const stats = siteData.opensource?.stats || { submitted: 15, merged: 6, open: 7, closed: 2 };
  const statNumbers = document.querySelectorAll(".oss-stats-bar .oss-stat-number");
  if (statNumbers.length >= 4) {
    statNumbers[0].textContent = stats.submitted;
    statNumbers[1].textContent = stats.merged;
    statNumbers[2].textContent = stats.open;
    statNumbers[3].textContent = stats.closed;
  }

  const prList = document.querySelector(".pr-list");
  if (prList && Array.isArray(siteData.opensource?.selectedPRs)) {
    prList.innerHTML = siteData.opensource.selectedPRs
      .map((pr) => {
        const isMerged = pr.status === "merged";
        const isOpen = pr.status === "open";
        const cardClass = isMerged ? "pr-merged" : isOpen ? "pr-open" : "pr-closed";
        const badgeClass = isMerged ? "pr-badge-merged" : isOpen ? "pr-badge-open" : "pr-badge-closed";
        const statusLabel = isMerged ? "Merged" : isOpen ? "Open" : "Closed";
        const prUrl = pr.url || `https://github.com/godotengine/godot/pull/${pr.pr}`;

        return `
        <article class="pr-card ${cardClass}">
          <div class="pr-card-header">
            <span class="pr-status-badge ${badgeClass}">${statusLabel}</span>
            <a href="${escapeHtml(prUrl)}" target="_blank" rel="noopener noreferrer" class="pr-number">#${pr.pr}</a>
          </div>
          <h3 class="pr-title">${escapeHtml(pr.title)}</h3>
          <p class="pr-desc">${escapeHtml(pr.description)}</p>
        </article>`;
      })
      .join("");
  }
}

function renderActivePage() {
  renderCommon();
  const page = document.body.getAttribute("data-page");
  if (page === "home") renderHomePage();
  else if (page === "interests") renderInterestsPage();
  else if (page === "projects") renderProjectsPage();
  else if (page === "opensource") renderOpensourcePage();
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
            "  whoami          — Short bio & specialization\n" +
            "  ls / pages      — List pages on this website\n" +
            "  cd <page>       — Navigate to home, projects, opensource, about, or resume\n" +
            "  resume          — Open Shiva_Kar_Resume.pdf in a new tab\n" +
            "  projects        — List engineering projects\n" +
            "  skills          — Print technical skills summary\n" +
            "  fact            — Print a random engineering fact\n" +
            "  contact         — Show email & GitHub/LinkedIn links\n" +
            "  theme           — Toggle light / dark theme\n" +
            "  edit            — Open Owner Portfolio Editor (requires owner sign-in)\n" +
            "  clear           — Clear terminal output"
        );
        break;
      case "whoami":
        printLine(`${siteData.meta?.name || "Shiva Kar"} (${siteData.meta?.eyebrow || "Java Backend Developer | BCA Student"})\n${siteData.home?.intro || ""}`);
        break;
      case "ls":
      case "pages":
        printLine("index.html (Home)   projects.html (Projects)   opensource.html (Open Source)   about.html (About)   Shiva_Kar_Resume.pdf");
        break;
      case "resume": {
        const resumeUrl = siteData.meta?.resumeUrl || "Shiva_Kar_Resume.pdf?v=3.0.0";
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
          projects: "projects.html",
          opensource: "opensource.html",
          godot: "opensource.html",
          about: "about.html",
          resume: siteData.meta?.resumeUrl || "Shiva_Kar_Resume.pdf?v=3.0.0"
        };
        if (map[target]) {
          printLine(`Navigating to ${map[target]}...`);
          setTimeout(() => {
            window.location.href = map[target];
          }, 200);
        } else {
          printLine(`cd: no such page '${args[0] || ""}'. Try: cd home | cd projects | cd opensource | cd about | cd resume`);
        }
        break;
      }
      case "projects":
        printLine(
          (siteData.projects?.items || [])
            .map((p) => `• [${p.status || "Built"}] ${p.title} (${p.badge}) — ${p.description}`)
            .join("\n")
        );
        break;
      case "skills":
        if (siteData.skills?.categories) {
          printLine(
            siteData.skills.categories
              .map((s) => `${s.name}\n  └── ${s.items.join(", ")}`)
              .join("\n")
          );
        } else if (siteData.interests?.skillEvidence) {
          printLine(
            siteData.interests.skillEvidence
              .map((s) => `${s.name}\n  └── ${s.evidence.join(", ")}`)
              .join("\n")
          );
        }
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

/* ===== Owner Authentication Modal & Owner Portfolio CMS Drawer ===== */
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
          Enter a GitHub Fine-Grained Personal Access Token with <code>Contents: Read &amp; Write</code> permission for <code>${EXPECTED_REPO}</code> to unlock the CMS and publish directly to GitHub.
        </p>
        <div class="auth-error-msg" id="auth-error-msg" role="alert"></div>
        <form id="owner-auth-form">
          <div class="studio-field">
            <label for="owner-gh-token-input">GitHub Personal Access Token</label>
            <input type="password" id="owner-gh-token-input" placeholder="github_pat_... or ghp_..." autocomplete="off" required />
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px;">
            <button type="submit" class="btn btn-dark" id="owner-auth-submit-btn">Verify &amp; Unlock CMS</button>
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
          submitBtn.textContent = "Verify & Unlock CMS";
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
        <h3><span style="color:var(--accent)">✎</span> Portfolio CMS</h3>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="studio-draft-pill saved" id="studio-draft-pill">Saved locally</span>
          <button type="button" class="tool-btn" id="close-studio-btn">✕</button>
        </div>
      </div>
      <div class="studio-auth-bar">
        <span id="studio-auth-status">Signed in as @${EXPECTED_OWNER}</span>
        <button type="button" class="tool-btn" id="studio-signout-btn" style="padding:2px 8px;font-size:0.72rem;">Sign Out</button>
      </div>
      <div class="studio-mode-bar">
        <div>
          <strong>Click-to-Edit on Page</strong>
          <div style="font-size:0.72rem;color:var(--muted);">Click outlined text on any page to edit directly</div>
        </div>
        <input type="checkbox" id="inline-edit-toggle" style="width:18px;height:18px;accent-color:var(--accent);cursor:pointer;" />
      </div>
      <div class="studio-tabs" id="studio-tabs">
        <button type="button" class="studio-tab active" data-tab="home">Home &amp; Style</button>
        <button type="button" class="studio-tab" data-tab="skills">Skills</button>
        <button type="button" class="studio-tab" data-tab="projects">Projects</button>
        <button type="button" class="studio-tab" data-tab="opensource">Open Source</button>
        <button type="button" class="studio-tab" data-tab="about">About &amp; Edu</button>
        <button type="button" class="studio-tab" data-tab="contact">Contact &amp; Links</button>
        <button type="button" class="studio-tab" data-tab="facts">Fun Facts</button>
      </div>
      <div class="studio-status-banner" id="studio-status-banner" role="status"></div>
      <div class="studio-body" id="studio-body"></div>
      <div class="studio-footer">
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="btn btn-dark" id="studio-publish-btn" style="padding:7px 11px;font-size:0.75rem;">Publish to GitHub ↑</button>
          <button type="button" class="btn btn-outline-dark" id="studio-download-btn" style="padding:7px 11px;font-size:0.75rem;">Download JSON ↓</button>
          <button type="button" class="btn btn-outline-dark" id="studio-import-btn" style="padding:7px 11px;font-size:0.75rem;">Import JSON ↑</button>
          <input type="file" id="studio-import-file" accept=".json" style="display:none;" />
        </div>
        <button type="button" class="tool-btn" id="studio-reset-btn" title="Discard draft and reload published data.json">Reset Draft</button>
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
        setStatusBanner(`Published to GitHub (commit ${shortSha})! Changes are live in data.json.`, "success");
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

    const importFileInput = document.getElementById("studio-import-file");
    document.getElementById("studio-import-btn")?.addEventListener("click", () => {
      importFileInput?.click();
    });
    importFileInput?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) {
        handleStudioImportJson(file);
        e.target.value = "";
      }
    });

    document.getElementById("studio-reset-btn")?.addEventListener("click", () => {
      showStudioConfirmModal({
        title: "Discard Draft Changes?",
        message: "Are you sure you want to discard your local draft changes and reload the published portfolio data from data.json?",
        confirmBtnText: "Discard & Reset",
        isDanger: true,
        onConfirm: () => {
          try {
            localStorage.removeItem(STORAGE_KEY);
            sessionStorage.removeItem(DRAFT_DIRTY_KEY);
          } catch (_) {}
          fetch("data.json?v=3.0.0", { cache: "no-store" })
            .then((res) => (res.ok ? res.json() : cloneData(DEFAULT_DATA)))
            .catch(() => cloneData(DEFAULT_DATA))
            .then((fresh) => {
              siteData = normalizeAndMigrateSiteData(fresh);
              updateDraftStatusPill("saved");
              setStatusBanner("Restored published portfolio data.", "success");
              renderActivePage();
              renderStudioBody();
              showToast("Restored published data.");
            });
        }
      });
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
  const dirty = sessionStorage.getItem(DRAFT_DIRTY_KEY) === "true";
  updateDraftStatusPill(dirty ? "dirty" : "saved");

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

  /* ---------------- TAB 1: HOME & STYLE ---------------- */
  if (activeStudioTab === "home") {
    const vis = siteData.home.visibility || {};
    container.innerHTML = `
      <!-- Brand & Theme Color -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Branding &amp; Accent Palette</h4>
        </div>
        <div class="studio-field">
          <label>Accent Color</label>
          <div class="color-swatches-row">
            <div class="color-swatches">
              ${swatches
                .map(
                  (s) =>
                    `<button type="button" class="color-swatch ${siteData.meta.accentColor === s.color ? "active" : ""}" style="background:${s.color}" data-color="${s.color}" title="${s.name}"></button>`
                )
                .join("")}
            </div>
            <div class="color-picker-input-wrap">
              <input type="color" class="color-picker-input" id="studio-custom-color" value="${escapeHtml(siteData.meta.accentColor || "#39745a")}" title="Pick custom accent color" />
              <span class="color-picker-label">Custom</span>
            </div>
          </div>
        </div>
        <div class="studio-field">
          <label>Brand Monogram</label>
          <input type="text" data-bind="meta.brand" value="${escapeHtml(siteData.meta.brand)}" />
        </div>
        <div class="studio-field">
          <label>Eyebrow Status Line</label>
          <input type="text" data-bind="meta.eyebrow" value="${escapeHtml(siteData.meta.eyebrow)}" />
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Location</label>
          <input type="text" data-bind="meta.location" value="${escapeHtml(siteData.meta.location)}" />
        </div>
      </div>

      <!-- Hero Copy -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Hero Section Copy</h4>
        </div>
        <div class="studio-field">
          <label>Headline (Line 1)</label>
          <input type="text" data-bind="home.headlinePrefix" value="${escapeHtml(siteData.home.headlinePrefix)}" />
        </div>
        <div class="studio-field">
          <label>Accent Headline (Line 2)</label>
          <input type="text" data-bind="home.headlineAccent" value="${escapeHtml(siteData.home.headlineAccent)}" />
        </div>
        <div class="studio-field">
          <label>Intro Paragraph</label>
          <textarea data-bind="home.intro">${escapeHtml(siteData.home.intro)}</textarea>
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Callout Note (✳)</label>
          <textarea data-bind="home.note">${escapeHtml(siteData.home.note)}</textarea>
        </div>
      </div>

      <!-- Highlights Bar -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Homepage Highlights Bar (${siteData.home.highlights.length})</h4>
          <button type="button" class="btn btn-dark" id="add-highlight-btn" style="padding:3px 8px;font-size:0.7rem;">+ Add</button>
        </div>
        <div id="studio-highlights-list">
          ${siteData.home.highlights
            .map(
              (h, idx) => `
              <div class="studio-card-item" style="padding:10px;margin-bottom:8px;">
                <div class="studio-card-item-header" style="margin-bottom:6px;">
                  <span>Highlight #${idx + 1}</span>
                  <div class="studio-project-actions">
                    <button type="button" class="studio-action-btn up-highlight-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""}>↑</button>
                    <button type="button" class="studio-action-btn down-highlight-btn" data-index="${idx}" ${idx === siteData.home.highlights.length - 1 ? "disabled" : ""}>↓</button>
                    <button type="button" class="studio-action-btn delete-action delete-highlight-btn" data-index="${idx}">✕</button>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                  <input type="text" data-bind="home.highlights.${idx}.label" value="${escapeHtml(h.label)}" placeholder="Label (e.g. BCA CS)" />
                  <input type="text" data-bind="home.highlights.${idx}.detail" value="${escapeHtml(h.detail)}" placeholder="Detail (e.g. CGPA 8.84)" />
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>

      <!-- Three Engineering Focus Cards -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Engineering Focus Cards (${siteData.home.cards.length})</h4>
        </div>
        <div class="studio-field">
          <label>Cards Kicker</label>
          <input type="text" data-bind="home.cardsKicker" value="${escapeHtml(siteData.home.cardsKicker)}" />
        </div>
        <div class="studio-field">
          <label>Cards Section Title</label>
          <input type="text" data-bind="home.cardsTitle" value="${escapeHtml(siteData.home.cardsTitle)}" />
        </div>
        ${siteData.home.cards
          .map(
            (c, idx) => `
            <div class="studio-card-item" style="padding:10px;margin-bottom:10px;">
              <div class="studio-card-item-header" style="margin-bottom:6px;">
                <span>Card ${escapeHtml(c.number)} — ${escapeHtml(c.title)}</span>
              </div>
              <div class="studio-field" style="margin-bottom:8px;">
                <label>Number Kicker</label>
                <input type="text" data-bind="home.cards.${idx}.number" value="${escapeHtml(c.number)}" />
              </div>
              <div class="studio-field" style="margin-bottom:8px;">
                <label>Title</label>
                <input type="text" data-bind="home.cards.${idx}.title" value="${escapeHtml(c.title)}" />
              </div>
              <div class="studio-field" style="margin-bottom:8px;">
                <label>Description</label>
                <textarea data-bind="home.cards.${idx}.text">${escapeHtml(c.text)}</textarea>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Link Text</label>
                  <input type="text" data-bind="home.cards.${idx}.linkText" value="${escapeHtml(c.linkText || "")}" />
                </div>
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Link URL</label>
                  <input type="text" data-bind="home.cards.${idx}.href" value="${escapeHtml(c.href || "")}" />
                </div>
              </div>
            </div>`
          )
          .join("")}
      </div>

      <!-- Homepage Section Visibility -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Homepage Section Visibility</h4>
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Highlights Bar</div>
            <div class="studio-toggle-desc">Show key facts bar below hero</div>
          </div>
          <input type="checkbox" data-vis="showHighlights" ${vis.showHighlights !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Engineering Focus Cards</div>
            <div class="studio-toggle-desc">Show 3 engineering areas cards</div>
          </div>
          <input type="checkbox" data-vis="showCards" ${vis.showCards !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Technical Skills Section</div>
            <div class="studio-toggle-desc">Show skills categories grid on home</div>
          </div>
          <input type="checkbox" data-vis="showSkills" ${vis.showSkills !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Featured Projects Preview</div>
            <div class="studio-toggle-desc">Show pinned/featured projects preview</div>
          </div>
          <input type="checkbox" data-vis="showFeaturedProjects" ${vis.showFeaturedProjects !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Open Source Preview</div>
            <div class="studio-toggle-desc">Show Godot Engine stats preview</div>
          </div>
          <input type="checkbox" data-vis="showOpenSourcePreview" ${vis.showOpenSourcePreview !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Education Preview</div>
            <div class="studio-toggle-desc">Show degree and certifications preview</div>
          </div>
          <input type="checkbox" data-vis="showEducationPreview" ${vis.showEducationPreview !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Contact Section</div>
            <div class="studio-toggle-desc">Show footer contact section</div>
          </div>
          <input type="checkbox" data-vis="showContact" ${vis.showContact !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
      </div>
    `;

    // Swatches click
    container.querySelectorAll(".color-swatch").forEach((btn) => {
      btn.addEventListener("click", () => {
        siteData.meta.accentColor = btn.getAttribute("data-color");
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    // Custom color picker
    document.getElementById("studio-custom-color")?.addEventListener("input", (e) => {
      siteData.meta.accentColor = e.target.value;
      saveSiteDataDraft(false);
      renderActivePage();
    });

    // Add Highlight
    document.getElementById("add-highlight-btn")?.addEventListener("click", () => {
      siteData.home.highlights.push({ label: "New Highlight", detail: "Detail text" });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".up-highlight-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx <= 0) return;
        const tmp = siteData.home.highlights[idx - 1];
        siteData.home.highlights[idx - 1] = siteData.home.highlights[idx];
        siteData.home.highlights[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".down-highlight-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx >= siteData.home.highlights.length - 1) return;
        const tmp = siteData.home.highlights[idx + 1];
        siteData.home.highlights[idx + 1] = siteData.home.highlights[idx];
        siteData.home.highlights[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".delete-highlight-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.home.highlights.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll("[data-vis]").forEach((chk) => {
      chk.addEventListener("change", (e) => {
        const key = chk.getAttribute("data-vis");
        siteData.home.visibility = siteData.home.visibility || {};
        siteData.home.visibility[key] = e.target.checked;
        saveSiteDataDraft(false);
        renderActivePage();
      });
    });
  }

  /* ---------------- TAB 2: TECHNICAL SKILLS ---------------- */
  else if (activeStudioTab === "skills") {
    container.innerHTML = `
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Skills Section Intro</h4>
        </div>
        <div class="studio-field">
          <label>Eyebrow</label>
          <input type="text" data-bind="skills.eyebrow" value="${escapeHtml(siteData.skills.eyebrow)}" />
        </div>
        <div class="studio-field">
          <label>Title</label>
          <input type="text" data-bind="skills.title" value="${escapeHtml(siteData.skills.title)}" />
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Intro Note</label>
          <textarea data-bind="skills.intro">${escapeHtml(siteData.skills.intro)}</textarea>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:0.78rem;color:var(--muted);">Skill Categories (${siteData.skills.categories.length})</span>
        <button type="button" class="btn btn-dark" id="add-skill-cat-btn" style="padding:5px 11px;font-size:0.75rem;">+ Add Category</button>
      </div>

      ${siteData.skills.categories
        .map(
          (cat, cIdx) => `
          <div class="studio-card-item">
            <div class="studio-card-item-header">
              <span style="font-size:0.85rem;font-weight:700;">${escapeHtml(cat.name)}</span>
              <div class="studio-project-actions">
                <button type="button" class="studio-action-btn up-cat-btn" data-index="${cIdx}" ${cIdx === 0 ? "disabled" : ""}>↑</button>
                <button type="button" class="studio-action-btn down-cat-btn" data-index="${cIdx}" ${cIdx === siteData.skills.categories.length - 1 ? "disabled" : ""}>↓</button>
                <button type="button" class="studio-action-btn delete-action delete-cat-btn" data-index="${cIdx}">Delete</button>
              </div>
            </div>
            <div class="studio-field" style="margin-bottom:10px;">
              <label>Category Name</label>
              <input type="text" data-bind="skills.categories.${cIdx}.name" value="${escapeHtml(cat.name)}" />
            </div>
            <div class="studio-field" style="margin-bottom:0;">
              <label>Skills (${cat.items.length})</label>
              <div class="studio-skills-chip-list">
                ${cat.items
                  .map(
                    (item, iIdx) => `
                    <span class="studio-skill-chip-item">
                      ${escapeHtml(item)}
                      <button type="button" class="studio-skill-chip-delete" data-cat="${cIdx}" data-item="${iIdx}" title="Remove ${escapeHtml(item)}">✕</button>
                    </span>`
                  )
                  .join("")}
              </div>
              <div class="studio-skill-add-row">
                <input type="text" class="studio-new-skill-input" data-cat="${cIdx}" placeholder="New skill name (e.g. Docker, JUnit)..." />
                <button type="button" class="btn btn-outline-dark studio-add-chip-btn" data-cat="${cIdx}" style="padding:4px 10px;font-size:0.75rem;">+ Add</button>
              </div>
            </div>
          </div>`
        )
        .join("")}
    `;

    document.getElementById("add-skill-cat-btn")?.addEventListener("click", () => {
      siteData.skills.categories.push({
        name: "New Category",
        items: ["Skill One", "Skill Two"]
      });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".up-cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx <= 0) return;
        const tmp = siteData.skills.categories[idx - 1];
        siteData.skills.categories[idx - 1] = siteData.skills.categories[idx];
        siteData.skills.categories[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".down-cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx >= siteData.skills.categories.length - 1) return;
        const tmp = siteData.skills.categories[idx + 1];
        siteData.skills.categories[idx + 1] = siteData.skills.categories[idx];
        siteData.skills.categories[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".delete-cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const cat = siteData.skills.categories[idx];
        showStudioConfirmModal({
          title: "Delete Skill Category?",
          message: `Are you sure you want to delete category "<strong>${escapeHtml(cat.name)}</strong>" and its skills?`,
          confirmBtnText: "Delete Category",
          isDanger: true,
          onConfirm: () => {
            siteData.skills.categories.splice(idx, 1);
            saveSiteDataDraft(true);
            renderActivePage();
            renderStudioBody();
            showToast(`Deleted category "${cat.name}"`);
          }
        });
      });
    });

    container.querySelectorAll(".studio-skill-chip-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cIdx = Number(btn.getAttribute("data-cat"));
        const iIdx = Number(btn.getAttribute("data-item"));
        if (!siteData.skills.categories[cIdx]) return;
        siteData.skills.categories[cIdx].items.splice(iIdx, 1);
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".studio-add-chip-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cIdx = Number(btn.getAttribute("data-cat"));
        const input = container.querySelector(`.studio-new-skill-input[data-cat="${cIdx}"]`);
        const val = input?.value.trim();
        if (!val || !siteData.skills.categories[cIdx]) return;
        siteData.skills.categories[cIdx].items.push(val);
        input.value = "";
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".studio-new-skill-input").forEach((input) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const cIdx = Number(input.getAttribute("data-cat"));
          const btn = container.querySelector(`.studio-add-chip-btn[data-cat="${cIdx}"]`);
          btn?.click();
        }
      });
    });
  }

  /* ---------------- TAB 3: PROJECTS ---------------- */
  else if (activeStudioTab === "projects") {
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
            <button type="button" class="studio-action-btn" id="studio-sort-date-btn" title="Reorder project list by Pinned + Newest Date">Sort by Date ↓</button>
            <button type="button" class="studio-action-btn" id="studio-sort-status-btn" title="Reorder project list by Pinned + Status (Built → Planned)">Sort by Status</button>
          </div>
          <button type="button" class="btn btn-dark" id="add-project-btn" style="padding:5px 11px;font-size:0.75rem;">+ Add Project</button>
        </div>
      </div>

      <div style="margin-bottom:8px;font-size:0.75rem;color:var(--muted);">
        ${siteData.projects.items.length} projects · Click card headers to expand/collapse.
      </div>

      ${siteData.projects.items
        .map(
          (p, idx) => `
          <div class="studio-accordion-card ${p.pinned ? "pinned-studio-item" : ""}" data-card-index="${idx}">
            <div class="studio-accordion-header">
              <div class="studio-accordion-title-wrap">
                <span class="studio-accordion-chevron">▼</span>
                <span style="font-family:var(--font-mono);font-size:0.7rem;color:var(--muted);font-weight:700;">${escapeHtml(p.index)}</span>
                <span class="studio-accordion-title">${escapeHtml(p.title)}</span>
                <span class="status-pill" style="font-size:0.65rem;padding:2px 6px;">${escapeHtml(p.status)}</span>
                ${p.pinned ? `<span style="font-size:0.7rem;">📌</span>` : ""}
              </div>
              <div class="studio-project-actions" onclick="event.stopPropagation();">
                <button type="button" class="studio-action-btn pin-project-btn ${p.pinned ? "pinned-active" : ""}" data-index="${idx}" title="${p.pinned ? "Unpin project" : "Pin project to top"}">
                  ${p.pinned ? "📌 Pinned" : "📌 Pin"}
                </button>
                <button type="button" class="studio-action-btn bump-project-btn" data-index="${idx}" title="Set updated date to today and move to top">
                  ⚡ Update &amp; Top
                </button>
                <button type="button" class="studio-action-btn duplicate-project-btn" data-index="${idx}" title="Duplicate this project">
                  📋
                </button>
                <button type="button" class="studio-action-btn top-project-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""} title="Move to top (#1)">
                  ⇈
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

            <div class="studio-accordion-body">
              <!-- Basic Info -->
              <div class="studio-section-group" style="padding:10px;margin-bottom:10px;">
                <div class="studio-group-header" style="margin-bottom:8px;padding-bottom:4px;">
                  <h4 class="studio-group-title" style="font-size:0.72rem;">Basic Identity</h4>
                </div>
                <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;">
                  <div class="studio-field" style="margin-bottom:8px;">
                    <label>Title</label>
                    <input type="text" data-bind="projects.items.${idx}.title" value="${escapeHtml(p.title)}" />
                  </div>
                  <div class="studio-field" style="margin-bottom:8px;">
                    <label>Unique ID / Anchor</label>
                    <input type="text" data-bind="projects.items.${idx}.id" value="${escapeHtml(p.id)}" placeholder="ecommerce-api" />
                  </div>
                </div>
                <div class="studio-field" style="margin-bottom:8px;">
                  <label>Tech Stack Badge</label>
                  <input type="text" data-bind="projects.items.${idx}.badge" value="${escapeHtml(p.badge)}" />
                </div>
                <div class="studio-field" style="margin-bottom:0;">
                  <label>Tags (comma-separated)</label>
                  <input type="text" data-tag-index="${idx}" value="${escapeHtml(Array.isArray(p.tags) ? p.tags.join(", ") : "")}" placeholder="Java, Spring Boot, PostgreSQL" />
                </div>
              </div>

              <!-- Classification & Dates -->
              <div class="studio-section-group" style="padding:10px;margin-bottom:10px;">
                <div class="studio-group-header" style="margin-bottom:8px;padding-bottom:4px;">
                  <h4 class="studio-group-title" style="font-size:0.72rem;">Classification &amp; Timing</h4>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Status</label>
                    <select data-bind="projects.items.${idx}.status">
                      <option value="Built" ${p.status === "Built" ? "selected" : ""}>Built</option>
                      <option value="In Progress" ${p.status === "In Progress" ? "selected" : ""}>In Progress</option>
                      <option value="Planned" ${p.status === "Planned" ? "selected" : ""}>Planned</option>
                      <option value="Archived" ${p.status === "Archived" ? "selected" : ""}>Archived</option>
                    </select>
                  </div>
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Category</label>
                    <select data-bind="projects.items.${idx}.category">
                      <option value="backend" ${p.category === "backend" ? "selected" : ""}>Backend &amp; Java</option>
                      <option value="systems" ${p.category === "systems" ? "selected" : ""}>Systems &amp; C</option>
                      <option value="frontend" ${p.category === "frontend" ? "selected" : ""}>Frontend &amp; Fullstack</option>
                      <option value="other" ${p.category === "other" ? "selected" : ""}>Other</option>
                    </select>
                  </div>
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Updated Date</label>
                    <input type="date" data-bind="projects.items.${idx}.updatedAt" value="${escapeHtml(p.updatedAt || "")}" />
                  </div>
                </div>
              </div>

              <!-- Content & Bullets -->
              <div class="studio-section-group" style="padding:10px;margin-bottom:10px;">
                <div class="studio-group-header" style="margin-bottom:8px;padding-bottom:4px;">
                  <h4 class="studio-group-title" style="font-size:0.72rem;">Content &amp; Architecture</h4>
                </div>
                <div class="studio-field" style="margin-bottom:8px;">
                  <label>Short Description</label>
                  <textarea data-bind="projects.items.${idx}.description">${escapeHtml(p.description)}</textarea>
                </div>
                <div class="studio-field" style="margin-bottom:8px;">
                  <label>Learning Note</label>
                  <input type="text" data-bind="projects.items.${idx}.learning" value="${escapeHtml(p.learning)}" />
                </div>
                <div class="studio-field" style="margin-bottom:0;">
                  <label>Under the Hood Bullets (one per line)</label>
                  <textarea data-hood-index="${idx}" style="min-height:66px;">${escapeHtml(Array.isArray(p.underTheHood) ? p.underTheHood.join("\n") : "")}</textarea>
                </div>
              </div>

              <!-- Links & URLs -->
              <div class="studio-section-group" style="padding:10px;margin-bottom:10px;">
                <div class="studio-group-header" style="margin-bottom:8px;padding-bottom:4px;">
                  <h4 class="studio-group-title" style="font-size:0.72rem;">Project Links</h4>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px;">
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Repository URL</label>
                    <input type="url" data-bind="projects.items.${idx}.repoUrl" value="${escapeHtml(p.repoUrl)}" placeholder="https://github.com/..." />
                  </div>
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Live Demo URL (optional)</label>
                    <input type="url" data-bind="projects.items.${idx}.liveUrl" value="${escapeHtml(p.liveUrl || "")}" placeholder="https://..." />
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Documentation URL (optional)</label>
                    <input type="url" data-bind="projects.items.${idx}.docsUrl" value="${escapeHtml(p.docsUrl || "")}" placeholder="https://..." />
                  </div>
                  <div class="studio-field" style="margin-bottom:0;">
                    <label>Action Button Style</label>
                    <select data-bind="projects.items.${idx}.buttonStyle">
                      <option value="dark" ${p.buttonStyle === "dark" ? "selected" : ""}>Solid Dark</option>
                      <option value="outline" ${p.buttonStyle === "outline" ? "selected" : ""}>Outline Dark</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Display Settings -->
              <div class="studio-section-group" style="padding:10px;margin-bottom:0;">
                <div class="studio-group-header" style="margin-bottom:8px;padding-bottom:4px;">
                  <h4 class="studio-group-title" style="font-size:0.72rem;">Display Flags</h4>
                </div>
                <div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap;">
                  <label style="display:inline-flex;align-items:center;gap:6px;font-size:0.78rem;font-weight:600;cursor:pointer;">
                    <input type="checkbox" data-proj-bool="pinned" data-index="${idx}" ${p.pinned ? "checked" : ""} style="width:16px;height:16px;accent-color:var(--accent);" />
                    Pinned to Top
                  </label>
                  <label style="display:inline-flex;align-items:center;gap:6px;font-size:0.78rem;font-weight:600;cursor:pointer;">
                    <input type="checkbox" data-proj-bool="featured" data-index="${idx}" ${p.featured !== false ? "checked" : ""} style="width:16px;height:16px;accent-color:var(--accent);" />
                    Featured on Home
                  </label>
                  <label style="display:inline-flex;align-items:center;gap:6px;font-size:0.78rem;font-weight:600;cursor:pointer;">
                    <input type="checkbox" data-proj-bool="visible" data-index="${idx}" ${p.visible !== false ? "checked" : ""} style="width:16px;height:16px;accent-color:var(--accent);" />
                    Visible on Site
                  </label>
                </div>
              </div>
            </div>
          </div>`
        )
        .join("")}
    `;

    container.querySelectorAll(".studio-accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        const card = header.closest(".studio-accordion-card");
        if (card) card.classList.toggle("collapsed");
      });
    });

    document.getElementById("add-project-btn")?.addEventListener("click", () => {
      siteData.projects.items.unshift({
        id: "new-project-" + Date.now().toString(36),
        index: "PROJECT 01",
        title: "New Backend Project",
        badge: "Java · Spring Boot",
        tags: ["Java", "Spring Boot"],
        category: "backend",
        status: "In Progress",
        pinned: false,
        featured: true,
        visible: true,
        updatedAt: getTodayDateString(),
        description: "Describe what this project does and how it is architected.",
        learning: "Key engineering concept explored in this project.",
        underTheHood: ["Core architecture, transactions, and concurrency."],
        repoUrl: "https://github.com/shiva-kar",
        docsUrl: "",
        liveUrl: "",
        buttonStyle: "dark"
      });
      reindexProjects();
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".duplicate-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const orig = siteData.projects.items[idx];
        if (!orig) return;
        const copy = cloneData(orig);
        copy.title = `${orig.title} (Copy)`;
        copy.id = `${orig.id}-copy-${Date.now().toString(36).slice(-4)}`;
        copy.pinned = false;
        siteData.projects.items.splice(idx + 1, 0, copy);
        reindexProjects();
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
        showToast(`Duplicated "${orig.title}"`);
      });
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
      showToast("Sorted project list by Date!");
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
      showToast("Sorted project list by Status!");
    });

    container.querySelectorAll(".pin-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const item = siteData.projects.items[idx];
        if (!item) return;
        item.pinned = !item.pinned;
        if (item.pinned) {
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
        const p = siteData.projects.items[idx];
        showStudioConfirmModal({
          title: "Delete Project?",
          message: `Are you sure you want to delete project "<strong>${escapeHtml(p.title)}</strong>"? This action will remove it from all portfolio pages.`,
          confirmBtnText: "Delete Project",
          isDanger: true,
          onConfirm: () => {
            const [removed] = siteData.projects.items.splice(idx, 1);
            reindexProjects();
            saveSiteDataDraft(true);
            renderActivePage();
            renderStudioBody();
            if (removed) showToast(`Deleted "${removed.title}"`);
          }
        });
      });
    });

    container.querySelectorAll("[data-tag-index]").forEach((input) => {
      input.addEventListener("input", () => {
        const idx = Number(input.getAttribute("data-tag-index"));
        if (!siteData.projects.items[idx]) return;
        siteData.projects.items[idx].tags = input.value
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
        saveSiteDataDraft(false);
        renderActivePage();
      });
    });

    container.querySelectorAll("[data-hood-index]").forEach((textarea) => {
      textarea.addEventListener("input", () => {
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

    container.querySelectorAll("[data-proj-bool]").forEach((chk) => {
      chk.addEventListener("change", (e) => {
        const prop = chk.getAttribute("data-proj-bool");
        const idx = Number(chk.getAttribute("data-index"));
        if (!siteData.projects.items[idx]) return;
        siteData.projects.items[idx][prop] = e.target.checked;
        saveSiteDataDraft(false);
        renderActivePage();
      });
    });
  }

  /* ---------------- TAB 4: OPEN SOURCE ---------------- */
  else if (activeStudioTab === "opensource") {
    const stats = siteData.opensource.stats || { submitted: 15, merged: 6, open: 7, closed: 2 };
    const sub = Number(stats.submitted) || 0;
    const mer = Number(stats.merged) || 0;
    const opn = Number(stats.open) || 0;
    const cls = Number(stats.closed) || 0;
    const sum = mer + opn + cls;
    const isConsistent = sub === sum;

    container.innerHTML = `
      <!-- Org Details -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Organization &amp; Contributions</h4>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
          <div class="studio-field" style="margin-bottom:0;">
            <label>Organization Name</label>
            <input type="text" data-bind="opensource.orgName" value="${escapeHtml(siteData.opensource.orgName || "Godot Engine")}" />
          </div>
          <div class="studio-field" style="margin-bottom:0;">
            <label>Contributor Dates</label>
            <input type="text" data-bind="opensource.dates" value="${escapeHtml(siteData.opensource.dates)}" />
          </div>
        </div>
        <div class="studio-field" style="margin-bottom:8px;">
          <label>Contribution Areas</label>
          <input type="text" data-bind="opensource.areas" value="${escapeHtml(siteData.opensource.areas || "Editor, GUI, GDScript, Web Platform")}" />
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
          <div class="studio-field" style="margin-bottom:0;">
            <label>Repository URL</label>
            <input type="url" data-bind="opensource.repo" value="${escapeHtml(siteData.opensource.repo)}" />
          </div>
          <div class="studio-field" style="margin-bottom:0;">
            <label>PRs Search URL</label>
            <input type="url" data-bind="opensource.prsUrl" value="${escapeHtml(siteData.opensource.prsUrl)}" />
          </div>
        </div>
        <div class="studio-field" style="margin-bottom:8px;">
          <label>Intro Description</label>
          <textarea data-bind="opensource.intro">${escapeHtml(siteData.opensource.intro)}</textarea>
        </div>
        <div class="studio-toggle-row">
          <div>
            <div class="studio-toggle-label">Show Open Source Section on Site</div>
            <div class="studio-toggle-desc">Enable or disable the open-source section</div>
          </div>
          <input type="checkbox" data-bind-bool="opensource.visible" ${siteData.opensource.visible !== false ? "checked" : ""} style="width:18px;height:18px;accent-color:var(--accent);" />
        </div>
      </div>

      <!-- Stats Bar & Live Validator -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Contribution Statistics</h4>
        </div>
        <div class="studio-stat-alert ${isConsistent ? "valid" : "warning"}">
          ${isConsistent
            ? `✓ Consistent: ${sub} submitted = ${mer} merged + ${opn} open + ${cls} closed`
            : `⚠ Inconsistent: ${sub} submitted ≠ ${sum} (merged ${mer} + open ${opn} + closed ${cls})`}
        </div>
        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:6px;">
          <div class="studio-field" style="margin-bottom:0;">
            <label>Submitted</label>
            <input type="number" data-bind="opensource.stats.submitted" value="${sub}" min="0" />
          </div>
          <div class="studio-field" style="margin-bottom:0;">
            <label>Merged</label>
            <input type="number" data-bind="opensource.stats.merged" value="${mer}" min="0" />
          </div>
          <div class="studio-field" style="margin-bottom:0;">
            <label>Open</label>
            <input type="number" data-bind="opensource.stats.open" value="${opn}" min="0" />
          </div>
          <div class="studio-field" style="margin-bottom:0;">
            <label>Closed</label>
            <input type="number" data-bind="opensource.stats.closed" value="${cls}" min="0" />
          </div>
        </div>
      </div>

      <!-- Selected PRs List -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:0.78rem;color:var(--muted);">Representative Pull Requests (${siteData.opensource.selectedPRs.length})</span>
        <button type="button" class="btn btn-dark" id="add-pr-btn" style="padding:5px 11px;font-size:0.75rem;">+ Add Pull Request</button>
      </div>

      ${siteData.opensource.selectedPRs
        .map(
          (pr, idx) => `
          <div class="studio-card-item">
            <div class="studio-card-item-header">
              <span>PR #${pr.pr} — ${escapeHtml(pr.title)}</span>
              <div class="studio-project-actions">
                <button type="button" class="studio-action-btn up-pr-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""}>↑</button>
                <button type="button" class="studio-action-btn down-pr-btn" data-index="${idx}" ${idx === siteData.opensource.selectedPRs.length - 1 ? "disabled" : ""}>↓</button>
                <button type="button" class="studio-action-btn delete-action delete-pr-btn" data-index="${idx}">Delete</button>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:100px 1fr 110px;gap:6px;margin-bottom:8px;">
              <div>
                <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">PR #</label>
                <input type="number" data-pr-num-index="${idx}" value="${pr.pr}" />
              </div>
              <div>
                <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Title</label>
                <input type="text" data-bind="opensource.selectedPRs.${idx}.title" value="${escapeHtml(pr.title)}" />
              </div>
              <div>
                <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Status</label>
                <select data-bind="opensource.selectedPRs.${idx}.status">
                  <option value="merged" ${pr.status === "merged" ? "selected" : ""}>Merged</option>
                  <option value="open" ${pr.status === "open" ? "selected" : ""}>Open</option>
                  <option value="closed" ${pr.status === "closed" ? "selected" : ""}>Closed</option>
                </select>
              </div>
            </div>
            <div class="studio-field" style="margin-bottom:8px;">
              <label>Description</label>
              <textarea data-bind="opensource.selectedPRs.${idx}.description">${escapeHtml(pr.description)}</textarea>
            </div>
            <div class="studio-field" style="margin-bottom:0;">
              <label>PR URL (leave blank to auto-generate from PR #)</label>
              <input type="url" data-bind="opensource.selectedPRs.${idx}.url" value="${escapeHtml(pr.url || "")}" placeholder="https://github.com/godotengine/godot/pull/${pr.pr}" />
            </div>
          </div>`
        )
        .join("")}
    `;

    document.getElementById("add-pr-btn")?.addEventListener("click", () => {
      const nextNum = 125000;
      siteData.opensource.selectedPRs.unshift({
        pr: nextNum,
        title: "New Godot Engine Contribution",
        description: "Describe the bug fixed or feature added and maintainer review.",
        status: "merged",
        url: `https://github.com/godotengine/godot/pull/${nextNum}`,
        featured: true
      });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll("[data-pr-num-index]").forEach((input) => {
      input.addEventListener("input", () => {
        const idx = Number(input.getAttribute("data-pr-num-index"));
        const num = Number(input.value) || 0;
        if (!siteData.opensource.selectedPRs[idx]) return;
        siteData.opensource.selectedPRs[idx].pr = num;
        if (!siteData.opensource.selectedPRs[idx].url || siteData.opensource.selectedPRs[idx].url.includes("godot/pull/")) {
          siteData.opensource.selectedPRs[idx].url = `https://github.com/godotengine/godot/pull/${num}`;
        }
        saveSiteDataDraft(false);
        renderActivePage();
      });
    });

    container.querySelectorAll(".up-pr-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx <= 0) return;
        const tmp = siteData.opensource.selectedPRs[idx - 1];
        siteData.opensource.selectedPRs[idx - 1] = siteData.opensource.selectedPRs[idx];
        siteData.opensource.selectedPRs[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".down-pr-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        if (idx >= siteData.opensource.selectedPRs.length - 1) return;
        const tmp = siteData.opensource.selectedPRs[idx + 1];
        siteData.opensource.selectedPRs[idx + 1] = siteData.opensource.selectedPRs[idx];
        siteData.opensource.selectedPRs[idx] = tmp;
        saveSiteDataDraft(false);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll(".delete-pr-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const pr = siteData.opensource.selectedPRs[idx];
        showStudioConfirmModal({
          title: "Delete Pull Request?",
          message: `Are you sure you want to remove PR #${pr.pr} ("${escapeHtml(pr.title)}") from the list?`,
          confirmBtnText: "Delete PR",
          isDanger: true,
          onConfirm: () => {
            siteData.opensource.selectedPRs.splice(idx, 1);
            saveSiteDataDraft(true);
            renderActivePage();
            renderStudioBody();
          }
        });
      });
    });
  }

  /* ---------------- TAB 5: ABOUT & EDUCATION ---------------- */
  else if (activeStudioTab === "about") {
    container.innerHTML = `
      <!-- About Intro -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">About Header Copy</h4>
        </div>
        <div class="studio-field">
          <label>Eyebrow</label>
          <input type="text" data-bind="about.eyebrow" value="${escapeHtml(siteData.about.eyebrow)}" />
        </div>
        <div class="studio-field">
          <label>Title</label>
          <input type="text" data-bind="about.title" value="${escapeHtml(siteData.about.title)}" />
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Intro Note</label>
          <textarea data-bind="about.intro">${escapeHtml(siteData.about.intro)}</textarea>
        </div>
      </div>

      <!-- Background Paragraphs -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Background Paragraphs (${siteData.about.approachParagraphs.length})</h4>
          <button type="button" class="btn btn-dark" id="add-para-btn" style="padding:3px 8px;font-size:0.7rem;">+ Add</button>
        </div>
        ${siteData.about.approachParagraphs
          .map(
            (p, idx) => `
            <div class="studio-card-item" style="padding:10px;margin-bottom:8px;">
              <div class="studio-card-item-header" style="margin-bottom:6px;">
                <span>Paragraph #${idx + 1}</span>
                <div class="studio-project-actions">
                  <button type="button" class="studio-action-btn up-para-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""}>↑</button>
                  <button type="button" class="studio-action-btn down-para-btn" data-index="${idx}" ${idx === siteData.about.approachParagraphs.length - 1 ? "disabled" : ""}>↓</button>
                  <button type="button" class="studio-action-btn delete-action delete-para-btn" data-index="${idx}">✕</button>
                </div>
              </div>
              <textarea data-bind="about.approachParagraphs.${idx}">${escapeHtml(p)}</textarea>
            </div>`
          )
          .join("")}
      </div>

      <!-- Career Direction Items -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Career Direction Items (${siteData.about.currentlyItems.length})</h4>
          <button type="button" class="btn btn-dark" id="add-career-btn" style="padding:3px 8px;font-size:0.7rem;">+ Add</button>
        </div>
        ${siteData.about.currentlyItems
          .map(
            (item, idx) => `
            <div class="studio-card-item" style="padding:10px;margin-bottom:8px;">
              <div class="studio-card-item-header" style="margin-bottom:6px;">
                <span>Item #${idx + 1}</span>
                <div class="studio-project-actions">
                  <button type="button" class="studio-action-btn up-career-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""}>↑</button>
                  <button type="button" class="studio-action-btn down-career-btn" data-index="${idx}" ${idx === siteData.about.currentlyItems.length - 1 ? "disabled" : ""}>↓</button>
                  <button type="button" class="studio-action-btn delete-action delete-career-btn" data-index="${idx}">✕</button>
                </div>
              </div>
              <div class="studio-field" style="margin-bottom:6px;">
                <label>Label</label>
                <input type="text" data-bind="about.currentlyItems.${idx}.label" value="${escapeHtml(item.label)}" />
              </div>
              <div class="studio-field" style="margin-bottom:0;">
                <label>Details</label>
                <textarea data-bind="about.currentlyItems.${idx}.text">${escapeHtml(item.text)}</textarea>
              </div>
            </div>`
          )
          .join("")}
      </div>

      <!-- Education -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Education (${siteData.about.education.length})</h4>
          <button type="button" class="btn btn-dark" id="add-edu-btn" style="padding:3px 8px;font-size:0.7rem;">+ Add</button>
        </div>
        ${siteData.about.education
          .map(
            (edu, idx) => `
            <div class="studio-card-item" style="padding:10px;margin-bottom:10px;">
              <div class="studio-card-item-header" style="margin-bottom:6px;">
                <span>${escapeHtml(edu.degree)}</span>
                <div class="studio-project-actions">
                  <button type="button" class="studio-action-btn up-edu-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""}>↑</button>
                  <button type="button" class="studio-action-btn down-edu-btn" data-index="${idx}" ${idx === siteData.about.education.length - 1 ? "disabled" : ""}>↓</button>
                  <button type="button" class="studio-action-btn delete-action delete-edu-btn" data-index="${idx}">Delete</button>
                </div>
              </div>
              <div class="studio-field" style="margin-bottom:6px;">
                <label>Degree</label>
                <input type="text" data-bind="about.education.${idx}.degree" value="${escapeHtml(edu.degree)}" />
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">School / University</label>
                  <input type="text" data-bind="about.education.${idx}.school" value="${escapeHtml(edu.school)}" />
                </div>
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Dates</label>
                  <input type="text" data-bind="about.education.${idx}.date" value="${escapeHtml(edu.date)}" />
                </div>
              </div>
              <div class="studio-field" style="margin-bottom:6px;">
                <label>Detail / Grade (e.g. CGPA: 8.84/10)</label>
                <input type="text" data-bind="about.education.${idx}.detail" value="${escapeHtml(edu.detail || "")}" />
              </div>
              <div class="studio-field" style="margin-bottom:0;">
                <label>Coursework (comma-separated)</label>
                <input type="text" data-edu-coursework="${idx}" value="${escapeHtml(Array.isArray(edu.coursework) ? edu.coursework.join(", ") : "")}" />
              </div>
            </div>`
          )
          .join("")}
      </div>

      <!-- Certifications -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Certifications (${siteData.about.certifications.length})</h4>
          <button type="button" class="btn btn-dark" id="add-cert-btn" style="padding:3px 8px;font-size:0.7rem;">+ Add</button>
        </div>
        ${siteData.about.certifications
          .map(
            (c, idx) => `
            <div class="studio-card-item" style="padding:10px;margin-bottom:10px;">
              <div class="studio-card-item-header" style="margin-bottom:6px;">
                <span>${escapeHtml(c.name)}</span>
                <div class="studio-project-actions">
                  <button type="button" class="studio-action-btn up-cert-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""}>↑</button>
                  <button type="button" class="studio-action-btn down-cert-btn" data-index="${idx}" ${idx === siteData.about.certifications.length - 1 ? "disabled" : ""}>↓</button>
                  <button type="button" class="studio-action-btn delete-action delete-cert-btn" data-index="${idx}">Delete</button>
                </div>
              </div>
              <div class="studio-field" style="margin-bottom:6px;">
                <label>Certificate Name</label>
                <input type="text" data-bind="about.certifications.${idx}.name" value="${escapeHtml(c.name)}" />
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Issuer</label>
                  <input type="text" data-bind="about.certifications.${idx}.issuer" value="${escapeHtml(c.issuer)}" />
                </div>
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Status</label>
                  <input type="text" data-bind="about.certifications.${idx}.status" value="${escapeHtml(c.status || "Completed")}" />
                </div>
              </div>
              <div class="studio-field" style="margin-bottom:0;">
                <label>Verification URL (optional)</label>
                <input type="url" data-bind="about.certifications.${idx}.url" value="${escapeHtml(c.url || "")}" placeholder="https://..." />
              </div>
            </div>`
          )
          .join("")}
      </div>

      <!-- Languages -->
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Languages (${siteData.about.languages.length})</h4>
          <button type="button" class="btn btn-dark" id="add-lang-btn" style="padding:3px 8px;font-size:0.7rem;">+ Add</button>
        </div>
        ${siteData.about.languages
          .map(
            (lang, idx) => `
            <div class="studio-card-item" style="padding:10px;margin-bottom:8px;">
              <div class="studio-card-item-header" style="margin-bottom:6px;">
                <span>${escapeHtml(lang.language)}</span>
                <div class="studio-project-actions">
                  <button type="button" class="studio-action-btn delete-action delete-lang-btn" data-index="${idx}">✕</button>
                </div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Language</label>
                  <input type="text" data-bind="about.languages.${idx}.language" value="${escapeHtml(lang.language)}" />
                </div>
                <div>
                  <label style="font-size:0.7rem;color:var(--muted);font-weight:700;">Proficiency</label>
                  <select data-bind="about.languages.${idx}.proficiency">
                    <option value="Native" ${lang.proficiency === "Native" ? "selected" : ""}>Native</option>
                    <option value="Professional" ${lang.proficiency === "Professional" ? "selected" : ""}>Professional</option>
                    <option value="Conversational" ${lang.proficiency === "Conversational" ? "selected" : ""}>Conversational</option>
                    <option value="Elementary" ${lang.proficiency === "Elementary" ? "selected" : ""}>Elementary</option>
                  </select>
                </div>
              </div>
            </div>`
          )
          .join("")}
      </div>
    `;

    document.getElementById("add-para-btn")?.addEventListener("click", () => {
      siteData.about.approachParagraphs.push("New background paragraph describing your technical background.");
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-para-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.about.approachParagraphs.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });

    document.getElementById("add-career-btn")?.addEventListener("click", () => {
      siteData.about.currentlyItems.push({ label: "Focus area", text: "Details about your target opportunities." });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-career-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.about.currentlyItems.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });

    document.getElementById("add-edu-btn")?.addEventListener("click", () => {
      siteData.about.education.push({
        degree: "New Degree or Qualification",
        school: "Institution Name",
        date: "2025–2028",
        detail: "",
        coursework: ["Relevant Course 1", "Relevant Course 2"]
      });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-edu-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.about.education.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });

    container.querySelectorAll("[data-edu-coursework]").forEach((input) => {
      input.addEventListener("input", () => {
        const idx = Number(input.getAttribute("data-edu-coursework"));
        if (!siteData.about.education[idx]) return;
        siteData.about.education[idx].coursework = input.value
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean);
        saveSiteDataDraft(false);
        renderActivePage();
      });
    });

    document.getElementById("add-cert-btn")?.addEventListener("click", () => {
      siteData.about.certifications.push({
        name: "Certificate Name",
        issuer: "Issuing Organization",
        status: "Completed",
        url: ""
      });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-cert-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.about.certifications.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });

    document.getElementById("add-lang-btn")?.addEventListener("click", () => {
      siteData.about.languages.push({ language: "Language", proficiency: "Professional" });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".delete-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        siteData.about.languages.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });
  }

  /* ---------------- TAB 6: CONTACT & LINKS ---------------- */
  else if (activeStudioTab === "contact") {
    container.innerHTML = `
      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Contact Information</h4>
        </div>
        <div class="studio-field">
          <label>Email Address</label>
          <input type="email" data-bind="contact.email" value="${escapeHtml(siteData.contact.email)}" />
        </div>
        <div class="studio-field">
          <label>Phone Number</label>
          <input type="tel" data-bind="contact.phone" value="${escapeHtml(siteData.contact.phone || "")}" />
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Location</label>
          <input type="text" data-bind="contact.location" value="${escapeHtml(siteData.contact.location || siteData.meta.location || "")}" />
        </div>
      </div>

      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Social &amp; Repository Profiles</h4>
        </div>
        <div class="studio-field">
          <label>GitHub Profile URL</label>
          <input type="url" data-bind="contact.github" value="${escapeHtml(siteData.contact.github)}" />
        </div>
        <div class="studio-field">
          <label>LinkedIn Profile URL</label>
          <input type="url" data-bind="contact.linkedin" value="${escapeHtml(siteData.contact.linkedin)}" />
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Portfolio Canonical URL</label>
          <input type="url" data-bind="contact.portfolio" value="${escapeHtml(siteData.contact.portfolio || "")}" />
        </div>
      </div>

      <div class="studio-section-group">
        <div class="studio-group-header">
          <h4 class="studio-group-title">Documents &amp; Resume</h4>
        </div>
        <div class="studio-field" style="margin-bottom:0;">
          <label>Resume PDF URL or Filename</label>
          <input type="text" data-bind="meta.resumeUrl" value="${escapeHtml(siteData.meta.resumeUrl || "Shiva_Kar_Resume.pdf?v=3.0.0")}" />
        </div>
      </div>
    `;
  }

  /* ---------------- TAB 7: FUN FACTS ---------------- */
  else if (activeStudioTab === "facts") {
    container.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:0.78rem;color:var(--muted);">Interactive "One more thing…" facts (${siteData.facts.length})</span>
        <button type="button" class="btn btn-dark" id="add-fact-btn" style="padding:5px 11px;font-size:0.76rem;">+ Add Fact</button>
      </div>
      ${siteData.facts
        .map((fact, idx) => {
          const isObj = typeof fact === "object" && fact !== null;
          const text = isObj ? fact.text : fact;
          const isEnabled = isObj ? fact.enabled !== false : true;

          return `
          <div class="studio-card-item">
            <div class="studio-card-item-header">
              <label style="display:inline-flex;align-items:center;gap:6px;margin:0;cursor:pointer;">
                <input type="checkbox" data-fact-enabled="${idx}" ${isEnabled ? "checked" : ""} style="width:16px;height:16px;accent-color:var(--accent);" />
                <span>Fact #${idx + 1}</span>
              </label>
              <div class="studio-project-actions">
                <button type="button" class="studio-action-btn preview-fact-btn" data-index="${idx}" title="Preview this fact in the homepage widget">Preview</button>
                <button type="button" class="studio-action-btn up-fact-btn" data-index="${idx}" ${idx === 0 ? "disabled" : ""} title="Move fact up">↑</button>
                <button type="button" class="studio-action-btn down-fact-btn" data-index="${idx}" ${idx === siteData.facts.length - 1 ? "disabled" : ""} title="Move fact down">↓</button>
                <button type="button" class="studio-action-btn delete-action delete-fact-btn" data-index="${idx}">Remove</button>
              </div>
            </div>
            <div class="studio-field" style="margin-bottom:0;">
              <textarea data-fact-text="${idx}" rows="3">${escapeHtml(text)}</textarea>
            </div>
          </div>`;
        })
        .join("")}
    `;

    document.getElementById("add-fact-btn")?.addEventListener("click", () => {
      siteData.facts.unshift({
        text: "A new engineering highlight or detail about what I'm building.",
        enabled: true
      });
      saveSiteDataDraft(true);
      renderActivePage();
      renderStudioBody();
    });

    container.querySelectorAll(".preview-fact-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-index"));
        const fact = siteData.facts[idx];
        const text = typeof fact === "object" ? fact.text : fact;
        const factEl = document.getElementById("fact-text");
        if (factEl) {
          factEl.textContent = text;
          showToast(`Previewing Fact #${idx + 1} on homepage`);
        } else {
          showToast("Navigate to Home page to see preview");
        }
      });
    });

    container.querySelectorAll("[data-fact-enabled]").forEach((chk) => {
      chk.addEventListener("change", (e) => {
        const idx = Number(chk.getAttribute("data-fact-enabled"));
        if (!siteData.facts[idx]) return;
        if (typeof siteData.facts[idx] === "string") {
          siteData.facts[idx] = { text: siteData.facts[idx], enabled: e.target.checked };
        } else {
          siteData.facts[idx].enabled = e.target.checked;
        }
        saveSiteDataDraft(false);
        renderActivePage();
      });
    });

    container.querySelectorAll("[data-fact-text]").forEach((ta) => {
      ta.addEventListener("input", () => {
        const idx = Number(ta.getAttribute("data-fact-text"));
        if (!siteData.facts[idx]) return;
        if (typeof siteData.facts[idx] === "string") {
          siteData.facts[idx] = { text: ta.value, enabled: true };
        } else {
          siteData.facts[idx].text = ta.value;
        }
        saveSiteDataDraft(false);
        renderActivePage();
      });
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
        if (siteData.facts.length <= 1) {
          showToast("At least one fact must remain.");
          return;
        }
        const idx = Number(btn.getAttribute("data-index"));
        siteData.facts.splice(idx, 1);
        saveSiteDataDraft(true);
        renderActivePage();
        renderStudioBody();
      });
    });
  }

  // Auto-resize textareas
  const autoResizeTextarea = (ta) => {
    ta.style.height = "auto";
    ta.style.height = `${Math.max(68, ta.scrollHeight + 2)}px`;
  };

  container.querySelectorAll("textarea").forEach((ta) => {
    autoResizeTextarea(ta);
    ta.addEventListener("input", () => autoResizeTextarea(ta));
  });

  // Universal live input handler
  container.querySelectorAll("[data-bind]").forEach((input) => {
    input.addEventListener("input", () => {
      if (!isOwnerAuthenticated()) return;
      const path = input.getAttribute("data-bind");
      const val = input.type === "number" ? Number(input.value) : input.value;
      setByPath(siteData, path, val);
      saveSiteDataDraft(false);
      renderActivePage();
    });
  });

  container.querySelectorAll("[data-bind-bool]").forEach((input) => {
    input.addEventListener("change", () => {
      if (!isOwnerAuthenticated()) return;
      const path = input.getAttribute("data-bind-bool");
      setByPath(siteData, path, input.checked);
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

function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-nav-toggle");
  const headerRight = document.getElementById("header-right");
  if (!toggleBtn || !headerRight || toggleBtn.dataset.bound) return;
  toggleBtn.dataset.bound = "true";
  toggleBtn.addEventListener("click", () => {
    const isOpen = headerRight.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!headerRight.contains(e.target) && !toggleBtn.contains(e.target) && headerRight.classList.contains("nav-open")) {
      headerRight.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ===== Synchronous Bootstrap + Async Data Hydration ===== */
function bootstrapSite() {
  // Migrate legacy v4 localStorage draft data to v5 safely
  migrateStorageToV6();

  // 1. Apply theme & bind header controls immediately (synchronously)
  initTheme();
  initMobileNav();
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
  fetch("data.json?v=3.0.0", { cache: "no-store" })
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
