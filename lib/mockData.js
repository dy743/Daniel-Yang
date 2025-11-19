// Mock data for development/testing

export const mockSkills = [
  {
    title: "React",
    slug: "react",
    description: "A JavaScript library for building user interfaces",
  },
  {
    title: "Next.js",
    slug: "nextjs",
    description: "The React Framework for Production",
  },
  {
    title: "JavaScript",
    slug: "javascript",
    description: "Programming language for web development",
  },
  {
    title: "TypeScript",
    slug: "typescript",
    description: "Typed superset of JavaScript",
  },
  {
    title: "Node.js",
    slug: "nodejs",
    description: "JavaScript runtime built on Chrome's V8 engine",
  },
];

export const mockProjects = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    shortDescription: "A modern portfolio website built with Next.js and Framer Motion",
    description: "This is my personal portfolio website showcasing my projects and skills. Built with Next.js, Framer Motion, and Styled Components.",
    skills: [
      { slug: "react", title: "React" },
      { slug: "nextjs", title: "Next.js" },
      { slug: "javascript", title: "JavaScript" },
    ],
    images: [
      { url: "https://via.placeholder.com/800x600" },
    ],
    codeLink: "https://github.com/example/portfolio",
    demoLink: "https://example.com",
    content: `<Post><Title>Portfolio Website</Title><Content>This is a modern portfolio website built with Next.js and Framer Motion.</Content></Post>`,
    primaryColor: {
      rgba: { r: 100, g: 150, b: 200, a: 1 },
    },
    secondaryColor: {
      rgba: { r: 200, g: 150, b: 100, a: 1 },
    },
  },
  {
    slug: "e-commerce-app",
    title: "E-Commerce App",
    shortDescription: "Full-stack e-commerce application with payment integration",
    description: "A complete e-commerce solution with shopping cart, user authentication, and payment processing.",
    skills: [
      { slug: "react", title: "React" },
      { slug: "nodejs", title: "Node.js" },
      { slug: "typescript", title: "TypeScript" },
    ],
    images: [
      { url: "https://via.placeholder.com/800x600" },
    ],
    codeLink: "https://github.com/example/ecommerce",
    demoLink: "https://ecommerce.example.com",
    content: `<Post><Title>E-Commerce App</Title><Content>A full-stack e-commerce application with payment integration.</Content></Post>`,
    primaryColor: {
      rgba: { r: 150, g: 100, b: 200, a: 1 },
    },
    secondaryColor: {
      rgba: { r: 200, g: 100, b: 150, a: 1 },
    },
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    shortDescription: "A productivity app for managing tasks and projects",
    description: "A task management application with drag-and-drop functionality, team collaboration, and real-time updates.",
    skills: [
      { slug: "react", title: "React" },
      { slug: "nextjs", title: "Next.js" },
      { slug: "javascript", title: "JavaScript" },
    ],
    images: [
      { url: "https://via.placeholder.com/800x600" },
    ],
    codeLink: "https://github.com/example/taskmanager",
    demoLink: "https://tasks.example.com",
    content: `<Post><Title>Task Manager</Title><Content>A productivity app for managing tasks and projects.</Content></Post>`,
    primaryColor: {
      rgba: { r: 200, g: 150, b: 100, a: 1 },
    },
    secondaryColor: {
      rgba: { r: 100, g: 200, b: 150, a: 1 },
    },
  },
];

export const mockSkillDetails = {
  react: {
    title: "React",
    slug: "react",
    description: "A JavaScript library for building user interfaces. React makes it painless to create interactive UIs.",
    primaryColor: {
      rgba: { r: 97, g: 218, b: 251, a: 1 },
    },
    secondaryColor: {
      rgba: { r: 61, g: 90, b: 254, a: 1 },
    },
    image: {
      url: "https://via.placeholder.com/400x400",
    },
    projects: [
      {
        slug: "portfolio-website",
        title: "Portfolio Website",
        shortDescription: "A modern portfolio website",
        skills: [
          { slug: "react", title: "React" },
          { slug: "nextjs", title: "Next.js" },
        ],
      },
    ],
  },
  nextjs: {
    title: "Next.js",
    slug: "nextjs",
    description: "The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production.",
    primaryColor: {
      rgba: { r: 0, g: 0, b: 0, a: 1 },
    },
    secondaryColor: {
      rgba: { r: 255, g: 255, b: 255, a: 1 },
    },
    image: {
      url: "https://via.placeholder.com/400x400",
    },
    projects: [
      {
        slug: "portfolio-website",
        title: "Portfolio Website",
        shortDescription: "A modern portfolio website",
        skills: [
          { slug: "react", title: "React" },
          { slug: "nextjs", title: "Next.js" },
        ],
      },
    ],
  },
};

export const mockProjectDetails = {
  "portfolio-website": mockProjects[0],
  "e-commerce-app": mockProjects[1],
  "task-manager": mockProjects[2],
};

