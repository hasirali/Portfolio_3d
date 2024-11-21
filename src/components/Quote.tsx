import { gsap, Linear } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);
  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (quoteRef, targetSection) => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.5 },
    });

    timeline
      .fromTo(
        quoteRef.current?.querySelector(".about-1"),
        { opacity: 0 },
        { opacity: 1 }
      )
      .to(quoteRef.current?.querySelector(".about-2"), { opacity: 0.5, delay: 0.5 })
      .fromTo(
        quoteRef.current?.querySelector(".about-2"),
        { opacity: 0 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current?.querySelector(".about-2"), { opacity: 0.5, delay: 0.5 });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });
  };

  useEffect(() => {
    console.log("quoteRef:", quoteRef.current);
    console.log("targetSection:", targetSection.current);

    initAboutAnimation(quoteRef, targetSection);

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const renderQuotes = () => (
    <div ref={quoteRef}>
      <h1 className="font-medium text-white text-3xl sm:text-4xl md:text-6xl sm:pl-10 mt-48">
        <span className={`about-1 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
        I’m a driven Full Stack Developer with a passion for turning ideas into sleek,
        </span>
        <span className={`about-2 leading-tight ${willChange ? "will-change-opacity" : ""}`}>
        functional apps that are as visually stunning as they are efficient
        </span>
      </h1>
    </div>
  );

  return (
    <section
      className="tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container"
      ref={targetSection}
    >
      {renderQuotes()}
      <div>
 , 
        {/* Add your long content here */}
       
      </div>
    </section>
  );
};

export default Project;
