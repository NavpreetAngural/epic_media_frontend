import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/NAvbar.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>

)
