import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='-mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='p-8 bg-green-800 flex flex-col items-center space-y-8'>
            <Image src="logo.svg" alt="logo" width={120} height={120}/>
            <h1 className='text-2xl text-white-100'>Travel CN</h1>
            <h2 className='text-base text-white-100'>Copyright @ 2025 TravelCN</h2>
        </div>
               
    </footer>
  )
}

export default Footer
