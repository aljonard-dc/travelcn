'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import { Button, NavLinks } from '@/lib/imports'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full absolute top-0 left-0 z-50 border-b bg-green-700">
            <div className="w-full p-5 mx-auto flex items-center justify-between lg:justify-around bg-green-700">
                {/* Logo Section */}
                <div className="flex items-center gap-1">
                    <Image src="/logo.svg" alt="logo" width={50} height={50} />
                    <span className="text-2xl font-bold text-white">Travel</span>
                    <span className="text-2xl font-bold text-yellow-500"> CN</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex">
                    <nav>
                        <ul className="flex text-base gap-10 text-white">
                            {NavLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className="hover:text-green-200 hover:border-b hover:border-green-500">
                                    <Link href={link.href}>{link.title}</Link>
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

            {/* Mobile Navigation Menu */}
            <nav
                className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-green-700 w-full`}>
                <ul className="flex flex-col items-center text-white text-base gap-4 p-4">
                    {NavLinks.map((link) => (
                        <li
                            key={link.id}
                            className="hover:text-green-200 hover:border-b hover:border-green-500">
                            <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
