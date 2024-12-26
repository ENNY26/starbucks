import React from 'react'
import heroimg from '../assets/Images/heroimg2.jpg'
import cup from '../assets/Icons/coffeecup.svg'


const Hero = () => {
  return (
    <div className='flex '>
      <div className='p-9 '>
      <h1 className="font-extrabold text-6xl flex items-center gap-1">
  HOW TO: STARBUCKS
  <span className="inline-block">
    <img className="w-8 h-8 inline-block" src={cup} alt="cup icon" />
  </span>
</h1>

      <h4>Your ultimate guide to make the most amzing coffee with detailed instructions</h4>
      <div>
        <button className='bg-[#086942] rounded-md p-2 w-21'>Get started </button>
      </div>
      <div className='m-1 grid grid-cols-2'>
      <button className='bg-slate-600 p-2 '>hello</button>
      <button className='bg-neutral-600 p-2 '>hello</button>
      <button className='bg-red-600 p-2 '>hello</button>
      <button className='bg-slate-600 p-2 '>hello</button>
    </div>
      </div>

      <div>
      <img src={heroimg} 
      alt="hero image"
      className='rounded-s-full min-w-70' />
      </div>
    </div>

 
  )
}

export default Hero