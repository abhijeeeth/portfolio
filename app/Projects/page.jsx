const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-16 drop-shadow-2xl">
          My Projects
        </h2>

        {/* Featured Mobile Apps */}
        <div className="mb-20">
          {/* <h3 className="text-3xl font-semibold text-white mb-10 text-center">Mobile Applications</h3> */}

          {/* HWC App */}
          <div className="mb-12 rounded-xl overflow-hidden bg-black/60 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-white">HWC - Hospital Management</h3>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 p-6">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-gray-300 mb-6">
                      The HWC app provides a comprehensive digital solution for hospitals in the veterinary field,
                      making pet management efficient and paperless. Features include patient records management,
                      appointment scheduling, medication tracking, and digital documentation.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-blue-600 text-xs px-3 py-1.5 rounded-full text-white">Flutter</span>
                      <span className="bg-green-600 text-xs px-3 py-1.5 rounded-full text-white">Firebase</span>
                      <span className="bg-purple-600 text-xs px-3 py-1.5 rounded-full text-white">Healthcare</span>
                      <span className="bg-orange-600 text-xs px-3 py-1.5 rounded-full text-white">Veterinary</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/ge/app/sarpa/id6736682621" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on App Store" className="h-12" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.leopard.hwc" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 bg-gradient-to-r from-blue-900/20 to-black p-6">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                  <img
                    src="https://play-lh.googleusercontent.com/OE4CKLhB1zGiX8upeZyYkmZvUadozT33RQpqnNS43mqCMhLGnDsE1SX06DgAjIrAuP0=w2560-h1440-rw"
                    alt="HWC App Screenshot 1"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/BF4o7nVVe-LIkElH-MTcymDwlrkriL5UlSzlsEOzQrwjYzI3Ar8HdhWYxzSyJeWhSx8=w2560-h1440-rw"
                    alt="HWC App Screenshot 2"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/UC82yRnEOWvPlv21qJG_yhSbis3-g2baAk3DYOV9JQ0bwCP-1DOR8i8xYIpmZfbYpbk=w2560-h1440-rw"
                    alt="HWC App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/ZIi3nvpNYTGtAdAsLJ0f94KN3vGhKF1Uzfl77xWEcTvf4BhutwR3b_dopxDoHIwuO1g=w2560-h1440-rw"
                    alt="HWC App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sarpa App */}
          <div className="mb-12 rounded-xl overflow-hidden bg-black/60 shadow-2xl hover:shadow-green-500/30 transition-all duration-300 backdrop-blur-sm border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-white">Sarpa - Snake Identification</h3>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 p-6">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-gray-300 mb-6">
                      Sarpa is an innovative application designed to identify snake species quickly and accurately,
                      providing crucial information for emergency situations. The app uses advanced machine learning
                      to identify snake species from photos, helping users determine if a snake is venomous and access
                      emergency contact information.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-blue-600 text-xs px-3 py-1.5 rounded-full text-white">Flutter</span>
                      <span className="bg-yellow-600 text-xs px-3 py-1.5 rounded-full text-white">ML Model</span>
                      <span className="bg-red-600 text-xs px-3 py-1.5 rounded-full text-white">Wildlife</span>
                      <span className="bg-emerald-600 text-xs px-3 py-1.5 rounded-full text-white">Conservation</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/us/app/sarpa-odisha/id6736615396" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on App Store" className="h-12" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.odisha.sarpa" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 bg-gradient-to-r from-green-900/20 to-black p-6">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                  <img
                    src="https://play-lh.googleusercontent.com/q2tm2jhctSaiDCp9dogb7l51mwg9l-6R89TmxOflG8RqnkmQF0OmkfmnxtYB6qmnbkk=w2560-h1440-rw"
                    alt="Sarpa App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/FsKi6hl_WdCFUajcliwXodNwwJH897jzUvMTpm0l_vWcUKVt4wpQkWtuArcJIw3vnQ=w2560-h1440-rw"
                    alt="Sarpa App Screenshot 1"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/sWBNy7Jw2AZn2BvDZ66uEF6a3P1VaCAGT8TBP-MlUaYydGCNfg5RGVuKmqjVAadJhA=w2560-h1440-rw"
                    alt="Sarpa App Screenshot 2"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/r2eLemvaW_8Uk7qnH9Z2iZm8hqzkxSyHZp7qBk8WEIy2TxkL8rQyEaQyl8OK3WlJCw=w2560-h1440-rw"
                    alt="Sarpa App Screenshot 2"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* My Jesus App */}
          <div className="mb-12 rounded-xl overflow-hidden bg-black/60 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 backdrop-blur-sm border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-white">My Jesus - Spiritual Companion</h3>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 p-6">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-gray-300 mb-6">
                      My Jesus App is a spiritual companion for Christians, offering daily verses, prayers, and devotional content.
                      The app provides a personalized spiritual experience with features like daily Bible readings, prayer reminders,
                      and meditations to support users on their faith journey.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-blue-600 text-xs px-3 py-1.5 rounded-full text-white">Flutter</span>
                      <span className="bg-yellow-600 text-xs px-3 py-1.5 rounded-full text-white">Localization</span>
                      <span className="bg-purple-600 text-xs px-3 py-1.5 rounded-full text-white">Spiritual</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/by/app/my-jesus-app/id6736676102" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on App Store" className="h-12" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.myjesus.app" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 bg-gradient-to-r from-yellow-900/20 to-black p-6">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                  <img
                    src="https://play-lh.googleusercontent.com/fbsbxOYJUIFxNX7Hr_M4LpMYQ974Uwz28sgSMEVBSC6NatLEgm9LbT36rWB9Bx9Iyg=w2560-h1440-rw"
                    alt="My Jesus App Screenshot 1"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/15cG1_KIP7pLwy8atpyzelBDKL7EoBBRE-6DLv1Cm6qTI8nL6OD7RpRC7MXqFPlVzLY=w2560-h1440-rw"
                    alt="My Jesus App Screenshot 2"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/0N7kgJz5_IADvPGW9f7pHGKKX0f8erIqiczutqcVlurfaa-Yh4ED3PAmfYDT6TysDQ=w2560-h1440-rw"
                    alt="My Jesus App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/dc1vsZml72m7-GJeZmL1p_mZb-rVO57Cf7cFtdZUth_XTnW3aAH-vi4uuaVwriyj4EI=w2560-h1440-rw"
                    alt="My Jesus App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ayyan App */}
          <div className="mb-12 rounded-xl overflow-hidden bg-black/60 shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 backdrop-blur-sm border border-gray-800">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-2xl font-bold text-white">Ayyan - Sabarimala Pilgrimage Guide</h3>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 p-6">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-gray-300 mb-6">
                      Ayyan (SabariWalk) is a comprehensive guide for pilgrims visiting the sacred Sabarimala temple.
                      The app offers information on rituals, preparation guidance, temple history, navigation assistance,
                      and emergency contacts, making the pilgrimage journey smoother and more meaningful.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-blue-600 text-xs px-3 py-1.5 rounded-full text-white">Flutter</span>
                      <span className="bg-orange-600 text-xs px-3 py-1.5 rounded-full text-white">Cultural</span>
                      <span className="bg-teal-600 text-xs px-3 py-1.5 rounded-full text-white">Navigation</span>
                      <span className="bg-red-600 text-xs px-3 py-1.5 rounded-full text-white">Religious</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://apps.apple.com/ge/app/ayyan/id6737429727" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on App Store" className="h-12" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.sabarimala.sabariwalk" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105">
                      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 bg-gradient-to-r from-orange-900/20 to-black p-6">
                <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                  <img
                    src="https://play-lh.googleusercontent.com/xBre7aK1mPnhzVDQB0pVmDBdP99NG_b2AiqqLlAFs3uTTrjsWW8czbqyWGw8DbGLuA=w526-h296-rw"
                    alt="Ayyan App Screenshot 1"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/aQ4lD_akTbtpwMMzyPD_XcYW51YNvUvcWRR51Qget19NNYsnArZsYoxJ7D_Lyb0U6qU=w2560-h1440-rw"
                    alt="Ayyan App Screenshot 2"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/Bo2hoZdNWeEaiDbuK9MP0bojtkYf_I4nDHEcyGrq5TifsdixNgaiBW3SM79Ys6HbkDCP=w526-h296-rw"
                    alt="Ayyan App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                  <img
                    src="https://play-lh.googleusercontent.com/irwCDYDaVZAqW58gMoh0l8WH83n_vU4hBz7FTfSKJuk7jcwTPwmPNmih10QKYsXO_g=w2560-h1440-rw"
                    alt="Ayyan App Screenshot 3"
                    className="h-80 rounded-lg object-contain snap-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Projects */}
        {/* <div>
          <h3 className="text-3xl font-semibold text-white mb-10 text-center">Web Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://netflix-clone-alpha-eosin.vercel.app/" className="group">
              <div className="rounded-lg overflow-hidden bg-black/50 shadow-2xl group-hover:scale-105 transition-all duration-300 group-hover:shadow-red-500/30 border border-gray-800 h-full">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                  alt="Netflix Clone"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Netflix Clone
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A clone front end for Netflix created using React and Tailwind CSS, featuring responsive design and dynamic content loading.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-600 text-xs px-2 py-1 rounded-full text-white">React</span>
                    <span className="bg-cyan-600 text-xs px-2 py-1 rounded-full text-white">Tailwind</span>
                    <span className="bg-red-600 text-xs px-2 py-1 rounded-full text-white">Responsive</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://morrisenglishacademy.com/" className="group">
              <div className="rounded-lg overflow-hidden bg-black/50 shadow-2xl group-hover:scale-105 transition-all duration-300 group-hover:shadow-yellow-500/30 border border-gray-800 h-full">
                <img
                  src="https://www.valeem.com/wp-content/uploads/2022/11/394f5e0a9c4652eb784e4c8f62508e59.jpg"
                  alt="Morris Academy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Morris Anglo-Indian Academy
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Portfolio website for Morris Anglo-Indian English Academy featuring information about courses, faculty, and enrollment details.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-600 text-xs px-2 py-1 rounded-full text-white">React</span>
                    <span className="bg-cyan-600 text-xs px-2 py-1 rounded-full text-white">Tailwind</span>
                    <span className="bg-purple-600 text-xs px-2 py-1 rounded-full text-white">Education</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://vyzz-q7p3.vercel.app/" className="group">
              <div className="rounded-lg overflow-hidden bg-black/50 shadow-2xl group-hover:scale-105 transition-all duration-300 group-hover:shadow-purple-500/30 border border-gray-800 h-full">
                <img
                  src="https://img.freepik.com/free-vector/flat-new-year-landing-page-template_23-2149153076.jpg?w=1060&t=st=1701688918~exp=1701689518~hmac=81d7d2c29c4ddd16ab3ea9a3dd84ee56f845777cd526d89aed62e9f05417ca9e"
                  alt="Vyzonix"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Vyzonix
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Portfolio website for Vyzonix, showcasing the company's services, portfolio, and contact information.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-blue-600 text-xs px-2 py-1 rounded-full text-white">Next.js</span>
                    <span className="bg-cyan-600 text-xs px-2 py-1 rounded-full text-white">Tailwind</span>
                    <span className="bg-green-600 text-xs px-2 py-1 rounded-full text-white">Portfolio</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
