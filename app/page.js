import AboutMe from "./About/page";
import ContactMe from "./Contact/ContactMe";
import Hero from "./Hero/page";
import Navbar from "./NavBar/page";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <main className="bg-black p-4" style={{
      backgroundImage: `url('https://r4.wallpaperflare.com/wallpaper/262/774/423/space-stars-nebula-tylercreatesworlds-wallpaper-29a018cdb1da7dbb263798bff0b156ed.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      backgroundAttachment: 'fixed', 
      
    }}>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Projects/>
    <ContactMe/>
    </main>
  )
}
