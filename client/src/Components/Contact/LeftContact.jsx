import React from 'react'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { testimonial1 } from '../Asset/photos'

function LeftContact() {
  return (
    <div className='w-full md:w-[35%]   rounded-lg shadow-lg p-3 shadow-black flex flex-col gap-6 justify-center'>
    <img 
    className='h-72 object-cover rounded-lg'
    src={testimonial1}></img>
    <div className='w flex gap-2 flex-col p-3'>
        <h1 className=' font-bold text-2xl'>Muzayen Adem</h1>
        <p className=' tracking-wider text-gray-400 text-lg'>MERN STASCK DEVELOPER</p>
        <p className='text-base tracking-wide text-gray-500 '>Yes, talking to random people online is OK as long as you do so safely. Talking to strangers can be a way to meet new friends and </p>
        <p className='text-lg text-gray-400'>Phone: <span className='font-bold text-gray-300 text-lg'>+251936591302</span> </p>
        <p className='text-lg text-gray-400'>Email: <span className='font-bold text-gray-300 text-lg'>muzynadem@gmail.com</span> </p>
        <div>
        <h1 className=' text-gray-400 text-2xl'>FIND ME IN</h1>
        <div className='flex flex-wrap justify-start gap-3 mt-3'>
           <span className='bannerIcon'>
             <FaFacebookF/>
          </span>
          <span className='bannerIcon'>
            <FaTwitter/>
         </span>
         <span className='bannerIcon'>
           <FaLinkedin/>
         </span>
        </div>
        </div>
    </div>
  </div>
  )
}

export default LeftContact