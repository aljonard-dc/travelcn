'use client'
import React from 'react'
import Link from 'next/link'
import Button from './Button'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import Image from 'next/image'
import {NavLinks} from '@/data'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <header className='w-full border-b '>
        <div className='w-full p-5 mx-auto flex justify-around gap-3 bg-green-700 '>
            <div className='flex items-center gap-1'>
                <Image src="/logo.svg" alt="logo" width={50} height={50}></Image>
                <span className='text-2xl font-bold text-white'>Travel</span>
                <span className='text-2xl font-bold text-yellow-500'> CN</span>
            </div>
        
            <div className='flex items-center'>  
                <nav className='hidden lg:block'>
                    <ul className='flex text-base gap-10 text-white '>
                        {
                            NavLinks.map((link) => (
                                <li key={link.id} className='hover:text-green-200 hover:border-b hover:border-green-500'>
                                    <Link href={link.href}> {link.title}</Link>
                                </li>
                            ))
                        }           
                    </ul>
                </nav>
              
            
            </div>
            <div className="flex items-center gap-4">
                <Button title="Save our spot" href="/" />
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            
        </div>
        <nav
            className={`${menuOpen ? 'block' : 'hidden' } lg:hidden bg-green-700 w-full`}>
            <ul className="flex flex-col items-center text-white text-base gap-4 p-4">
            {
                NavLinks.map((link) => (
                    <li
                    key={link.id}
                    className="hover:text-green-200 hover:border-b hover:border-green-500">
                    <Link href={link.href}>{link.title}</Link>
                    </li>
                ))
            }
            </ul>
        </nav>
        </header> 
    )
}

export default Header
