import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';


const UserFooter = () => {
    return (
        <div className='flex flex-col p-2 h-[auto] justify-center items-center w-full lg:flex lg:flex-col lg:h-[17em] border-t'>
            <Link to="/user">
                <img
                    className='h-10 w-10 rounded-full sm:h-16 sm:w-16'
                    src="https://yt3.ggpht.com/4JMMd27NA9eqpHEGx0rT0QTFel0223bWGn7doCnLwHNUA4pn1n3viY3WBXPzjEsaf9NOYamiXQ=s176-c-k-c0x00ffffff-no-rj-mo"
                    alt="Logo"
                />
            </Link>
            <ul className='footer-nav flex gap-3 lg:flex lg:w-full justify-evenly p-3 lg:pb-0  '>
                <li><Link to="category">Categories</Link></li>
                <li><Link to="addbooking">Book Now</Link></li>
                <li><Link to="viewbookings">My Bookings</Link></li>
                <li><Link to="contact">Contact Page</Link></li>
            </ul>
            <div className='flex flex-col justify-center items-center lg:flex lg:flex-row  w-full pt-5 gap-5' >
                <div className='w-1/2 flex flex-col justify-center items-center gap-3'>
                    <h2 className=' text-xl'>Follow Us on :</h2>
                    <div className='flex gap-5'>
                        <Link to="https://www.instagram.com/epic_media1/?hl=en" className='hover:scale-110'>
                            <i className="ri-instagram-line text-white bg-red-500 text-3xl rounded-full "></i>
                        </Link>
                        <Link className='hover:scale-110' to="https://www.youtube.com/@epicmedia501">
                            <i className="ri-youtube-line text-white bg-red-500 text-3xl rounded-full"></i>
                        </Link>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center lg:justify-start gap-1 '>
                    <h2 className=' text-xl lg:mr-[75px] ml-[20px]'>Contact Information :</h2>
                    <div className='w-1/2 flex flex-col justify-center items-center lg:items-start  lg:justify-start gap-5 p-2 '>
                        <div className='flex gap-3 items-center justify-center'>
                            <i className="ri-mail-line text-xl text-blue-600 " ></i>
                            <a href="mailto:justclip12@gmail.com" className="hover:underline">
                                justclip12@gmail.com
                            </a>
                        </div>
                        <div className='flex gap-3 items-center justify-center w-[100px] lg:w-auto lg:m-0 mr-[50px]'>
                            <i className="ri-phone-line text-xl text-blue-600 " ></i>
                            <a href="tel:+917986990209" className="hover:underline text-blue-700">
                                +91 7986990209
                            </a>
                            <a href="tel:+918427126663" className="hover:underline text-blue-700">
                                +91 8427126663
                            </a>
                        </div>
                        <div className='flex gap-3 items-center justify-center w-[200px] lg:w-auto lg:m-0 mr-[50px]'>
                            <i className="ri-home-3-line text-xl text-blue-600 " ></i>
                            <p >Jalandhar , Mohali</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>© 2025 EPIC MEDIA. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default UserFooter
