import React from 'react'
import { ezasco, gofind, kurs } from '../Asset/photos'
import { img1,img2,img3,img4,img5,img6 } from '../Asset/photos'
import { FaGithub,FaFirefoxBrowser } from 'react-icons/fa6'
function ProjectCard() {
  return (
    <>
    {
        projects.map(({title,des,img,webLink,gitgubLink},i) =>{
            return (
                <div 
                className='w-full  h-auto px-12 py-10 rounded-lg shadow-md shadow-gray-700 flex flex-col items-center bg-gradient-to-r from-neutral-900 to-stone-800
            group hover:bg-gradient-to-b hover:from-black hover:to-slate-800 transition-colors duration-1000'
                key={i}>
                    <div className='w-full h-[80%] overflow-hidden rounded-lg'>
                        <img className='w-full h-full  object-cover group-hover:scale-110 duration-300 cursor-pointer'  src={img}/>
                        </div>
                    <div className='w-full mt-5 flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                          <h3 className='text-xl font-bold uppercase text-rose-600'>{title}</h3>
                            <div className='flex justify-between'>
                                <a href={gitgubLink}>
                                <button className='text-lg w-10 h-10 bg-black rounded-full text-slate-300  inline-flex justify-center  items-center hover:text-rose-800 duration-300'>
                                <FaGithub/>
                            </button>
                                </a>
                                <a href={webLink}>
                                <button className=' ml-2 text-lg w-10 h-10 bg-black rounded-full inline-flex text-slate-300  justify-center  items-center hover:text-rose-800 duration-300'>
                                <FaFirefoxBrowser/>
                            </button>
                                </a>
                         </div>
                        </div>
                        <div>
                            <p className=' text-sm text-slate-300 hover:text-slate-100 duration-300'>{des}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default ProjectCard

const projects = [
    {
        title:'GoFind ',
        des:"GoFind is the software that helps landlord manage their property and renter find house, apartment, and hotel ",
        img:gofind,
        webLink:'https://gofind.vercel.app',
        gitgubLink:'https://github.com/muzayenadem/GoFind'
    },
    {
        title:'EzasCo Eccommercer',
        des:"this eccommerce project helps people to buy the product and they can send each other message as a additional feuture",
        img:ezasco,
        webLink:'https://ezasco.vercel.app',
        gitgubLink:'https://github.com/muzayenadem/Ecommerce'
    },
    {
        title:'EzasCo Eccommercer',
        des:"this eccommerce project helps people to buy the product and they can send each other message as a additional feuture",
        img:img5,
        webLink:'https://gofind.vercel.app',
        gitgubLink:'https://github.com/muzayenadem/GoFind'
    },
    {
        title:'EzasCo Eccommercer',
        des:"this eccommerce project helps people to buy the product and they can send each other message as a additional feuture",
        img:img4,
        webLink:'https://gofind.vercel.app',
        gitgubLink:'https://github.com/muzayenadem/GoFind'
    },
    {
        title:'EzasCo Eccommercer',
        des:"this eccommerce project helps people to buy the product and they can send each other message as a additional feuture",
        img:img5,
        webLink:'https://gofind.vercel.app',
        gitgubLink:'https://github.com/muzayenadem/GoFind'
    },
    {
        title:'EzasCo Eccommercer',
        des:"this eccommerce project helps people to buy the product and they can send each other message as a additional feuture",
        img:img6,
        webLink:'https://gofind.vercel.app',
        gitgubLink:'https://github.com/muzayenadem/GoFind'
    },
]