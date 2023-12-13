import AboutMe from "./About/page";
import ContactMe from "./Contact/ContactMe";
import Hero from "./Hero/page";
import QuiltedImageList from "./ImageCom/page";
import Navbar from "./NavBar/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";

export default function Home() {
  const skillsData = [
    { name: 'JavaScript', progress: '80%' },
    { name: 'React.js', progress: '90%' },
    { name: 'Vue.js', progress: '70%' },
    { name: 'Tailwind CSS', progress: '60%' },
    { name: 'Next.js', progress: '75%' },
    { name: 'git', progress: '75%' },
    { name: 'HTML', progress: '100%' },
  ];
  
  return (
    <main style={{
      backgroundImage: `radial-gradient(circle, #d10404, #b6000a, #9b000d, #80000d, #66000a, #56020b, #46040b, #370508, #2c070a, #22050a, #160306, #000000)`,
    }}>
      <Navbar/>
      <Hero/>
      <QuiltedImageList/>
      <AboutMe/>
      <Projects/>
      <Skills skills={skillsData} />
      <ContactMe/>
    </main>
  )
}
