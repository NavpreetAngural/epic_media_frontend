import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../config';

const Slider = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images_data = async () => {
        try {
            const res = await axios.get(`${baseURL}/portfolio/view`);
            const filtered = res.data.data.filter(item => item.orientation === 'landscape');
            setData(filtered);
        } catch (err) {
            console.log("Error fetching images", err);
        }
    };

    useEffect(() => {
        images_data();
    }, []);

    useEffect(() => {
        if (data.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev === data.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className='flex flex-col justify-center'>

            <div className='slider group relative w-full h-[15em] lg:h-[35em] overflow-hidden mx-auto'>
                {data.map((item, index) => {
                    const mediaURL = `${item.url}`;
                    const isVideo = /\.(mp4|mov|avi|webm)$/i.test(item.url); // detect video

                    return (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
                                }`}
                        >
                            <a href={item.url} target='_blank' rel='noopener noreferrer'>
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
                                            alt={`Slide ${index}`}
                                            className="w-full h-full "
                                        />
                                )}
                            </a>

                        </div>
                    );
                })}
            </div>
            <Link to="/portfolio" className='bg-[#F25F4F] w-[8em] mt-[1em] mx-auto rounded-full text-center'>
                <button className='p-1 hover:text-white text-[12px] lg:text-base'>
                    View Portfolio
                </button>
            </Link>
        </div>
    );
};

export default Slider;
