// import { config } from '@/config/config';
// import { ProjectCard } from '../_components/ProjectCard';
// import ProjectModal from '../_components/ProjectModal';
// import HeaderSection from '../_components/SectionHeader';
// import { Briefcase } from 'lucide-react';

// export const dynamic = 'force-static';

// export default async function ProjectPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ project?: string }>;
// }) {
//   const _searchParams = await searchParams;
//   const projects = config.projects;
//   const activeProject = projects.find(p => p.id === _searchParams.project);

//   console.log("searchParams", _searchParams);
//   console.log("activeProject", activeProject);

//   return (
//     <div className='container mx-auto px-4 py-8'>
//       <HeaderSection title='My Projects' icon={Briefcase} iconSize={26} iconClasses='mt-1' />

//       <section className='mb-12'>
//         <HeaderSection title={'Featured Work'} />
//         <ProjectCard project={projects[0]} variant='featured' />
//       </section>

//       <section>
//         <HeaderSection title={'All Projects'} />
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//           {projects.slice(1).map(project => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </section>

//       {/* <section className='mt-12'>
//         <HeaderSection title={'Project Timeline'} />
//         <div className='space-y-3'>
//           {projects.map(project => (
//             <ProjectCard key={project.id} project={project} variant='compact' />
//           ))}
//         </div>
//       </section> */}

//       {/* Modal Views */}
//       {activeProject && <ProjectModal project={activeProject} />}
//     </div>
//   );
// }

import { config } from '@/config/config';
import ProjectsView from './ProjectView';

export default function ProjectsPage() {
  return <ProjectsView projects={config.projects} />;
}
