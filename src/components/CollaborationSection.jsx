import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const COLLABORATION_STYLE = {
  CONTAINER: "w-full h-screen flex items-center justify-center overflow-hidden p-4 bg-black", // Set background to black
  TEXT_WRAPPER: "relative whitespace-nowrap flex items-center gap-4 sm:gap-8",
  SLIDING_TEXT:
    "text-white text-5xl sm:text-6xl lg:text-8xl font-extrabold px-6 bg-gradient-to-r from-gray-950 to-gray-950",
};

const CollaborationSection = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;

    // Duplicate the text for seamless scrolling
    const duplicateText = () => {
      const textContent = wrapper.innerHTML;
      wrapper.innerHTML += textContent; // Append the same text again for infinite scroll
    };

    duplicateText(); // Call the function to duplicate text

    // GSAP animation for smooth infinite scrolling with scroll-triggered speed
    gsap.to(wrapper, {
      x: "-50%", // Move the text horizontally
      ease: Linear.easeInOut, // Smoother scrolling effect
      duration: 1000, // Slower scrolling speed
      scrollTrigger: {
        trigger: wrapper,
        scrub: true, // Smoothly scrubs with the scroll position
        start: "top bottom", // When top of the wrapper hits the bottom of the viewport
        end: "bottom top", // When bottom of the wrapper hits the top of the viewport
        markers: false, // Optional: Show markers to visualize trigger points (for debugging)
      },
    });
  }, []);

  return (
    <>
    <section className={COLLABORATION_STYLE.CONTAINER}>
      <div className={COLLABORATION_STYLE.TEXT_WRAPPER} ref={wrapperRef}>
        <span className={COLLABORATION_STYLE.SLIDING_TEXT}>
          User Interface Design User Experience Design
        </span>
        <span className={COLLABORATION_STYLE.SLIDING_TEXT}>
          User Interface Design User Experience Design
        </span>
        <span className={COLLABORATION_STYLE.SLIDING_TEXT}>
          User Interface Design User Experience Design
        </span>
      </div>
    </section>
    </>
  );
};

export default CollaborationSection;
