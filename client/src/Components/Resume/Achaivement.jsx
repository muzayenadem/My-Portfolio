import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
function Achaivement() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className='py-12'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Achaivement Quality</h1>
              <div className='flex flex-col mt-6 gap-6 border-l-[3px] h-[1000px] border-red-500 '>
                 <ResumeCard  />
              </div> 
            </div>
            <div>
            <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Achaivement Quality</h1>
            <div className='flex flex-col mt-6 gap-6 border-l-[3px] h-[1000px] border-red-500 '>
          <ResumeCard  />
    </div>
            </div>
          </div>
    </motion.div>
  )
}

export default Achaivement