import React from 'react'
import { travelCN, Button } from '@/lib/imports'

const DetailedPage = ({id}: {id: number}) => {
  return (
    <section className='-mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='py-8'>
            {
                travelCN.filter(item => item.id === id)
                .map(item => (
                    <div key={id} >
                        {
                            item.places && item.places.map((place, idx) => (
                                <div key={place.id} className={`${idx % 2 === 0 ? 'bg-white': id === 1 ? 'bg-green-100' : 'bg-yellow-100'} grid grid-cols-1 md:grid-cols-2 text-center md:text-start gap-6 py-8 items-center px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin`}>
                                    <div className={`md:${idx % 2 === 0 ? 'order-2':'order-1'}`}>
                                        <h1 className='text-green-950 text-2xl md:text-3xl lg:text-4xl font-semibold pb-2'>{place.name}</h1>
                                        <h2 className='text-green-950/80 text-base md:text-lg lg:text-xl font-semibold pb-6'>{place.location}</h2>
                                        <p className='flex text-green-950/90 text-sm md:text-base lg:text-lg pb-7'>{place.description}</p>
                                        <div className='flex justify-center md:justify-start'>
                                            <Button href='' title="Learn more!"/>
                                        </div>
                                        
                                    </div>
                                    <div className={`${idx % 2 === 0 ? 'order-1':'order-2'} h-full w-auto`}>
                                        <img src={place.img} alt={place.name} className='w-full h-full object-cover'/>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default DetailedPage