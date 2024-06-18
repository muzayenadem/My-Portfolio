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
              <SkillsPercent/>
              </div> 
            </div>
            <div>
            <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Development Quality</h1>
            <div className=' mt-6'>
                <SkillsPercent/>
             </div>
            </div>
          </div>
    </motion.div>
  )
}

export default MySkills