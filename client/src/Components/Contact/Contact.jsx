import React from 'react'
import Title from '../Asset/Title'
import LeftContact from './LeftContact'
import RightContact from './RightContact'

function Contact() {
  return (
    <section id='Contacts' className='py-20 border-b-[1px] border-b-black w-[96%] ml-[2%]'>
        <div className='flex justify-center items-center text-center'>
          <Title title='Contact' des='Contact With Me'/>
            </div>
            <div className='w-full md:w-[70%] md:ml-[15%]  flex flex-wrap'>
                   <div className=' ml-[1%]  h-auto flex flex-wrap  justify-between shadow-lg shadow-black '>
                    <LeftContact/>
                    <RightContact/>
                   </div>
                </div>
    </section>
  )
}

export default Contact