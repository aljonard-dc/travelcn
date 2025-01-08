'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import { navLinks } from '@/lib/imports'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();


    return (
    <header className='fixed top-0 z-50 w-full -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin xl:-mx-desktop-margin'>
        <div className='py-5 flex justify-between items-center bg-green-700 px-mobile-margin md:px-tablet-margin lg:px-laptop-margin xl:px-desktop-margin'>
            <div className='flex items-center'>
                <Image src="/logo.svg" alt="logo" width={50} height={50}></Image>
                <span className='text-2xl font-bold text-white'>Travel</span>
                <span className='text-2xl font-bold text-yellow-500'> CN</span>
            </div>
        
            <div className='flex items-center'>  
                <nav className='hidden lg:block'>
                    <ul className='flex text-base gap-10 text-white'>
                        {
                            navLinks.map((link) => (
                                <li key={link.id} className={`
                                    ${pathName === link.href ? 'border-b-4 border-green-500': 'border-b-4 border-transparent hover:border-green-500'}
                                `}>
                                    <Link href={link.href}> {link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        className="text-white"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

        {/* Mobile Menu */}
        <nav
            className={`${menuOpen ? 'block' : 'hidden' } lg:hidden bg-green-700 w-full`}>
            <ul className="flex flex-col items-center text-white text-base gap-4 p-4">
            {
                navLinks.map((link) => (
                    <li
                    key={link.id}
                    className={`
                        ${pathName === link.href ? 'border-b-4 border-green-500': 'border-b-4 border-transparent hover:border-green-500'}
                    `}>
                    <Link href={link.href}>{link.title}</Link>
                    </li>
                ))
            }
            </ul>
        </nav>
        </header> 
    )
}

export default Header;
