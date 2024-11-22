import { useState } from 'react';
import Tech from './Tech.jsx';
import CompanyExperience from '../components/CompanyExperience.jsx';
const About = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <>
      <section className="c-space mt-48" id="about">
        <div className="grid xl:grid-cols-2 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-1/2">
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Hi, I’m Hasir</p>
                <p className="grid-subtext">
                  With four years of experience, I have developed expertise in frontend and backend development,
                  specializing in creating dynamic and responsive websites.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                I excel in a diverse range of languages, frameworks, and tools, enabling me to develop robust and scalable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CompanyExperience />
      <Tech />
    </>
  );
};

export default About;
