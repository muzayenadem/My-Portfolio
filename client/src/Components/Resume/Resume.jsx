import React, { useState } from 'react'
import Title from '../Asset/Title'
import Educational from './Educational'
import MySkills from './MySkills'
import Achaivement from './Achaivement'
import Experience from './Experience'

function  Resume () {
  const [educationalData, setEductionalData] = useState(false)
  const [MySkillsData,setMySkillsData] = useState(false)
  const [achaivementData, setAchaivement] = useState(false)
  const [experienceData, setExperienceData] = useState(true)
  return (
    <section id='Resume' className='py-20 w-[90%] ml-[5%] border-b-2 border-b-gray-900'>
        <div className='flex justify-center items-center text-center'>
       <Title title='3+ Years of exeperience' des='My Resume'/>
      </div>
      <div>
        <ul className='w-full grid grid-cols-2 gap-1 md:grid-cols-4'>
          <li 
           onClick={()=>
            setEductionalData(true) &
            setAchaivement(false) &
            setExperienceData(false) &
            setMySkillsData(false)
           }
           className={`resumeli ${educationalData ? 'resumeli   rounded-lg':'noresumeli '} `}>Education</li>
          <li onClick={()=>
            setMySkillsData(true) &
            setEductionalData(false) &
            setAchaivement(false) &
            setExperienceData(false) 
           } className={`${MySkillsData ? ' resumeli  rounded-lg':'noresumeli'} resumeli`} > Skills</li>
          <li 
           onClick={()=>
            setExperienceData(true) &
            setMySkillsData(false) &
            setEductionalData(false) &
            setAchaivement(false) 
           }
           className={`${experienceData ? 'resumeli rounded-lg':'noresumeli'} resumeli`}>Experience</li>
          <li
           onClick={()=>
            setAchaivement(true) &
            setExperienceData(false) &
            setEductionalData(false) &
            setMySkillsData(false)
           }
           className={`${achaivementData ? ' resumeli rounded-lg':'rounded-none noresumeli'} resumeli`}>Achaivment</li>
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
