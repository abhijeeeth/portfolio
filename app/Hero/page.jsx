'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateMovement = (axis, factor = 20) => {
    return axis === 'x'
      ? (mousePosition.x / window.innerWidth - 0.5) * factor
      : (mousePosition.y / window.innerHeight - 0.5) * factor;
  };

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Dynamic background with code patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        style={{
          top: '10%',
          left: '15%',
          y: y1
        }}
        animate={{
          x: calculateMovement('x', -15),
          y: calculateMovement('y', -15) + Number(y1.get()),
        }}
        transition={{ type: 'spring', damping: 50 }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        style={{
          bottom: '15%',
          right: '10%',
          y: y2
        }}
        animate={{
          x: calculateMovement('x', 10),
          y: calculateMovement('y', 10) + Number(y2.get()),
        }}
        transition={{ type: 'spring', damping: 50 }}
      />

      {/* Creative elements representing interests */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Writing elements - floating quotes and text */}
        <motion.div
          className="absolute left-[5%] top-[20%] text-blue-500/30 font-serif text-9xl opacity-25 transform -rotate-12"
          animate={{
            y: [0, 15, 0],
            rotate: [-12, -10, -12],
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          "
        </motion.div>
        <motion.div
          className="absolute right-[8%] bottom-[30%] text-blue-500/30 font-serif text-9xl opacity-25 transform rotate-12"
          animate={{
            y: [0, -15, 0],
            rotate: [12, 10, 12],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          "
        </motion.div>

        {/* Enhanced Photography elements - lens aperture SVG */}
        <motion.div
          className="absolute left-[70%] top-[15%] opacity-25"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="60" stroke="#3b82f6" strokeWidth="1" />
            <circle cx="90" cy="90" r="45" stroke="#3b82f6" strokeWidth="1" />
            <circle cx="90" cy="90" r="30" stroke="#3b82f6" strokeWidth="1" />
            <circle cx="90" cy="90" r="15" stroke="#3b82f6" strokeWidth="1" />
            <path d="M90 30L90 150" stroke="#3b82f6" strokeWidth="0.5" />
            <path d="M150 90L30 90" stroke="#3b82f6" strokeWidth="0.5" />
            <path d="M130.7 49.3L49.3 130.7" stroke="#3b82f6" strokeWidth="0.5" />
            <path d="M130.7 130.7L49.3 49.3" stroke="#3b82f6" strokeWidth="0.5" />
            <path d="M115.3 39.5L64.7 140.5" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4" />
            <path d="M140.5 64.7L39.5 115.3" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4" />
            <path d="M39.5 64.7L140.5 115.3" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4" />
            <path d="M64.7 39.5L115.3 140.5" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4" />
          </svg>
        </motion.div>

        {/* Enhanced Flutter elements - more detailed flutter logo pattern */}
        <motion.div
          className="absolute left-[8%] bottom-[18%] opacity-15"
          animate={{
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        >
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
            <path d="M40 120L80 80L120 120H40Z" fill="#3b82f6" fillOpacity="0.4" />
            <path d="M40 40L80 80L120 40H40Z" fill="#3b82f6" fillOpacity="0.6" />
            <path d="M80 80L40 40L40 120L80 80Z" fill="#3b82f6" fillOpacity="0.5" />
            <path d="M120 40L120 120" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M80 80L120 40" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.5" />
            <path d="M80 80L120 120" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.5" />
            <circle cx="120" cy="40" r="4" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="120" cy="120" r="4" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="40" cy="40" r="4" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="40" cy="120" r="4" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="80" cy="80" r="4" fill="#3b82f6" fillOpacity="0.7" />
          </svg>
        </motion.div>

        {/* Code brackets SVG */}
        <motion.div
          className="absolute right-[12%] top-[60%] opacity-15"
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 0, -5],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        >
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <path d="M50 30L30 70L50 110" stroke="#3b82f6" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M90 30L110 70L90 110" stroke="#3b82f6" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70 20L60 120" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" strokeDasharray="4,6" />
          </svg>
        </motion.div>

        {/* Added circuit-like pattern SVG */}
        <motion.div
          className="absolute left-[60%] bottom-[10%] opacity-15"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        >
          <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
            <path d="M20 60H60" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M80 60H120" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M140 60H180" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M60 60V30H80V60" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M120 60V90H140V60" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
            <circle cx="60" cy="60" r="5" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="80" cy="60" r="5" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="120" cy="60" r="5" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="140" cy="60" r="5" fill="#3b82f6" fillOpacity="0.5" />
            <circle cx="60" cy="30" r="3" fill="#3b82f6" fillOpacity="0.3" />
            <circle cx="140" cy="90" r="3" fill="#3b82f6" fillOpacity="0.3" />
          </svg>
        </motion.div>

        {/* Added geometric pattern */}
        <motion.div
          className="absolute left-[20%] top-[65%] opacity-10"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <rect x="75" y="25" width="50" height="50" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" transform="rotate(45 75 25)" />
            <rect x="75" y="25" width="70" height="70" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" transform="rotate(45 75 25)" />
            <rect x="75" y="25" width="90" height="90" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" transform="rotate(45 75 25)" />
            <rect x="75" y="25" width="110" height="110" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.1" transform="rotate(45 75 25)" />
          </svg>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content section - 7/12 columns on large screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-7 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              {/* Creative greeting with animated underline */}
              <div className="inline-block text-blue-400 text-xl font-medium relative mb-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-[2px] h-16 bg-blue-500/50"
                  ></motion.div>
                  <span className="relative z-10">Hello, I am</span>
                </div>
              </div>

              <h1 className="font-sans text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block"
                >
                  Abhijith Shaji
                </motion.span>
                {/* Decorative elements under name */}
                <div className="flex mt-2 gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: i === 0 ? 160 : i === 1 ? 80 : 40 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                      className={`h-1 bg-blue-500 ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-400' : 'bg-blue-300'}`}
                    ></motion.div>
                  ))}
                </div>
              </h1>
            </motion.div>

            {/* Professional title with creative animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-4 h-4"
                >
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="10" cy="10" r="2" fill="#3b82f6" />
                  </svg>
                </motion.div>
              </div>
              <div className="text-2xl lg:text-4xl text-gray-300 font-sans flex flex-wrap items-center gap-x-3">
                <span className="text-white font-medium">Im a</span>
                <TypeAnimation
                  sequence={[
                    "Flutter Developer",
                    2000,
                    "Mobile App Specialist",
                    1500,
                    'Next.js Developer',
                    1500,
                    'React.js Developer',
                    1500,
                    'UX/UI Designer',
                    1500,

                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-semibold relative"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              Specialized in creating beautiful, high-performance Flutter applications and responsive web experiences. I combine my passion for photography, writing and code to build digital experiences that inspire and engage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center lg:justify-start"
            >
              {/* Creative call-to-action button */}
              <a
                href="#contact"
                className="group relative bg-blue-600 overflow-hidden px-8 py-4 rounded-lg font-medium inline-block shadow-lg shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 text-white flex items-center gap-2">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              {/* Interactive social links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/abhijeeeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 text-white transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/stabhijith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 text-white transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Creative scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4 hidden lg:block"
            >
              <div className="flex items-center gap-x-3">
                <div className="relative h-[30px] w-[18px] rounded-full border border-gray-700 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1 h-2 bg-blue-500 rounded-full mt-2"
                  ></motion.div>
                </div>
                <span className="text-gray-400 text-sm uppercase tracking-widest">Scroll to explore</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Creative showcase section - replacing image with creative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative h-[550px] w-full">
              {/* Creative showcase with abstract visual elements */}
              <div className="absolute inset-4">
                {/* Large circular element representing photography */}
                <motion.div
                  className="absolute z-10 top-0 right-0 w-[70%] h-[50%] rounded-lg overflow-hidden backdrop-blur-sm"
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-lg border border-gray-700/50 overflow-hidden bg-blue-500/5 flex items-center justify-center">
                    {/* Enhanced Camera aperture animation */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                      className="relative w-56 h-56"
                    >
                      {/* Aperture blades - increased count and improved */}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 flex justify-center"
                          style={{
                            transform: `rotate(${i * 30}deg)`,
                            transformOrigin: 'center'
                          }}
                          animate={{
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 4,
                            delay: i * 0.2,
                            repeat: Infinity
                          }}
                        >
                          <div className="w-1 h-28 bg-blue-500/30"></div>
                        </motion.div>
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-blue-500/40"></div>
                        <div className="absolute w-24 h-24 rounded-full border border-blue-500/50"></div>
                        <div className="absolute w-16 h-16 rounded-full border border-blue-500/60"></div>
                        <div className="absolute w-8 h-8 rounded-full bg-blue-500/30"></div>
                      </div>

                      {/* Added shutter animation */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                          scale: [1, 0.9, 1],
                          opacity: [0.6, 0.3, 0.6]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <div className="w-40 h-40 rounded-full border-4 border-blue-500/10"></div>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-blue-400/80 font-mono">
                    <span>// photography</span>
                  </div>
                </motion.div>

                {/* Writing element with enhanced animated text lines */}
                <motion.div
                  className="absolute z-30 left-[10%] top-[35%] w-[45%] h-[35%] rounded-lg overflow-hidden"
                  animate={{
                    rotate: [-2, 0, -2],
                    y: [0, 5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-lg border border-gray-700/50 overflow-hidden bg-blue-500/5 flex items-center justify-center backdrop-blur-sm">
                    <div className="h-[70%] w-[80%] flex flex-col justify-center gap-3">
                      {/* Enhanced typing effect for lines with more variation */}
                      {Array.from({ length: 7 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className={`h-[2px] bg-blue-500/${40 + i * 5}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${60 + Math.random() * 40}%` }}
                          transition={{
                            duration: 1.5 + Math.random(),
                            delay: i * 0.15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 3 + Math.random() * 2
                          }}
                        ></motion.div>
                      ))}
                    </div>

                    {/* Added document corner fold */}
                    <div className="absolute top-0 right-0 w-10 h-10">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M0 0L40 40V0H0Z" fill="#3b82f6" fillOpacity="0.1" />
                        <path d="M30 0L40 10L40 0L30 0Z" fill="#3b82f6" fillOpacity="0.2" />
                      </svg>
                    </div>

                    <div className="absolute top-0 left-0 m-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500/40"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-blue-500/20"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-blue-400/80 font-mono">
                    <span>// writing</span>
                  </div>
                </motion.div>

                {/* Flutter/code element with enhanced animated code */}
                <motion.div
                  className="absolute z-20 right-[15%] bottom-[15%] w-[50%] h-[35%] rounded-lg overflow-hidden"
                  animate={{
                    rotate: [1, -1, 1],
                    y: [0, -3, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-lg border border-gray-700/50 overflow-hidden bg-blue-500/5 backdrop-blur-sm">
                    {/* Enhanced editor header with buttons and tab */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/60 border-b border-gray-800 flex items-center px-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                      </div>
                      <div className="ml-4 px-3 py-1 bg-blue-500/10 rounded-t-sm text-[10px] text-blue-400/80">main.dart</div>
                    </div>

                    <div className="absolute top-8 bottom-0 left-0 right-0 p-4 font-mono text-xs">
                      <div className="flex flex-col gap-2">
                        {/* Enhanced code lines */}
                        <motion.div
                          className="text-blue-400/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          import 'package:flutter/material.dart';
                        </motion.div>
                        <motion.div
                          className="text-gray-400/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          class <span className="text-green-400/80">MyApp</span> extends <span className="text-blue-400/80">StatelessWidget</span> {'{'}
                        </motion.div>
                        <motion.div
                          className="pl-4 text-purple-400/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                        >
                          Widget build(BuildContext context) {'{'}
                        </motion.div>
                        <motion.div
                          className="pl-8 text-blue-400/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.1, duration: 0.5 }}
                        >
                          return <span className="text-green-400/80">MaterialApp</span>(
                        </motion.div>
                        <motion.div
                          className="pl-12 text-orange-400/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                        >
                          theme: <span className="text-blue-400/70">ThemeData</span>(
                        </motion.div>
                        <motion.div
                          className="pl-16 text-purple-400/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.7, duration: 0.5 }}
                        >
                          primarySwatch: <span className="text-blue-400/70">Colors</span>.blue,
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2 pl-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.0, duration: 0.5 }}
                        >
                          <div className="w-2 h-4 bg-blue-500/70 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Added line numbers */}
                    <div className="absolute top-8 bottom-0 left-0 w-6 bg-gray-900/40 flex flex-col items-end pr-1 pt-4 text-[10px] text-gray-500/60 font-mono">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="h-[18px]">{i + 1}</div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-blue-400/80 font-mono">
                    <span>// code</span>
                  </div>
                </motion.div>

                {/* Enhanced animated connections between elements */}
                <svg className="absolute inset-0 w-full h-full z-0" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="6,4">
                  <motion.line
                    x1="65%" y1="25%"
                    x2="35%" y2="50%"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <motion.line
                    x1="35%" y1="50%"
                    x2="65%" y2="70%"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                  <motion.line
                    x1="65%" y1="70%"
                    x2="65%" y2="25%"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.6 }}
                  />

                  {/* Added connection nodes */}
                  <motion.circle cx="65%" cy="25%" r="3" fill="rgba(59, 130, 246, 0.5)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  />
                  <motion.circle cx="35%" cy="50%" r="3" fill="rgba(59, 130, 246, 0.5)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  />
                  <motion.circle cx="65%" cy="70%" r="3" fill="rgba(59, 130, 246, 0.5)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  />
                </svg>

                {/* Enhanced animated particles with more variation */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-400/40' : i % 3 === 1 ? 'bg-indigo-400/30' : 'bg-sky-400/30'}`}
                    style={{
                      width: 2 + Math.random() * 4,
                      height: 2 + Math.random() * 4,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [0, -20 - Math.random() * 10, 0],
                      x: [0, Math.random() * 15 - 7.5, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>

              {/* Decorative corner elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-blue-500/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-blue-500/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Custom cursor effect - optional */}
      <div
        className="fixed w-6 h-6 rounded-full border-2 border-blue-500/50 pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease'
        }}
      ></div>
      <div
        className="fixed w-2 h-2 rounded-full bg-blue-500 pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </div>
  );
};

export default Hero;
