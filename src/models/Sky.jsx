import React, {useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";


const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta; 
    }
    
  });
  return (
    <group>
    <group scale={0.15}>
      <mesh ref={skyRef}>
          <primitive object={sky.scene} />
      </mesh>    
    </group>
    </group>
  );
}
export default Sky

