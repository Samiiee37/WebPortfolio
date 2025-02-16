import { useState, useEffect } from "react";
import { myProjects } from "../constants/data.js";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense} from "react";
import Democomputer from "../components/Democomputer.jsx";
import Canvasloader from "../components/Canvasloader.jsx";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentproject = myProjects[currentIndex];
  const [scale, setScale] = useState(2);
  const [position,setposition] = useState([0,-2.5,0])

  const techIcons = {
    html5: <DiHtml5 size={50} color="white" />,
    css3: <DiCss3 size={50} color="white" />,
    javascript: <DiJsBadge size={50} color="white" />,
    chrome: <DiChrome size={50} color="white" />,
    three: <SiThreedotjs size={50} color="white" />,
    react: <FaReact size={50} color="white" />,
  };

  const logoarray = currentproject.techused.map((tech, index) => {
    return <span key={index}>{techIcons[tech]}</span>;
  });

  // Handler to scroll left
  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1
    );
  };

  // Handler to scroll right
  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setScale(1); // Set scale to 1 for screens smaller than 750px
      } else {
        setScale(2); // Reset scale to 2 for larger screens
      }
    };

    const handlePosition = () => {
      if(window.innerWidth < 1400) {
        setposition([0,-2,0])
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handlePosition);

    // Call the handler initially to set scale based on initial window size
    handleResize();
    handlePosition()

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handlePosition)
    };
  }, []);

  console.log(position)

  return (
    <section className="projects">
      <h1>My works</h1>
      <div className="projectgrid">
        <div className="info">
          <div className="logo">
            <img src={currentproject.logo} alt={currentproject.title} />
          </div>
          <h2 className="title">{currentproject.title}</h2>
          <h3 className="desc">{currentproject.desc}</h3>
          <div className="techused">{logoarray}</div>
          <div className="controlls">
            {/* Left Button (scroll left) */}
            <button className="scroll-button" onClick={handleScrollLeft}>
              <img
                src="/assets/left-arrow.png" // replace with your left arrow image path
                alt="Scroll Left"
              />
            </button>
            {/* Middle Button (link to website) */}
            <a
              href={currentproject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Check live site
            </a>
            {/* Right Button (scroll right) */}
            <button className="scroll-button" onClick={handleScrollRight}>
              <img
                src="/assets/right-arrow.png" // replace with your right arrow image path
                alt="Scroll Right"
              />
            </button>
          </div>
        </div>
        <div className="showcase">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<Canvasloader />}>
                <group scale={2} position={position} rotation={[0, -0.1, 0]}>
                  <Democomputer texture={currentproject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              maxAzimuthAngle={Infinity}
              minAzimuthAngle={-Infinity}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}