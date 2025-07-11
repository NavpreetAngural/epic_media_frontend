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
     },[])

     return (
          <>
               <Navbar />
               <div className='heading w-full md:w-full flex justify-center items-center h-[5em] lg:h-[10em] ' >
                    <h1 className='md:text-5xl text-4xl'><i>Portfolio</i></h1>
               </div>
               <div className="portfolio grid grid-cols-1 lg:grid-cols-3 gap-3 w-full lg:p-[50px] p-5 lg:pt-4 m-auto">
                    {data.map((img, index) => (
                         <div
                              key={index}
                              className={`${img.orientation === 'portrait' ? 'lg:row-span-2' : ''}`}
                         >
                              <img
                                   src={`${img.url}`}
                                   alt=""
                                   className="w-full h-auto object-cover"
                              />
                         </div>
                    ))}
               </div>


               <Footer />
          </>
     )
}

export default Portfolio
