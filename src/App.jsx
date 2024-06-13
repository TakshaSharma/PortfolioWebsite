import React from 'react';

import Hero from './Components/Hero'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {

  


  return (

   
   
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className='container mx-auto px-8'>
      
      <Navbar/>
      <div id='home'><Hero/></div>
      <div id='about'><About/></div>
     <Technologies/>
      <Experience/>
      <Projects/>
      <div id='contact'><Contact/></div>

      </div>
    </div>
    
  )
}

export default App
