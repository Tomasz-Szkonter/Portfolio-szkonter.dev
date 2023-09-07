import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Moon = () => {
  const moon = useGLTF("./moon/scene.gltf");

  return (
    <>
      <primitive
        object={moon.scene}
        scale={3.5}
        position-y={0}
        rotation-y={0}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      />
      <directionalLight intensity={1} position={[4, -2, 2]} />
      <directionalLight intensity={1} position={[-5, 2, -5]} />
    </>
  );
};

const MoonCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Moon />
      </Suspense>
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default MoonCanvas;
