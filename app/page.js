'use client'
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import AboutMe from "./About/page";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundImage: `radial-gradient(circle, #333333, #1a1a1a, #0d0d0d, #000000)`,
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Flutter-themed cursor */}
      <div
        className="flutter-cursor"
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? '40px' : '30px',
          height: isHovering ? '40px' : '30px',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'all 0.15s ease',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Flutter logo shape */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(69, 209, 253, 0.2)',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
          transform: 'rotate(45deg)',
          boxShadow: '0 0 10px rgba(69, 209, 253, 0.5)',
        }}></div>
        <div style={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          backgroundColor: 'rgba(94, 53, 177, 0.3)',
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
          transform: 'rotate(45deg)',
          boxShadow: '0 0 8px rgba(94, 53, 177, 0.6)',
        }}></div>
      </div>
      <Navbar />
      <Hero />
      <QuiltedImageList />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}