"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, trends, Button } from '@/lib/imports'

const Trends = ({id}: {id:number}) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "-50px"})

    //animation for variants
    const containerVariants = {
        hidden: {
            opacity: 0, y: 50
        },
        visible: {
            opacity: 1, y: 0, transition: {
                duration: 0.8, ease: 'easeOut', staggerChildren: 0.2
            },
        },
    }

    const titleVariants = {
        hidden: {
            opacity: 0, y: -30
        },
        visible: {
            opacity: 1, y: 0, transition: {
                duration: 0.8, ease: 'easeOut',
            },
        },
    }

    const descriptionVariants = {
        hidden: {
            opacity: 0, scale: 0.95
        },
        visible: {
            opacity: 1, scale: 1, transition: {
                duration: 0.6, ease: 'easeOut', delay: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: {
            opacity: 0, y: 30
        },
        visible: {
            opacity: 1, y:0, transition: {
                duration: 0.6, ease: 'easeOut',
            },
        },
    }

    const buttonHoverVariants = {
       hover: {
        scale: 1.1, y: -3, transition: {
            type: 'spring', stiffness: 300
        },
       },
    }


  return (
    <motion.section
    ref={sectionRef}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
    exit="hidden"
    variants={containerVariants}
    className='flex-1 justify-center items-center py-8'>
        {
            trends.filter(item => item.id === id)
            .map((item, idx) => (
                <motion.div variants={containerVariants} key={idx} className='text-center'>
                    <motion.h1
                    variants={titleVariants}
                    className='text-2xl md:text-3xl lg:text-4xl font-semibold text-green-950'>{item.title}</motion.h1>
                    <motion.p
                    variants={descriptionVariants}
                    className='text-green-950/80 text-base md:text-lg lg:text-xl pt-6'>{item.description}</motion.p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 justify-center'>

                {
                    item.trends && item.trends.map((item, idx) => (
                        <motion.div
                        variants={cardVariants}
                        whileHover={{
                            scale:1.1,
                            rotate: 2,
                            transition: {
                                type: "spring", stiffness: 200
                            }
                        }}
                        key={idx} className='flex justify-center'>
                            <Card id={id} img={item.img} title={item.title} description={item.desc}/>
                        </motion.div>
                    ))
                }
                </div>
                </motion.div>
            ))
        }

        <motion.div
        variants={buttonHoverVariants}
        whileHover="hover"
        className='flex items-center justify-center mt-6 md:mt-8'>
            <Button title='Learn More!' href={`${id === 1 ? '/destinations' :  '/festivals'}`}/>
        </motion.div>
    </motion.section>
    
  )
}

export default Trends