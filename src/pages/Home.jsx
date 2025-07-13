import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nitpreet from '../assets/images/Nitpreet.jpg'
import Ankur from '../assets/images/Ankur.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import movie from '../assets/images/movie.jpg'
import songs from '../assets/images/songs.jpg'
import travel from '../assets/images/travel.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })

  }, [])
  const card_images = [
    { title: "Movies", image: movie },
    { title: "Music Videos", image: songs },
    { title: "Travel", image: travel },
  ]

  return (
    <>
    <Navbar/>
    <div className='homepage'>
      <video
        className="w-[100%] h-[100%] object-cover rounded-xl my-[10px] overflow-hidden "
        loop
        playsInline
        controls
        muted 
        autoPlay
      >
        <source src="https://res.cloudinary.com/dvmqgxoan/video/upload/v1749810450/manali_video_c7jgx3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* About and team */}
      <div className='description flex flex-col lg:flex-row gap-6 p-5'>
        <div
          data-aos="fade-right"
          className='about flex flex-col justify-center items-center w-full lg:w-1/2 p-5 pt-0 '
        >
          <h2 className='font-medium text-xl md:text-lg text-center'>
            <i>Visual Stories That Inspire — Welcome to EPIC MEDIA</i>
          </h2>
          <p className='text-center p-4 lg:text-base sm:text-sm leading-loose tracking-wider text-[14px]'>
            EPIC MEDIA is a creative storytelling platform born from a passion for photography, filmmaking, and travel. With a growing presence on YouTube, we bring you cinematic journeys through the mountains of Kashmir, Himachal, and Spiti, along with soulful songs, behind-the-scenes content, and captivating web series.
          </p>
          <Link to="/about" className='bg-[#F25F4F] w-[7em] mt-4 mx-auto rounded-full text-center'>
            <button className='p-2 hover:text-white text-[12px] lg:text-base'>
              About more...
            </button>
          </Link>
        </div>
        <div className='team flex flex-col  w-full lg:w-1/2 p-0 '>
          <h2 className='font-medium text-xl md:text-lg text-center p-5 pt-0'>
            Team
          </h2>
          <div className=' flex flex-col w-full lg:flex-row gap-10 justify-center items-center'>
            <div data-aos="fade-left" className='w-[13em] object-cover'>
              <img src={Nitpreet} alt="" className='rounded-2xl' />
              <p className='text-center '>Nitpreet Angural</p>
            </div>
            <div data-aos="fade-left" className='w-[13em] object-cover'>
              <img src={Ankur} alt="" className='rounded-2xl' />
              <p className='text-center'>Ankur Manchanda</p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      {/* Featured Categories */}
      <div className='m-[40px]'>
        <h2 className="text-2xl font-semibold text-center mb-6">
          <i>Featured Categories</i>
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-5 lg:gap-[80px]  ">
          {card_images.map((item, index) => (
            <Link to={`/category/${item.title}`}>
              <Card data-aos="zoom-in" key={index} sx={{ maxWidth: 400, maxHeight: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      height: 200,
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className='text-center'>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-center'>
                      Explore our {item.title.toLowerCase()} collection.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
