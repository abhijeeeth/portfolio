'use client'

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'instant',
      });
    }
  };

  return (
    <nav className="bg-red-900/1 px-10 py-4 fixed w-screen z-50 mr-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <div className="text-gray-200 hover:text-red-500 font-bold text-xl">Abhijith<span className='text-red-500 hover:text-gray-200 font-thin'>Shaji</span> </div>
        </Link>
        {/* Hamburger menu for mobile */}
        <div className={`lg:hidden ${isOpen ? 'hidden' : 'block'}`}>
          <button
            onClick={toggleNavbar}
            className="text-gray-700 focus:outline-none focus:shadow-outline"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar links */}
        <div
          ref={menuRef}
          className={`${isOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-lg lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-200 mr-4"
            >
              Home
            </a>
            <Link href={'/about'}>
              <p onClick={(e) => scrollToSection(e, 'about')}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-200 mr-4"
              >
                About
              </p>
            </Link>
            <Link href={'/Projects'}>
              <p
                onClick={(e) => scrollToSection(e, 'projects')} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-200 mr-4"
              >
                Projects
              </p>
            </Link>
            <Link href={'/Books'}>
              <p
                onClick={(e) => scrollToSection(e, 'books')} className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-200"
              >
                Books
              </p>
            </Link>
            <p
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block mx-4 mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-200"
            >
              Contact
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

