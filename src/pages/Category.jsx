import React from 'react'
import { NavLink } from 'react-router-dom'
import travel from '../assets/images/travel.jpg'
import pre_wedding_thumbnail from '../assets/images/pre_wedding_thumbnail.jpg'
import BTS from '../assets/images/BTS.jpg'
import short_movie from '../assets/images/short_movie.jpg'
import product_shoot from '../assets/images/product_shoot.jpg'
import talk_show from '../assets/images/talk_show.jpg'
import songs from '../assets/images/songs.jpg'
import movie from '../assets/images/movie.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const Category = () => {
  const token = localStorage.getItem("token")

  const Categories = [
    { cName: "Travel", image: travel },
    { cName: "Pre Wedding", image: pre_wedding_thumbnail },
    { cName: "Behind The Scene", image: BTS },
    { cName: "Short Movies", image: short_movie },
    { cName: "Feature Films", image: movie },
    { cName: "Songs", image: songs },
    { cName: "Talk Shows", image: talk_show },
    { cName: "Product Shoot", image: product_shoot },
  ];


  return (
    <>
      {token ? "" : <Navbar />}
      <div className='category flex flex-col mb-5'>
        <div className='heading w-full md:w-full flex justify-center items-center border-y lg:border-0 h-[10em] my-5' >
          <h1 className='md:text-5xl text-4xl'><i>All Categories </i></h1>
        </div>
        <div className=' flex flex-col gap-5 lg:flex-row lg:gap-10 flex-wrap justify-evenly lg-my-5'>
          {Categories.map((data, i) => (
            <div className='flex flex-col justify-center items-center shadow-lg pb-3 '>
              <div className="mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <img className=" h-[200px] w-[400px] rounded-t-lg object-cover" src={data.image} alt="" />
              </div>
              <div >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.cName}</h5>
              </div>
              <NavLink
                to={token ? `/user/category/${data.cName}` : `/category/${data.cName}`}
                className="inline-flex items-center  p-1 text-lg  hover:text-blue-500 hover:rounded-2xl font-medium text-center text-black  "
              >
                View more...
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NavLink>

            </div>
          ))
          }
        </div>
      </div >
      {token ? "" : <Footer />}
    </>
  )
}

export default Category
