import React from 'react'

const About = () => {
    return (
        <>
            <div className='about flex flex-col mb-5'>
                <div className='heading w-full md:w-full flex justify-center items-center h-[10em] lg:h-[10em] border-y lg:border-0 lg:m-0 mt-5' >
                    <h1 className='lg:text-5xl text-4xl'><i>About us</i></h1>
                </div>
                <div className='flex flex-col lg:flex-row w-full lg:p-1'>
                    <div className='flex flex-col w-full lg:w-1/2 text-justify justify-start items-center lg:p-5' >
                        <h1 className='text-2xl p-5 lg:p-0 italic'>About Epic Media</h1>
                        <p className='lg:py-5 text-[12px] lg:text-[15px]'>Welcome to Epic Media — where creativity meets storytelling, and every frame speaks louder than words.
                            We are not just a photography and filmmaking brand — we are visual storytellers who believe in the power of moments. Founded out of sheer passion for art and cinematic expression, Epic Media was created to transform ordinary memories into extraordinary visual experiences. Through the lens of our cameras, we capture not just images, but the emotion, energy, and essence behind each story.
                            Whether it's a couple’s first glance on their wedding day, the raw beauty of a remote Himalayan village, or the behind-the-scenes chaos of a music video shoot — we are there, preserving the moments that matter.</p>
                    </div>
                    <div className='flex flex-col w-full lg:w-1/2 text-justify justify-center items-center lg:p-5' >
                        <h1 className='text-2xl p-5 lg:p-0 italic'>Our Story</h1>
                        <p className='lg:py-5 text-[12px] lg:text-[15px]'>The journey of Epic Media began with a simple idea: to share stories that are powerful, emotional, and visually stunning. What started as a small YouTube channel has evolved into a full-scale creative production house specializing in photography, cinematography, and digital storytelling.
                            We began by documenting our travel adventures across Kashmir, Himachal, Spiti, and many hidden gems of India. Along the way, we discovered a deeper purpose — creating visuals that connect people to places, emotions, and each other.
                            Over the years, Epic Media has grown not just in team and equipment, but in vision. We’ve worked with couples, artists, creators, and brands, helping them bring their unique stories to life through our lens. Today, we’re proud to be a one-stop creative hub for cinematic weddings, travel films, music videos, short films, and more.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row w-full lg:p-1'>
                    <div className='flex flex-col w-full lg:w-1/2 text-justify justify-center items-center lg:p-5' >
                        <h1 className='text-2xl p-5 lg:p-0 italic'>What We Believe</h1>
                        <p className='lg:py-5 text-[12px] lg:text-[15px]'>At Epic Media, we believe photography is more than just clicking pictures. It’s about capturing a moment in time, preserving a feeling, and telling a story that speaks to the heart.
                            <ul className='p-3 list-disc'>
                                <li>Every love story is unique and deserves a cinematic expression.</li>
                                <li>Every destination holds a new adventure waiting to be captured.</li>
                                <li>Every frame should be a blend of art, authenticity, and soul.</li>
                                <li>The best stories are told not with words, but with visuals.</li>
                            </ul>
                            Whether we are working with a bride on her big day, documenting the pulse of a music concert, or filming a travel vlog in the mountains — we give our 100% to ensure the end result is powerful, moving, and unforgettable.
                        </p>
                    </div>
                    <div className='flex flex-col w-full lg:w-1/2 text-justify justify-start items-center lg:p-5' >
                        <h1 className='text-2xl p-5 lg:p-0 italic'>Our Services</h1>
                        <p className='lg:py-5 text-[12px] lg:text-[15px]'>Our work spans across various genres, yet the heart remains the same: visual storytelling with emotion and cinematic flair. Here’s what we offer:
                            <ul className='p-5  text-center flex flex-col gap-3 text-[15px] font-semibold'>
                                <li> 🎬 Cinematic Weddings & Pre-Weddings</li>
                                <li> 🌍 Travel Films & Vlogs</li>
                                <li> 🎶 Music & Song Videos</li>
                                <li> 🎞️ Web Series & Short Films</li>
                                <li> 🎥 BTS & Creative Shoots</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row w-full lg:p-1 justify-center items-center '>
                    <div className='flex flex-col lg:w-[70%] text-justify justify-center items-center lg:p-5' >
                        <h1 className='text-2xl p-5 lg:p-3 italic'>Let’s Tell Your Story</h1>
                        <p className='lg:py-3 text-[12px] lg:text-[15px]'>At Epic Media, we don’t just take photos or shoot videos — we craft experiences that live on forever. If you’re looking for a team that listens, understands, and brings your vision to life with creativity and heart, then you’re in the right place.</p>
                        <p className='lg:py-0 text-[12px] lg:text-[15px] text-center'>📩 Get in touch with us today to start your visual journey.  Fill out the form below and we’ll get back to you within 24 hours!. </p>
                        <form action="" className='story-form flex flex-col border w-full' >
                            <input type="text" placeholder='Full Name'/>
                            <input type="text" placeholder='Email'/>
                            <input type="text" placeholder='Phone No.'/>
                            <input type="text" placeholder='Tell us about your project'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
