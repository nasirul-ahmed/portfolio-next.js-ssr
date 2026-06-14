'use client';
import React from 'react';
import { Card } from './Card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Code, EyeIcon, StarIcon } from 'lucide-react';
import Chip from './Chip';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    description?: string;
    technologies?: string[];
    liveUrl?: string;
    githubUrl?: { name: string; url: string }[];
    featured?: boolean;
    year?: string | number;
  };
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  onHover?: (isHovered: boolean) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '', onHover }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
    onHover?.(hovered);
  };

  const openInNewTab = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.stopPropagation();
    e.preventDefault();
    if (window !== undefined) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card
      variant='elevated'
      className={`group overflow-hidden ${className}`}
      padding='none'
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Link href={`/projects?project=${project.id}`} className='block'>
        {/* Thumbnail Container */}
        <div className='relative h-48 overflow-hidden'>
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className='object-cover group-hover:scale-110 transition-transform duration-500'
            />
          )}

          {/* Overlay with quick actions on hover */}
          <div
            className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className=' px-3 py-1 text-xs font-medium text-white'>{project.subtitle}</div>

            <div className='flex items-center gap-2 mt-1'>
              {project.liveUrl && (
                <div
                  className='p-2 bg-white rounded-full hover:bg-gray-100 transition-colors'
                  onClick={e => openInNewTab(e, project.liveUrl!)}
                >
                  <EyeIcon className='w-5 h-5 text-gray-900' />
                </div>
              )}
              {project.githubUrl?.map(({ name, url }) => (
                <div
                  key={name}
                  className='inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-white hover:text-blue-600 transition-colors text-sm font-medium'
                  onClick={e => openInNewTab(e, url)}
                >
                  <Code className='w-4 h-4' />
                  {name}
                  {/* <span className='text-white hover:text-blue-600'>{}</span> */}
                </div>
              ))}
            </div>
          </div>

          {/* Year badge if available */}
          {project.year && (
            <div className='absolute top-3 right-3 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium'>
              {project.year}
            </div>
          )}
        </div>

        {/* Content */}
        <div className='p-4'>
          <h3 className='font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
            {project.title}
          </h3>

          {project.description && (
            <p className='text-gray-600 text-sm mb-3 line-clamp-5'>{project.description}</p>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {project.technologies.slice(0, 3).map((tech, index) => (
                <Chip key={index} label={tech} isHovered={isHovered} />
              ))}
              {/* {project.technologies.length > 3 && (
                <Chip 
                  label={`+${project.technologies.length - 3}`} 
                  variant='count'
                />
              )} */}

              {project.technologies.length > 3 && (
                /* Use a named group 'group/tech' here */
                <div className='group/tech relative inline-flex items-center'>
                  <Chip
                    label={`+${project.technologies.length - 3}`}
                    variant='count'
                    className='cursor-help dark:hover:text-white'
                  />
                  <div
                    className='
                      invisible opacity-0 
                      group-hover/tech:visible group-hover/tech:opacity-100 
                      transition-all duration-200
                      absolute bottom-full left-1/2 -translate-x-1/2 mb-3 
                      w-max max-w-[200px] p-2 
                      bg-gray-900/95 backdrop-blur-sm text-white 
                      text-[10px] font-medium rounded-lg shadow-2xl z-[100] 
                      flex flex-wrap gap-1.5 border border-white/10
                      pointer-events-none
                    '
                  >
                    {project.technologies.slice(3).map((tech, idx) => (
                      <span
                        key={idx}
                        className='bg-white/10 px-2 py-0.5 rounded-md border border-white/5 whitespace-nowrap'
                      >
                        {tech}
                      </span>
                    ))}

                    <div className='absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900/95'></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
};
