'use client';

import { useTheme } from '@/hooks/useTheme';

interface ChipProps {
  label: string;
  isHovered?: boolean;
  className?: string;
  variant?: 'default' | 'count';
}

export default function Chip({
  label,
  isHovered = false,
  className = '',
  variant = 'default',
}: ChipProps) {
  const { theme } = useTheme();

  if (variant === 'count') {
    return (
      <span
        className={`px-2.5 py-1 rounded-md text-xs ${className}`}
        style={{
          color: theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(100,116,139,0.6)',
          fontFamily: '"DM Mono", monospace',
        }}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`px-2.5 py-1 rounded-md text-xs transition-all duration-300 ${className}`}
      style={{
        background:
          theme === 'dark'
            ? isHovered
              ? 'rgba(99,102,241,0.1)'
              : 'rgba(255,255,255,0.05)'
            : isHovered
              ? 'rgba(99,102,241,0.08)'
              : 'rgba(100,116,139,0.08)',
        color:
          theme === 'dark'
            ? isHovered
              ? 'rgba(255,255,252, 0.8)'
              : 'rgba(255,255,255,0.45)'
            : isHovered
              ? 'rgba(99,102,241,0.9)'
              : 'rgba(100,116,139,0.6)',
        border:
          theme === 'dark'
            ? isHovered
              ? '1px solid rgba(99,102,241,0.2)'
              : '1px solid rgba(255,255,255,0.08)'
            : isHovered
              ? '1px solid rgba(99,102,241,0.3)'
              : '1px solid rgba(100,116,139,0.15)',
        fontFamily: '"DM Mono", monospace',
      }}
    >
      {label}
    </span>
  );
}
