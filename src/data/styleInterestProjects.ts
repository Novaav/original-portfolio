export interface Project {
    title: string;
    image: string;
    link?: string; 
    placeholder?: false; // ensures About cards NEVER become “coming soon”
  }
  
  export const styleInterestProjects: Project[] = [
    { title: "Urban Landscape", image: "/assets/projects/F61.jpg" },
    { title: "Minimal Design", image: "/assets/projects/F42.jpg" },
    { title: "Bold Typography", image: "/assets/projects/F14.jpg" },
    { title: "Abstract Shapes", image: "/assets/projects/F41.jpg" },
    { title: "Creative Patterns", image: "/assets/projects/F57.jpg" },
    { title: "Modern Art", image: "/assets/projects/Car.jpg" },
  ];
  