// App.tsx (or your main router file)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';
import Hire from './views/Hire';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </Router>
  );
}

export default App;