import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/signup.jsx'
import { UserProvider } from './components/Context/USerContext.jsx'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'

const GoogleWrapper = () => {
  return (
    <GoogleOAuthProvider clientId='133980932984-j71rqmbhenna83urn91islmpp5qudk6n.apps.googleusercontent.com'>
      <Login />
    </GoogleOAuthProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<GoogleWrapper />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  </StrictMode>

)
