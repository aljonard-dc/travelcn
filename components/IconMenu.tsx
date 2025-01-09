import React from 'react'
import Icon from './ui/Icon'
import { iconContent } from '@/lib/imports'

const IconMenu = () => {
  return (
    <section className= 'h-16 md:h-24 lg:h-36 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='flex flex-row items-start justify-center gap-5 md:gap-24 lg:gap-40 -mt-6 md:-mt-14  absolute w-full'>

        {iconContent.filter(content => content.id).
        map((content) =>(


            <div key={content.id}>
            <Icon
            id={content.id}
            icon={content.icon}
            title={content.title}
            href=''
            />
        </div>
        

        ))}
        
        </div>
    </section>
    
  )
}

export default IconMenu