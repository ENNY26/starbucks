import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from '../assets/Icons/logo.svg';
import menu from '../assets/Icons/menu.svg';
import close from '../assets/Icons/close.svg';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex justify-between py-6 items-center relative px-6 bg-white shadow-md'>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className='w-[50px] cursor-pointer' />
      </Link>

      {/* Navigation Links */}
      <ul className={`flex flex-col md:flex-row gap-7 justify-center absolute md:static
        bg-gray-800 md:bg-transparent text-white md:text-[#086942] p-5 md:p-0 rounded-md md:rounded-none shadow-lg
        md:shadow-none top-16 right-0 md:top-0 md:right-0 ${toggle ? 'block' : 'hidden'} md:flex`}>
        <li><Link to="/" onClick={() => setToggle(false)} className="hover:text-gray-400 transition">Home</Link></li>
        <li><Link to="/categories" onClick={() => setToggle(false)} className="hover:text-gray-400 transition">Categories</Link></li>
        <li><Link to="/search" onClick={() => setToggle(false)} className="hover:text-gray-400 transition">Search</Link></li>
        <li><Link to="/about" onClick={() => setToggle(false)} className="hover:text-gray-400 transition">About</Link></li>
        <li><Link to="/contacts" onClick={() => setToggle(false)} className="hover:text-gray-400 transition">Contacts</Link></li>
      </ul>

      {/* Right-side actions */}
      <div className="flex items-center gap-4">
        {/* Edit Profile Button */}
        <Link to="/profile">
          <button className="bg-[#086942] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#075031] transition duration-300">
            Edit Profile
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[30px] h-[30px] cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
