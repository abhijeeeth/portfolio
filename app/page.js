import AboutMe from "./About/page";
import Footer from "./Contact/ContactMe";
import Hero from "./Hero/page";
import QuiltedImageList from "./ImageCom/page";
import Navbar from "./NavBar/page";
import Projects from "./Projects/page";
import Skills from "./Skills/page";
import { MessageCircle } from 'lucide-react'; // Import WhatsApp-like icon

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
      <Footer/>
      <a 
        href="https://wa.me/+916238545696" 
        target="_blank" 
        rel="noopener noreferrer"
        style={floatingButtonStyle}
      >
        <div style={iconContainerStyle}>
          <MessageCircle size={30} color="white" />
        </div>
      </a>
    </main>
  )
}

const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  textDecoration: 'none',
};

const iconContainerStyle = {
  backgroundColor: '#25D366', // WhatsApp green
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.1)',
  }
};