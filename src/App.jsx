import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <Router>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/experience" element={<WorkExperience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
