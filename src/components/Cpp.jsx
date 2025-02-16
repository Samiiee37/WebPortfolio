import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Cpp(props) {
  const { nodes, materials } = useGLTF('/models/cpp/cpp.gltf'); // Ensure the path is correct

  const meshRef = useRef();
  const groupRef = useRef();

  // Make the model rotate around its Y-axis and move across the screen
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Rotate the model around its own Y-axis
      meshRef.current.rotation.y += 0.01; // Rotation speed (adjust for faster/slower)
    }

    if (groupRef.current) {
      // Move the group from one end of the screen to the other
      // Adjust the range of movement (e.g., 10 for moving further across)
      const distance = 15; // Maximum distance from the center
      groupRef.current.position.x = Math.sin(time) * distance; // Move left-right across the screen
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.05}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes['C++_C++_0'].geometry}
          material={materials.material}
          position={[0, 0, 0]} // Position it at the center of the group
          rotation={[-Math.PI / 2, 0, 0]} // Initial rotation
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/cpp/cpp.gltf');
