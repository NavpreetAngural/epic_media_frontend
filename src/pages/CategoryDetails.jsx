import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CategoryDetails = () => {
  const token = localStorage.getItem("token")
  const { cName } = useParams()
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURL}/category/type/${cName}`)
      setData(res.data.data)
    } catch (err) {
      console.log("Error fetching data", err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [cName])

  return (
    <>
      {token ? "" : <Navbar />}
      <div className='about flex flex-col mb-10 px-4'>
        <div className='heading w-full flex justify-center items-center h-[10em] border-y lg:border-0 mt-5'>
          <h1 className='text-3xl lg:text-5xl'><i>Gallery of {cName}</i></h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {data.map((item, index) => {
            const mediaURL = `http://localhost:3000/uploads/${item.media}`;
            const isVideo = /\.(mp4|mov|avi|webm)$/i.test(item.media);

            return (
              <div
                key={index}
                className="flex flex-col w-full h-auto rounded overflow-hidden shadow-md"
              >
                <div className="w-full h-[200px] lg:h-[300px]">
                  {isVideo ? (
                    <video
                      src={mediaURL}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={mediaURL}
                      alt={`Media ${index}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-2 bg-gray-100 text-xl  text-center">
                  {item.description}
                </div>
              </div>
            );
          })}


        </div>
      </div>
      <Footer />
    </>
  )
}

export default CategoryDetails
