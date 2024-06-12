import React from 'react'
import { CONTACT } from '../constants'
import { motion, easeOut } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y: -100, willChange: 'transform, opacity'}} 
      transition={{duration: 1, ease: easeOut}}
      className='my-10 text-center text-4xl'>Get in touch</motion.h1>
      <div className="text-center tracking-tight">
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}}
        className="my-4">{CONTACT.address}</motion.p>

        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: 100, willChange: 'transform, opacity'}} 
        transition={{duration: 1, ease: easeOut}}
        className="my-4">{CONTACT.phoneNo}</motion.p>

        

        <a href="#" className='border-b '>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
