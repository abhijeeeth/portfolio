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
  const [planePosition, setPlanePosition] = useState({ x: 0, y: 0 });
  const [planeVelocity, setPlaneVelocity] = useState({ x: 0, y: 0 });
  const [planeAngle, setPlaneAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [trailPoints, setTrailPoints] = useState([]);

  useEffect(() => {
    // Physics constants
    const SPRING = 0.05; // How strongly the plane is pulled toward the cursor
    const DAMPING = 0.75; // Resistance/friction factor
    const MAX_SPEED = 15; // Maximum speed the plane can travel
    const ROTATION_SPEED = 0.2; // How quickly the plane rotates to face direction

    // Initialize plane position if needed
    if (planePosition.x === 0 && planePosition.y === 0 && mousePosition.x !== 0) {
      setPlanePosition({ x: mousePosition.x, y: mousePosition.y });
    }

    // Physics animation frame
    const animationId = requestAnimationFrame(() => {
      if (mousePosition.x === 0) return; // Skip if mouse position isn't initialized

      // Calculate vector from plane to cursor
      const dx = mousePosition.x - planePosition.x;
      const dy = mousePosition.y - planePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate desired angle based on velocity direction
      const targetAngle = Math.atan2(planeVelocity.y, planeVelocity.x) * (180 / Math.PI);

      // Apply spring force (attraction to cursor)
      let velX = planeVelocity.x + dx * SPRING;
      let velY = planeVelocity.y + dy * SPRING;

      // Apply damping (air resistance)
      velX *= DAMPING;
      velY *= DAMPING;

      // Limit maximum speed
      const speed = Math.sqrt(velX * velX + velY * velY);
      if (speed > MAX_SPEED) {
        const ratio = MAX_SPEED / speed;
        velX *= ratio;
        velY *= ratio;
      }

      // Update plane position
      const newPosX = planePosition.x + velX;
      const newPosY = planePosition.y + velY;

      // Smoothly rotate plane to match velocity direction
      if (Math.abs(velX) > 0.1 || Math.abs(velY) > 0.1) {
        const currentAngle = planeAngle;
        const angleDiff = targetAngle - currentAngle;

        // Normalize angle difference to -180 to 180 range
        let normalizedDiff = angleDiff;
        while (normalizedDiff > 180) normalizedDiff -= 360;
        while (normalizedDiff < -180) normalizedDiff += 360;

        // Apply rotation with easing
        setPlaneAngle(currentAngle + normalizedDiff * ROTATION_SPEED);
      }

      // Update state
      setPlaneVelocity({ x: velX, y: velY });
      setPlanePosition({ x: newPosX, y: newPosY });

      // Add trail points when the plane is moving at sufficient speed
      if (speed > 2) {
        setTrailPoints(prev => {
          const newTrail = [...prev, { x: newPosX, y: newPosY }];
          // Keep trail at reasonable length
          if (newTrail.length > 15) {
            return newTrail.slice(newTrail.length - 15);
          }
          return newTrail;
        });
      }
    });

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
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [mousePosition, planePosition, planeVelocity, planeAngle, trailPoints]);

  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundImage: `radial-gradient(circle, #333333, #1a1a1a, #0d0d0d, #000000)`,
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Bird with physics and trail */}
      <div style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Trail effect */}
        {trailPoints.length > 1 && (
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <path
              d={`M ${trailPoints[0].x} ${trailPoints[0].y} ${trailPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}`}
              stroke="rgba(180, 220, 250, 0.2)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={`M ${trailPoints[0].x} ${trailPoints[0].y} ${trailPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}`}
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="3,5"
              strokeLinecap="round"
            />
          </svg>
        )}

        {/* Bird Drawing */}
        <div style={{
          position: 'absolute',
          left: `${planePosition.x}px`,
          top: `${planePosition.y}px`,
          transform: `translate(-50%, -50%) rotate(${planeAngle}deg)`,
          transition: 'width 0.3s, height 0.3s',
        }}>
          <svg
            width={isHovering ? "45" : "35"}
            height={isHovering ? "45" : "35"}
            viewBox="0 0 40 30"
            style={{
              filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.3))',
              transition: 'width 0.3s, height 0.3s'
            }}
          >
            {/* Bird animation - wings flap based on velocity */}
            <g transform={`translate(20, 15) scale(${0.8 + Math.sin(Date.now() / 200) * 0.1})`}>
              {/* Bird body */}
              <ellipse
                cx="0" cy="0"
                rx="12" ry="6"
                fill="#4a88ca"
                stroke="#2c5079"
                strokeWidth="1"
              />

              {/* Head */}
              <circle
                cx="11" cy="-2"
                r="7"
                fill="#4a88ca"
                stroke="#2c5079"
                strokeWidth="1"
              />

              {/* Eye */}
              <circle
                cx="13" cy="-3"
                r="1.5"
                fill="white"
              />
              <circle
                cx="13.5" cy="-3"
                r="0.8"
                fill="black"
              />

              {/* Beak */}
              <path
                d="M 17,-3 L 22,0 L 17,2"
                fill="#f0c040"
                stroke="#e0a020"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />

              {/* Wings */}
              <path
                d={`M -2,-3 Q ${-8 - Math.sin(Date.now() / 150) * 4},-${8 + Math.sin(Date.now() / 150) * 3} -2,3`}
                fill="#5098da"
                stroke="#2c5079"
                strokeWidth="1"
              />
              <path
                d={`M 2,-3 Q ${8 + Math.sin(Date.now() / 200) * 4},-${10 + Math.sin(Date.now() / 200) * 3} 2,3`}
                fill="#3878ba"
                stroke="#2c5079"
                strokeWidth="1"
              />

              {/* Tail feathers */}
              <path
                d="M -12,0 L -20,-4 L -20,0 L -20,4"
                fill="#5098da"
                stroke="#2c5079"
                strokeWidth="1"
                strokeLinejoin="round"
              />

              {/* Small details - feather textures */}
              <path
                d="M 5,-2 C 3,0 3,2 5,4"
                stroke="#3878ba"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 0,-2 C -2,0 -2,2 0,4"
                stroke="#3878ba"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M 7,-5 C 9,-4 10,-3 11,-1"
                stroke="#3878ba"
                strokeWidth="0.5"
                fill="none"
              />
            </g>
          </svg>
        </div>
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