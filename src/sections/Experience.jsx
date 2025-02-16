import { OrbitControls } from "@react-three/drei";
import { workExperiences } from "../constants/data.js";
import { Suspense } from "react";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Canvasloader.jsx";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Experience() {

  const [animationName, setAnimationName] = useState('idle');
  return (
    <>
      <h1 className="section-title">My Work Experience</h1>
      <section className="experience">
        <div className="avatar">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2} // Limits vertical rotation (up-down)
              minPolarAngle={Math.PI / 2} // Locks vertical rotation
              minAzimuthAngle={-Infinity} // Allows free horizontal rotation
              maxAzimuthAngle={Infinity} // Allows free horizontal rotation
            />
            <Suspense fallback={<CanvasLoader />}>
              <Developer position-y={-3} scale={3} animationName={animationName}/>
            </Suspense>
          </Canvas>
        </div>
        <div className="jobs">
          {workExperiences.map((item, index, animation) => (
            <div
              key={index}
              onClick={() => setAnimationName(item.animation.toLowerCase())}
              onPointerOver={() =>
                setAnimationName(item.animation.toLowerCase())
              }
              onPointerOut={() => setAnimationName("idle")}
              className="work-content_container group"
            >
              <div>
                <div className="work-content_logo">
                  <img src={item.icon} />
                </div>
                <div className="work-content_bar" />
              </div>
              <div className="work-info">
                <p>{item.name}</p>
                <p>
                  {item.pos} -- <span>{item.duration}</span>
                </p>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}