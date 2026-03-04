import SectionHeader from '../_components/SectionHeader';
import { config } from '@/config/config';
import ExpertiseCard from '../_components/ExpertiseCard';

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <div className='max-w-4xl mx-auto space-y-12 mt-12'>
      <section>
        <SectionHeader title='About Me' />
        <div className='mt-6'>
          {config.about.map((item, index) => (
            <p key={index} className='tracking-wide text-md mb-4 text-gray-900 dark:text-white'>
              {item.text as unknown as React.ReactNode}
            </p>
          ))}
        </div>
      </section>

      <section className='space-y-6'>
        <SectionHeader title='My Expertise' className='mb-8' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {config.expertise.map(item => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
