'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from './profile.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Gradient orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
            animate={{
              x: calculateMovement('x', -15),
              y: calculateMovement('y', -15),
            }}
            transition={{ type: 'spring', damping: 50 }}
            style={{ top: '10%', left: '15%' }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{
              x: calculateMovement('x', 10),
              y: calculateMovement('y', 10),
            }}
            transition={{ type: 'spring', damping: 50 }}
            style={{ bottom: '15%', right: '10%' }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Content section - takes 3/5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-3 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              <span className="inline-block text-blue-400 text-xl font-medium relative">
                <span className="relative z-10">Hello, I am</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-3 bg-blue-500/20 w-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />
              </span>

              <h1 className="font-sans text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block"
                >
                  Abhijith Shaji
                </motion.span>
                <motion.div
                  className="absolute -bottom-3 left-0 h-1 bg-blue-500 w-24 lg:w-32"
                  initial={{ width: 0 }}
                  animate={{ width: '8rem' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl lg:text-4xl text-gray-300 font-sans flex flex-wrap items-center gap-x-3"
            >
              <span className="text-white font-medium">I'm a</span>
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
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              Specialized in creating beautiful, high-performance Flutter applications and responsive web experiences with modern technologies that elevate user experiences and drive business success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-block shadow-lg shadow-blue-500/20 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/abhijeeeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-blue-500 text-white transition-all duration-300 hover:bg-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/stabhijith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-blue-500 text-white transition-all duration-300 hover:bg-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4 hidden lg:block"
            >
              <div className="flex items-center gap-x-3">
                <div className="h-[1px] w-10 bg-gray-700"></div>
                <span className="text-gray-400 text-sm uppercase tracking-widest">Scroll to explore</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image section - takes 2/5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative h-[550px] w-full">
              {/* Image frame with gradient border */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 opacity-40 rounded-2xl"></div>
                <motion.div
                  className="h-full w-full relative rounded-2xl overflow-hidden border border-gray-700/50"
                  animate={{
                    x: calculateMovement('x', -10),
                    y: calculateMovement('y', -10),
                  }}
                  transition={{ type: 'spring', damping: 40 }}
                >
                  <Image
                    src={profileImage}
                    alt="Abhijith Shaji"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 0vw, 40vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                </motion.div>
              </div>

              {/* Decorative elements */}
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
      </div>
    </div>
  );
};

export default Hero;
