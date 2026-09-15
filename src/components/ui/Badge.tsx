import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--green-medium)]/30 text-[var(--green-bright)] border border-[var(--green-bright)]/30 ${className}`}>
      {children}
    </span>
  );
}