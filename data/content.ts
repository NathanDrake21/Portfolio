// All site text lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Muhammed Fuad Saneen",
  shortName: "Fuad Saneen",
  role: "Frontend Developer",
  intro:
    "I build real-time dashboards, admin platforms and content-managed websites with React and Next.js. Nearly four years shipping production apps for clients in the UAE, the last year as lead of a six-person frontend team.",
  email: "fuadsaneen321@gmail.com",
  phones: [
    { label: "Qatar", display: "+974 7037 7368", number: "97470377368" },
    { label: "India", display: "+91 96058 29016", number: "919605829016" },
  ],
  linkedin: "https://www.linkedin.com/in/muhammed-fuad-saneen",
  resume: "/Fuad_Saneen_Resume.pdf",
};

export const highlights = [
  { value: "Nearly 4 years", label: "Building production apps with React" },
  { value: "10+ apps", label: "Shipped for UAE clients, primary developer on 8" },
  { value: "Team of 6", label: "Led the frontend team after a 2025 promotion" },
];

export const about = [
  "I started out building full-stack apps with Python and Django, then spent nearly four years at Abaci Technologies, a startup delivering web platforms for clients in the UAE. I was primary developer on 8 of the 10+ production projects I worked on, and in 2025 I was promoted to lead the frontend team.",
  "Most of my work sits where data meets people: occupancy counts streaming in from mall cameras, tank sensors raising alerts, visitor systems that need different permissions for every role. I like making that data clear and the interfaces dependable.",
];

export type Job = {
  title: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    title: "Frontend Developer, promoted to Frontend Lead",
    company: "Abaci Technologies",
    place: "Calicut, India · UAE clients",
    period: "Feb 2022 – Dec 2025",
    points: [
      "Primary developer on 8 of 10+ production projects for clients in the UAE.",
      "Promoted to Frontend Lead in 2025, managing 6 developers through code reviews, mentoring, unblocking and technical interviews.",
      "Built a shared data-fetching hook used across projects, and real-time features with WebSockets and Socket.IO.",
      "Worked with backend teams on API integration using React Query caching, server-side pagination and lightweight endpoints.",
      "Migrated a Create React App project to Vite, cutting build time by over 50%.",
      "Helped integrate the WhatsApp Cloud API for a client, including account setup and the registration flow.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Spectrum Softtech Solutions",
    place: "India",
    period: "Aug – Dec 2021",
    points: [
      "Built a Python and Django web app with server-rendered templates, user authentication, Razorpay payments and Google reCAPTCHA.",
    ],
  },
];

export type Project = {
  mockup?: "count" | "zaair" | "fog";
  name: string;
  kind: string;
  client: string;
  summary: string;
  stack: string[];
  details: string[];
};

export const projects: Project[] = [
  {
    mockup: "fog",
    name: "Fogwatch",
    kind: "Grease trap waste management",
    client: "Envirol / Alserkal Group, Dubai",
    summary:
      "Monitoring for grease trap tanks across sites, with live sensor readings and compliance reporting.",
    stack: ["React", "REST APIs", "jsPDF"],
    details: [
      "Live graphs for real-time sensor readings and tank capacity.",
      "Tables with per-user column visibility, column filters and sorting.",
      "Compliance and activity reports generated as PDFs from backend data.",
      "Every route lazy-loaded with dynamic imports to keep the first load small.",
    ],
  },
  {
    mockup: "count",
    name: "AbaciCount",
    kind: "People counting and analytics",
    client: "Shopping malls, UAE",
    summary:
      "Live occupancy for malls: how many people came in and out, the busiest days, and which cameras need attention.",
    stack: ["React", "Socket.IO", "REST APIs"],
    details: [
      "Real-time occupancy monitoring with WebSockets, including live camera status and critical alerts.",
      "Camera onboarding: admins enter an IP range, the backend discovers cameras, and the UI collects credentials only for cameras that need them.",
      "Camera detail pages with live people in/out counts, activity logs and zones.",
      "Analytics dashboard with trend graphs and filterable, exportable reports.",
    ],
  },
  {
    mockup: "zaair",
    name: "Zaair",
    kind: "Visitor security management",
    client: "Office towers and companies",
    summary:
      "A visitor management system for buildings, where each client shapes its own forms, emails and ID cards without code changes.",
    stack: ["React", "RBAC", "Konva.js", "react-draft-wysiwyg"],
    details: [
      "Role-based access control at both route and component level.",
      "Dynamic custom fields (text, date, number, image, single and multi option) stored in the backend and rendered automatically in every table and form.",
      "Email template builder with emoji, links, images and a custom “{” trigger for inserting backend placeholders.",
      "ID card editor in Konva.js: details pre-filled from the backend, draggable on front and back, exported as PDF for printing.",
    ],
  },
  {
    name: "Transit-si",
    kind: "Company website",
    client: "CMS-driven, Next.js",
    summary:
      "A fast company website where all content is managed in Strapi and pages are pre-built for speed and search.",
    stack: ["Next.js", "Strapi", "SSG"],
    details: [
      "Static generation with getStaticProps and getStaticPaths, including dynamic inner pages for solutions and projects.",
      "SEO basics done properly: meta tags, page titles and clean routes.",
      "A small formatting utility so non-technical editors can add bold text, links and paragraphs with simple symbols.",
    ],
  },
];

export const alsoWorkedOn = [
  "My Waste",
  "The Workbook",
  "AbaciSignage",
  "DropKey",
  "UAEU SMS Management App",
  "PlatePilot",
  "Khidmah Carwash",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["JavaScript", "React", "Next.js (SSG/SSR)", "Redux", "React Query", "Context API", "React Router", "React Hook Form"],
  },
  {
    group: "Interface",
    items: ["HTML", "CSS / SCSS", "Material UI", "Radix UI", "Bootstrap", "Framer Motion", "Responsive design", "Arabic / RTL (i18n)"],
  },
  {
    group: "Data and real time",
    items: ["REST APIs", "WebSockets / Socket.IO", "Axios", "ApexCharts", "Chart.js", "jsPDF", "Konva.js", "React Flow", "Google Maps API", "WhatsApp Cloud API"],
  },
  {
    group: "Working knowledge",
    items: ["TypeScript", "Node.js", "Python", "Django", "MySQL", "Strapi", "Docker", "Linux", "Nginx"],
  },
  {
    group: "Tools",
    items: ["Git / GitHub", "Vite", "Jira", "Figma", "Claude", "Cursor", "ChatGPT"],
  },
];

export const education = {
  degree: "Bachelor of Computer Application",
  school: "College of Applied Science IHRD, Kozhikode (Calicut University)",
  period: "2018 – 2021",
  certs: [
    "HackerRank: Software Engineer",
    "HackerRank: Frontend Developer (React)",
    "HackerRank: JavaScript (Intermediate)",
    "Coursera: Python (University of Michigan)",
  ],
  languages: "English, Malayalam, Hindi",
};
