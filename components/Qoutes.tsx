"use client"

import React, {useRef} from 'react'
import { qoutesContent } from '@/data'
import { motion, useInView } from 'framer-motion';
const Qoutes = () => {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50px"})


  const containerVariants = {
    hidden: {
      opacity: 0, y: 10
    },
    visible: {
      opacity: 1, y: 0, transition: {
        duration: 0.8, ease: 'easeIn'
      }
    }

    
  }

  const textVariants = {
    hidden: {
      opacity: 0, y: -10
    },
    visible: {
      opacity: 1, y: 0, transition: {
        duration: 0.8, ease: 'easeIn', delay: 0.2
      }
    }
  }



  return (
    <motion.section 
    ref={sectionRef}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
    exit="hidden"
    variants={containerVariants}
    className='bg-green-600 my-8 py-8 px-4 md:px-16 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>

          {qoutesContent.map((content, idx) =>(
            <motion.div 
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            exit="hidden"
            variants={textVariants}
            key={idx}>
            <p className='text-center p-2  text-white-100 font-normal text-sm md:text-base'>
            {content.text}
            </p> 
            </motion.div>

            ))
            
          }
        
    </motion.section>

    
  )
}

export default Qoutes