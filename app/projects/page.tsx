import { config } from '@/config/config';
import ProjectsView from './ProjectView';

export default function ProjectsPage() {
  return <ProjectsView projects={config.projects} />;
}
