import React, { useState } from 'react'
import { profile } from '../Asset/photos'
import { FaBars } from 'react-icons/fa6'
import {Link} from 'react-scroll'
import { navBarLinks } from './NavLinks'
function Nav() {
  const [open,setOpen] = useState(false)
  console.log(navBarLinks)
  return (
    <div className='flex flex-wrap justify-between border-b-2 bg-stone-900 p-1 rounded-b-2xl sticky z-10 bg top-0 left-0'>
      <div className='ml-5'>
      <img src={profile} className=' rounded-full w-14 h-14 '/>
      </div>
        <div className=' hidden md:block mr-[5%] mt-4'>
          <ul className='flex justify-start'>
          {
            navBarLinks.map(({_id,title,link},i)=>{
              return <li 
              key={i}
              className='ml-4  text-orange-700 font-bold text-xl hover:text-white'>
                <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                  {title}
                </Link>
              </li>
            })
          }
          </ul>
        </div>
        <div className='md:hidden mr-[5%] mt-4'>
       <span className=' font-bold text-2xl' onClick={()=>setOpen(!open)}>
        <FaBars/>
       </span>
        </div>
        <dialog open={open} className='w-screen h-[100vh] bg-indigo-950'>
            <h1 onClick={()=>setOpen(!open)} className='ml-[90%] text-white font-bold text-2xl'>X</h1>
            <div className='ml-[30%] mt-[5%]'>
            <ul className='block '>
            {
            navBarLinks.map(({_id,title,link},i)=>{
              return <li 
              key={i}
              className='mt-4  text-orange-700 font-bold text-xl hover:text-white'>
                <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={()=> setOpen(!open)}
                >
                  {title}
                </Link>
              </li>
            })
          }
          </ul>
            </div>
          </dialog>
    </div>
  )
}



export default Nav