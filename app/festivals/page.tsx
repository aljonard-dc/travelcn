import React from 'react'
import { Header,Footer, Hero, DetailedPage } from '@/lib/imports'

const page = () => {

  return (
    <main id="festival">
        <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
          <Header />
          <Hero id={3} type='festival'/>
          <DetailedPage id={2}/>
          <Footer/>
        </div>
    </main>
  )
}

export default page
