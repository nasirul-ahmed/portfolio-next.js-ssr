'use client';

import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: Route<string>;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className,
  fullWidth = false,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'px-4 py-2 rounded-4xl text-sm font-bold transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]',
        fullWidth && 'w-full block text-center',
        isActive
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
          : 'text-gray-700 md:hover:bg-gray-100 dark:text-gray-200 md:dark:hover:bg-gray-700 active:scale-[0.97]',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
