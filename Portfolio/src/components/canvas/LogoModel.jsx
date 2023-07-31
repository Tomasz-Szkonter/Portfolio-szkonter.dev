import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const LogoModel = () => {
  const logoModel = useGLTF('./logo_model/logoModel.glft');

  return (
    <mesh>
      <ambientLight />
      <primitive position={[0, -30, 0]} object={logoModel.scene} />
    </mesh>
  );
};

const logoModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 260], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <LogoModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default logoModelCanvas;
