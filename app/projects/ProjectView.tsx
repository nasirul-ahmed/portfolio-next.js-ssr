'use client';

import { useSearchParams } from 'next/navigation';
import { ProjectCard } from '../_components/ProjectCard';
import ProjectModal from '../_components/ProjectModal';
import HeaderSection from '../_components/SectionHeader';
import { Briefcase } from 'lucide-react';

export default function ProjectsView({ projects }: { projects: any[] }) {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('project');

  const activeProject = projects.find(p => p.id === projectId);

  return (
    <div className='container mx-auto px-4 py-8'>
      <HeaderSection title='My Projects' icon={Briefcase} iconSize={26} iconClasses='mt-1' />

      <section>
        {/* <HeaderSection title={'All Projects'} /> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Modal Views */}
      {activeProject && <ProjectModal project={activeProject} />}
    </div>
  );
}
