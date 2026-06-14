'use client';
import { useRouter } from 'next/navigation';
import Modal from './modals/Modal';
import Image from 'next/image';
import HeaderSection from './SectionHeader';
import { useEffect } from 'react';

export default function ProjectModal({ project }: any) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Modal title={project?.title} onClose={() => router.push('/projects', { scroll: false })}>
      {project.description && (
        <p className='text-gray-500 dark:text-white text-sm line-clamp-5'>{project.description}</p>
      )}
      {project?.sampleImages?.length && (
        <>
          {/* <HeaderSection level='h4' title='Sample Images' className='my-6 text-md' /> */}
<p className='text-gray-500 dark:text-white text-lg line-clamp-5 mt-2'>Sample Images</p>
          <div className='w-full max-h-[70vh] mt-2 overflow-y-auto flex flex-col gap-6 pr-2 pb-16'>
            {project?.sampleImages?.map((imageSrc: string, index: number) => {
              console.log('imageSrc', imageSrc);

              return (
                <div key={index} className='w-full flex justify-center'>
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={
                        project.title
                          ? project.title + ' sample image ' + (index + 1)
                          : 'Game Engine image'
                      }
                      width={500}
                      height={900}
                      loading='lazy'
                      className='object-contain rounded-lg'
                      //priority={index === 0} // Prioritize the first image
                    />
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </Modal>
  );
}
