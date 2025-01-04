'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';
import Button from './ui/Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinks = [
    {
      id: 1,
      title: 'Home',
      href: '/',
    },
    {
      id: 2,
      title: 'Destinations',
      href: '/',
    },
    {
      id: 3,
      title: 'Festivals',
      href: '/',
    },
  ];

  return (
    <header className="w-full border-b">
      <div className="w-full p-5 mx-auto flex justify-between items-center bg-green-700">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-white">Travel</span>
          <span className="text-2xl font-bold text-yellow-500">CN</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex text-base gap-8 text-white">
            {NavLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-green-200 hover:border-b hover:border-green-500"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Button and Hamburger Menu */}
        <div className="flex items-center gap-4">
          <Button title="Save our spot" href="/" />
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${menuOpen ? 'block' : 'hidden' } lg:hidden bg-green-700 w-full`}
      >
        <ul className="sticky flex flex-col items-center text-white text-base gap-4 p-4">
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

export default Navbar;
