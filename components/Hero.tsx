import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

const Hero = () => {
  return (
    <main className="hero-container">
      <div className="relative w-full h-screen flex items-center justify-center">
        <Image
            src="/Banner/home.png"
            alt="banner"
            layout="fill"
            objectFit="cover"
            quality={100} 
        />
        <div className="hero-content space-y-10 absolute px-5 py-10 md:px-40 md:py-20 bg-green-600/80 flex flex-col items-center justify-center text-white">
            <h2 className="text-base text-center font-bold">LIFE SHOULD BE FILLED WITH</h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl mt-2 text-center">COMFORT, DISCOVERIES,{<br />} AND FREEDOM.</h1>
            <Button 
            className='absolute bottom-[-1.5em] rounded-none text-base text-white bg-yellow-500 px-6 md:px-24 py-3' 
            title="Visit Now!" 
            href="/"/>
           
        </div>
     
      </div>
    </main>
  );
};

export default Hero;
