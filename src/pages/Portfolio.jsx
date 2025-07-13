import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { baseURL } from '../../config'

const Portfolio = () => {

     const [data, setData] = useState([])

     const fetchData = async () => {
          try {
               const res = await axios.get(`${baseURL}/portfolio/view`)
               setData(res.data.data)
          } catch (err) {
               console.log("Error fetching data", err)
          }
     }

     useEffect(() => {
          fetchData()
     }, [])

     return (
          <>
               <Navbar />
               <div className='category flex flex-col  mb-5'>
                    <div className='heading w-full md:w-full flex justify-center items-center h-[5em] lg:h-[10em] mb-5' >
                         <h1 className='md:text-5xl text-4xl'><i>Portfolio</i></h1>
                    </div>
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-5 mb-5">
                         {data.map((img, index) => (
                              <div
                                   key={index}
                                   className={`mb-4 break-inside-avoid overflow-hidden rounded-xl shadow bg-white 
        ${img.orientation === 'landscape' ? 'aspect-[16/10]' : ''}`}
                              >
                                   <a href={img.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                             src={img.url}
                                             alt=""
                                             className={`w-full h-full rounded transition duration-300 ease-in-out 
            hover:scale-105
            ${img.orientation === 'landscape' ? 'scale-y-[1]' : ''}`}
                                        />
                                   </a>
                              </div>
                         ))}
                    </div>



               </div>


               <Footer />
          </>
     )
}

export default Portfolio