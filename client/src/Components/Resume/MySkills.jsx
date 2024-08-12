import React from 'react'
import { motion } from 'framer-motion'
import SkillsPercent from './SkillsPercent'
function MySkills() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}  className='py-12'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div>
                <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Design Quality</h1>
              <div className='mt-6'>
              <SkillsPercent skills={skills1}/>
              </div> 
            </div>
            <div>
            <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Development Quality</h1>
            <div className=' mt-6'>
                <SkillsPercent skills={skills2}/>
             </div>
            </div>
          </div>
    </motion.div>
  )
}

export default MySkills
const skills1 = [
  {
  title:'Javascript',
  percent:98
  },
  {
  title:'Express',
  percent:95
  },
  {
  title:'React',
  percent:97
  },
  {
  title:'Node',
  percent:90
  },
  {
  title:'Mongodb',
  percent:88
  },
    {
  title:'python',
  percent:85
  },
]
const skills2 = [
  {
  title:'Html',
  percent:96
  },
  {
  title:'Firebase',
  percent:85
  },
  {
  title:'Redux',
  percent:90
  },
  {
  title:'JsowWebToken ',
  percent:84
  },
  {
  title:'Tailwind css',
  percent:86
  },
    {
  title:'Material ui',
  percent:75
  },
]