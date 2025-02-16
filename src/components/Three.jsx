import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Three(props) {
  const { nodes, materials } = useGLTF('/models/three.js/three.gltf'); // Ensure path is correct

  const meshRef = useRef();
  const groupRef = useRef();

  // Make the model revolve diagonally around the screen
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Rotate the model around its Y-axis for a spinning effect
      meshRef.current.rotation.y += 0.01;
    }

    if (groupRef.current) {
      // Calculate the diagonal movement (X and Z)
      const distance = 15; // Maximum distance
      const x = Math.sin(time) * distance; // Horizontal movement (left-right)
      const z = Math.cos(time) * distance; // Vertical movement (up-down)

      // Apply the new diagonal path
      groupRef.current.position.x = x;
      groupRef.current.position.z = z;
    }

    if (meshRef.current) {
      // Slightly adjust rotation to add more dynamic effect
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
        position={[0, 5, -1]} // Initial position of the model
        rotation={[Math.PI / 2, 0, 0]} // Set initial rotation if necessary
        scale={0.05} // Set scale of the model
      >
        {/* Glow effect */}
        <meshStandardMaterial
          emissive="blue" // Glow color
          emissiveIntensity={0.5} // Glow intensity
          color="white" // Model color
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/three.js/three.gltf'); // Ensure path is correct
