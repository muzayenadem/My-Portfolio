import React from 'react'
import { motion } from 'framer-motion'
function SkillsPercent() {
  return (
    <>
    {
        skills.map(({title,percent},i) =>{
            return(
                <div key={i} className=' overflow-x-hidden flex flex-col mt-5'>
                  <p className='text-sm uppercase'>{title}</p>
                  <span className='w-full h-2 mt-2 rounded-md inline-flex bg-slate-950'>
                    <motion.span 
                    initial={{x:-100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.5, delay:0.5}}
                    className={`w-[${percent}%] h-2 bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 relative`}>
                        <span className={`absolute -top-7 right-0`}>{percent}%</span>
                    </motion.span>
                  </span>
                </div>
            )
        })
    }
    </>
  )
}

export default SkillsPercent



const skills = [
    {
    title:'Fotoshop',
    percent:100
    },
    {
    title:'Fotoshop',
    percent:90
    },
    {
    title:'Fotoshop',
    percent:40
    },
    {
    title:'Fotoshop',
    percent:95
    },
    {
    title:'Fotoshop',
    percent:60
    },
      {
    title:'Fotoshop',
    percent:80
    },
]