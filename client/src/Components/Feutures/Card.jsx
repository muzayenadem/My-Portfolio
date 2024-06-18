import React from 'react'
import { FaReact,FaBars,FaAppStore,FaArrowRight } from 'react-icons/fa6';
// import {AiFillApstore } from 'react-icons/fi'
function Card() {
  return (
    <>
    {
        data.map(({title,des,icon},i) => {
            return <div key={i} className='w-full h-96 md:h-80 px-12 py-10 rounded-lg shadow-md shadow-gray-700 flex items-center bg-gradient-to-r from-neutral-900 to-stone-800
            group hover:bg-gradient-to-b hover:from-black hover:to-slate-800 transition-colors duration-1000'>
             <div className='h-80 md:h-72 overflow-y-hidden'>
                 <div className='flex flex-col gap-8 h-full md:mt-14 group-hover:mt-0 duration-500 transition-transform' >
                 <div className='w-10 flex justify-center items-center'>
                    <span className='text-5xl text-rose-600'>{icon}</span>
                   </div>
                   <div className='flex flex-col gap-4'>
                       <h2 className='text-2xl'>{title}</h2>
                       <p className='base'>{des}</p>
                   </div>
                   <span className='text-2xl text-rose-600'>
                    <FaArrowRight/>
                   </span>
                 </div>
                 </div>   
            </div>
        })
    }
        </>
  )
}

export default Card

const data = [
    {
        title:'SEO Optimizing',
        des:'i am seo deeveloper since i was 19 and i am building alot of apps for campanies that works as we wanted . we bieve that we can do that',
        icon:<FaBars/>
    },
    {
        title:'SEO Optimizing',
        des:'i am seo deeveloper since i was 19 and i am building alot of apps for campanies that works as we wanted . we bieve that we can do that',
        icon:<FaAppStore/>
    },
    {
        title:'SEO Optimizing',
        des:'i am seo deeveloper since i was 19 and i am building alot of apps for campanies that works as we wanted . we bieve that we can do that',
        icon:<FaReact/>
    },
    {
        title:'SEO Optimizing',
        des:'i am seo deeveloper since i was 19 and i am building alot of apps for campanies that works as we wanted . we bieve that we can do that',
        icon:<FaAppStore/>
    },
    {
        title:'SEO Optimizing',
        des:'i am seo deeveloper since i was 19 and i am building alot of apps for campanies that works as we wanted . we bieve that we can do that',
        icon:<FaBars/>
    },
    {
        title:'SEO Optimizing',
        des:'i am seo deeveloper since i was 19 and i am building alot of apps for campanies that works as we wanted . we bieve that we can do that',
        icon:<FaReact/>
    },
]