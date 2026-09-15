import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-2xl p-6 transition-all hover:border-[var(--green-bright)] hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
}