import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from "../constants";
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 text-center'>
        <motion.h1 
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-10 text-4xl text-yellow-500 font-semibold'>Get in Touch</motion.h1>
        
        {/* Address & Phone Number */}
        <motion.p 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='text-lg text-neutral-400'>{CONTACT.address}</motion.p>
        

        {/* Social Media Links */}
        <motion.div 
             whileInView={{opacity:1 , x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1}}
            className='mt-6 flex justify-center space-x-6'>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-lightblue-400 hover:text-blue-600 text-3xl">
                <FaLinkedin />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-white-400 hover:text-purple-600 text-3xl">
                <FaGithub />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="text-white-400 hover:text-red-600 text-3xl">
                <FaEnvelope />
            </a>
        </motion.div>
    </div>
  );
}

export default Contact;
