import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className='bg-green-100 my-8 py-10 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin grid grid-flow-row md:grid-cols-2 gap-8 md items-center'>
          <div className=' flex flex-col'>
            <div className='py-4 flex flex-col md:flex-col lg:flex-col xl:flex-row gap-2 items-center'>
              <span className='font-medium text-2xl md:text-3xl lg:text-4xl'>Welcome to </span>
              <span className='font-medium text-2xl md:text-3xl lg:text-4xl text-green-500'>Camarines Norte!</span>
            </div>
            <div className='py-2 grid gap-2'>
              <p className='font-light text-md text-center md:text-left'>
              Discover the wonders of each location. Along its eastern shores, Camarines Norte shares borders with Quezon and Camarines Sur, two neighboring provinces. 
              </p>

              <p className='font-light text-md text-center md:text-left'>
              The fertile plains and valleys of the coast contrast sharply with the rolling hills and mountains of the interior.
              </p>

              <p className='font-light text-md text-center md:text-left'>
              The Calaguas group of islands, for example, are a blessing in this regard. As a result, the province is a great place to go boating or hiking.
              </p>
            </div>
          </div>
          <div>

          <img src="MapTemp.png" className='w-full h-full object-cover'/>

          </div>
        </div>
    </section>
  )
}

export default About