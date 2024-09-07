'use client';

import NextLink from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  isActive: boolean;
}

const Link = ({ href, children, className, isActive }: LinkProps) => {
  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const targetId = href.replace('#', '');
  //   const element = document.getElementById(targetId);
  //   element?.scrollIntoView({ behavior: 'smooth' });
  //   window.history.pushState(null, '', href);
  // };

  return (
    <NextLink
      // onClick={handleClick}
      href={href}
      className={cn(
        'relative flex items-center text-sm font-medium text-slate-500 transition-colors',
        'hover:text-slate-500',
        className,
        {
          'text-slate-200': isActive,
        },
      )}
    >
      <span
        className={cn(
          'hidden h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-12 group-hover:bg-slate-200 md:block',
          {
            'w-12 bg-slate-200': isActive,
          },
        )}
      ></span>
      {children}
    </NextLink>
  );
};

export default Link;
