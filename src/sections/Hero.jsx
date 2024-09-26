import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader'; 
import HackerRoom from '../components/HackerRoom'; 
import { Leva, useControls } from 'leva';

const Hero = () => {
  // Add controls for scaling, position, and rotation of HackerRoom
  const { scale, posX, posY, posZ, rotX, rotY, rotZ } = useControls({
    scale: { value: 0.07, min: 0.01, max: 2 },  // Unified scale control
    
    posX: { value: 0, min: -10, max: 10 },  // Position control
    posY: { value: 0, min: -100, max: 10 },
    posZ: { value: 0, min: -10, max: 10 },
    
    rotX: { value: 0, min: -10, max: 10 },  // Rotation control in radians
    rotY: { value: 0, min: -10, max: 10 },
    rotZ: { value: 0, min: -10, max: 10 },
  });

  return (
    <section className='min-h-screen w-full flex flex-col relative'> 
      <Leva /> {/* Ensure Leva panel is outside Canvas and inside the section */}
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          <span className='waving-hand'>👋</span>Hi, I am Hasir Ali
        </p>
        <p className='hero_tag text-gray_gradient'>Documenting my growth, skills, and passion
      </p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            {/* HackerRoom with dynamic scale, position, and rotation controlled by Leva */}
            <HackerRoom 
              scale={[scale, scale, scale]}  // Use single scale value for uniform scaling
              position={[posX, posY, posZ]}  // Position from Leva controls
              rotation={[rotX, rotY, rotZ]}  // Rotation from Leva controls
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;
