import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Jslogo(props) {
  const { nodes, materials } = useGLTF('/models/javascript/scene.gltf'); // Ensure path is correct

  const meshRef = useRef();
  const groupRef = useRef();

  // Add diagonal movement and rotation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Rotate the model around its Y-axis
      meshRef.current.rotation.y += 0.05;
    }

    if (groupRef.current) {
      // Calculate diagonal movement (X and Z)
      const distance = 20; // Maximum distance
      const x = Math.sin(time) * distance; // Horizontal movement
      const z = Math.cos(time) * distance; // Vertical movement

      // Apply the new diagonal path
      groupRef.current.position.x = x;
      groupRef.current.position.z = z;
    }

    if (meshRef.current) {
      // Add slight X-axis rotation for dynamic effect
      meshRef.current.rotation.x += 0.1;
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef} scale={0.1}> {/* Adjust the scale here */}
      <mesh
        ref={meshRef} // Added ref for rotation
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.mat_3220964}
        rotation={[-Math.PI / 2, 0, 0]} // Initial rotation
        position={[0, 80, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/javascript/scene.gltf'); // Ensure path is correct
