import { config } from '@/config/config';
import HeaderSection from '../_components/SectionHeader';
import { Calendar } from 'lucide-react';
import { IconMap, IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';
import { Skill } from '@/lib/interfaces';

export const dynamic = 'force-static';

export default function ResumePage() {
  const timelineColors = [
    'from-blue-50 to-indigo-50 border-blue-200 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800',
    'from-green-50 to-emerald-50 border-green-200 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800',
    'from-purple-50 to-violet-50 border-purple-200 dark:from-purple-900/20 dark:to-violet-900/20 dark:border-purple-800',
    'from-orange-50 to-amber-50 border-orange-200 dark:from-orange-900/20 dark:to-amber-900/20 dark:border-orange-800',
  ];

  const getTimelineDot = () => (
    <div className='absolute left-[-32px] top-2 w-4 h-4 bg-sky-600 dark:bg-sky-500 rounded-full border-4 border-white dark:border-gray-800'></div>
  );

  return (
    <main className='min-h-screen lg:py-12 px-4 sm:px-2 lg:px-8 font-sans transition-colors duration-300'>
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20'></div>
      </div>

      {/* Main Content */}
      <div className='relative max-w-7xl mx-auto space-y-6'>
        {/* Experience Section */}
        {/* <section className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-2xl'>
          <HeaderSection title='Work Experiences' />
          {config.workExperiences.map((exp, index) => {
            return (
              <div key={index} className='border-l-4 border-blue-600 dark:border-blue-500 pl-6'>
                <div className='flex flex-wrap justify-between items-start gap-4 mb-4'>
                  <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
                    {exp.company} | <span className='text-sm font-normal'>{exp.role}</span>
                  </h3>
                  <span className='px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800'>
                    {exp.duration}
                  </span>
                </div>
                <span className='text-gray-800 dark:text-white font-normal'>{exp.summary}</span>
              </div>
            );
          })}
        </section> */}
        <section className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-2xl'>
          <HeaderSection title='Work Experiences' />

          <div className='relative border-l border-gray-200 dark:border-gray-700 pl-6'>
            {config.workExperiences.map((exp, index) => (
              <div key={index} className='relative mb-10'>
                {getTimelineDot()}

                <div>
                  <div className='flex flex-wrap justify-between items-start gap-4 mb-4'>
                    <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
                      {exp.company} | <span className='text-sm font-normal'>{exp.role}</span>
                    </h3>

                    <span className='px-4 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800'>
                      {exp.duration}
                    </span>
                  </div>

                  <p className='whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed'>
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-2xl'>
          <HeaderSection title='Working Skills' />
          <div className='space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2'>
              {config.primarySkills.map((skill: Skill, index: number) => {
                const Icon = IconMap[skill.icon];
                return (
                  <div
                    key={index}
                    className='px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 
                    bg-white dark:bg-gray-900/50 shadow-sm hover:shadow-md transition-all'
                  >
                    <div className='flex items-center gap-3 mb-3'>
                      {Icon && (
                        <Icon
                          className={cn('w-6 h-6 text-gray-500 dark:text-gray-400', skill.color)}
                        />
                      )}

                      <span className='text-sm font-semibold text-gray-900 dark:text-white'>
                        {skill.skill}
                      </span>
                    </div>
                    {/* <div className='w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-gradient-to-r from-green-500 to-emerald-500'
                        style={{ width: `${skill.rating}%` }}
                      />
                    </div> */}

                    <div className='w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden'>
                      <div
                        className='relative h-full bg-gradient-to-r from-green-500 to-emerald-500 overflow-hidden'
                        style={{ width: `${skill.rating}%` }}
                      >
                        <div className='absolute inset-0 animate-skill-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70' />
                      </div>
                    </div>

                    <div className='text-xs text-gray-500 dark:text-gray-400 mt-2'>
                      {skill.rating}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className='space-y-6'>
          {/* Education */}
          <section className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-2xl'>
            <HeaderSection title='Educations' />
            {/* {config.education.map((edu, index) => {
              const color = educationCardColor[index % educationCardColor.length];
              return (
                <div key={index} className={`bg-gradient-to-r ${color} my-4 p-6 rounded-xl border`}>
                  <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
                    {edu.institution}
                  </h3>
                  <p className='text-lg text-blue-700 dark:text-blue-300 mt-1'>{edu.degree}</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2'>
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    {edu.duration}
                  </p>
                </div>
              );
            })} */}

            <div className='relative border-l border-gray-200 dark:border-gray-700 pl-6'>
              {config.education.map((edu, index) => {
                const color = timelineColors[index % timelineColors.length];

                return (
                  <div key={index} className='mb-8 relative'>
                    {getTimelineDot()}
                    <div className={`bg-gradient-to-r ${color} p-6 rounded-xl border shadow-sm`}>
                      <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
                        {edu.institution}
                      </h3>

                      <p className='text-lg text-blue-700 dark:text-blue-300 mt-1'>{edu.degree}</p>

                      <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2'>
                        <Calendar className='w-4 h-4' />
                        {edu.duration}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
