import { ButtonProps, iconProps } from '@/lib/props';
import Link from 'next/link';
import React from 'react'

const Icon = ({ title, icon, href, target = "_self" }: iconProps) => {
    return (
        <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}>
            <div className='flex flex-col gap-4 max-w-24 md:max-w-32 items-center justify-center'>
                <div className='flex items-center justify-center w-12 md:w-24 h-12 md:h-24 rounded-full border-2 border-green-400'>
                    <img
                        src={icon}
                        
                        className="object-cover"
                    />
                </div>
                <p className='text-center font-medium text-sm md:text-lg'> {title} </p>
            </div>
           
        </Link>
        

            
        );
  };

export default Icon