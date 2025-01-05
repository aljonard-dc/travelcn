import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import { FaChevronDown } from 'react-icons/fa'


const HeroDestination = () => {
  return (
    <main className="hero-container">
        <div className="relative w-full h-screen flex items-center justify-center">
            <Image
                src="/Banner/destination.png"
                alt="banner"
                layout="fill"
                objectFit="cover" // Ensures the image covers the entire area
                quality={100} // Optional: Specify the image quality (0-100)
            />
            <div className="hero-content space-y-10 absolute lg:left-40 lg:top-40 px-5 py-8 md:px-16 md:py-16 bg-green-600/80 flex flex-col items-start justify-center text-white">
                <h1 className="text-2xl md:text-3xl lg:text-5xl mt-2 text-left">THE BIGGEST ADVENTURE{<br />} YOU CAN EVER TAKE {<br />}IS TO LIVE THE LIFE OF{<br />}  YOUR DREAMS</h1>
                <Button 
                className='relative text-base text-yellow-950 px-6 py-3' 
                title="Discover"
                href="/"
                />
             
                
            </div>
        
        </div>
    </main>
  )
}

export default HeroDestination
