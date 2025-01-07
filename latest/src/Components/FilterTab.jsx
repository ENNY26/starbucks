import React from 'react'
import Hot from '../assets/Icons/latte.svg'
const FilterTab = () => {
  return (
    
    <div>
      <div>
        <h1 className='text-6xl font-extrabold text-center pt-16'>START EXPLORING AWESOME TASTES</h1>
      </div>
    <div className='py-16 flex justify-center gap-4 items-center cursor-pointer'>    
     <span className='bg-[#086942] px-11 py-2 rounded-md'>ICED BEVERAGES</span>
     <span className='bg-[#086942] px-11 py-2 rounded-md'>HOT BEVERAGES</span>
     <span className='bg-[#086942] px-11 py-2 rounded-md'>SYRUPS</span>
     <span className='bg-[#086942] px-11 py-2 rounded-md'>FOOD</span>
     <span className='bg-[#086942] px-11 py-2 rounded-md'>ADD-INS</span>
     <span className='bg-[#086942] px-11 py-2 rounded-md'>CAFÉ-INSPIRED RECIPES</span>
    </div>
    </div>
  )
}

export default FilterTab