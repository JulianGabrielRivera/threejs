import { ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
export default function Foo() {
  const state = useThree();

  return (
    <Canvas>
      <ScrollControls />
    </Canvas>
  );
}
