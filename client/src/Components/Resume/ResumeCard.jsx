import React from 'react'

function ResumeCard() {
  return (
    <>
     {
        educational.map(({title,subtitle,result,des},i) =>{
            return (
                <div key={i} className='w-full h-1/3 flex group'>
                   <div className='w-10 h-[5px] bg-black mt-6 relative'>
                    <span className='w-5 h-5 bg-black rounded-full absolute -top-2 -left-3 flex justify-center items-center  bg-opacity-60'>
                        <span className='w-3 h-3 bg-black rounded-full  inline-flex group-hover:bg-red-600 duration-300'></span>
                    </span>
                   </div>
                   <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-xl shadow-slate-700'>
                    <div className='flex justify-between '>
                        <div>
                            <h3 className='text-2xl font-semibold text-slate-300 group-hover:text-white duration-300'>{title}</h3>
                            <p className='text-sm text-gray-300 hover:text-white duration-300'>{subtitle}</p>
                        </div>
                        <div className='px-6 py-1 bg-black flex items-center rounded-lg shadow-sm shadow-slate-700 justify-center text-red-700 font-bold'>
                            {result}
                            </div>
                        </div>
                       {des}
                   </div>
                </div>
            )
        })
     }
    </>
  )
}

export default ResumeCard

const educational = [
    {
     title:'Bs C construction Management',
     subtitle:'University of Wachemo (2019 - 2024)',
     result:"3.7/4",
     des:'i have learned construction technology management at wachemo university with high quality performance' 
    }, {
        title:'Bs C construction Management',
        subtitle:'University of Wachemo (2019 - 2024)',
        result:"3.7/4",
        des:'i have learned construction technology management at wachemo university with high quality performance' 
       },
       {
        title:'Bs C construction Management',
        subtitle:'University of Wachemo (2019 - 2024)',
        result:"3.7/4",
        des:'i have learned construction technology management at wachemo university with high quality performance' 
       },

  ]