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
import Signup from './pages/Signup.jsx'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Category from './pages/Category.jsx'
import CategoryDetails from './pages/CategoryDetails.jsx'
import AddCategory from './pages/AddCategory.jsx'
import UserProtectedRoutes from './pages/UserRoutes.jsx/UserProtectedRoutes.jsx'
import Profile from './pages/UserRoutes.jsx/Profile.jsx'
import Dashboard from './pages/UserRoutes.jsx/Dashboard.jsx'
import AddBooking from './pages/UserRoutes.jsx/AddBooking.jsx'
import ViewBookings from './pages/UserRoutes.jsx/ViewBookings.jsx'
import UserProvider from './components/Context/UserContext.jsx'
import AddPortfolio from './pages/AddPortfolio.jsx'
import Contact from './pages/Contact.jsx'

const GoogleWrapper = () => {
  return (
    <GoogleOAuthProvider clientId='31538982412-sh9fka6v5nkpp8h6e74i4u0ojcmrfvok.apps.googleusercontent.com'>
      <Login />
    </GoogleOAuthProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<GoogleWrapper />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:cName" element={<CategoryDetails />} />
          <Route path="/addportfolio" element={<AddPortfolio />} />
          <Route path="/user" element={<UserProtectedRoutes />}>
            <Route path='profile' element={<Profile />} />
            <Route path='' element={<Dashboard />} />
            <Route path='addbooking' element={<AddBooking />} />
            <Route path="contact" element={<Contact />} />
            <Route path='viewbookings' element={<ViewBookings />} />
            <Route path='category' element={<Category />} />
            <Route path="category/:cName" element={<CategoryDetails />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>

)
