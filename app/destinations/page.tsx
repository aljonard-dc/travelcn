import React from 'react'
import { Header, DetailedPage } from "@/lib/imports"

const page = () => {
  return (
    <main id="destination" className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
        <Header />
        <DetailedPage id={1}/>
   </main>
  )
}

export default page
