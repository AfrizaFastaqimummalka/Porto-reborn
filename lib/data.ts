// ==========================================================
// SITE DATA — edit content here, components just render it.
// ==========================================================

export const profile = {
  name: "Afriza Fastaqimummalka",
  firstName: "Afriza",
  lastName: "Fastaqimummalka",
  nickname: "Fasta",
  role: "Full Stack Developer",
  subtitle: "Computer Science Student · STTM Bandung",
  location: "Bandung, Indonesia",
  tagline:
    "Full Stack Developer with experience in building simple web and desktop applications. I focus on creating functional and user-friendly solutions while learning best practices in programming. I enjoy problem solving and improving my skills step by step.",
  email: "afrizafasta43@gmail.com",
  github: "https://github.com/AfrizaFastaqimummalka",
  linkedin: "https://www.linkedin.com/in/afriza-fasta",
  photo: "/images/profile/profile.jpg",
  cvUrl: "/cv.pdf",
  availability: "Open for internship, freelance & project collaboration",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { label: "Projects Done", value: 15, suffix: "+" },
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Tech Stack", value: 16, suffix: "+" },
];

export const aboutHighlights = [
  { icon: "graduation", value: "CS", label: "Computer Science — STTM Bandung" },
  { icon: "code", value: "15+", label: "Projects from campus & freelance" },
  { icon: "layers", value: "End-to-end", label: "DB, API, to responsive UI" },
  { icon: "map", value: "Bandung", label: "Available remote / hybrid" },
];

export type Tool = {
  name: string;
  color: string;
  icon: "devicon" | "fallback";
  src?: string;
  initials?: string;
  lightBg?: boolean;
};

