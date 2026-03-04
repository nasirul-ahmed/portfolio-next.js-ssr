import React from 'react';
import type { LucideIcon } from 'lucide-react';
interface HeaderSectionProps {
  title: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  barColor?: string;
  className?: string;
  icon?: LucideIcon;
  iconSize?: number;
  iconClasses?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  level: Tag = 'h2',
  barColor = 'bg-sky-600 dark:bg-sky-500',
  className = '',
  icon: Icon,
  iconSize = 24,
  iconClasses,
}) => {
  return (
    <Tag
      className={`text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3 ${className}`}
    >
      {Icon ? (
        <span className='flex items-center justify-center text-sky-600 dark:text-sky-400'>
          <Icon size={iconSize} className={iconClasses ? iconClasses : ''} />
        </span>
      ) : (
        <span className={`w-1.5 h-7 rounded-full ${barColor}`} aria-hidden='true' />
      )}

      {title}
    </Tag>
  );
};

export default HeaderSection;
