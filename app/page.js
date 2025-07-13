'use client'
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import AboutMe from "./About/page";
import Books from './Books/page';
import Footer from "./Contact/ContactMe";
import Hero from "./Hero/page";
import QuiltedImageList from "./ImageCom/page";
import Navbar from "./NavBar/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";

const FloatingWhatsAppButton = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 cursor-pointer flex items-center"
    >
      <div className="flex items-center gap-2">
        <div className="bg-[#25D366] w-12 h-12 md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        {showText && (
          <a
            href="https://wa.me/+916238545696"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] px-3 py-2 rounded-lg shadow-lg"
          >
            <h5 className="m-0 text-white font-mono text-sm md:text-base">Chat with Me</h5>
          </a>
        )}
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
      <Navbar />
      <Hero />
      <QuiltedImageList />
      <AboutMe />
      <Projects />
      <Books />
      <Skills />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}