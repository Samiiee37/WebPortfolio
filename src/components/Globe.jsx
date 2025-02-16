import React from 'react';
import Globe from 'react-globe.gl';

export default function MyGlobe() {
  const globeRef = React.useRef();

  React.useEffect(() => {
    if (globeRef.current) {
      // Prevent zooming out beyond a certain level
      const globeInstance = globeRef.current;
      globeInstance.camera.position.set(0, 0, 2);  // Initial zoom position (adjust as needed)
      globeInstance.camera.far = 5;  // Max zoom-out distance
      globeInstance.camera.near = 0.1;  // Min zoom-in distance
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      height={326}
      width={326}
      backgroundColor="rgba(0, 0, 0, 0)"
      backgroundImageOpacity={0.5}
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    />
  );
}


