import React from 'react'
import { ACHIEVEMENTS } from '../constants'
import { FaTrophy } from 'react-icons/fa'; 
import {motion} from "framer-motion";

const Achievements = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0 , y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-yellow-500 text-4xl'>Achievements
        </motion.h2>
        <div>
        {ACHIEVEMENTS.map((Achievements,index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                
                

                <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4 flex justify-center lg:justify-end">
                    <div className="w-12 h-12 flex items-center justify-center lg:mr-15"> {/* Added lg:mr-8 for spacing */}
                        <FaTrophy className="w-8 h-8 text-yellow-500" /> {/* Trophy Icon */}
                    </div>
                </motion.div>




                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{Achievements.role} - {" "} <span className='text-sm text-purple-100'>{Achievements.place}</span></h6>
                <p className='mb-4 text-neutral-400'> {Achievements.description}</p>
                </motion.div>
            </div>
        ))}
        </div> 
      
    </div>
  )
}

export default Achievements
