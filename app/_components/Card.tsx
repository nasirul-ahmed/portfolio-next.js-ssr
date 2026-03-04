'use client';

import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
};

const variantStyles = {
  default:
    'bg-[var(--light-text-primary)] dark:bg-[var(--light-primary)] border border-gray-200 rounded-lg',
  elevated:
    'bg-[var(--light-text-primary)] dark:bg-[var(--light-primary)] rounded-lg shadow-md hover:shadow-lg transition-shadow',
  outlined:
    'bg-[var(--light-text-primary)] dark:bg-[var(--light-primary)] border-2 border-gray-200 rounded-lg',
  flat: 'bg-gray-50 rounded-lg',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  href,
  onClick,
  padding = 'md',
  variant = 'default',
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const baseStyles = `
    ${variantStyles[variant]}
    ${paddingStyles[padding]}
    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} block cursor-pointer`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div
        className={`${baseStyles} cursor-pointer`}
        onClick={onClick}
        role='button'
        tabIndex={0}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={baseStyles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
