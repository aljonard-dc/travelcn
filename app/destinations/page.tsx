import React from 'react'
import { Hero, Header } from '@/lib/imports' 

const page = () => {

  return (
    <main id="home">
        <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
            <Header />
            <Hero id={2} type='destination'/>
        </div>
   </main>
  )
}

export default page
