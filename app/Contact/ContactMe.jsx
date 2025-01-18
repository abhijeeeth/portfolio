'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className='px-6'>
      <div className="container mx-auto mt-16 p-8 bg-gradient-to-r from-grey-900 via-grey-600 to-grey-500 rounded-lg shadow-2xl text-white">
        <h2 className="text-4xl font-extrabold mb-6 text-center">Contact Me</h2>
        <p className="mb-6 text-center text-lg">Feel free to reach out to me via email or follow me on social media.</p>
        <ul className="flex justify-center space-x-6 mb-6">
          <li>
            <a href="mailto:st.abhijithh@gmail.com" className="text-lg font-medium text-white hover:text-gray-300 transition duration-300">
              <i className="fas fa-envelope mr-2"></i> Email
            </a>
          </li>
          <li>
            <a href="https://github.com/abhijeeeth" className="text-lg font-medium text-white hover:text-gray-300 transition duration-300">
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/stabhijith" className="text-lg font-medium text-white hover:text-gray-300 transition duration-300">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </li>
        </ul>
        <p className="text-center text-gray-200">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
