import { Github, Gmail, Linkedin,Phone } from '@assets/icons'
import { cn } from '@lib/utils'
import Link from 'next/link'
import React from 'react'

const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={cn("space-x-4 flex items-center text-slate-500 md:absolute ", className)}>
    <Link className='overflow-hidden' href="https://www.linkedin.com/in/shameelk/" target="_blank" rel="noopener noreferrer" >
     
        <Linkedin />
      
    </Link>
    <Link className='overflow-hidden' href="https://github.com/sham-l" target="_blank" rel="noopener noreferrer">
      <Github />
    </Link>
    <Link className='overflow-hidden' href="https://mail.google.com/mail/?view=cm&to=shamz81443@gmail.com" target="_blank" rel="noopener noreferrer">
      <Gmail />
    </Link>
    <Link className='overflow-hidden' href="tel:916238830867" rel="noopener noreferrer">
      <Phone />
    </Link>
      </div>
  )
}

export default SocialLinks