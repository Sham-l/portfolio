import { Github, Linkedin } from '@assets/icons'
import { cn } from '@lib/utils'
import Link from 'next/link'
import React from 'react'

const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={cn("space-x-2 flex items-center text-slate-500 md:absolute", className)}>
    <Link className='overflow-hidden' href="https://www.linkedin.com/in/shameelk/">
     
        <Linkedin />
      
    </Link>
    <Link className='overflow-hidden' href="https://github.com/sham-l">
      <Github />
    </Link>
   
  </div>
  )
}

export default SocialLinks