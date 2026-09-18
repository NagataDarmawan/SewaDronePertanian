import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Gabungkan atribut untuk Button dan Anchor elemen
type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type ButtonProps = (ButtonAsButton | ButtonAsAnchor) & {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  showIcon?: boolean;
};

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  href, 
  showIcon = true,
  ...props 
}: ButtonProps) {
  // Base style dengan micro-interaction scale saat active (diklik)
  const baseStyle = "group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ease-out cursor-pointer active:scale-95 select-none";
  
  const variants = {
    primary: "bg-[var(--green-bright,#22c55e)] text-white hover:bg-[var(--green-dark,#15803d)] shadow-md hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] border border-transparent",
    secondary: "bg-[var(--green-dark,#15803d)] text-white hover:bg-[var(--green-medium,#16a34a)] border border-transparent",
    
    // VARIAN OUTLINE DENGAN EFEK SPOTLIGHT & GLOW HALUS
    outline: "bg-transparent text-[var(--green-bright,#22c55e)] border border-[var(--green-bright,#22c55e)] hover:bg-[var(--green-bright,#22c55e)]/10 hover:border-[var(--green-bright,#22c55e)] hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] backdrop-blur-sm",
    
    white: "bg-white text-gray-900 hover:bg-[var(--green-bright,#22c55e)] hover:text-white shadow-md border border-transparent"
  };

  const combinedClassName = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      <span className="tracking-wide">{children}</span>
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/btn:rotate-45 group-hover/btn:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}