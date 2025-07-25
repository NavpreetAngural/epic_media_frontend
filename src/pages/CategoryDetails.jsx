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
      <div className='category flex flex-col  px-4 mb-5'>
        <div className='heading w-full flex justify-center items-center h-[10em] border-y lg:border-0 my-5'>
          <h1 className='text-3xl lg:text-5xl'><i>Gallery of {cName}</i></h1>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-5 my-5">
  {data.map((item, index) => {
    const mediaURL = item.url;
    const isVideo = /\.(mp4|mov|avi|webm)$/i.test(mediaURL);

    return (
      <div
        key={index}
        className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow bg-white"
      >
        <a href={mediaURL} target="_blank" rel="noopener noreferrer">
          {isVideo ? (
            <video
              src={mediaURL}
              className="w-full h-auto object-cover rounded"
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <img
              src={mediaURL}
              alt={`Media ${index}`}
              className="w-full h-auto object-cover rounded transition duration-300 ease-in-out hover:scale-105"
            />
          )}
        </a>
        <div className="p-2 bg-gray-100 text-center text-sm font-medium">
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
