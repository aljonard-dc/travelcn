import React from 'react'
import Image from 'next/image'
import { cardProps } from '@/lib/props'


const Card = ({id, img, title, description}: cardProps) => {
  return (
    <div className="max-w-[350px] overflow-hidden">
      <div className="relative h-[250px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      <div className={`${id === 2 ? 'bg-yellow-600/80' : 'bg-green-600/80'} absolute w-full bottom-0 flex items-center justify-center text-white h-[60px]`}>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      </div>

      <div className="px-4 pt-4">
        <p className="text-green-950 text-center text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card