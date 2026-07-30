import React from 'react'
import Title from '../Asset/Title'
import Card from './Card'

function Feutures() {
  return (
    <section id='Feutures' className='w-[94%] py-20 h-auto  mx-auto border-b-[1px] border-b-black' >
        <Title title='Features' des='What i do'/>
       <div className='grid px-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        <Card/>
       </div>
        </section>
  )
}

export default Feutures
