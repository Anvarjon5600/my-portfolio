import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor/Cursor";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Experience />
      <Contact />
      <SocialLinks />
      <Cursor/>
    </div>
  );
}

export default App;
