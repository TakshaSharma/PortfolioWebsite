import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { motion, easeOut } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: {y: -10, willChange: 'transform, opacity'},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div  className='border-b border-neutral-800 pb-24'>
      <motion.h2
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0, y: -100, willChange: 'transform, opacity'}} 
      transition={{duration: 1.5, ease: easeOut}} 
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0, x: -100, willChange: 'transform, opacity'}} 
      transition={{duration: 1.5, ease: easeOut}}
      className='flex flex-wrap items-center gap-4 justify-center'>
        <motion.div 
        variants={iconVariants(2.5)}
        intial='initial'
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400'/> 
        </motion.div>

        <motion.div 
         variants={iconVariants(5)}
         intial='initial'
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className='text-7xl '/> 
        </motion.div>

        <motion.div 
         variants={iconVariants(2.5)}
         intial='initial'
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          < RiTailwindCssFill className='text-7xl text-[#3EBFF8]'/> 
        </motion.div>

        <motion.div 
         variants={iconVariants(5)}
         intial='initial'
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandFramerMotion className='text-7xl text-[#f208b8]  '/> 
        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         intial='initial'
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className='text-7xl text-[#E5A42D]'/> 
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
