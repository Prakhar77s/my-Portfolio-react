import About from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
