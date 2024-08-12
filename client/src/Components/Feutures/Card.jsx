import React, { useState } from 'react'
import { FaReact,FaBars,FaAppStore,FaArrowRight } from 'react-icons/fa6';
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrDatabase } from "react-icons/gr";
import { GiPodiumThird } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineContentPaste } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
function Card() {
    const [hide,setHide] = useState(false)
    const [index,setIndex] = useState(null)
    const showHandler = (i)=>{
        setHide(true)
        setIndex(i)
    }
    const hideHandler = (i)=>{
        setHide(false)
        setIndex(i)
    }
  return (
    <>
    {
        data.map(({title,des1,des2,icon},i) => {
            return <div key={i} onMouseOver={()=>showHandler(i)} onMouseLeave={()=> hideHandler(i)} className='w-full  overflow-y-hidden  px-12 py-5 rounded-lg shadow-md shadow-gray-700 flex items-center bg-gradient-to-r from-neutral-900 to-stone-800
            group hover:bg-gradient-to-t hover:from-black hover:to-slate-800 transition-colors duration-1000'>
             <div className='md:h-72 '>
                 <div className='flex flex-col gap-4 h-full md:mt-5 group-hover:mt-0 duration-500 transition-transform' >
                 <div className='w-10 flex justify-center items-center'>
                    <span className='text-5xl text-rose-600'>{icon}</span>
                   </div>
                   <div className='flex flex-col gap-4'>
                       <h2 className='text-2xl'>{title}</h2>
                       <p className='base'>{des1}</p>
                       <p className='base'>{des2}</p>
                   </div>
                   <span className={`text-2xl text-rose-600 ${hide & i == index ? '' :'hidden'}`}>
                    <FaArrowRight/>
                   </span>
                 </div>
                 </div>   
            </div>
        })
    }
        </>
  )
}

export default Card

const data = [
    {
        title:'Custom Web Applications',
        des1:'Develop bespoke web applications tailored to specific business requirements.',
        des2:'Build interactive and responsive user interfaces with React.',
        icon:<CgWebsite/>
    },
    {
        title:'E-commerce Solutions',
        des1:'Design and implement online stores with secure payment integration.',
        des2:'Integrate features like product search, user reviews, and recommendation systems.',
        icon:<IoBagHandleOutline/>
    },
    {
        title:'Content Management Systems (CMS)',
        des1:'Build and customize CMS platforms for managing website content.',
        des2:'Develop user-friendly interfaces for content creation and editing.',
        icon:<MdOutlineContentPaste/>
    },
    {
        title:'API Development',
        des1:'Design and develop RESTful APIs for seamless integration with third-party services.',
        des2:'Implement secure authentication and authorization mechanisms.',
        icon:<AiOutlineApi/>
    },
    {
        title:'Integration with Third-Party Services',
        des1:'Connect applications with APIs for services like payment gateways, geolocation, and social media.',
        des2:'Implement OAuth and other authentication methods for seamless user integration.',
        icon:<GiPodiumThird/>
    },
    {
        title:'Mobile-Friendly Web Designs',
        des1:'Ensure responsive design for optimal performance across various devices and screen sizes.',
        des2:'Implement mobile-first approaches and adaptive layouts.',
        icon:<FaAppStore/>
    },
    {
        title:'Data Analytics and Visualization',
        des1:'Develop dashboards and data visualization tools to analyze and display data.',
        des2:'Integrate with data sources and provide insights through interactive charts and graphs.',
        icon:<GrDatabase/>
    },
    {
        title:'Real-time Applications',
        des1:'Create chat applications, live notifications, and collaborative tools.',
        des2:'Utilize WebSockets and real-time data updates with Node.js.',
        icon:<MdOutlineRealEstateAgent/>
    },
    {
        title:'Security Enhancements',
        des1:'Integrate security features such as data encryption, secure authentication, and vulnerability assessments.',
        des2:'Regularly update and maintain security protocols to protect against threats.',
        icon:<RiSecurePaymentLine/>
    },
]