export interface Project {
  title: string;
  image: string;
  link?: string; 
  placeholder?: false; // ensures About cards NEVER become “coming soon”
}

export const styleInterestProjects: Project[] = [
  { title: "Urban Landscape", image: "/assets/projects/F61.jpg.webp" },
  { title: "Minimal Design", image: "/assets/projects/F42.jpg.webp" },
  { title: "Bold Typography", image: "/assets/projects/F14.jpg.webp" },
  { title: "Abstract Shapes", image: "/assets/projects/F41.jpg.webp" },
  { title: "Creative Patterns", image: "/assets/projects/F57.jpg.webp" },
  { title: "Modern Art", image: "/assets/projects/Car.jpg.webp" },
];
