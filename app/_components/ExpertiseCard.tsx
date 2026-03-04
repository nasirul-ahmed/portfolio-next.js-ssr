import { IconMap, IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  title: string;
  description: ReactNode;
  icon: IconName;
  iconBg: string;
  iconColor: string;
  badge?: string;
  tags?: string[];
  special?: boolean;
};

export default function ExpertiseCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
  badge,
  tags,
  special,
}: Props) {
  // console.log('Rendering ExpertiseCard:', { title, icon, badge, tags });
  const Icon = IconMap[icon];

  console.log('Resolved Icon Component:', { icon, Icon });
  return (
    <div
      className={`group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg ${
        special
          ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 md:col-span-2'
          : 'bg-white dark:bg-gray-900/50'
      }`}
    >
      <div className='flex items-center gap-4'>
        <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${iconBg}`}>
          <Icon className={cn(`w-6 h-6`, iconColor)} />
        </div>

        <div className='flex-1'>
          <div className='flex items-center gap-3 mb-2 text-gray-900 dark:text-white'>
            <h3 className='text-lg font-semibold'>{title}</h3>

            {badge && (
              <span className='text-xs text-nowrap bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full'>
                {badge}
              </span>
            )}
          </div>

          <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>{description}</p>

          {tags && (
            <div className='flex flex-wrap gap-2 mt-3 text-gray-900 dark:text-white'>
              {tags.map(tag => (
                <span
                  key={tag}
                  className='text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
