import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export function Link({ variant = 'ghost', children, className = '', ...props }: LinkProps) {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    ghost: 'text-gray-600 hover:text-gray-900',
  };

  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}