import { ButtonProps } from '@/lib/props';
import Link from 'next/link';
import React from 'react'

const Icon = () => {
    return (
        <div className='grid grid-rows-2 justify-center gap-4  max-w-24'>
            <a className='flex items-center justify-center w-24 h-24 rounded-full border-2 border-green-400'>
                <img src="/Icons/festival-logo.svg"/>
            </a>
            <p className='text-center font-medium text-md'> Hello World</p>
        </div>

        );
  };

export default Icon