import { Leva } from 'leva';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Tech from './Tech.jsx';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import CollaborationSection from '../components/CollaborationSection';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // State to control the visibility of the mobile warning
  const [showWarning, setShowWarning] = useState(isMobile);

  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative" id="home">
        {/* Mobile Warning Message */}
        {showWarning && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="bg-white p-5 rounded-lg text-center max-w-sm w-full">
              <h3 className="text-lg font-bold text-black">
                Having trouble viewing the site?
              </h3>
              <p className="text-gray-700 mt-2">
                If the website is not loading properly, try visiting it on a
                desktop or check out my{' '}
                <a
                  href="https://hasir-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  other portfolio
                </a>
                .
              </p>
              <button
                onClick={() => setShowWarning(false)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Main Hero Content */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I am Hasir Ali<span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">
            Documenting my growth, skills, and passion through my personal
            Portfolio.
          </p>
        </div>
        <div className="w-full h-full absolute inset-0 mt-24">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <Leva hidden />
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Rings position={sizes.ringPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="mailto:hasira804@gmail.com" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </section>
      <CollaborationSection />
      <Tech />
    </>
  );
};

export default Hero;
