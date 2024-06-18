import React, { useState } from 'react'
import Title from '../Asset/Title'
import Educational from './Educational'
import MySkills from './MySkills'
import Achaivement from './Achaivement'
import Experience from './Experience'

function  Resume () {
  const [educationalData, setEductionalData] = useState(true)
  const [MySkillsData,setMySkillsData] = useState(false)
  const [achaivementData, setAchaivement] = useState(false)
  const [experienceData, setExperienceData] = useState(false)
  return (
    <section id='Resume' className='py-20 w-[90%] ml-[5%] border-b-2 border-b-gray-900'>
        <div className='flex justify-center items-center text-center'>
      <Title title='6+ Years of exeperience' des='My Resume'/>
      </div>
      <div >
        <ul className='w-full grid grid-cols-2  md:grid-cols-4'>
          <li 
           onClick={()=>
            setEductionalData(true) &
            setAchaivement(false) &
            setExperienceData(false) &
            setMySkillsData(false)
           }
           className={`${ educationalData ? ' border-red-950 border-[1.5px]   rounded-lg':'rounded-none'} resumeli`}>Education</li>
          <li  onClick={()=>
            setMySkillsData(true) &
            setEductionalData(false) &
            setAchaivement(false) &
            setExperienceData(false) 
           } className={`${ MySkillsData ? ' border-red-950 border-[1.5px]   rounded-lg':'rounded-none'} resumeli`} > Skills</li>
          <li 
           onClick={()=>
            setExperienceData(true) &
            setMySkillsData(false) &
            setEductionalData(false) &
            setAchaivement(false) 
           }
           className={`${ experienceData ? ' border-red-950 border-[1.5px]  rounded-lg':'rounded-none'} resumeli`}>Experience</li>
          <li
           onClick={()=>
            setAchaivement(true) &
            setExperienceData(false) &
            setEductionalData(false) &
            setMySkillsData(false)
           }
           className={`${ achaivementData ? ' border-red-950 border-[1.5px]  rounded-lg':'rounded-none'} resumeli`}>Achaivment</li>
        </ul>
      </div>
      {
        educationalData && <Educational/>
      }
      {
        MySkillsData && <MySkills/>
      }
      {
        experienceData && <Experience/>
      }
      {
        achaivementData && <Achaivement/>
      }
    </section>
  )
}

export default  Resume 
