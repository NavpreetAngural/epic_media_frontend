import React from 'react'
import lal_chowk from '../assets/images/lal_chowk.jpg'
import monastery from '../assets/images/monastery.jpg'
import shiv from '../assets/images/shiv.jpg'
import kinnaur from '../assets/images/kinnaur.jpg'
import kasol from '../assets/images/kasol.jpg'
import cup from '../assets/images/cup.jpg'
import polu_1 from '../assets/images/polu_1.jpg'
import snow from '../assets/images/snow.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Portfolio = () => {
     return (
          <>
          <Navbar/>
               <div className='heading w-full md:w-full flex justify-center items-center h-[5em] lg:h-[10em] ' >
                    <h1 className='md:text-5xl text-4xl'><i>Portfolio</i></h1>
               </div>
               <div className="portfolio grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-8 gap-3 w-full lg:p-[50px] p-5 lg:py-[50px] lg:pt-4 h-[auto]  lg:h-[130em] m-auto">
                    <div className="row-span-2">
                         <img src={lal_chowk} alt="" />
                    </div>
                    <div className="">
                         <img src={monastery} alt="" />
                    </div>
                    <div className="row-span-2">
                         <img src={shiv} alt="" />
                    </div>
                    <div >
                         <img src={kinnaur} alt="" />
                    </div>
                    <div className="">
                         <img src={kasol} alt="" />
                    </div>
                    <div className="row-span-2 ">
                         <img src="https://mrwallpaper.com/images/high/portrait-photography-nature-mountain-stairs-lwn4r8bxuitgpf0u.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src={cup} alt="" />
                    </div>
                    <div className=" ">
                         <img src={polu_1} alt="" />
                    </div>
                    <div className=" ">
                         <img src={snow} alt="" />
                    </div>
                    <div className="row-span-2 ">
                         <img src="https://wallpapercave.com/wp/wp4937436.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src="https://wallpapercat.com/w/full/5/7/3/140041-1080x1920-samsung-full-hd-mountain-background.jpg" alt="" />
                    </div>
                    <div className="row-span-2 ">
                         <img src="https://i.pinimg.com/736x/94/22/f0/9422f013d0e311963d594abded1f979c.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src="https://t3.ftcdn.net/jpg/09/41/09/62/360_F_941096293_0azEV4VhghnAj9m3ZqKrkxYDaE4RxeTQ.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src="https://img.freepik.com/premium-photo/magic-misty-forest-beautiful-natural-landscapes_328046-10175.jpg?semt=ais_hybrid&w=740" alt="" />
                    </div>
                    <div className="row-span-2">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Nature_Portrait.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src="https://static.vecteezy.com/system/resources/thumbnails/062/445/034/small/serene-misty-evergreen-forest-landscape-with-lush-greenery-for-nature-and-environment-themes-photo.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src="https://static.vecteezy.com/system/resources/thumbnails/062/445/028/small/misty-pine-forest-on-a-foggy-morning-for-nature-and-landscape-design-photo.jpg" alt="" />
                    </div>
                    <div className=" ">
                         <img src="https://static.vecteezy.com/system/resources/thumbnails/023/159/892/small/generative-ai-misty-fir-forest-beautiful-landscape-in-hipster-vintage-retro-style-foggy-mountains-and-trees-photo.jpg" alt="" />
                    </div>
               </div>
               <Footer/>
          </>
     )
}

export default Portfolio
