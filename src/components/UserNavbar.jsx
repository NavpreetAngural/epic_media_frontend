import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.jpg'


const UserNavbar = () => {
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
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/portfolio">My Bookings</NavLink></li>
                    <li><NavLink to="/category">Category</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                {/* Desktop "Book Now" */}
                <Link
                    to="profile"
                    className='hidden md:inline-block text-black font-normal hover:text-[#F25F4F] border-3 border-white hover:border-3 hover:rounded-full hover:border-[#F25F4F]'
                >
                    <img
                        src={
                            user.dp.startsWith("http")
                                ? `${user.dp}`  // Full URL from Google (e.g. https://...)
                                : `http://localhost:3000/uploads/${user.dp}`  // Local image from your server
                        }
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
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
                        <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                    <Link
                        to="/profile"
                        className='hidden md:inline-block  font-normal px-3 hover:text-[#F25F4F] hover:border hover:border-[#F25F4F]'
                    >
                        <img
                            src={`${user.dp}`}
                            alt="User DP"
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserNavbar;
