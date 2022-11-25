import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";
// import {Text}
import { useRef } from "react";
import { Sky, Sparkles, Cloud } from "@react-three/drei";
import boldUrl from "./fonts/firstFont.txt";
// import { useFrame } from "@react-three/fiber";

import { Text3D } from "@react-three/drei";
function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Canvas className="canvas">
        {/* <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        /> */}
        <Sparkles
          /** Number of particles (default: 100) */
          count={1000}
          scale={5}
          speed={2}
          /** Speed of particles (default: 1) */
          // speed?: number | Float32Array
          // /** Opacity of particles (default: 1) */
          // opacity?: number | Float32Array
          // /** Color of particles (default: 100) */
          // color?: THREE.ColorRepresentation | Float32Array
          // /** Size of particles (default: randomized between 0 and 1) */
          // size?: number | Float32Array
          // /** The space the particles occupy (default: 1) */
          // scale?: number | [number, number, number] | THREE.Vector3
          // /** Movement factor (default: 1) */
          // noise?: number | [number, number, number] | THREE.Vector3 | Float32Array
        />
        <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
        />

        {/* enables controls on the shape */}
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={(-2, 5, 2)} intensity={1} />
        <Box></Box>
      </Canvas>
      {/* <div className="skills">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />

          <Text3D font={boldUrl} scale={1.5}>
            HTML
            <meshNormalMaterial color="black" />
          </Text3D>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <Text3D font={boldUrl} scale={1.5}>
            CSS
            <meshStandardMaterial color="black" />
          </Text3D>
        </Canvas>
      </div> */}
      <div style={{ display: "flex" }}>
        <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 40 }}>
          <AnimatedSphere name={"html"} />
        </Canvas>
        <Canvas>
          <AnimatedSphere name={"yo"} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
