import React from 'react'
import { links } from '../data.jsx'
console.log(links);
export const Navbar = () => {
  return (
    <nav className='bg-blue-100 sticky top-0'>
        <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
            <h2 className='text-3xl font-bold'>
                Web
                <span className='text-blue-600'>Dev</span>
            </h2>
            <div className='flex gap-x-3'>
                {links.map((link)=>{
                    const {id, href,text} = link;
                    return(
                        <a key={id} href={href}>{text}</a>
                    )
                })}
            </div>
        </div>
    </nav>
  )
}
