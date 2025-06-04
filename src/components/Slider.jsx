import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import monastery from '../assets/images/monastery.jpg'
import snow from '../assets/images/snow.jpg'
import polu_1 from '../assets/images/polu_1.jpg'

const Slider = () => {

    const images = [
        monastery,snow,polu_1
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='flex flex-col justify-center'>
            <div className='slider group relative w-full h-[15em] lg:h-[35em] overflow-hidden mx-auto '>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index}`}
                        className={` absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
            <Link to="/portfolio" className='bg-[#F25F4F] w-[8em] mt-[1em] mx-auto  rounded-full text-center'>
                <button className='p-1 hover:text-white'>
                    View Portfolio
                </button>
            </Link>
        </div>
    )
}

export default Slider
