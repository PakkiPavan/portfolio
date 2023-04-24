import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<About />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
