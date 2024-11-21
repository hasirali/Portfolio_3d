import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PROJECTS } from '../constants/index';
import Quote from '../components/Quote';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsWrapperRef = useRef(null);
  const targetSectionRef = useRef(null);

  useEffect(() => {
    const projectsWrapper = projectsWrapperRef.current;
    const targetSection = targetSectionRef.current;

    // ScrollTrigger for horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetSection,
        start: 'top top',
        end: () => `+=${projectsWrapper.scrollWidth}`,
        scrub: 1,
        pin: true,
        pinSpacing: true, // Adds spacing to prevent layout disruption
      },
    });

    // Horizontal scrolling effect for project tiles
    tl.to(projectsWrapper, {
      x: () => -(projectsWrapper.scrollWidth - window.innerWidth),
      ease: 'none',
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderProjectTiles = useCallback(
    () =>
      PROJECTS.map((project, index) => (
        <div
          key={index}
          className="flex flex-col w-full sm:w-11/12 max-w-sm bg-white rounded-lg shadow-lg p-4 sm: mt-40 sm:p-6 m-2 md:m-6 hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4 text-gray-800">
            {project.name}
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-4 inline-block text-sm sm:text-base hover:underline"
          >
            View Project
          </a>
        </div>
      )),
    []
  );

  return (
    <>
      <Quote />
      {/* Outer container to prevent layout conflicts */}
      <div className="relative w-full overflow-hidden">
        <section
          ref={targetSectionRef}
          className="projects-section w-full py-8 bg-black mb-20 mt-20"
          style={{ height: '100vh' }}
        >
          <h2 className="text-2xl sm:text-4xl text-white text-center mb-6 ">
            My Projects
          </h2>
          <div
            ref={projectsWrapperRef}
            className="projects-wrapper flex gap-4 sm:gap-6 overflow-x-auto"
            style={{
              display: 'flex',
              width: 'max-content',
              paddingRight: '5vw',
            }}
          >
            {renderProjectTiles()}
          </div>
        </section>
      </div>
    </>
  );
};

Projects.propTypes = {
  PROJECTS: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
