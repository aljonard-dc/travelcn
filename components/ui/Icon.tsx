import { iconProps } from '@/lib/props';
import Image from 'next/image';
import React from 'react'

const Icon = ({ title, icon }: iconProps) => {
    return (
        <section>
            <div className='flex flex-col gap-4 max-w-24 md:max-w-32 items-center justify-center'>
                <div className='flex items-center justify-center w-12 md:w-24 h-12 md:h-24 rounded-full border-2 border-green-400'>
                    <Image
                        src={icon}
                        alt={title}
                        className="object-cover"
                    />
                </div>
                <p className='text-center font-medium text-sm md:text-lg'> {title} </p>
            </div>
           
        </section>
        

            
        );
  };

export default Icon