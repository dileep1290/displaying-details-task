import React from 'react'
import { skills } from '../data'

export const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
        <div className='border-b border-gray-200 pb-5'>
            <h2 className='text-3xl fonr-medium tracking-wider capitalize'>
                Tech Lover
            </h2>
        </div>
        <div className='py-16 grid md:grid-cols-2 lg:grid-colos-3 gap-8'>
            {
                skills.map((skill)=>{
                    const {id, title, icon, text} = skill;
                    return(
                        <article key={id}>
                            <span>
                                {icon}
                            </span>
                            <h4 className='mt-6 font-bold'>{title}</h4>
                            <p className='mt-2 text-slate-500'>{text}</p>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}
