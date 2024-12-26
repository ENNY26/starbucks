import React, { useState } from 'react';
import logo from '../assets/Icons/logo.svg';
import menu from '../assets/Icons/menu.svg';
import close from '../assets/Icons/close.svg';

const Nav = () => {
  const [active, setActive] = useState ("Home")
  const [toggle, setToggle] = useState(false)

  return (
   <nav className='w-full flex justify-between py-6 items-center relative'>
    <img src={logo}
     alt="logo" 
     className='w-[21]  p-5'/>

    <ul className={`flex flex-col md:flex-row md:flex gap-7 justify-center absolute md:static
     bg-gray-800 md:bg-transparent text-[#086942] md:text-[#086942] p-5 md:p-0 rounded-md md:rounded-none shadow-lg
       md:shadow-none top-16 right-0 md:top-0 md:right-0 ${toggle ? 'block' : 'hidden'} md:block`}>
      <li onClick={() => setToggle(false)} className='cursor-pointer'>Home</li>
      <li onClick={() => setToggle(false)} className='cursor-pointer'>Categories</li>
      <li onClick={() => setToggle(false)} className='cursor-pointer'>Search</li>
      <li onClick={() => setToggle(false)} className='cursor-pointer'>About</li>
      <li onClick={() => setToggle(false)} className='cursor-pointer'>Contacts</li>
    </ul>

      <div>
        <img src={toggle ? close : menu}
         alt="menu" 
         className='w-[26] h-[26] object-contain md:hidden cursor-pointer'
         onClick={() => setToggle(!toggle)}/>
      </div>
   </nav>       
   

 )
}
export default Nav;
