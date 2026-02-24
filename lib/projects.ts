export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  technologies: string[];
  featured: boolean;
}

// Mock data - replace with CMS or database later
const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js and Stripe",
    content:
      "<p>Built a modern e-commerce platform with product search, cart, and payment processing...</p>",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    featured: true,
  },
  // Add more projects...
];

export async function getFeaturedProjects(): Promise<Project[]> {
  // Simulate async data fetching
  return projects.filter((p) => p.featured);
}

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProject(slug: string): Promise<Project | null> {
  return projects.find((p) => p.slug === slug) || null;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return projects.map((p) => p.slug);
}
