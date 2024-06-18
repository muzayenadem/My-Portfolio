import React, { useState } from 'react'
import Slider from "react-slick";
import {RiStarFill} from 'react-icons/ri'
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa6';
import Title from '../Asset/Title'
import { comma, comma2, testimonial1, testimonial2, testimonial3 } from '../Asset/photos';
function Testimonal() {
  const [dotActive, setDotActive] = useState()

  function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div
      className='w-14 h-12  bg-slate-950 hover:bg-zinc-800 duration-300 rounded-md text-gray-300 text-2xl flex justify-center absolute items-center shadow-md shadow-slate-400 md:top-12 bottom-36 right-32 md:right-40 z-10 cursor-pointer'
        onClick={onClick}
      >
        <FaArrowRight/>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
      className='w-14 h-12  bg-slate-950 hover:bg-zinc-800 duration-300 rounded-md text-gray-300 text-2xl flex justify-center absolute items-center shadow-md shadow-slate-400 md:top-12 bottom-36 right-12 md:right-20 z-10 cursor-pointer'
        onClick={onClick}
      >
        <FaArrowLeft/>
      </div>
    );
  }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        beforeChange: (prev,next) =>{
          setDotActive(next)
        },
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{
              display:"flex",
              marginTop:"20px",
              gap:"15px",
              justifyContent:"center"
             }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              dotActive == i ? {
                width: "12px",
                height:"12px",
                cursor:"pointer",
                color: "blue",
                background:"#ff014f",
                borderRadius:"50%",
                border: "1px blue solid"
              } : {
                width: "12px",
                height:"12px",
                cursor:"pointer",
                color: "blue",
                background:"gray",
                borderRadius:"50%",
                border: "1px blue solid"
              }
            }
          >
          </div>
        )
      }
  return (
    <section id='Testimonial' className='py-20 border-b-[1px] border-b-black w-[96%] ml-[2%]'>
        <div className='flex justify-center items-center text-center'>
          <Title title='WHAT CLIENT SAY' des='Testmonial'/>
        </div>
        <div className=' max-w-6xl mx-auto'>
        <Slider {...settings}>
        <div className='w-full bg-neutral-800 '>
                   <div className='w-[98%] ml-[1%] md:h-[500px] h-auto grid grid-col-1 md:grid-cols-2 shadow-lg shadow-neutral-400'>
                      <div className='md:w-[80%] h-full  rounded-lg shadow-lg p-3 shadow-neutral-500 flex flex-col gap-6 justify-center'>
                        <img 
                        className='h-72 object-cover rounded-lg'
                        src={testimonial1}></img>
                        <div className='ml-[20%] md:ml-0'>
                            <p className='text-sm text-red-800 mb-2'>from somewhere</p>
                            <h1 className=' font-bold text-2xl'>Muzayen Adem</h1>
                            <p className='text-base tracking-wide text-gray-500 '>Opperation officer</p>
                        </div>
                      </div>
                      <div className='w-full h-full bg-neutral-800  flex  flex-wrap-reverse md:flex-col'>
                            <img className=' scale-100 w-32 m-10 mr-auto mt-5 ' src={comma2}/>
                        <div className='flex w-full  flex-col rounded-2xl bg-zinc-900 mb-3 m-10 p-5 shadow-sm shadow-stone-600'>
                            <div className=' flex justify-between border-b-[1px] border-b-black p-5 '>
                                <div>
                                   <h1 className='font-bold text-2xl'>Travel Mobile   App Design</h1>
                                   <p  className=' text-gray-400 mt-2'>Via Upwor Mar 4, 2015 - Aug 30, 2021 test</p>
                                </div>
                                <span className='text-xl font-bold text-orange-600 flex'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></span>
                            </div>
                            <div className=' mt-3  '>
                            <p  className='text-sm text-gray-400'>Yes, talking to random people online is OK as long as you do so safely. Talking to strangers can be a way to meet new friends and learn about different cultures and perspectives. However, always be cautious about the information you give, and remember that not everyone online may have good intentions.</p>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div className='w-full bg-neutral-800 '>
                   <div className='w-[98%] ml-[1%] md:h-[500px] h-auto grid grid-col-1 md:grid-cols-2 shadow-lg shadow-neutral-400'>
                      <div className='md:w-[80%] h-full  rounded-lg shadow-lg p-3 shadow-neutral-500 flex flex-col gap-6 justify-center'>
                        <img 
                        className='h-72 object-cover rounded-lg'
                        src={testimonial2}></img>
                        <div className='ml-[20%] md:ml-0'>
                            <p className='text-sm text-red-800 mb-2'>from somewhere</p>
                            <h1 className=' font-bold text-2xl'>Muzayen Adem</h1>
                            <p className='text-base tracking-wide text-gray-500 '>Opperation officer</p>
                        </div>
                      </div>
                      <div className=' h-full bg-neutral-800  flex  flex-wrap-reverse md:flex-col'>
                      <img className=' scale-100 w-32 m-10 mr-auto mt-5 ' src={comma2}/>
                        <div className='flex w-full  flex-col rounded-2xl bg-zinc-900 mb-3 m-10 p-5 shadow-sm shadow-stone-600'>
                            <div className=' flex justify-between border-b-[1px] border-b-black p-5 '>
                                <div>
                                   <h1 className='font-bold text-2xl'>Travel Mobile   App Design</h1>
                                   <p  className=' text-gray-400 mt-2'>Via Upwor Mar 4, 2015 - Aug 30, 2021 test</p>
                                </div>
                                <span className='text-xl font-bold text-orange-600 flex'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></span>
                            </div>
                            <div className=' mt-3  '>
                            <p  className='text-sm text-gray-400'>Yes, talking to random people online is OK as long as you do so safely. Talking to strangers can be a way to meet new friends and learn about different cultures and perspectives. However, always be cautious about the information you give, and remember that not everyone online may have good intentions.</p>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div className='w-full bg-neutral-800 '>
                   <div className='w-[98%] ml-[1%] md:h-[500px] h-auto grid grid-col-1 md:grid-cols-2 shadow-lg shadow-neutral-400'>
                      <div className='md:w-[80%] h-full  rounded-lg shadow-lg p-3 shadow-neutral-500 flex flex-col gap-6 justify-center'>
                        <img 
                        className='h-72 object-cover rounded-lg'
                        src={testimonial3}></img>
                        <div className='ml-[20%] md:ml-0'>
                            <p className='text-sm text-red-800 mb-2'>from somewhere</p>
                            <h1 className=' font-bold text-2xl'>Muzayen Adem</h1>
                            <p className='text-base tracking-wide text-gray-500 '>Opperation officer</p>
                        </div>
                      </div>
                      <div className=' h-full bg-neutral-800  flex  flex-wrap-reverse md:flex-col'>
                        <img className=' scale-100 w-32 m-10 mr-auto mt-5 ' src={comma2}/>    
                        <div className='flex w-full  flex-col rounded-2xl bg-zinc-900 mb-3 m-10 p-5 shadow-sm shadow-stone-600'>
                            <div className=' flex justify-between border-b-[1px] border-b-black p-5 '>
                                <div>
                                   <h1 className='font-bold text-2xl'>Travel Mobile   App Design</h1>
                                   <p  className=' text-gray-400 mt-2'>Via Upwor Mar 4, 2015 - Aug 30, 2021 test</p>
                                </div>
                                <span className='text-xl font-bold text-orange-600 flex'><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/></span>
                            </div>
                            <div className=' mt-3  '>
                            <p  className='text-sm text-gray-400'>Yes, talking to random people online is OK as long as you do so safely. Talking to strangers can be a way to meet new friends and learn about different cultures and perspectives. However, always be cautious about the information you give, and remember that not everyone online may have good intentions.</p>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
    </Slider>

        </div>
    </section>
  )
}

export default Testimonal




const Kk = () =>{
    return(
        <div className='w-full'>
                   <div className='w-full h-[500px] flex justify-between '>
                   <div className='w-[35%] h-full bg-slate-700 shadow-lg shadow-slate-600'></div>
                    <div className='w-[60%] h-full bg-red-600 '></div>
                   </div>
                </div>
    )
} 