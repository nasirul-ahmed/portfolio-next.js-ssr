import { getFeaturedProjects } from "@/lib/projects";
import SkillsGrid from "./_components/SkillGrid";
import ProjectCard from "./_components/ProjectCard";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const featuredProjects = await getFeaturedProjects();

  console.log("Request Headers:", Object.fromEntries(headersList.entries())); // Debugging headers

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your Name
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Software Engineer specializing in full-stack development with React,
          Next.js, and TypeScript
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <SkillsGrid />
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
