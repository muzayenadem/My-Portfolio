import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}  className='py-12'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Experience Quality</h1>
              <div className='flex flex-col mt-6 gap-6 border-l-[3px] h-[1000px] border-red-500 '>
                 <ResumeCard educational={educational1} />
              </div> 
            </div>
            <div>
            <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Experience Quality</h1>
            <div className='flex flex-col mt-6 gap-6 border-l-[3px] h-[1000px] border-red-500 '>
          <ResumeCard educational={educational2}  />
    </div>
            </div>
          </div>
    </motion.div>
  )
}

export default Experience

const educational1 = [
  {
   title:'grade 1 - 8',
   subtitle:'Kechema elemantary school (2008 - 2015)',
   result:"95",
   des:'I completed my education from grades 1 to 8 at Kechema Elementary School.' 
  }, {
      title:'Secondary high school 9-10',
      subtitle:'Dodola secondary school (2016 - 2017)',
      result:"3.2/4",
      des:'I attended Dodola Secondary School from grades 9 to 10.' 
     },
     {
      title:'Preparatory 11-12',
      subtitle:'Hawiko preparatory school (2019 - 2024)',
      result:"442/600",
      des:'I studied at Hawiko Academy Preparatory School for 11 - 12.' 
     },

]

const educational2 = [
  {
    title:'Bs.C construction Management',
    subtitle:'University of Wachemo (2019 - 2024)',
    result:"3.7/4",
    des:'I studied Construction Technology Management at Wachemo University, achieving high-quality performance.' 
   },
  {
   title:'Responsive Website Basics: Code w ith HTML, CSS,and JavaScript',
   subtitle:'University Of London On Coursera (2023)',
   result:"91",
   des:'i have educated from 1- 8 at kechema elemantary school' 
  }, {
      title:'React Basics',
      subtitle:'I comleted From Meta On Coursera (2023)',
      result:"94",
      des:'i have learned construction technology management at wachemo university with high quality performance' 
     },
]