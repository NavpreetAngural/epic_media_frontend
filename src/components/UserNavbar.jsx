import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.jpg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='navbar '>
      {/* Top Row */}
      <div className='flex items-center justify-between p-4'>
        {/* Logo */}
        <Link to="/">
          <img
            className='h-10 w-10 rounded-full sm:h-16 sm:w-16'
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className='navlist hidden md:flex gap-10 items-center  ml-[25em]'>
          <li><NavLink to="" >Dashboard</NavLink></li>
          <li><NavLink to="category" onClick={toggleMenu}>Categories</NavLink></li>
          <li><NavLink to="addbooking">Add Booking</NavLink></li>
          <li><NavLink to="viewbookings">My Bookings</NavLink></li>
          <li><NavLink to="contact" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>

        {/* Desktop "Book Now" */}
        <Link
          to="profile"
          className=' hidden md:inline-block text-black  font-normal border-3 border-white rounded-full hover:text-[#F25F4F] hover:border-3 hover:border-[#F25F4F]  '
        >
          <img
            src={user.url}
            alt="User DP"
            className="h-16 w-16 rounded-full object-cover"
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=' md:hidden flex flex-col items-center gap-4 pb-4'>
          <ul className='flex flex-col gap-4 text-center'>
            <li><Link to="" onClick={toggleMenu}>Dashboard</Link></li>
            <li><Link to="category" onClick={toggleMenu}>Categories</Link></li>
            <li><Link to="addbooking" onClick={toggleMenu}>Add Booking</Link></li>
          <li><NavLink to="viewbookings">My Bookings</NavLink></li>
            <li><Link to="contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          <Link
            to="profile"
            className='text-white font-normal  border-3 border-white rounded-full hover:text-[#F25F4F] hover:border-3 hover:border-[#F25F4F]'
            onClick={toggleMenu}
          >
            <img
              src={user.url}
              alt="User DP"
              className="h-16 w-16 rounded-full object-cover"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

