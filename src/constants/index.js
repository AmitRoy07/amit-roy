export const servicesData = [
  {
    title: "UI/UX Design & Implementation",
    icon: "lucide:pen-tool",
    description:
      "I translate product ideas and Figma designs into responsive, production-ready interfaces with strong visual detail, usability, and frontend discipline.",
    items: [
      {
        title: "Product UI Design",
        icon: "lucide:figma",
        description:
          "Wireframes, visual systems, user flows, and client-ready UI direction",
      },
      {
        title: "Design to Frontend",
        icon: "lucide:file-code-2",
        description: "Accurate React, Next.js, Angular, and Svelte implementation",
      },
      {
        title: "Responsive Interfaces",
        icon: "lucide:monitor-smartphone",
        description: "Mobile-first layouts for SaaS products, dashboards, and websites",
      },
    ],
  },
  {
    title: "Frontend Architecture",
    icon: "lucide:code-2",
    description:
      "I build scalable frontend applications with reusable components, smooth interactions, and performance-focused implementation across modern frameworks.",
    items: [
      {
        title: "React & Next.js",
        icon: "lucide:atom",
        description: "Reusable UI, page architecture, hooks, routing, and optimization",
      },
      {
        title: "Angular & Svelte",
        icon: "lucide:component",
        description:
          "Dashboard interfaces, reusable components, and responsive product flows",
      },
      {
        title: "TypeScript & JavaScript",
        icon: "lucide:file-code-2",
        description: "Clean frontend logic with reliable HTML5, CSS3, and UI patterns",
      },
    ],
  },
  {
    title: "Motion & Interaction",
    icon: "lucide:layers-3",
    description:
      "I create polished, modern web experiences using animation frameworks, 3D interaction, smooth scrolling, and careful UI optimization.",
    items: [
      {
        title: "Framer Motion & GSAP",
        icon: "lucide:sparkles",
        description:
          "Page transitions, reveal animations, micro-interactions, and scroll effects",
      },
      {
        title: "Three.js & Lenis",
        icon: "lucide:orbit",
        description: "Interactive visuals and smooth, premium-feeling browsing",
      },
      {
        title: "Tailwind & UI Kits",
        icon: "lucide:component",
        description: "Tailwind CSS, SCSS/SASS, Bootstrap, PrimeNG, and Material UI",
      },
    ],
  },
  {
    title: "CMS & Platform Delivery",
    icon: "lucide:panel-top",
    description:
      "I support CMS-driven and storefront experiences with responsive UI, maintainable structure, and client-friendly delivery.",
    items: [
      {
        title: "WordPress & Shopify",
        icon: "lucide:shopping-bag",
        description: "Marketing sites, storefront sections, CMS pages, and UI polish",
      },
      {
        title: "Strapi CMS",
        icon: "lucide:database",
        description: "Frontend integration for CMS-managed content platforms",
      },
      {
        title: "Cross-Browser UX",
        icon: "lucide:shield-check",
        description: "Compatibility, accessibility awareness, and production polish",
      },
    ],
  },
];

