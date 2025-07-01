import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
    return (
        <>
        <Navbar/>
        <div className='blog lg:flex lg:flex-col lg:gap-y-[50px]'>
            <div className='heading w-full md:w-full flex justify-center items-center h-[10em] lg:h-[10em] border-y lg:border-0 ' >
                <h1 className='lg:text-5xl text-4xl'><i>Blog</i></h1>
            </div>
            <div className='first w-full flex flex-col lg:flex lg:flex-row my-5 lg:mt-0'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'>Travel Dairies</h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, every journey is a story waiting to be captured. From the snowy peaks of Kashmir, the raw beauty of Spiti, to the serene vibes of Himachal, we turn travel into timeless visuals.
                        Each trip brings new faces, emotions, and landscapes — all framed through our lens. Dive into our world of cinematic travel and experience India like never before.</p>
                </div>
                <video
                    loop
                    playsInline
                    controls className=' w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404329/juwxsdrcfql78cx8liq3.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='second w-full flex flex-col lg:flex lg:flex-row my-5'>
                <video
                    loop
                    playsInline
                    controls className=' w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404274/ozppyovsspf6pi86gqfs.mp4" type="video/mp4" />
                </video>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'>Pre Weddings</h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, pre-wedding shoots are more than just photos — they’re your love story in motion. We craft cinematic moments that reflect your bond, your vibe, and your journey together.
                        From dreamy mountain backdrops to candid city vibes, we’ve captured it all — with heart, creativity, and a touch of magic. Every frame is designed to feel real, timeless, and uniquely you.</p>
                </div>
            </div>
            <div className='third w-full flex flex-col lg:flex lg:flex-row my-5'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'>Short Movies</h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, short films are where creativity meets storytelling. We bring powerful concepts to life with cinematic visuals, strong emotions, and meaningful narratives.
                        Whether it’s a social message, a visual poem, or an experimental idea — every short movie we create is crafted with passion, depth, and a filmmaker’s eye. For us, it’s not just about the camera — it’s about what the story feels like.</p>
                </div>
                <video
                    loop
                    playsInline
                    controls className=' w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404214/wbw5zduhevim8iw1rwgy.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='forth w-full flex flex-col lg:flex lg:flex-row my-5'>
                <video
                    loop
                    playsInline
                    controls className='h-[200px] lg:h-[300px] w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404220/ks4racjbtpfp2jim4luy.mp4" type="video/mp4" />
                </video>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'> Songs</h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, music meets visuals to create pure magic. Our song shoots are crafted with cinematic storytelling, vibrant visuals, and powerful emotions that elevate every beat.
                        From romantic tracks in scenic locations to high-energy urban vibes, we bring your music to life with creativity, passion, and a filmmaker’s eye. Every frame moves with the rhythm — every shot tells a story.</p>
                </div>
            </div>
            <div className='fifth w-full flex flex-col lg:flex lg:flex-row my-5'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'>Spiritual Captures</h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, we capture spirituality with depth, grace, and reverence. Whether it’s soulful bhajans, serene temple visuals, or spiritual journeys through sacred places — our videos aim to connect hearts and elevate minds.
                        With calming cinematography, natural light, and pure emotion, we bring divine stories and moments to life, allowing the viewer to feel the peace beyond the frame.</p>
                </div>
                <video
                    loop
                    playsInline
                    controls className=' w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404241/jjf2qhzuq6jy5ohrxmev.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='sixth w-full flex flex-col lg:flex lg:flex-row my-5'>
                <video
                    loop
                    playsInline
                    controls className=' w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404267/on8azwsxlcqzqdcdihzc.mp4" type="video/mp4" />
                </video>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'> Behind The Scene</h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, the magic isn’t just in the final cut — it’s in the journey. Our Behind the Scenes shoots capture the raw, real, and unfiltered moments that happen off-camera.
                        From setting up frames in the mountains to candid laughter on set, BTS gives you a glimpse into the effort, creativity, and passion that goes into every project — whether it’s a wedding, travel film, song, or short movie.
                    </p>
                </div>
            </div>
            <div className='seventh w-full flex flex-col lg:flex lg:flex-row my-5'>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-5 pt-0'>
                    <h1 className='text-2xl font-bold'>Public Places </h1>
                    <p className='p-5 text-justify' >At EPIC MEDIA, we capture the soul of restaurants — the flavors, the ambiance, and the people behind the plate. From cozy cafés to fine dining, our shoots bring out the essence of your space through cinematic visuals and mouthwatering frames.
                        Whether it’s food photography, chef highlights, or interior mood shots, we help restaurants tell their story in a way that feels authentic, inviting, and unforgettable.</p>
                </div>
                <video
                    loop
                    playsInline
                    controls className='h-[200px] lg:h-[300px] w-full m-auto flex flex-col justify-center items-center pt-0'>
                    <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749404222/qibsufdlrpf8s7fjm1wq.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Blog
