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

    document.body.style.overflowX = 'hidden';
    const projectsWrapper = projectsWrapperRef.current;
    const targetSection = targetSectionRef.current;

    // ScrollTrigger for horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetSection,
        start: 'top top', // Starts when section is at the top of the viewport
        end: () => `+=${projectsWrapper.scrollWidth}`, // End after the horizontal scrolling completes
        scrub: 1, // Scrub for smooth horizontal scrolling
        pin: true,  // Pin the section while scrolling horizontally
         // Enable markers for debugging (you can disable after debugging)
        // anticipatePin: 1, // Add slight delay for smoother pinning transition
      },
    });

    // Horizontal scrolling effect for project tiles
    tl.to(projectsWrapper, {
      x: () => -(projectsWrapper.scrollWidth - window.innerWidth), // Scroll horizontally to show all projects
      ease: 'none', // No easing for smooth scroll
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Render project tiles dynamically from the PROJECTS array
  const renderProjectTiles = useCallback(() =>
    PROJECTS.map((project, index) => (
      
      <div
      key={index}
      className="flex flex-col w-11/12 max-w-sm bg-white rounded-lg shadow-lg p-6 m-4 sm:m-6 md:m-8 hover:shadow-xl transition-shadow duration-3600"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-semibold mt-4 text-gray-800">{project.name}</h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{project.description}</p>
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
    )), []);

  return (
    <>
    <Quote/>
    

    <section ref={targetSectionRef} className="projects-section w-full relative select-none py-8 bg-black-50 mt-20 mb-40" style={{ height: '100vh' }}>

      <h2 className="text-4xl text-white text-center mb-10">My Projects</h2>
      <div
        ref={projectsWrapperRef}
        className="projects-wrapper flex gap-6"
        style={{
          display: 'flex',
          width: 'max-content', // Prevent wrapping and ensure enough space for horizontal scroll
          paddingRight: '5vw', // Add padding to the right to prevent horizontal scroll bar
        }}>
        {renderProjectTiles()}
      </div>
    </section>
          </>
  );
};

Projects.propTypes = {
  PROJECTS: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;
