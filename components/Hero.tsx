import React from 'react';
import Image from 'next/image';
import { heroContent, Button } from '@/lib/imports';
import { FaLevelDownAlt } from 'react-icons/fa';

const Hero = ({id, type}:{id:number; type?:"home" | "destination" | "festival"}) => {
  return (
    <section className="-mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin">
      {
        heroContent.filter(content => content.id === id)
        .map(content => (
          <div 
          key={content.id}
          className="relative w-full h-screen flex items-center justify-center">
          <Image
              src={content.img}
              alt="banner"
              layout="fill"
              objectFit="cover"
              quality={100} 
          />

             {/* Home Hero Content */}
             {type === "home" && (
              <div className="absolute max-w-[700px] py-16 px-16 bg-green-600/80 
              flex flex-col items-center justify-center text-white text-center
              mx-mobile-margin md:mx-tablet-margin lg:mx-laptop-margin xl:mx-desktop-margin
              ">
                
                <h2 className="text-base text-center font-semibold opacity-90 pb-6">
                  {content.sub}
                </h2>

                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
                  {content.caption}
                </h1>

                <p className='absolute bottom-[-1.5em] rounded-none text-base text-white bg-yellow-500 px-6 md:px-24 py-3'>
                    Visit Now!
                </p>
                
              </div>
            )}

            {/* Destination and Festival Hero Content */}
            {(type === "destination" || type === "festival") && (
              <div
                className={`${
                  type === "destination"
                    ? "bg-green-600/80"
                    : "bg-yellow-700/80"
                } flex flex-col items-center md:items-start text-center md:text-start text-white max-w-[700px] absolute lg:left-0 lg:top-40 p-8 md:p-16 
                mx-mobile-margin md:mx-tablet-margin lg:mx-laptop-margin xl:mx-desktop-margin
                `}>

                <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                  {content.caption}
                </h1>

                <Button
                  title="Discover"
                  href="#detailed"
                  icon={<FaLevelDownAlt />}
                />

              </div>
            )}
          </div>
        ))}
     
    </section>
  );
};

export default Hero;
