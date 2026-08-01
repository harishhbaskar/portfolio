export const TECH_STACK = {
  frontend: ["React", "React Native", "HTML5", "CSS3", "Responsive UI"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "RBAC"],
  database: ["MongoDB", "MySQL", "Mongoose", "Data Modeling"],
  languages: ["JavaScript ES6+", "Python", "Java"],
  tools_and_env: ["Git", "GitHub", "Postman", "Linux", "VS Code"]
};

export const EXPERIENCE = [
  {
    role: "React Native Developer Intern",
    status: "ACTIVE",
    meta: "Blue Leaf Technologies · Remote · Jan 2026 — Present",
    points: [
      "Built reusable React Native components for cross-platform iOS and Android mobile applications.",
      "Integrated RESTful APIs with Node.js backend endpoints to ensure reliable data synchronization.",
      "Resolved UI bugs and responsiveness issues across different device screen sizes and operating systems.",
      "Collaborated with the engineering team in an Agile workflow involving code reviews and daily standups."
    ]
  }
];

export const PROJECTS = [
  {
    id: "f1",
    perm: "-rwxr-xr-x",
    filename: "healthchain",
    ext: ".md",
    title: "Tamper-Proof Electronic Health Record System",
    description: "Tamper-proof medical records platform combining traditional SQL databases with cryptographic ledger verification.",
    problem: "Healthcare systems frequently store sensitive patient records in centralized databases vulnerable to undetected unauthorized modifications or insider tampering.",
    features: [
      "Role-Based Access Control (RBAC) separating doctor, patient, and administrator permissions securely.",
      "Real-time cryptographic audit trail detecting and alerting administrators upon any unauthorized record mutation.",
      "Field-level patient data encryption preventing data leakage at rest and in transit."
    ],
    technical: [
      "Engineered a custom SHA-256 hashchain integrity layer paired with MySQL transactional storage where each record hashes its predecessor.",
      "Built modular REST APIs in Node.js and Express.js implementing strict JWT stateless authentication."
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "SHA-256"],
    githubUrl: "https://github.com/harishhbaskar",
    liveUrl: "https://github.com/harishhbaskar"
  },
  {
    id: "f2",
    perm: "-rwxr-xr-x",
    filename: "spaced-repetition",
    ext: ".md",
    title: "Spaced Repetition Learning Application",
    description: "Algorithmic knowledge retention application designed to optimize study efficiency and long-term memory recall.",
    problem: "Standard note-taking and flashcard apps lack intelligent scheduling, causing users to either over-study familiar concepts or forget critical material just before recall deadlines.",
    features: [
      "Adaptive review scheduler calculating optimal review intervals based on user recall difficulty ratings.",
      "Dynamic calendar grid for scheduling study blocks and visualizing learning consistency across weeks.",
      "Cross-device synchronization across web dashboard and mobile interface."
    ],
    technical: [
      "Implemented a customized SuperMemo-derived algorithm in Node.js computing dynamic intervals using exponential backoff formulas.",
      "Designed efficient MongoDB schema indexes for instant retrieval of due flashcards even with large historical decks.",
      "Built reactive UI components across React (Web) and React Native (Mobile) sharing core state management models."
    ],
    stack: ["React", "React Native", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/harishhbaskar",
    liveUrl: "https://github.com/harishhbaskar"
  },
  {
    id: "f3",
    perm: "-rwxr-xr-x",
    filename: "subscription-tracker-api",
    ext: ".md",
    title: "Subscription Tracker API",
    description: "Subscription management REST API built with Node.js, Express, and MongoDB.",
    problem: "Managing active recurring subscriptions manually is prone to calculation errors, and unsecured API endpoints often expose user data without validation.",
    features: [
      "Built a RESTful backend structuring 18 endpoints across 3 resource routers with a layered controller-middleware architecture.",
      "Implemented stateless JWT authentication with bcrypt password hashing, httpOnly cookies, and custom authorization middleware to secure protected routes.",
      "Automated subscription lifecycle logic via Mongoose pre-save hooks, computing renewal dates across 4 billing frequencies."
    ],
    technical: [
      "Enforced Zod schema validation on all data-mutating routes and built centralized error-handling middleware normalizing 5+ error types.",
      "Optimized data querying to support paginated, filterable, and sortable (5 fields) results."
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Zod", "Mongoose"],
    githubUrl: "https://github.com/harishhbaskar/subscription-tracker-api",
    liveUrl: ""
  }
];

export const NOW_FOCUS = {
  title: "Active Focus — Q3 2026",
  subtitle: "Here is what I am actively working on, learning, and exploring right now:",
  points: [
    {
      bold: "Building Full-Stack Applications:",
      text: "Shipping end-to-end web and mobile applications using React, React Native, and Node.js with real-time data synchronization."
    },
    {
      bold: "Improving Backend Development Skills:",
      text: "Deepening knowledge in RESTful API reliability, clean routing structures, and stateless authentication flows."
    },
    {
      bold: "Learning Scalable Application Design:",
      text: "Studying database schema modeling, query optimization, and structured data flow across full-stack architectures."
    },
    {
      bold: "Strengthening Problem Solving & Fundamentals:",
      text: "Improving core algorithmic efficiency, data structures, and automated software testing practices."
    },
    {
      bold: "Exploring Developer Tools:",
      text: "Refining daily coding environments, version control practices with Git & GitHub, and modern debugging workflows."
    }
  ]
};

export const CONTACT_ITEMS = [
  {
    flag: "--email",
    val: "harishhbaskar@gmail.com",
    href: "mailto:harishhbaskar@gmail.com",
    external: false
  },
  {
    flag: "--linkedin",
    val: "linkedin.com/in/harishhbaskar",
    href: "https://linkedin.com/in/harishhbaskar",
    external: true
  },
  {
    flag: "--github",
    val: "github.com/harishhbaskar",
    href: "https://github.com/harishhbaskar",
    external: true
  }
];
