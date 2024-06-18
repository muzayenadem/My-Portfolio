import React from 'react'
import { profile } from '../Asset/photos'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa6';
import {SiTailwindcss, SiFigma,SiNextdotjs} from 'react-icons/si'
function Banner() {
    const [text] = useTypewriter({
        words:['Fullstack Developr.', 'Ui Developer.', 'Profassional Programmer.'],
        typeSpeed:20,
        delaySpeed:2000,
        deleteSpeed:20,
        loop:true
    })
  return (
    <section id='Home' className='grid grid-cols-1 md:grid-cols-2 pb-20 border-b-[1px] border-b-black'>
    <div className='  ml-[10%] md:w-[85%] md:h-[70%] py-20 mt-10 rounded-md'>
        <div className='flex flex-col gap-4 '>
        <h2 className=' font-light'>WELCOME TO MY WORLD </h2>
        <h1 className=' text-2xl font-bold'>Hi, I am <span className=' text-red-600'>Muzayen Adem</span></h1>
        <h2 className=' font-bold' >a <span>
            {text} </span>
            <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='red'
            />
            </h2>
        <h3 className='font-light'>
            i use  mern stack which means mongodb exress react and node to build dynamic and complex web app
        </h3>
        </div>
        <div className='flex flex-wrap justify-between gap-10 py-8'>
            <div className='flex  flex-col gap-5'>
                <h2>FIND ME IN</h2>
                <div className='flex flex-wrap justify-between gap-3'>
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
            <div className='flex flex-col gap-5'>
                <h2>GREAT AT</h2>
                <div className='flex flex-wrap justify-between gap-3'>
                    <span className='bannerIcon'>
                        <FaReact/>
                    </span>
                    <span className='bannerIcon'>
                        <SiTailwindcss/>
                    </span>
                    <span className='bannerIcon'>
                        <SiFigma/>
                    </span>
                    <span className='bannerIcon'>
                        <SiNextdotjs/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div className='py-20 md:w-[60%] md:ml-[10%]  flex items-center justify-center'> 
        <img src={profile} className='   rounded-md'/>
    </div>
   </section>
  )
}

export default Banner