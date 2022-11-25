import React from "react";
import { BoxBufferGeometry, MeshStandardMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/flames.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { CubeTextureLoader } from "three";
import { useCubeTexture } from "@react-three/drei";
import { CubeCamera } from "@react-three/drei";

const Box = () => {
  const profilePic = useLoader(TextureLoader, texture);
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  useFrame((state, delta) => (ref2.current.rotation.x += 0.05));
  useFrame((state, delta) => (ref2.current.rotation.y += 0.05));

  const ref = useRef();
  const ref2 = useRef();

  // mesh is a class that represents polygon mesh objects, consists of geometry and the material
  return (
    <>
      <mesh rotation={[0, 0, 0]} ref={ref}>
        <sphereGeometry attach="geometry" />
        <meshStandardMaterial map={profilePic} />
        <mesh
          rotation={[30, 30, 0]}
          ref={ref2}
          position={[1.5, -0.2, 0.5]}
          scale={0.2}
        >
          <sphereGeometry attach="geometry" />
          <meshStandardMaterial map={profilePic} />
        </mesh>
      </mesh>
    </>
  );
};

export default Box;
