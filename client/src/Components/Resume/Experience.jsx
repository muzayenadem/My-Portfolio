
import ResumeCard from './ResumeCard'
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
import { motion } from 'framer-motion'
import ExpereinceCard from './ExpereinceCard'
function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}  className='py-12'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2  gap-10'>
            <div>
                <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Experience Quality</h1>
              <div className='flex flex-col mt-6 gap-6 border-l-[3px] border-red-500 '>
                 <ExpereinceCard expereince={data1} />
              </div> 
            </div>
            <div>
            <h4 className=' text-red-600'>2019 - 2024</h4>
                <h1 className='font-bold text-4xl '>Experience Quality</h1>
            <div className='flex flex-col mt-6 gap-6 border-l-[3px]  border-red-500 '>
           <ExpereinceCard expereince={data2}/>
    </div>
            </div>
          </div>
    </motion.div>
  )
}

export default Experience


const data1 = [
  {
      title:'Full-Stack Web Application Development',
      project:'I Developed and deployed a full-stack e-commerce web application using the MERN stack.',
      technologies:'MongoDB, Express.js, React.js, Node.js, Firebase, Multer, JWT.',
      detail:'I mplemented user authentication with JWT, managed state using Redux, and integrated payment processing. Deployed the frontend on Vercel and the backend on Render.',
      icon:<CgWebsite/>
  },
  {
      title:'API Development & Integration',
      project:'I Designed and built RESTful APIs for a property management system.',
      technologies:'Node.js, Express.js, MongoDB.',
      detail:'I Created endpoints for CRUD operations, implemented authentication and authorization, and integrated third-party services for email notifications and payment gateways.',
  },
  {
      title:'Database Management',
      project:'I Optimized database queries for a high-traffic web application.',
      technologies:'MongoDB, Mongoose.',
      detail:'I Designed and implemented data models, improved query performance by indexing, and managed database migrations and backups.',
  },
  {
      title:'Frontend Development with React',
      project:'I Built a responsive user interface for a crowdsourced content platform.',
      technologies:'React.js, Redux, CSS, Material-UI.',
      detail:'I Developed dynamic forms, implemented client-side routing, and ensured a mobile-friendly design with responsive CSS frameworks.',
  }
    ]
const data2 =  [ {
      title:'Version Control and Collaboration',
      project:'I Worked in a team to develop a social media application.',
      technologies:'Git, GitHub, Agile methodology.',
      detail:'I Managed version control using Git, collaborated with team members via pull requests, and participated in code reviews. Followed Agile practices with regular sprints and stand-up meetings.',
 
  },
  {
      title:'Deployment and DevOps',
      project:'I ntegrated cloud file storage for a user-generated content platform.',
      technologies:'Docker, Vercel, Render.',
      detail:'I Containerized applications using Docker, set up continuous integration and continuous deployment (CI/CD) pipelines, and monitored application performance in production.',
  },
  {
      title:'Cloud Services and File Storage',
      project:'I ntegrated cloud file storage for a user-generated content platform.',
      technologies:'Firebase, Multer, AWS S3.',
      detail:'I mplemented file upload and storage using Firebase, managed large file uploads with Multer, and integrated AWS S3 for scalable storage solutions.',
  },
  {
      title:'Authentication & Security',
      project:'I Secured a web application with authentication and role-based access control.',
      technologies:'JSON Web Tokens (JWT), bcrypt, OAuth.',
      detail:'I mplemented secure password hashing with bcrypt, used JWT for session management, and integrated OAuth for third-party login options.',
},
]