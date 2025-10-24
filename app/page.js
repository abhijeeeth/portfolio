'use client'
import { useState } from 'react';
import AboutMe from "./About/page";
import Books from './books/page';
import Footer from "./Contact/ContactMe";
import Hero from "./Hero/page";
import QuiltedImageList from "./ImageCom/page";
import Navbar from "./NavBar/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";

const FloatingChatButton = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <div className="flex items-center gap-3">
        {showText && (
          <div className="animate-fadeIn transition-all duration-300 transform">
            <a
              href="https://wa.me/+916238545696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-sm bg-opacity-90 text-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <span className="font-medium text-sm whitespace-nowrap">Let&apos;s Connect</span>
            </a>
          </div>
        )}
        <button
          onClick={handleClick}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none"
          aria-label="Chat with me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-white"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundImage: `radial-gradient(circle, #333333, #1a1a1a, #0d0d0d, #000000)`,
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* <Navbar /> */}
      <Hero />
      <QuiltedImageList />
      <AboutMe />
      <Projects />
      <Books />
      <Skills />
      <Footer />
      <FloatingChatButton />
    </main>
  );
}