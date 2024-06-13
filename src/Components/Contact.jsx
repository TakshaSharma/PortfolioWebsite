import React from 'react'
import { motion, easeOut } from 'framer-motion'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-19'>
      
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y: -100, willChange: 'transform, opacity'}} 
      transition={{duration: 1, ease: easeOut}}
      className='my-10 text-center text-4xl'>Get in touch</motion.h1>

      
      <div className=" flex gap-4 text-center  justify-center tracking-tight">

       <motion.div 
       whileInView={{opacity: 1, x:0}}
       initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
       transition={{duration: 1, ease: easeOut}}
       className='text-4xl  '> 
       <a href="https://www.linkedin.com/in/taksha-sharma/" >
       <FaLinkedin />
       </a>
       </motion.div>


       <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}}
       className='text-4xl'>
        <a href="mailto:taksha.sharma08@gmail.com">
        <IoIosMail/>
        </a>
       </motion.div>

       <motion.div 
       whileInView={{opacity: 1, x:0}}
       initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
       transition={{duration: 1, ease: easeOut}}
       className='text-4xl  '> 
       <a href="https://github.com/TakshaSharma" >
       <IoLogoGithub />
       </a>
       </motion.div>
       
      </div>
    </div>
  )
}

export default Contact
