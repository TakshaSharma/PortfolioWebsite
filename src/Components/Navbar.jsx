import React from 'react'
import logo from '../assets/logo.png'
// import { Link } from 'react-router-dom'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'



const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
       <div className='flex flex-shrink-0 items-center'>
           <img className='mx-3 w-11' src={logo} alt="" />
       </div>
       <div className='m-8 flex items-center justify-center gap-4 text-xl'>
        
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

       </div>
    </nav>
  )
}

export default Navbar