export const tools: Tool[] = [
  { name: "JavaScript", color: "#f7df1e", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", color: "#61dafb", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", color: "#38bdf8", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", color: "#3776ab", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Next.js", color: "#ffffff", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", lightBg: true },
  { name: "TypeScript", color: "#3178c6", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", color: "#3c873a", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", color: "#4db33d", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", color: "#336791", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "PHP", color: "#777bb4", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", color: "#ff2d20", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Docker", color: "#2496ed", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", color: "#f05032", icon: "devicon", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VB2026", color: "#6366f1", icon: "fallback", initials: "VB" },
  { name: "Server", color: "#64748b", icon: "fallback", initials: "SV" },
  { name: "Hosting", color: "#14b8a6", icon: "fallback", initials: "HS" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  status: string;
  year: string;
  repoUrl: string;
  liveUrl: string;
  images: [string, string, string];
};

export const projects: Project[] = [
  {
    slug: "beban-kerja-dosen",
    title: "BKD Online",
    category: "Web App",
    tagline: "A digital platform to manage and verify lecturer workloads (Tridharma).",
    description:
      "A digital workspace that replaces the manual paper-based BKD process. Lecturers upload Tridharma activity proofs, the system auto-calculates credit points, and reviewers verify them through a real-time queue.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Hono", "PostgreSQL", "Vercel"],
    status: "Deployed",
    year: "2025",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/BKD.git",
    liveUrl: "https://bkds.app/",
    images: ["/images/projects/beban-kerja-dosen/1.jpg", "/images/projects/beban-kerja-dosen/2.jpg", "/images/projects/beban-kerja-dosen/3.jpg"],
  },
  {
    slug: "company-profile",
    title: "NexusCo",
    category: "Web App",
    tagline: "Company profile & book catalog for coding educators and publishers.",
    description:
      "A company profile portal combined with a centralized catalog for a coding education publisher, featuring a filterable media gallery and an admin dashboard to manage content inventory.",
    stack: ["Laravel", "Tailwind CSS", "PostgreSQL", "Vite"],
    status: "Completed",
    year: "2024",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/company.git",
    liveUrl: "#",
    images: ["/images/projects/company-profile/1.jpg", "/images/projects/company-profile/2.jpg", "/images/projects/company-profile/3.jpg"],
  },
  {
    slug: "gis-batam",
    title: "SigRe Batam",
    category: "GIS Dashboard",
    tagline: "A geographic information system for billboard & signage management in Batam City.",
    description:
      "A GIS platform that helps local government catalog and monitor billboard permits through an interactive map, analytics dashboard, and a Django-based REST API.",
    stack: ["Next.js", "Django REST Framework", "PostgreSQL", "Leaflet.js"],
    status: "Completed",
    year: "2026",
    repoUrl: "#",
    liveUrl: "#",
    images: ["/images/projects/gis-batam/1.jpg", "/images/projects/gis-batam/2.jpg", "/images/projects/gis-batam/3.jpg"],
  },
  {
    slug: "umkm-financial-management",
    title: "UMKM Financial Management",
    category: "Web App",
    tagline: "An all-in-one finance & inventory platform for small businesses.",
    description:
      "Combines income/expense tracking, stock management, and customer/supplier contacts in one dashboard, with auto-generated Excel reports and Telegram bot notifications.",
    stack: ["Laravel 11", "React 18", "Inertia.js", "Tailwind CSS", "PostgreSQL/MySQL"],
    status: "Deployed",
    year: "2025",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/umkm-laravel.git",
    liveUrl: "#",
    images: ["/images/projects/umkm-financial-management/1.jpg", "/images/projects/umkm-financial-management/2.jpg", "/images/projects/umkm-financial-management/3.jpg"],
  },
  {
    slug: "laravel-xiaomi",
    title: "Laravel Xiaomi",
    category: "Web App",
    tagline: "An e-commerce platform with an admin panel and shopping cart system.",
    description:
      "A full-stack e-commerce app — customers browse and checkout via a session-based cart, while admins manage inventory, categories, suppliers, and order status through role-based access.",
    stack: ["PHP", "Laravel 13", "Tailwind CSS", "PostgreSQL", "Vite"],
    status: "In Progress",
    year: "2024",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/Laravel-Xiaomi.git",
    liveUrl: "#",
    images: ["/images/projects/laravel-xiaomi/1.jpg", "/images/projects/laravel-xiaomi/2.jpg", "/images/projects/laravel-xiaomi/3.jpg"],
  },
  {
    slug: "miku-sekai",
    title: "Miku Sekai",
    category: "Web App",
    tagline: "A real-time lyric sync visualizer for Vocaloid music.",
    description:
      "Built for the Magical Mirai 2026 competition — lyrics sync in real-time via the TextAlive API, wrapped in 3D visuals from Three.js and beat-reactive character animations.",
    stack: ["Three.js", "JavaScript", "TextAlive API", "CSS3 Animations"],
    status: "Completed",
    year: "2026",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/miku.git",
    liveUrl: "#",
    images: ["/images/projects/miku-sekai/1.jpg", "/images/projects/miku-sekai/2.jpg", "/images/projects/miku-sekai/3.jpg"],
  },
  {
    slug: "my-bike-garage",
    title: "My Bike Garage",
    category: "Web App / Mobile",
    tagline: "A personal motorcycle service tracker with WhatsApp notifications.",
    description:
      "A multi-platform app (web, PWA, Android TWA) to log service history and spare part stock, with automated reminders via WhatsApp (Fonnte API).",
    stack: ["Laravel 11", "PHP", "PostgreSQL", "Alpine.js", "Tailwind CSS", "Android TWA"],
    status: "Deployed",
    year: "2024",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/MBG.git",
    liveUrl: "https://mybikegarage.me",
    images: ["/images/projects/my-bike-garage/1.jpg", "/images/projects/my-bike-garage/2.jpg", "/images/projects/my-bike-garage/3.jpg"],
  },
  {
    slug: "rekon-material",
    title: "Rekon Material",
    category: "Web App",
    tagline: "A construction material reconciliation system.",
    description:
      "An app to track construction project material usage — log incoming/outgoing stock, view discrepancy reports, and export data for field audits.",
    stack: ["Laravel", "Tailwind CSS", "MySQL"],
    status: "In Progress",
    year: "2025",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/rekon-material.git",
    liveUrl: "#",
    images: ["/images/projects/rekon-material/1.jpg", "/images/projects/rekon-material/2.jpg", "/images/projects/rekon-material/3.jpg"],
  },
  {
    slug: "surat-digital",
    title: "Surat Digital",
    category: "Web App",
    tagline: "A role-based document management system with task disposition flow.",
    description:
      "Digitalizes the incoming/outgoing document cycle from draft to completion. Leaders assign tasks to staff via disposition, with deadlines, PDF reports, and file attachments on Cloudinary.",
    stack: ["Node.js", "Hono", "React", "Prisma", "PostgreSQL", "Tailwind CSS"],
    status: "Deployed",
    year: "2025",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/surat-digital-frontend.git",
    liveUrl: "#",
    images: ["/images/projects/surat-digital/1.jpg", "/images/projects/surat-digital/2.jpg", "/images/projects/surat-digital/3.jpg"],
  },
  {
    slug: "undead-kingdom",
    title: "Undead Kingdom",
    category: "Web Game",
    tagline: "A 3D first-person zombie survival game running directly in the browser.",
    description:
      "A wave-based combat game with 4 weapon types, built purely client-side using Three.js — procedural audio, particle effects, and adaptive quality for stable performance.",
    stack: ["Three.js", "JavaScript", "WebGL", "Web Audio API"],
    status: "Completed",
    year: "2024",
    repoUrl: "https://github.com/AfrizaFastaqimummalka/undead-zombie.git",
    liveUrl: "https://undead-kingdom.vercel.app/",
    images: ["/images/projects/undead-kingdom/1.jpg", "/images/projects/undead-kingdom/2.jpg", "/images/projects/undead-kingdom/3.jpg"],
  },
];

/** Keywords shown in the scrolling marquee band */
export const marqueeItems = [
  "Full Stack",
  "Laravel",
  "React",
  "Next.js",
  "PostgreSQL",
  "Three.js",
  "GIS",
  "Bandung",
  profile.nickname.toUpperCase(),
];
