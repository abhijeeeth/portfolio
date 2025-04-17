// components/AboutMe.js

import Image from 'next/image';
import ProfileImage from './kindpng_3933176.png';

const AboutMe = () => {
  return (
    <section id='about' className='px-3 sm:px-6 font-cst'>
      <div className="mb-16 sm:mb-24 container mx-auto my-12 sm:my-16 p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-black text-white rounded-lg shadow-lg border border-gray-800">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Professional Summary</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg">
                As a Flutter development specialist with extensive experience in cross-platform mobile application engineering,
                I deliver high-performance solutions that prioritize user experience and technical excellence.
              </p>

              <p className="text-base sm:text-lg">
                I am currently advancing my expertise through a postgraduate program in Artificial Intelligence and Data Science
                at Elmhurst University, Chicago, where I focus on practical applications of machine learning algorithms,
                predictive analytics, and AI system architecture.
              </p>

              <p className="text-base sm:text-lg">
                My professional objective is to leverage my technical background in mobile development alongside emerging AI capabilities
                to architect innovative solutions that address complex business challenges and drive technological advancement.
              </p>

              <p className="text-base sm:text-lg">
                I excel in multidisciplinary team environments where I contribute technical leadership while maintaining
                a commitment to continuous professional development and technological exploration.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] mx-auto">
              <Image
                src={ProfileImage}
                alt="Professional Portrait"
                width={400}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                priority
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-300">Core Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-200 mb-2">Mobile Development</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Flutter</span>
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Dart</span>
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Native APIs</span>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-200 mb-2">Data Science</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Machine Learning</span>
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Data Analytics</span>
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Statistical Modeling</span>
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-200 mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">CI/CD</span>
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Git</span>
                <span className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm">Agile/Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
