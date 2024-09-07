'use client';
import { useEffect, useState } from 'react';
import CLink from './ui/link';
import { cn } from '@lib/utils';
import { useActiveSection } from '@utils/hooks/useIntersectionObserver';
import { Button } from './ui/button';
import { Github, Linkedin } from '@assets/icons';
import Link from 'next/link';
import SocialLinks from './socialLinks';

const HomeLinks = () => {
  const sectionIds = ['about', 'experience', 'projects'];
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    {
      href: '#about',
      text: 'About',
      id: 'about',
      key: 1,
      animate: 'animate-[slide-in-right_.8s_ease-out_forwards]',
    },
    {
      href: '#experience',
      text: 'Experience',
      id: 'experience',
      key: 2,
      animate: 'animate-[slide-in-right_1.3s_ease-out_forwards]',
    },
    {
      href: '#projects',
      id: 'projects',
      text: 'Projects',
      key: 3,
      animate: 'animate-[slide-in-right_1.7s_ease-out_forwards]',
    },
  ];

  return (
    <div
      className={cn(
        'fixed top-0 right-0 left-0 flex justify-between w-full overflow-hidden px-5 py-4 transition-all duration-500 md:relative md:w-max md:px-0 items-center',
        { 'bg-[#0c1520]': isScrolled },
      )}
    >
      <div className="flex gap-x-4 md:flex-col md:items-start md:gap-x-0 md:gap-y-5">
        {links.map((link, _) => (
          <CLink
            key={link.key}
            isActive={activeSection === link.id}
            className={cn('group flex items-center gap-2', link.animate)}
            href={link.href}
          >
            {/* <span className='bg-slate-500 w-8 h-px group-hover:bg-slate-200 group-hover:w-12 transition-all duration-300'></span> */}
            <span
              className={cn('transition-all duration-300 group-hover:text-slate-200', {
                'scale-[1.05]': activeSection === link.id,
              })}
            >
              {link.text}
            </span>
          </CLink>
        ))}
      </div>
      
      <SocialLinks className="md:hidden" />
    </div>
  );
};

export default HomeLinks;
