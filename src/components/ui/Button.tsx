import React from 'react';

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
};

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  href, 
  ...props 
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer";
  
  const variants = {
    primary: "bg-[var(--green-bright)] text-white hover:bg-[var(--green-medium)] shadow-md",
    secondary: "bg-[var(--green-dark)] text-white hover:bg-[var(--green-medium)]",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10",
    white: "bg-white text-gray-900 hover:bg-[var(--green-bright)] hover:text-white shadow-md"
  };

  const combinedClassName = `${baseStyle} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}