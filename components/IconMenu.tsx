"use client"

import React, {useRef} from 'react'
import Icon from './ui/Icon'
import { iconContent } from '@/lib/imports'
import { motion, useInView } from 'framer-motion';


const IconMenu = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50px"})
  
  
    const containerVariants = {
      hidden: {
        opacity: 0, y: -10
      },
      visible: {
        opacity: 1, y: 0, transition: {
          duration: 0.8, ease: 'easeIn'
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
    className= ' h-24 md:h-44 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='flex flex-row items-start justify-center gap-5 md:gap-24 lg:gap-40 -mt-6 md:-mt-3  absolute w-full'>

        {iconContent.filter(content => content.id).
        map((content) =>(


            <div key={content.id}>
            <Icon
            id={content.id}
            icon={content.icon}
            title={content.title}
            />
        </div>
        

        ))}
        
        </div>
    </motion.section>
    
  )
}

export default IconMenu