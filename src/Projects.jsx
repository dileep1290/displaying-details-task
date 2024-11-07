import React from 'react'
import { projects } from './data'
import {TiWorld} from "react-icons/ti"
import { FaGithub } from 'react-icons/fa'
export const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
        <div className='border-b boder-gray-200 pb-5'>
            <h2 className='text-3xl font-medium tracking-wider capitalize'>Projects</h2>
        </div>
        <div className='py-16 grid lg:grid-cols2 xl:grid-cols-3 gap-8'>
            {
                projects.map((project)=>{
                    const {id, url, img, text, github, title} = project;
                    return(
                        <article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'> 
                            <img src={img} alt={title}  className='w-full object-cover rounded-t-lg h-64'/>
                            <div className='capitalize p-8'>
                                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                                <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
                                <div className='mt-4 flex gap-x-4 items-center'> 
                                    <a href={url}>
                                        <TiWorld className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                                    </a>
                                    <a href={github}><FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-300"/></a>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}
