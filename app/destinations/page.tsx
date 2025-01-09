import React from 'react'
import { Header, Footer, Hero, DetailedPage } from "@/lib/imports"
 

const page = () => {

  return (
    <main id="destination" className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
      <div>
        <Header />
        <Hero id={2} type='destination'/>
        <DetailedPage id={1}/>
        <Footer/>
      </div>

   </main>
  )
}

export default page
