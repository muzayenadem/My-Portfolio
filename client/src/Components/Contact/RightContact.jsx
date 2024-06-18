import React, { useState } from 'react'

function RightContact() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")
    const [errMessage, setErrMessage] = useState('')
    const sendHandler = (e) =>{
      e.preventDefault()
      if(name == ""){
        setErrMessage('Name is Required!')
      }
      else if(phone ==""){
        setErrMessage("Phone is Required!")
      }
      else if(email ==""){
        setErrMessage("Email is Required!")
      }
      else if(subject ==""){
        setErrMessage("Subject is Required!")
      }
      else if(Message ==""){
        setErrMessage("Message is Required!")
      }
      else{
        setErrMessage("Your message has been sent successfully")
        setEmail('')
        setName('')
        setPhone('')
        setMessage('')
        setSubject
        console.log(name,email,phone,subject, Message)
        setTimeout(() => {
          setErrMessage("")
        }, 3000);
      }
    }
  return (
    <div className=' md:w-[65%]  py-10 gap-8 p-8 rounded-lg flex  flex-wrap-reverse md:flex-col shadow-lg shadow-black'>
    <form className='w-[96%] shadow-lg shadow-black p-4'>
        {
          errMessage && <p className={`py-3 bg-neutral-900 shadow-lg shadow-slate-700 text-center animate-bounce ${errMessage == 'Your message has been sent successfully' ? 'text-green-900':' text-orange-700'} text-base mb-4 `}>{errMessage}</p>
        }
      <div className='flex justify-between flex-wrap gap-10'>
        <div className=' md:w-[45%] flex justify-start items-start gap-3 flex-col'>
        <p className=' text-gray-400 text-xl'>YOUR NAME</p>
        <input
        onChange={(e)=> setName(e.target.value)}
        className={`contactInput ${errMessage == "Name is Required!" ? "border-md border-red-900":""}`}
        type='text' />
        </div>
        <div className=' md:w-[45%] flex justify-start items-start gap-3 flex-col'>
        <p className=' text-gray-400 text-xl'>YOUR PHONE</p>
        <input
        onChange={(e)=> setPhone(e.target.value)}
        className='contactInput'
        type='text' />
        </div>
      </div>
      <div className='flex justify-start items-start gap-3 flex-col mt-5'>
        <p className=' text-gray-400 text-xl'>Email</p>
        <input
        onChange={(e)=> setEmail(e.target.value)}
        className='contactInput'
        type='email' />
        </div>
        <div className='flex justify-start items-start gap-3 flex-col mt-5'>
        <p className=' text-gray-400 text-xl'>Subject</p>
        <input
        onChange={(e)=> setSubject(e.target.value)}
        className='contactInput'
        type='text' />
        </div>
        <div className='flex justify-start items-start gap-3 flex-col mt-5'>
        <p className=' text-gray-400 text-xl'>Message</p>
        <textarea 
        onChange={(e)=> setMessage(e.target.value)}
        className='textareaInput' cols={30} rows={10}></textarea>
        </div>
        <div className='mt-3'>
        <button 
        onClick={sendHandler}
        className=' w-full h-12  rounded-lg border-b-[1px] border-b-gray-600 bg-stone-900 active:outline-none text-neutral-300 hover:bg-indigo-950  focus-visible:outline-red-950 outline-none focus-visible:border-b-transparent duration-300                    '>Send Message</button>
        </div>
        {
          errMessage && <p className={`py-3 bg-neutral-900 shadow-lg shadow-slate-700 text-center animate-bounce ${errMessage == 'Your message has been sent successfully' ? 'text-green-900':' text-orange-700'} text-base mt-4 `}>{errMessage}</p>
        }
    </form>
  </div>
  )
}

export default RightContact