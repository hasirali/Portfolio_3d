import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './sections/Hero.jsx';
import Experience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';


const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
            </PageWrapper>
          }
        />
        <Route
          path="/experience"
          element={
            <PageWrapper>
              <Experience />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        {/* <Route
          path="/clients"
          element={
            <PageWrapper>
              <Clients />
            </PageWrapper>
          }
        /> */}
        <Route
          path="/education"
          element={
            <PageWrapper>
              <Education />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
