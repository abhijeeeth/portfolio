// components/AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section id='about'>
    <div className="mb-24 container mx-auto my-16 p-8 bg-black/50 text-white rounded-lg shadow-lg sm:mx-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg mb-4">
        Hi, I am Abhijith Shaji, a passionate web developer with expertise in Next.js, React.js, Tailwind CSS, Git, and JavaScript.
      </p>
      <p className="text-lg mb-4">
        I enjoy building web applications that are not only visually appealing but also deliver a great user experience. My focus is on creating clean, efficient, and maintainable code.
      </p>
      <p className="text-lg mb-4">
        Whether it's crafting responsive user interfaces, optimizing performance, or collaborating with a team, I'm always eager to take on new challenges and learn new technologies.
      </p>
      {/* Add more information or customize as needed */}
    </div>
    </section>
  );
};

export default AboutMe;
