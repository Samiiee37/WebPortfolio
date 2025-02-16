import React from "react";
import Contact from "../components/Contact";
import Globe from "react-globe.gl";
import Icons from "../components/Icons";

export default function Bentogrid() {
  return (
    <div className="grid">
      <div className="item aboutme">
        <img
          src="/new/display.jpg"
          alt="Samarvir Singh"
          className="profile-picture"
        />

        {/* Add a list of your information */}
        <ul className="info-list">
          <li>Name: Samarvir Singh</li>
          <li>Profession: Developer and Tech Enthusiast</li>
          <li>Location: India</li>
          <li>Education: NIT Srinagar</li>
          <li>D.O.B: 21/08/2005</li>
          <li>Hobbies: Coding, Robotics, and Travelling</li>
        </ul>
      </div>
      <div className="item second email">
        <Contact />
      </div>
      <div className="item third social-links">
        <a
          href="https://www.instagram.com/sam_champ_ion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/samarvir-singh-42a1b42a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Samiiee37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div className="item globe">
        <Globe
          height={326}
          width={326}
          backgroundColor="rgba(0, 0, 0, 0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        />
      </div>
      <div className="item tech-stack">
        <Icons />
      </div>
    </div>
  );
}