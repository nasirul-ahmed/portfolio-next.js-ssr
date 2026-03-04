'use client';
import React from 'react';
import { Card } from './Card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Code, EyeIcon, StarIcon } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    description?: string;
    technologies?: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    year?: string | number;
  };
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
  onHover?: (isHovered: boolean) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'default',
  className = '',
  onHover,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
    onHover?.(hovered);
  };

  const onClick = (e: React.MouseEvent) => {
    // e.preventDefault();
  };

  if (variant === 'compact') {
    return (
      <Card
        variant='flat'
        className={`group ${className} hover:bg-gray-50 transition-all`}
        padding='sm'
      >
        <Link href={`/projects?project=${project.id}`} className='flex items-center gap-3'>
          <div className='relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0'>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className='object-cover group-hover:scale-110 transition-transform duration-300'
            />
          </div>
          <div className='flex-1 min-w-0'>
            <p className='text-sm text-gray-500 mb-0.5'>{project.subtitle}</p>
            <h4 className='font-semibold text-gray-800 truncate'>{project.title}</h4>
            {project.year && <p className='text-xs text-gray-400 mt-1'>{project.year}</p>}
          </div>
          <ArrowRightIcon className='w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity' />
        </Link>
      </Card>
    );
  }

  if (variant === 'featured') {
    return (
      <Card
        variant='elevated'
        className={`group overflow-hidden ${className}`}
        padding='none'
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        // onClick={(e: React.MouseEvent) => onClick(e)}
      >
        <Link href={`/projects?project=${project.id}`} className='block md:flex'>
          <div className='relative md:w-2/5 h-64 md:h-auto overflow-hidden'>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className='object-contain group-hover:scale-110 transition-transform duration-700'
            />
            {project.featured && (
              <div className='absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1'>
                <StarIcon className='w-3 h-3' />
                Featured Project
              </div>
            )}
          </div>

          <div className='p-6 md:w-3/5 flex flex-col justify-center'>
            <p className='text-sm font-medium text-blue-600 mb-2'>{project.subtitle}</p>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>{project.title}</h3>
            {project.description && <p className='text-gray-600 mb-4'>{project.description}</p>}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className='flex items-center gap-3'>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium'
                  onClick={e => e.stopPropagation()}
                >
                  <EyeIcon className='w-4 h-4' />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium'
                  onClick={e => e.stopPropagation()}
                >
                  <Code className='w-4 h-4' />
                  View Code
                </a>
              )}
            </div>
          </div>
        </Link>
      </Card>
    );
  }

  // Default variant - Standard project card
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
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-500'
          />

          {/* Overlay with quick actions on hover */}
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-white rounded-full hover:bg-gray-100 transition-colors'
                onClick={e => e.stopPropagation()}
              >
                <EyeIcon className='w-5 h-5 text-gray-900' />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-white rounded-full hover:bg-gray-100 transition-colors'
                onClick={e => e.stopPropagation()}
              >
                <Code className='w-5 h-5 text-gray-900' />
              </a>
            )}
          </div>

          {/* Project type badge */}
          <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700'>
            {project.subtitle}
          </div>

          {/* Year badge if available */}
          {project.year && (
            <div className='absolute top-3 right-3 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium'>
              {project.year}
            </div>
          )}
        </div>

        {/* Content */}
        <div className='p-5'>
          <h3 className='font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
            {project.title}
          </h3>

          {project.description && (
            <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{project.description}</p>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded'>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className='px-2 py-1 text-gray-400 text-xs'>
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
};
