'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import profileImage from './profile.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-16 px-4 relative overflow-hidden">
      {/* Subtle background image - blended professionally */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute right-0 top-0 w-full h-full md:w-3/4 lg:w-1/2 opacity-50">
          <Image
            src={profileImage}
            alt="Background Profile"
            fill
            className="object-contain object-right-top"
            priority
            sizes="100vw"
            quality={40}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Content with staggered animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-blue-400 text-xl lg:text-2xl font-medium mb-2"
            >
              Hello, I am
            </motion.span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
            >
              Abhijith Shaji
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl lg:text-3xl mb-8 text-gray-300 font-sans"
            >
              <span className="text-white font-medium">Im a </span>
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
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-medium"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Specialized in creating beautiful, high-performance Flutter applications and responsive web experiences with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-10"
            >
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block shadow-md"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/abhijeeeth"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-transparent border border-gray-700 hover:border-blue-500 text-white px-5 py-2 rounded-md transition-all duration-300 hover:bg-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/stabhijith/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-transparent border border-gray-700 hover:border-blue-500 text-white px-5 py-2 rounded-md transition-all duration-300 hover:bg-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
