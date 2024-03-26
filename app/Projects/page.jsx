import React from 'react';

const Projects = () => {
  return (
      <section id="projects">
        <div className="bg-transparent py-16 " >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center text-white mb-4 drop-shadow-2xl mb-10">
            Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="https://netflix-clone-alpha-eosin.vercel.app/">
              <div className="rounded-lg overflow-hidden bg-black/50 shadow-2xl hover:scale-110 transition-transform">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Netflix Clone
                  </h3>
                  <p className="text-white">
                    A clone front end for Netflix. Created using React js and Tailwind CSS.
                  </p>
                </div>
              </div>
              </a>
              <a href="https://morrisenglishacademy.com/">
              <div className="rounded-lg overflow-hidden bg-black/50 shadow-2xl hover:scale-110 transition-transform">
                <img
                  src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=1380&t=st=1701603399~exp=1701603999~hmac=f7674bbfd329e56105863ced6468a309ac4c7ee69baa729fb37b3cda1f2206fd"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    MORRIS ANGLO-INDIAN ENGLISH ACADEMY
                  </h3>
                  <p className="text-white">
                  Portfoliio Website for MORRIS ANGLO-INDIAN ENGLISH ACADEMY.
                  </p>
                </div>
              </div>
              </a>
              <a href="https://vyzz-q7p3.vercel.app/">
              <div className="bg-black/50 shadow-2xl  rounded-lg overflow-hidden  hover:scale-110 transition-transform">
                <img
                  src="https://img.freepik.com/free-vector/flat-new-year-landing-page-template_23-2149153076.jpg?w=1060&t=st=1701688918~exp=1701689518~hmac=81d7d2c29c4ddd16ab3ea9a3dd84ee56f845777cd526d89aed62e9f05417ca9e"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Commercial Site
                  </h3>
                  <p className="text-white">
                    Portfolio Website for Vyzonix , Development Progress
                  </p>
                </div>
                
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Projects;
