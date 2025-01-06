import Hero from '@/components/Hero';
import HeroDestination from '@/components/HeroDestination'
import Header from '@/components/ui/Header'
import React from 'react'

const page = () => {

  return (
    <main id="home">
        <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
            <Header />
            <Hero id={3} type='festival'/>
        </div>
   </main>
  )
}

export default page
