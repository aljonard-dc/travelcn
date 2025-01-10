import React from 'react'
import { qoutesContent } from '@/data'
const Qoutes = () => {
  return (
    <section className='bg-green-600 my-8 py-8 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        

          {qoutesContent.filter(content => content.id)
          .map((content) =>(

            <p className='text-center p-2 text-base text-white-100 font-normal px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'key={content.id}>
                {content.text}
            </p> 

            ))
            
          }
        
    </section>

    
  )
}

export default Qoutes