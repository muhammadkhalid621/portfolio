import About from "./About";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavbarTop from "./Navbar";
import "./style.css";
import { MdDoubleArrow } from "react-icons/md";
import Contact from "./Contact";
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <NavbarTop />
      <About />
      <Services />
      <Contact />
      <button className="top-button" onclick="window.scrollTo(0, 0)" style={{backgroundColor:'#219EBC', border: 'none'}}>
        <MdDoubleArrow style={{transform: 'rotate(-90deg)', width:'40px', height:'40px', color: 'white'}}/>
      </button>

      <Footer />
    </div>
  );
}

export default App;
