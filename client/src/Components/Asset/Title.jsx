import React from 'react'

function Title({title,des}) {
  return (
    <section className='flex flex-col gap-4 mb-14'>
        <h3 className=' text-red-600 uppercase font-semibold tracking-wide'>{title}</h3>
        <h1 className='text-3xl font-bold capitalize '>{des}</h1>
    </section>
  )
}

export default Title