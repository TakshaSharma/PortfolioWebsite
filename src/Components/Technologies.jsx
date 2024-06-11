import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center gap-4 justify-center'>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400'/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className='text-7xl '/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          < RiTailwindCssFill className='text-7xl text-[#3EBFF8]'/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandFramerMotion className='text-7xl text-[#f208b8]  '/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className='text-7xl text-[#E5A42D]'/> 
        </div>
      </div>
    </div>
  )
}

export default Technologies
