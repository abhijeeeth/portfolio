'use client';
import Image from 'next/image';
import profileImage from './pro.png';
import { TypeAnimation } from 'react-type-animation';
import { PageWrapper } from '../Components/PageWrap';
import { LeftWrapper } from '../Components/LeftWrap';

const Hero = () => {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:h-[500px] lg:px-22">
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
          <h1 className="font-cst text-6xl font-bold drop-shadow-lg text-gray-400">I am</h1>
          <br />
          <LeftWrapper>
            <h1 className="font-mono text-shadow-lg text-6xl font-bold mb-4 drop-shadow-2xl text-gray-300">
              Abhijith Shaji
            </h1>
          </LeftWrapper>
          <p className="text-lg mb-8 text-gray-700 font-bold font-mono">
            <TypeAnimation
              sequence={[
                "Flutter Developer",
                1000,
                'Next.js Developer',
                1000,
                'React.js Developer',
                1000,
                'Web Designer',
                1000,
                'UX/UI Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
          <div>
            <a
              href="https://github.com/abhijeeeth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 border border-gray-800 text-white px-4 py-2 rounded-md shadow-lg"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/stabhijith/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 border text-white px-4 py-2 rounded-md ml-4 shadow-lg"
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
