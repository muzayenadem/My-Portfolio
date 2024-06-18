import React from 'react'
import Title from '../Asset/Title'
import Card from './Card'

function Feutures() {
  return (
    <section id='Feutures' className='w-[94%] py-20  h-auto  mx-auto border-b-[1px] border-b-black' >
        <Title title='Features' des='What i do'/>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
        <Card/>
       </div>
        </section>
  )
}

export default Feutures