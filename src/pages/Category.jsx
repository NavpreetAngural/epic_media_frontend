import React from 'react'
import { NavLink } from 'react-router-dom'
import monastery from '../assets/images/monastery.jpg'
import pre_wedding_thumbnail from '../assets/images/pre_wedding_thumbnail.jpg'
import BTS from '../assets/images/BTS.jpg'
import short_movie from '../assets/images/short_movie.jpg'
import song from '../assets/images/song.jpg'
import spiritual from '../assets/images/spiritual.jpg'
import public_places from '../assets/images/public_places.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Category = () => {

  const Categories = [
    { cName: "Travel", image: monastery },
    { cName: "Pre Wedding", image: pre_wedding_thumbnail },
    { cName: "Behid The Scene", image: BTS },
    { cName: "Short Movies", image: short_movie },
    { cName: "Songs", image: song },
    { cName: "Spiritual Captures", image: spiritual },
    { cName: "Public Places", image: public_places },
    // { type: "", image: modified },
  ];


  return (
    <>
    <Navbar/>
      <div className='about flex flex-col mb-5'>
        <div className='heading w-full md:w-full flex justify-center items-center h-[10em] lg:h-[10em] border-y lg:border-0 lg:m-0 mt-5' >
          <h1 className='lg:text-5xl text-4xl'><i>Categories</i></h1>
        </div>
        <div className='flex flex-col gap-5 lg:flex-row lg:gap-10 flex-wrap justify-evenly'>
          {Categories.map((data, i) => (
            <div className='flex flex-col justify-center items-center shadow-lg pb-3 my-5'>
              <div className="mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <img className=" h-[200px] w-[400px] rounded-t-lg object-cover" src={data.image} alt="" />
              </div>
              <div >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.cName}</h5>
              </div>
              <NavLink to={`/category/${data.cName}`} className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View more...
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NavLink>
            </div>
          ))
          }
        </div>
      </div >
      <Footer/>
    </>
  )
}

export default Category
