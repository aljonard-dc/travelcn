import React from 'react'
import { qoutesContent } from '@/data'
const Qoutes = () => {
  return (
    <section className='bg-green-600 my-8 py-8 px-4 md:px-16 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        

          {qoutesContent.map((content) =>(

            <p className='text-center p-2  text-white-100 font-normal text-sm md:text-base'>
            {content.text}
            </p> 

            ))
            
          }
        
    </section>

    
  )
}

export default Qoutes