import React from 'react'
import { CERTIFICATIONS } from '../constants'
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0 , y:-100}}
                transition={{duration:0.5}}    
                className='my-20 text-center text-yellow-500 text-4xl'>Certification</motion.h2>
            <div>
            {CERTIFICATIONS.map((Certifications,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:flex-row lg:items-center lg:justify-center'>
                    
                    
    
                    <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}  
                        className="w-full lg:w-1/4 flex justify-center lg:justify-start lg:mr-12 flex-shrink-0">
                        <div className="w-[300px] h-[200px] p-2 bg-neutral-800 border-2 border-neutral-lg shadow-md shadow-gray-800 rounded-lg flex items-center justify-center "> 
                        <img src={Certifications.image} alt="Certification" className="w-full h-full object-contain rounded-lg shadow-lg" />
                        </div>
                    </motion.div>
    
    
    
    
                    <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{Certifications.role} - {" "} <span className='text-sm text-purple-100'>{Certifications.place}</span></h6>
                    <p className='mb-4 text-neutral-400'> {Certifications.description}</p>
                    </motion.div>
                </div>
            ))}
            </div> 
          
        </div>
  )
}

export default Certifications;
