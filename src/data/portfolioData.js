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
    filename: "auth-notes",
    ext: ".md",
    title: "Auth-Based Notes Application",
    description: "Full-stack productivity application with hardened authentication pipelines and user-isolated document storage.",
    problem: "Many lightweight web apps expose user data through insecure session handling, broken access control, or plaintext storage.",
    features: [
      "Strict user-scoped document isolation ensuring zero data bleed across accounts under any API request payload.",
      "Instantaneous CRUD operations with client-side optimistic UI updates and server validation.",
      "Secure authentication lifecycle including bcrypt password hashing and token validation."
    ],
    technical: [
      "Architected Express.js middleware pipelines verifying JWT Bearer tokens and checking resource ownership on every route.",
      "Structured MongoDB document schemas with compound indexing for low-latency querying by user ID and timestamp."
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/harishhbaskar",
    liveUrl: "https://github.com/harishhbaskar"
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
