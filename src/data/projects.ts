export interface Project {
  id: string;
  title: string;
  image?: string;
  video?: string;          // optional video
  imageHover?: string;
  repoUrl?: string;        // optional for UI Demos
  description?: string;
  frameworks?: string[];
  type?: "main" | "ui-demo"; // separate main projects from UI demos
}

export const projects: Project[] = [
  // ------------------- Main Projects -------------------
  {
    id: "caseaf",
    title: "Education & Job Finder",
    image: "/assets/projects/caseaf/Landingpage.webp",
    imageHover: "/assets/projects/caseaf/Educationpage.webp",
    video: "/assets/projects/caseaf/caseaf.mp4",
    repoUrl: "https://github.com/Novaav/Novaav-fed24-case-group-3",
    description:
      "Frontend-focused platform to explore educational programs and jobs in Sweden, with responsive layouts, dynamic filters, and interactive components.",
    frameworks: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "React Slick",
      "Framer Motion",
      "React Context",
      "REST API",
      "Responsive Design",
    ],
    type: "main",
  },
  {
    id: "realtime-auction",
    title: "Real-Time Auction",
    image: "/assets/projects/realtime-auction/Landingpage2.png",
    imageHover: "/assets/projects/realtime-auction/Loginpage.png",
    video: "/assets/projects/realtime-auction/auction.mp4",
    repoUrl: "https://github.com/Novaav/Novaav-fed24-auction",
    description:
      "Real-time auction interface demo with responsive layouts and dynamic forms, showcasing live interaction with backend WebSockets.",
    frameworks: [
      "HTML",
      "CSS",
      "TypeScript",
      "Vite",
      "Socket.io",
      "Responsive Design",
      "REST API",
    ],
    type: "main",
  },
  {
    id: "privacy-analyser",
    title: "Privacy Analyser",
    image: "/assets/projects/privacy-analyser/PrivacyAnalyserLanding.webp",
    imageHover: "/assets/projects/privacy-analyser/PrivacyAnalyserView.webp",
    repoUrl: "https://github.com/Novaav/privacy-analyser-demo",
    description:
      "Web app visualising privacy data with clear UI, responsive layout, and reusable components.",
    frameworks: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "REST API",
      "Responsive Design",
    ],
    type: "main",
  },
  {
    id: "nova-portfolio",
    title: "Nova Portfolio",
    image: "/assets/projects/nova-portfolio/Portfoliohero.png",
    imageHover: "/assets/projects/nova-portfolio/Portfolioabout.png",
    repoUrl: "https://github.com/Novaav/original-portfolio",
    description:
      "Personal portfolio showcasing front-end development, animations, and interactive UI components.",
    frameworks: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Swiper.js",
      "Responsive Design",
      "Animations",
      "UI/UX Design",
    ],
    type: "main",
  },

  // ------------------- UI Demos -------------------
  {
    id: "ui-demo-1",
    title: "Game Info Modal",
    image: "/assets/projects/videos/ui-demos/pop-up-modal.webp",
    video: "/assets/projects/videos/ui-demos/ui-demo-2.mp4",
    description:
      "Interactive modal for displaying game information. Click on a game card to fetch details and see a dynamic background based on the game's image. Built purely with CSS and minimal JavaScript for smooth animations and transitions.",
    type: "ui-demo",
  },
  {
    id: "ui-demo-2",
    title: "Pixel Effects",
    image: "/assets/projects/videos/ui-demos/pixel-effects.webp",
    video: "/assets/projects/videos/ui-demos/ui-demo-3.mp4",
    description:
      "Cyberpunk-inspired pixel effects with a smooth light/dark mode toggle. All interactions and visuals are built purely with CSS and some JavaScript for dynamic behavior.",
    type: "ui-demo",
  },
  {
    id: "ui-demo-3",
    title: "Photo Slideshow",
    image: "/assets/projects/videos/ui-demos/photo-slideshow.webp",
    video: "/assets/projects/videos/ui-demos/ui-demo-1.mp4",
    description:
      "Photo slideshow with smooth zoom, ease-in/out transitions, and hero section presentation. Entirely built with CSS and some JavaScript for interactivity and smooth animation flow.",
    type: "ui-demo",
  },
];
