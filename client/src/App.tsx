import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact' // Import Contact
import Cart from './components/Cart' // Import Cart

export default function App() {
  return (
    <BrowserRouter>
      {/* min-h-screen ensures the footer stays at the bottom */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* flex-grow allows the main content to take up available space */}
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/> {/* Add Contact route */}
            <Route path='/cart' element={<Cart/>}/> {/* Add Cart route */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signup/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}