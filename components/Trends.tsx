import React from 'react'
import { Card, trends, Button } from '@/lib/imports'

const Trends = ({id}: {id:number}) => {
  return (
    <section className='flex-1 justify-center items-center py-8'>
        {
            trends.filter(item => item.id === id)
            .map((item, idx) => (
                <div key={idx} className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-green-950'>{item.title}</h1>
                    <p className='text-green-950/80 text-base md:text-lg lg:text-xl pt-6'>{item.description}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 justify-center'>

                {
                    item.trends && item.trends.map((item, idx) => (
                        <div key={idx} className='flex justify-center'>
                            <Card id={id} img={item.img} title={item.title} description={item.desc}/>
                        </div>
                    ))
                }
                </div>
                </div>
            ))
        }

        <div className='flex items-center justify-center mt-6 md:mt-8'>
            <Button title='Learn More!' href={`${id === 1 ? '/destinations' :  '/festivals'}`}/>
        </div>
    </section>
    
  )
}

export default Trends