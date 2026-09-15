import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

export default function SliderButton({ direction, className = '', ...props }: SliderButtonProps) {
  return (
    <button
      className={`p-3 rounded-full bg-[var(--green-dark)]/60 text-[var(--white)] border border-[var(--white)]/20 hover:bg-[var(--green-bright)] transition-all cursor-pointer backdrop-blur-md shadow-lg ${className}`}
      {...props}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-5 h-5" />
      ) : (
        <ChevronRight className="w-5 h-5" />
      )}
    </button>
  );
}