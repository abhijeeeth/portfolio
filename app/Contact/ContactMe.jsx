'use client'

import { useState } from 'react';

const ContactMe = () => {
  // For a simple hover effect on social icons
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <footer id='contact' className='px-6 min-h-[50vh]'>
      <div className="container mx-auto mt-16 p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl text-white border border-gray-700">
        <h2 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Lets Connect</h2>

        <p className="mb-8 text-center text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Im always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <a
            href="mailto:st.abhijithh@gmail.com"
            className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredIcon('email')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <i className={`fas fa-envelope mr-3 text-xl ${hoveredIcon === 'email' ? 'text-blue-400' : 'text-gray-300'}`}></i>
            <span>st.abhijithh@gmail.com</span>
          </a>

          <a
            href="https://github.com/abhijeeeth"
            className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIcon('github')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <i className={`fab fa-github mr-3 text-xl ${hoveredIcon === 'github' ? 'text-blue-400' : 'text-gray-300'}`}></i>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/stabhijith"
            className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <i className={`fab fa-linkedin mr-3 text-xl ${hoveredIcon === 'linkedin' ? 'text-blue-400' : 'text-gray-300'}`}></i>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} | Designed & Developed by Abhijith Shaji | All Rights Reserved
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default ContactMe;
