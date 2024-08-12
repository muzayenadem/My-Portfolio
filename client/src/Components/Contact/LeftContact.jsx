import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { profile, testimonial1 } from '../Asset/photos'

function LeftContact() {
  return (
    <div className='w-full md:w-[35%]   rounded-lg shadow-lg p-3 shadow-black flex flex-col gap-6 justify-center'>
    <img 
    className='h-72 object-cover rounded-lg'
    src={profile} style={{height:'60%'}}></img>
    <div className='w flex gap-2 flex-col p-3'>
        <h1 className=' font-bold text-2xl'>Muzayen Adem</h1>
        <p className=' tracking-wider text-gray-400 text-lg'>MERN STASCK DEVELOPER</p>
        <p className='text-base tracking-wide text-gray-500 '>As a MERN stack developer, I build scalable and responsive web applications using MongoDB, Express.js, React, and Node.js. I deliver robust backend solutions and seamless frontend experiences tailored to your needs, ensuring high performance and user satisfaction. </p>
        <p className='text-lg text-gray-400'>Phone: <span className='font-bold text-gray-300 text-lg'>+251936591302</span> </p>
        <p className='text-lg text-gray-400'>Email: <span className='font-bold text-gray-300 text-lg'>muzynadem@gmail.com</span> </p>
        <div>
        <h1 className=' text-gray-400 text-2xl'>FIND ME IN</h1>
        <div className='flex flex-wrap justify-start gap-3 mt-3'>
          <a href='https://www.facebook.com/muzayen.adem.9/'>
          <span className='bannerIcon'>
             <FaFacebookF/>
          </span>
          </a>
          <a href='https://x.com/MuzayenAdem123'>
          <span className='bannerIcon'>
            <FaTwitter/>
         </span>
          </a>
           <a href='https://www.linkedin.com/in/muzyn-adem-593a83240/'>
           <span className='bannerIcon'>
           <FaLinkedin/>
           </span>
           </a>
        </div>
        </div>
    </div>
  </div>
  )
}

export default LeftContact