'use client'
import Image from 'next/image';
import profileImage from './pro.png';
import { TypeAnimation } from 'react-type-animation';
import { PageWrapper } from '../Components/PageWrap';
import { LeftWrapper } from '../Components/LeftWrap';

const Hero = () => {
  return (
    <div className="bg-transparent pb-24 pt-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:h-[500px] lg:mx-22">
        {/* Image on the left (visible on larger screens) */}
        <div className="lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
          <PageWrapper>
          <Image
            src={profileImage}
            alt="Profile Image"
            className="rounded-full w-auto h-auto sm:mx-2 lg:mx-0"
          />
          </PageWrapper>
        </div>

        {/* Name and details on the right */}
        <div className="lg:w-1/2 text-center lg:ml-24 lg:text-left">
        <h1 className=" font-mono text-6xl font-bold drop-shadow-lg text-gray-400">I'm</h1><br />
        <LeftWrapper> 
          <h1 className="text-shadow-lg text-shadow-white  text-6xl font-bold mb-4 drop-shadow-2xl bg-gradient-to-r from-purple-900  to-pink-700 inline-block text-transparent bg-clip-text">Abhijith Shaji</h1>
          </LeftWrapper>
          <p className="text-lg mb-8 text-white font-bold "><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Next.js Dev',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'React.js Dev',
        1000,
        'Web Designer',
        1000,
        'UX/UI Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></p>
          <div>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-900  to-pink-700 border  border-white text-white px-4 py-2 rounded-md shadow-lg shadow-orange-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-900  to-pink-700 border text-white px-4 py-2 rounded-md  ml-4 shadow-lg shadow-orange-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
