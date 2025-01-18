import AboutMe from "./About/page";
import Footer from "./Contact/ContactMe";
// import ContactMe from "./Contact/ContactMe";
import Hero from "./Hero/page";
import QuiltedImageList from "./ImageCom/page";
import Navbar from "./NavBar/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";
// import Footer from "./Footer/page";


export default function Home() {
  return (
    <main style={{
      backgroundImage: `radial-gradient(circle, #333333, #1a1a1a, #0d0d0d, #000000)`,
    }}>
      <Navbar/>
      <Hero/>
      <QuiltedImageList/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      {/* <ContactMe/>
       */}
       <Footer/>
    </main>
  )
}
