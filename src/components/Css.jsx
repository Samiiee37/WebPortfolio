import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Css(props) {
  const { nodes, materials } = useGLTF('/models/css/scene.gltf'); // Ensure the path is correct

  const meshRef = useRef();
  const groupRef = useRef();

  // Add animation: rotate the model and move it across the screen
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Rotate the model around its own Y-axis
      meshRef.current.rotation.y += 0.01; // Rotation speed
    }

    if (groupRef.current) {
      // Move the group from one end of the screen to the other
      const distance = 15; // Maximum distance from the center
      groupRef.current.position.x = Math.sin(time) * distance; // Move left-right across the screen
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.0005}>
        <mesh
          ref={meshRef} // Added ref for rotation animation
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry} // Adjusted for simplicity
          material={materials['Material.002']}
          position={[9, 9, -10]} // Center the model
          rotation={[Math.PI / 2, 4, 0]} // Initial rotation
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/css/scene.gltf'); // Ensure the path is correct
