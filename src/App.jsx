import { useRef } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Bentogrid from "./sections/Bentogrid";
import Projects from "./sections/Projects";
import Connect from "./sections/Connect";
import Experience from "./sections/Experience";

export default function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const bentogridRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const connectRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    switch (sectionId) {
      case "#hero":
        heroRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#bentogrid":
        bentogridRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#connect":
        connectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar onScrollToSection={scrollToSection} />

      <div id="hero" ref={heroRef}>
        <Hero />
      </div>

      <div id="bentogrid" ref={bentogridRef}>
        <Bentogrid />
      </div>

      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>

      <div id="experience" ref={experienceRef}>
        <Experience />
      </div>

      <div id="connect" ref={connectRef}>
        <Connect />
      </div>
    </>
  );
}