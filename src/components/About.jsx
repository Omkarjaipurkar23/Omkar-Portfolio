import React from 'react'
import aboutImage from "../assets/aboutimage.jpg"
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <div className="my-20 text-yellow-500 text-center text-4xl">
        About <span className='text-neutral-500'> Me</span>
      </div>
      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{opacity : 1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:p-8" >
            <div className="flex items-center justify-center">
                <img className="rounded-lg"src={aboutImage} alt="About" />
            </div>
            
        </motion.div>
        <motion.div 
          whileInView={{opacity:1 , x:0}}
          initial={{opacity:0 ,x:100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='ml-20 my-2 max-w-xl py-6 text-justify indent-12'> {ABOUT_TEXT}</p>
                </div>
        </motion.div>
      </div>
    
    </div>

  )
}

export default About
