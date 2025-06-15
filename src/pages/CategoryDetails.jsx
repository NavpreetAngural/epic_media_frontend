import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CategoryDetails = () => {
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
    <Navbar/>
    <div className='about flex flex-col mb-10 px-4'>
      <div className='heading w-full flex justify-center items-center h-[10em] border-y lg:border-0 mt-5'>
        <h1 className='text-3xl lg:text-5xl'><i>Photos of {cName}</i></h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full h-[300px] flex flex-col"
          >
            <div className=" w-full overflow-hidden">
              <img
                src={`http://localhost:3000/uploads/${d.cImage}`}
                alt={d.description}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 h-[100px] flex items-center justify-center">
              <h5 className="text-center font-semibold text-lg">{d.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CategoryDetails
