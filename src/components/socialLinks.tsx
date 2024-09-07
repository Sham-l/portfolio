import { Github, Gmail, Linkedin,Phone } from '@assets/icons'
import { cn } from '@lib/utils'
import Link from 'next/link'
import React from 'react'

const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={cn("space-x-4 flex items-center text-slate-500 md:absolute ", className)}>
    <Link className='overflow-hidden' href="https://www.linkedin.com/in/shameelk/">
     
        <Linkedin />
      
    </Link>
    <Link className='overflow-hidden' href="https://github.com/sham-l">
      <Github />
    </Link>
    <Link className='overflow-hidden' href="mailto:shamz81443@gmail.com">
      <Gmail />
    </Link>
    <Link className='overflow-hidden' href="tel:916238830867">
      <Phone />
    </Link>
      </div>
  )
}

export default SocialLinks