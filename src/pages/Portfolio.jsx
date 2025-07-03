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
     },)

     return (
          <>
               <Navbar />
               <div className='heading w-full md:w-full flex justify-center items-center h-[5em] lg:h-[10em] ' >
                    <h1 className='md:text-5xl text-4xl'><i>Portfolio</i></h1>
               </div>
               <div className="portfolio grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-8 gap-3 w-full lg:p-[50px] p-5 lg:py-[50px] lg:pt-4 h-[auto]  lg:h-[130em] m-auto">
                    {data.map((img, index) => (
                         <div
                              key={index}
                              className={img.orientation === 'portrait' ? 'row-span-2' : ''}
                         >
                              <img src={`http://localhost:3000/uploads/${img.image}`} alt="" />
                         </div>
                    ))}
               </div>

               <Footer />
          </>
     )
}

export default Portfolio
