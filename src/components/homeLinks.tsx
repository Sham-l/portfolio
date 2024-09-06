'use client'
import {useEffect,useState} from 'react'
import Link from './ui/link';
import { cn } from '@lib/utils';
import { useActiveSection } from '@utils/hooks/useIntersectionObserver';

const HomeLinks = () => {
  const sectionIds = ['about','experience','projects'];
  const activeSection = useActiveSection(sectionIds);
const [isScrolled,setIsScrolled] = useState<boolean>(false) 

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
    href: "#about",
    text: "About",
        id: "about",
        key: 1,
        animate:'animate-[slide-in-right_.8s_ease-out_forwards]',
    
  },
  {
    href: "#experience",
    text: "Experience",
      id: "experience",
      key: 2,
    animate:'animate-[slide-in-right_1.3s_ease-out_forwards]',
    },
    {
      href: "#projects",
      id: "projects",
        text: "Projects",
        key: 3,
    animate:'animate-[slide-in-right_1.7s_ease-out_forwards]',

  }
]

  return (
    <div className={cn('md:w-max transition-all w-screen duration-500 fixed  py-5 top-0 right-0 flex  md:relative px-8 md:px-0',
        {'bg-[#0c1520] ':isScrolled}
      )}>
        <div className="flex items-center gap-x-8 md:flex-col md:gap-y-5 md:gap-x-0  md:items-start">    
      {
       
              links.map((link,_) => (
                  <Link key={link.key} isActive={activeSection === link.id} className={cn('flex items-center gap-2 group',link.animate)} href={link.href}>
                      {/* <span className='bg-slate-500 w-8 h-px group-hover:bg-slate-200 group-hover:w-12 transition-all duration-300'></span> */}
                      <span className='group-hover:text-slate-200'>{link.text}</span>
                  </Link>
          ))
         
        }
         </div>
    </div>
  )
}

export default HomeLinks