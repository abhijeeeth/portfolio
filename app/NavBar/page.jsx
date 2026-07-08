'use client'

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hamburger Button Component with SVG Path Animations
const HamburgerButton = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="relative z-50 p-2 text-gray-200 hover:text-red-500 transition-colors focus:outline-none flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    >
      <div className="relative w-6 h-6 flex flex-col justify-center items-center">
        {/* Top Line */}
        <motion.span
          className="absolute block h-[2px] w-5 bg-current rounded-full"
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
        {/* Middle Line */}
        <motion.span
          className="absolute block h-[2px] w-5 bg-current rounded-full"
          animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
        />
        {/* Bottom Line */}
        <motion.span
          className="absolute block h-[2px] w-5 bg-current rounded-full"
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
      </div>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'projects', label: 'Projects', href: '/Projects' },
    { id: 'books', label: 'Books', href: '/Books' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to section with custom smooth behavior
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      // Fallback navigation if on another page
      window.location.href = `/#${sectionId}`;
    }
  };

  // Intersection Observer to highlight active section as user scrolls
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies mid-viewport
      threshold: 0.05,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body & html scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer if window resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Accessibility Focus Trap inside the mobile drawer
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = drawerRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Auto-focus the first element (close button) when drawer opens
    firstElement.focus();

    window.addEventListener('keydown', handleFocusTrap);
    return () => {
      window.removeEventListener('keydown', handleFocusTrap);
    };
  }, [isOpen]);

  return (
    <>
      {/* Sticky Main Header */}
      <nav className="bg-black/40 backdrop-blur-md border-b border-white/5 px-6 md:px-12 py-4 fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo / Brand */}
          <Link href={'/'}>
            <div className="text-gray-200 hover:text-red-500 font-bold text-xl transition-colors duration-200">
              Abhijith<span className='text-red-500 hover:text-gray-200 font-thin'>Shaji</span>
            </div>
          </Link>

          {/* Desktop Navbar Links (Visible >= 1024px) */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-2 px-4 rounded-md hover:bg-white/5 ${
                    isActive ? 'text-red-500 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="desktopActiveIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-red-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Hamburger Menu Button (Visible < 1024px) */}
          <div className="lg:hidden">
            <HamburgerButton isOpen={isOpen} toggle={toggleNavbar} />
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden flex justify-end"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Backdrop Blur Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer Container */}
            <motion.div
              initial={{ x: "100%", opacity: 0.95 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.95 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              ref={drawerRef}
              className="relative w-full max-w-[320px] h-full bg-black/80 backdrop-blur-2xl border-l border-white/10 flex flex-col justify-between p-6 shadow-2xl z-50 text-white"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <Link href={'/'} onClick={() => setIsOpen(false)}>
                  <div className="text-gray-200 hover:text-red-500 font-bold text-lg">
                    Abhijith<span className='text-red-500 hover:text-gray-200 font-thin'>Shaji</span>
                  </div>
                </Link>
                {/* Dedicated Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  ref={closeButtonRef}
                  className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Centered Navigation Links with generous tap targets */}
              <div className="flex-1 flex flex-col justify-center gap-4 my-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`relative py-3 px-4 text-xl font-medium tracking-wide transition-all duration-200 rounded-lg flex items-center justify-between min-h-[48px] w-full ${
                        isActive
                          ? 'text-red-500 font-semibold bg-white/5'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      tabIndex={0}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="w-1.5 h-1.5 bg-red-500 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      ) : (
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-white/10 text-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Abhijith Shaji</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
