// src/data/projects.ts

export interface Project {
  title: string;
  image: string;
  link: string;
  tags?: string[];
  description?: string;
  placeholder?: boolean; // NEW: marks a "Coming Soon" card
}

export const projects: Project[] = [
  {
    title: "Flower Artwork",
    image: "/assets/projects/F14.jpg",
    link: "https://github.com/yourgithub/flower-artwork",
    tags: ["React", "Design", "UI/UX"],
    description: "A visual artwork showcase created during group work."
  },
  {
    title: "Urban Architecture",
    image: "/assets/projects/F15.jpg",
    link: "https://github.com/yourgithub/architecture-ui",
    tags: ["React", "TypeScript"],
    description: "A gallery layout experiment focused on composition."
  },
  {
    title: "Bold Colors",
    image: "/assets/projects/F16.jpg",
    link: "https://github.com/yourgithub/bold-colors",
    tags: ["React", "Animations", "TailwindCSS"],
    description: "A vibrant visual-focused project exploring color theory."
  },

  // --------------------------------------
  // Coming Soon Project #1
  // --------------------------------------
  {
    title: "New Solo Project – In Progress",
    image: "/assets/projects/coming-soon.jpg",
    link: "#",
    placeholder: true,
    description: "A full project is currently being built and ships after Christmas."
  },

  // --------------------------------------
  // Coming Soon Project #2
  // --------------------------------------
  {
    title: "More Projects Coming Soon",
    image: "/assets/projects/coming-soon-2.jpg",
    link: "#",
    placeholder: true
  }
];
