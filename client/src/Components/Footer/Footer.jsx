import React from 'react'
import { profile } from '../Asset/photos'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import LastFooter from './LastFooter'

function Footer() {
  return (
    <section className=''>
        <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-center m-auto gap-4 border-b-black w-[96%] ml-[2%] py-20 border-b-[1px]'>
            <div className='flex justify-center flex-col gap-4'>
                <div className='flex justify-center gap-8'>
                <img src={profile}
                className='w-16 h-16 rounded-full'
                />
                <h1 className='font-bold text-2xl text-stone-300 mt-4'>Muzyn</h1>
                </div>
                  <div className='flex flex-wrap justify-center gap-3 mt-3'>
                    <a href='https://www.facebook.com/muzayen.adem.9/'>
                    <span className='bannerIcon'>
                    <FaFacebookF/>
                   </span>
                    </a>
                   <span className='bannerIcon'>
                    <FaTwitter/>
                   </span>
                  <span className='bannerIcon'>
                 <FaLinkedin/>
                </span>
               </div>
            </div>
                <div className='flex flex-col justify-center  items-center gap-4'>
                    <h2 className=' text-red-600 font-bold text-bold text-2xl'>Active Links</h2>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>About</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Portfolio</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Services</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Blog</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Contact</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className=' text-red-600 font-bold text-bold text-2xl'>Resources</h2>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>About</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Authenticatin</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>System Status</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Terms Serves</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Over Right</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className=' text-red-600 font-bold text-bold text-2xl '>Developers</h2>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Documantation</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Authentication</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Api Reference</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>Support</p>
                    <p className=' text-gray-300 text-xl font-semibold tracking-wide'>OPen Source</p>
                </div>
          </div>
    </section>
  )
}

export default Footer
