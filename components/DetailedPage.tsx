"use client"

import React from 'react'
import { travelCN, Button } from '@/lib/imports'
import { motion } from 'framer-motion'

const DetailedPage = ({id}: {id: number}) => {
  const animationDuration = 0.8;

  return (
    <section id="detailed" className='-mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
      <div className='py-8'>
        {
          travelCN.filter(item => item.id === id)
            .map(item => (
              <div key={id}>
                {
                  item.places && item.places.map((place, idx) => (
                    <motion.div
                      key={place.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: animationDuration, ease: "easeInOut" }}
                      viewport={{ once: false }}
                      className={`${idx % 2 === 0 ? 'bg-white' : id === 1 ? 'bg-green-100' : 'bg-yellow-100'} grid grid-cols-1 md:grid-cols-2 text-center md:text-start gap-6 py-8 items-center px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin`}
                    >
                      <div className={`${idx % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                        <motion.h1
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: animationDuration, ease: "easeInOut" }}
                          viewport={{ once: false }}
                          className='text-green-950 text-2xl md:text-3xl lg:text-4xl font-semibold pb-2'
                        >
                          {place.name}
                        </motion.h1>
                        <motion.h2
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: animationDuration, ease: "easeInOut" }}
                          viewport={{ once: false }}
                          className='text-green-950/80 text-base md:text-lg lg:text-xl font-semibold pb-6'
                        >
                          {place.location}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: animationDuration, ease: "easeInOut" }}
                          viewport={{ once: false }}
                          className='flex text-green-950/90 text-sm md:text-base lg:text-lg pb-7'
                        >
                          {place.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: animationDuration, ease: "easeInOut" }}
                          viewport={{ once: false }}
                          className='flex justify-center md:justify-start'
                        >
                          <Button href='' title="Learn more!" />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: animationDuration, ease: "easeInOut" }}
                        viewport={{ once: false }}
                        className={`${idx % 2 === 0 ? 'order-1' : 'order-1 md:order-2'} h-full w-auto`}
                      >
                        <img src={place.img} alt={place.name} className='w-full h-full object-cover' />
                      </motion.div>
                    </motion.div>
                  ))
                }
              </div>
            ))
        }
      </div>
    </section>
  );
};

export default DetailedPage;
