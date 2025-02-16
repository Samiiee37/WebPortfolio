import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react/scene.gltf'); // Ensure path is correct

  const meshRef = useRef();
  const groupRef = useRef();

  // Add diagonal movement and rotation similar to the Three.js reference code
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Rotate the model around its Y-axis
      meshRef.current.rotation.y += 0.04;
    }

    if (groupRef.current) {
      // Calculate diagonal movement (X and Z)
      const distance = 15; // Maximum distance
      const x = Math.sin(time) * distance; // Horizontal movement
      const z = Math.cos(time) * distance; // Vertical movement

      // Apply the new diagonal path
      groupRef.current.position.x = x;
      groupRef.current.position.y = z;
    }

    if (meshRef.current) {
      // Add slight X-axis rotation for dynamic effect
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.009}>
        <mesh
          ref={meshRef} // Added ref for rotation
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 9, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf'); // Ensure path is correct