export const techStackCategories = [
  {
    title: "Frontend",
    description: "Production UI development across modern app frameworks.",
    items: [
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "Angular", icon: "simple-icons:angular" },
      { name: "Svelte", icon: "simple-icons:svelte" },
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
    ],
  },
  {
    title: "Styling & UI",
    description: "Responsive interfaces, design systems, and component polish.",
    items: [
      { name: "HTML5", icon: "simple-icons:html5" },
      { name: "CSS3", icon: "simple-icons:css3" },
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "SCSS/SASS", icon: "simple-icons:sass" },
      { name: "Bootstrap", icon: "simple-icons:bootstrap" },
      { name: "Material UI", icon: "simple-icons:mui" },
      { name: "PrimeNG", icon: "lucide:component" },
    ],
  },
  {
    title: "Design & Motion",
    description: "Figma-to-frontend workflows with animation-rich delivery.",
    items: [
      { name: "Figma", icon: "simple-icons:figma" },
      { name: "Adobe XD", icon: "simple-icons:adobexd" },
      { name: "Photoshop", icon: "simple-icons:adobephotoshop" },
      { name: "Framer Motion", icon: "simple-icons:framer" },
      { name: "GSAP", icon: "simple-icons:greensock" },
      { name: "Three.js", icon: "simple-icons:threedotjs" },
    ],
  },
  {
    title: "CMS & Workflow",
    description: "CMS-driven sites, storefronts, and team delivery tooling.",
    items: [
      { name: "WordPress", icon: "simple-icons:wordpress" },
      { name: "Shopify", icon: "simple-icons:shopify" },
      { name: "Strapi", icon: "simple-icons:strapi" },
      { name: "Git", icon: "simple-icons:git" },
      { name: "Responsive QA", icon: "lucide:monitor-smartphone" },
      { name: "Client Delivery", icon: "lucide:handshake" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "ClassPoint",
    icon: "lucide:presentation",
    description:
      "ClassPoint 2.0 frontend work focused on responsive React interfaces, reusable UI components, and design-to-production implementation across the web platform and PowerPoint extension.",
    href: "https://www.classpoint.io",
    image: "/assets/projects/classpoint.png",
    bgImage: "/assets/projects/classpoint.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Figma" },
      { id: 3, name: "Reusable UI" },
      { id: 4, name: "PowerPoint Extension" },
    ],
  },
  {
    id: 2,
    name: "GobyHomes",
    icon: "lucide:home",
    description:
      "Frontend architecture using React and Next.js with modern UI components, smooth transitions, and animation-rich user flows.",
    href: "https://gobyhomes.com",
    image: "/assets/projects/gobyHomes.png",
    bgImage: "/assets/projects/gobyHomes.png",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Framer Motion" },
    ],
  },
  {
    id: 3,
    name: "QuantumSoar",
    icon: "lucide:rocket",
    description:
      "Reusable Svelte.js frontend implementation with Tailwind CSS, responsive layouts, and maintainable component structures.",
    href: "https://www.quantumsoar.com",
    image: "/assets/projects/quantumsoar.png",
    bgImage: "/assets/projects/quantumsoar.png",
    frameworks: [
      { id: 1, name: "Svelte.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Components" },
      { id: 4, name: "Responsive UI" },
    ],
  },
  {
    id: 4,
    name: "RainDrop Media Consultancy",
    icon: "lucide:cloud-rain",
    description:
      "Website frontend built with Next.js, Tailwind CSS, and SCSS, including interactive animation work with Three.js.",
    href: "https://raindropmediaconsultancy.com",
    image: "/assets/projects/raindrop.png",
    bgImage: "/assets/projects/raindrop.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "SCSS" },
      { id: 4, name: "Three.js" },
    ],
  },
  {
    id: 5,
    name: "ONUFitness",
    icon: "lucide:activity",
    description:
      "Application interface built with Angular, Tailwind CSS, and PrimeNG, covering dashboard screens and post-login user flows.",
    href: "https://dev.onufitness.com",
    image: "/assets/projects/onufitness.webp",
    bgImage: "/assets/projects/onufitness.webp",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "PrimeNG" },
      { id: 4, name: "Dashboard UI" },
    ],
  },
  {
    id: 6,
    name: "Noir Automotive",
    icon: "lucide:car-front",
    description:
      "CMS-driven web platform developed and maintained with Next.js and Strapi CMS, focused on responsive UI and optimized frontend performance.",
    href: "https://noir-automotive.com/",
    image: "/assets/projects/noir.png",
    bgImage: "/assets/projects/noir.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Strapi CMS" },
      { id: 3, name: "Responsive UI" },
      { id: 4, name: "Performance" },
    ],
  },
  {
    id: 7,
    name: "Air Country Home",
    icon: "lucide:house-plus",
    description:
      "Short-term rental management website for property owners, with responsive pages, owner-focused service content, case studies, and conversion-led enquiry flows.",
    href: "https://air-country.convexsol.co/",
    image: "/assets/projects/airCountry.png",
    bgImage: "/assets/projects/airCountry.png",
    frameworks: [
      { id: 0, name: "Next.js" },
      { id: 21, name: "Strapi CMS" },
      { id: 1, name: "Frontend UI" },
      { id: 2, name: "Responsive Design" },
      { id: 3, name: "Landing Pages" },
      { id: 4, name: "Conversion Flow" },
    ],
  },
];

export const clientWebsites = [
  {
    id: 1,
    name: "BignBigger",
    href: "https://bignbigger.com",
    category: "Business Website",
  },
  {
    id: 2,
    name: "Six Star Tiling",
    href: "https://sixstartiling.com.au",
    category: "Service Website",
  },
  {
    id: 3,
    name: "High Street Jewelry",
    href: "https://highstreetjewelry.com",
    category: "Ecommerce Website",
  },
  {
    id: 4,
    name: "Queensland Envelopes",
    href: "https://www.queenslandenvelopes.com.au",
    category: "Business Website",
  },
  {
    id: 5,
    name: "Tap App",
    href: "https://tapapp.co.uk",
    category: "Web Platform",
  },
  {
    id: 6,
    name: "Neutracom",
    href: "https://neutracom.net",
    category: "Corporate Website",
  },
  {
    id: 7,
    name: "Xyra XDR",
    href: "https://www.xyraxdr.com",
    category: "Cybersecurity Website",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Certificate in Graphics Design & Publishing",
    icon: "lucide:palette",
  },
  {
    id: 2,
    title: "Certificate in Basic Multimedia",
    icon: "lucide:monitor-play",
  },
  {
    id: 3,
    title: "Certificate in Advanced Multimedia",
    icon: "lucide:badge-check",
  },
  {
    id: 4,
    title: "Certificate in Web Design",
    icon: "lucide:code-xml",
  },
];

export const awards = [
  
  {
    id: 2,
    title: "Precious Gem Award",
    issuer: "SentientGeeks",
    year: "2024",
    icon: "lucide:gem",
  },
  {
    id: 3,
    title: "The Super Geeks Award",
    issuer: "SentientGeeks",
    year: "2023",
    icon: "lucide:trophy",
  },
  {
    id: 1,
    title: "Student Of the Batch",
    issuer: "Ejobindia",
    year: "2019",
    icon: "lucide:graduation-cap",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: "lucide:linkedin",
    href: "https://www.linkedin.com/in/amit-roy-92585a1a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "GitHub",
    icon: "lucide:github",
    href: "https://github.com/AmitRoy07",
  },
  { name: "Email", icon: "lucide:mail", href: "mailto:amitroy2383@gmail.com" },
  { name: "Phone", icon: "lucide:phone", href: "tel:+917003046697" },
];
