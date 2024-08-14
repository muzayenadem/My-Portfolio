import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
import AchaivmentCard from './AchaivmentCard'
function Achaivement() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className='py-12'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Achaivement Quality</h1>
              <div className='flex flex-col mt-6 gap-6 border-l-[3px]  border-red-500 '>
                 <AchaivmentCard achaivment={achaivment1}/>
              </div> 
            </div>
            <div>
            <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Achaivement Quality</h1>
            <div className='flex flex-col mt-6 gap-6 border-l-[3px]  border-red-500 '>
            <AchaivmentCard achaivment={achaivment2}/>
    </div>
            </div>
          </div>
    </motion.div>
  )
}

export default Achaivement

const achaivment1 = [
      {
      title:'Launched a Successful Web Application',
      des:'I Built and launched an e-commerce platform that gained 10,000 users in the first month.' 
      }, {
      title:'Enhanced Code Quality',
      des:'I mplemented code reviews and automated testing, reducing bugs by 40%.' 
     },
     {
      title:'Developed a Secure Login System',
      des:'I Created a custom authentication system using JWT, improving user security and reducing support issues.' 
     },

]

const achaivment2 = [
  {
    title:'Automated Data Backup',
    des:'I Set up automated backups for a database, ensuring data security and recovery.' 
   },
    {
    title:'Implemented Real-Time Features',
    des:'I Added real-time notifications and updates, enhancing user interaction.' 
    }, {
      title:'Integrated Payment Gateway',
      des:'I Successfully integrated a payment gateway, enabling seamless online transactions.' 
     },
]