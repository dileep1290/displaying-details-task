import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

export const Hero = () => {
  return (
    <section className='bg-blue-100 py-24'>
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
            <article>
                <h1 className='text-7xl font-bold tracking-wider'>I am Dileep Kumar</h1>
                <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wider'>Front-end developer</p>
                <p className='mt-2 text-slate-700 capitalize tracking-wide'>Turning figma files into front-end applications</p>
                <div className='flex- gap-x-4 mt-4'>
                    <a href="#"><FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" /></a>
                    <a href="#"><FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" /></a>
                    <a href="#"><FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" /></a>
                </div>
            </article>
            <article>
                <img src="https://dummyimage.com/200x200.jpg/5fa2dd/ffffff" alt="" className='h-80 lg-h-96'/>
            </article>
        </div>
    </section>
  )
}
