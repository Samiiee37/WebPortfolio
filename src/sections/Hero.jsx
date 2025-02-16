import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import HeroCamera from "../components/Herocamera"

import Canvasloader from "../components/Canvasloader";
import { calculateSizes } from "../constants/data";
import Cpp from "../components/Cpp";
import Three from "../components/Three";
import ReactLogo from "../components/ReactLogo";
import Jslogo from "../components/Jslogo";

export default function Hero() {
  //const controls = useControls("HackerRoom", {
  //positionX: { value: 2.5, min: -10, max: 10 },
  //positionY: { value: 2.5, min: -10, max: 10 },
  //positionZ: { value: 2.5, min: -10, max: 10 },
  //rotationX: { value: 0, min: -10, max: 10 },
  //rotationY: { value: 0, min: -10, max: 10 },
  //rotationZ: { value: 0, min: -10, max: 10 },
  //scale: { value: 1, min: 0.1, max: 10 },
  //});

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 750 });
  const isTablet = useMediaQuery({ minWidth: 786, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="hero">
      <h1 className="welcome">
        Hi, I am Samar <span className="wave">👋</span>
      </h1>
      <div className="motto">
        <h2 className="first">Building</h2>
        <h2 className="second">stuff</h2>
        <h2 className="third">that</h2>
        <h2 className="fourth">MATTERS</h2>
      </div>
      <div className="model">
        {/*<Leva />*/}
        <Canvas className="compmodel">
          <Suspense fallback={<Canvasloader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
            <HackerRoom
              //scale={0.07}
              //position={[0, 0, 0]}
              //rotation={[0, -Math.PI / 2, 0]}
              position={isMobile ? [0.5, -4, 6.5] : [1.3, -4.9, 6.5]}
              rotation={[0, -Math.PI, 0]}
              scale={isMobile ? 0.06 : [0.1, 0.1, 0.1]}
            />
            </HeroCamera>
            <group>
              <Cpp/>
              <Three/>
              <ReactLogo/>
              <Jslogo/>
            </group>
            <ambientLight intensity={1} />
            <spotLight
              position={[10, 20, 10]} // Adjust the position for optimal coverage
              intensity={1.5} // Reduce the intensity for a more balanced lighting
              angle={0.3} // Control the spotlight's cone angle
              penumbra={0.5} // Add soft edges to the spotlight
              castShadow // Enable shadows from the spotlight
              shadow-mapSize-width={1024} // Control the shadow quality
              shadow-mapSize-height={1024}
              shadow-bias={-0.0001} // Fix any shadow artifacts
            />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="buttonhldr">
        <button className="btn">
          <span className="green"></span>
          <a className="alink" href="">Let's work together!</a>
        </button>
      </div>
    </section>
  );
}