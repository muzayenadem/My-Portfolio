import React from 'react'
import { ezasco, gofind, kurs } from '../Asset/photos'
import { img1,img2,img3,img4,img5,img6 } from '../Asset/photos'
import { FaGithub,FaFirefoxBrowser } from 'react-icons/fa6'
function ProjectCard() {
  return (
    <>
    {
        projects.map(({title,des,img,webLink,githubLink},i) =>{
            return (
                <div 
                className='w-full  h-auto px-4 py-3 rounded-lg shadow-md shadow-gray-700 flex flex-col items-center bg-gradient-to-r from-neutral-900 to-stone-800
            group hover:bg-gradient-to-b hover:from-black hover:to-slate-800 transition-colors duration-1000'
                key={i}>
                    <div className='w-full h-[80%] overflow-hidden rounded-lg'>
                        <img className='w-full h-full  object-cover group-hover:scale-110 duration-300 cursor-pointer'  src={img}/>
                        </div>
                    <div className='w-full mt-5 flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                          <h3 className='text-xl font-bold uppercase text-rose-600'>{title}</h3>
                            <div className='flex justify-between'>
                                <a href={githubLink}>
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
        title:'Property Management system',
        des:"A MERN application that allows landlords to list properties and users to search rentals with interactive maps.",
        img:"https://res.cloudinary.com/dtmtgaepv/image/upload/v1785410365/News_Image/yjbmim2c5wlqegyyaxld.jpg",
        webLink:'https://gofind.vercel.app',
        githubLink:'https://github.com/muzayenadem/GoFind'
    },
    {
        title:'Dodola Official Website',
        des:"A full-stack community website with an admin dashboard for managing news, events, announcements, and public content.",
        img:"https://res.cloudinary.com/dtmtgaepv/image/upload/v1785405245/News_Image/teiihrvmcp5eyupssx01.jpg",
        webLink:'https://dodola-official-website.vercel.app',
        githubLink:'https://github.com/muzayenadem/Ecommerce'
    }, 
    {
        title:"House Price Predictor",
        des: "A machine learning model that predicts house prices using data preprocessing and neural network techniques",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRi81Y5lf9mJArGLu7grBvU0B9NDrAcmD6u7iceBvkuTNhxLyorYpQ-Lw&s=10",
        webLink:'',
        githubLink:'https://github.com/muzayenadem'
    },
    {
        title:'E-Commerce Demo',
        des:"A full-stack e-commerce application featuring product browsing, shopping cart, user authentication, and order management.",
        img:gofind,
        webLink:"https://ecommerce-client-coral.vercel.app/",
        githubLink:'https://github.com/muzayenadem/Ecommerce'
    },
    {
        title:'Personal Portfolio Website',
        des:'A responsive portfolio showcasing my projects, skills, and experience with a functional contact form.',
        img:"https://res.cloudinary.com/dtmtgaepv/image/upload/v1785414616/News_Image/e97awx8oo9csbxi7ahrz.jpg",
        webLink:'https://my-portfolio-frontend-bice.vercel.app/',
        githubLink:'https://github.com/muzayenadem/My-Portfolio'
    },
    {
        title:'Diary Application',
        des:"A modern diary application where users can write, organize, and manage personal notes securely.",
        img:img6,
        webLink:'',
        githubLink:'https://github.com/muzayenadem'
    },
]
