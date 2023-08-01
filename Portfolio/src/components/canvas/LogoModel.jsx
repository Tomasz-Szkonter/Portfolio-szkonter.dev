import { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame  } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const LogoModel = ({ isMobile }) => {
  const logoModel = useGLTF('./logo_model/logoModel.gltf');
  const [rotationY, setRotationY] = useState(0);

    useFrame(() => {
      setRotationY((prevRotationY) => prevRotationY + 0.01);
    });

  return (
    <mesh rotation={[0, rotationY, 0]}>
      <ambientLight />
      <primitive scale={isMobile ? 2.0 : 2.2} position-y={-70} position-x={10} rotation-y={0} object={logoModel.scene} />
    </mesh>
  );
};

const logoModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 3]}
      camera={{ position: [-0, 300, 200], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <LogoModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default logoModelCanvas;
