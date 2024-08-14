import React from 'react'

function AchaivmentCard({achaivment}) {
          return (
            <>
             {
                achaivment.map(({title,des},i) =>{
                    return (
                        <div key={i} className='w-full h-1/3 flex group'>
                           <div className='w-10 h-[5px] bg-black mt-6 relative'>
                            <span className='w-5 h-5 bg-black rounded-full absolute -top-2 -left-3 flex justify-center items-center  bg-opacity-60'>
                                <span className='w-3 h-3 bg-black rounded-full  inline-flex group-hover:bg-red-600 duration-300'></span>
                            </span>
                           </div>
                           <div className='w-full bg-black bg-opacity-20 py-10  hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-xl shadow-slate-700'>
                            <div className=' '>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='text-2xl font-semibold text-slate-300 group-hover:text-white duration-300'>{title}</h3>
                                    <p className='text-sm text-gray-300 hover:text-white duration-300'> {des}</p>
                                </div>
                                {/* <div className='py-3 text-white/80 font-bold'>
                                <span>Technologies: </span>
                                    {technologies}
                                </div>
                                <details>
                                    {detail}
                                </details> */}
                               </div>
                           </div>
                        </div>
                    )
                })
             }
            </>
          )
        }

export default AchaivmentCard