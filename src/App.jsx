import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';
import AnimatedRoutes from './AnimatedRoutes.jsx'; // Import the new component

const App = () => {
  return (
    <Router>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <AnimatedRoutes /> {/* Handle route transitions */}
        <Footer />
      </main>
    </Router>
  );
};

export default App;
