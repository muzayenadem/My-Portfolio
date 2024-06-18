import React from 'react'
import Title from '../Asset/Title'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <section id='Projects' className='py-20 w-[90%] ml-[5%]'> 
      <div className='flex justify-center items-center text-center'>
      <Title title='Visit My Portfolio And Keep Feedback' des='My Projects'/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <ProjectCard/>
      </div>
    </section>
  )
}
export default Projects