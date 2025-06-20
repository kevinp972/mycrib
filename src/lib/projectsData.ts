export interface Project {
  title: string;
  categories: string[];
  image: string;
  link: string;
  backgroundColor: string;
}

export const projects: readonly Project[] = [
  {
    title: "Edenspiekermann",
    categories: ["Product Design", "Agency"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "Unique Board",
    categories: ["Product Design", "Startups"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "General Assembly",
    categories: ["User Research", "Strategy"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "SQL Challenges",
    categories: ["Product Design", "UI Animation"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  // Adding 4 more placeholder projects to reach 8 total
  {
    title: "Project Five",
    categories: ["Design", "Development"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "Project Six",
    categories: ["UI/UX", "Research"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "Project Seven",
    categories: ["Product", "Strategy"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  },
  {
    title: "Project Eight",
    categories: ["Design", "Development"],
    image: "/assets/images/projects/placeholder.svg",
    link: "https://example.com",
    backgroundColor: "bg-black"
  }
] as const; 