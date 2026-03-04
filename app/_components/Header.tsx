'use client';

import NavLink from './NavLink';
import { ThemeToggle } from './ThemeToggle';
import { config } from '@/config/config';
import { Route } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { IconMap } from '@/lib/icons';

export default function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsOpen(false);

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className='absolute top-6 left-0 right-0 z-52 flex justify-end md:justify-center px-4'>
      <nav
        ref={menuRef}
        className={cn(
          'w-full md:w-auto backdrop-blur-md border border-white/20 dark:border-blue-500/30 rounded-2xl px-6 py-3 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 flex flex-col'
        )}
      >
        <div className='flex justify-between items-center'>
          {/* Navigation Links */}
          <div className='hidden md:flex gap-4 items-center'>
            {config.headerNavs.map(({ item, href }) => (
              <NavLink key={item} href={href as unknown as Route<string>}>
                {item}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </div>

        <div className='md:hidden flex justify-between items-center'>
          <a href='/about' className='font-quintessential text-2xl text-black dark:text-white'>
            {config.name.split(' ')[0]}
          </a>
          <div className='md:hidden flex gap-4 justify-center items-center'>
            <div className='sm:block'>
              <ThemeToggle />
            </div>
            <button className='p-2' onClick={toggleMenu}>
              <IconMap.CiMenuFries className='w-6 h-6 text-black dark:text-gray-200/50' />
            </button>
          </div>
        </div>

        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className='flex flex-col gap-2 pt-2'>
            {config.headerNavs.map(({ item, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

              return (
                <NavLink
                  key={item}
                  href={href as Route<string>}
                  fullWidth
                  onClick={closeMenu}
                  className={cn(
                    'py-2',
                    isActive ? 'text-gray-800 dark:text-white' : 'text-black dark:text-gray-300'
                  )}
                >
                  {item}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
