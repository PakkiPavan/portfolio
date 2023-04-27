import React from 'react';
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
import { Box, Card, CardContent, CssBaseline, Tab, Tabs, createTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';


function App() {
  const [currentTheme, setCurrentTheme] = React.useState('dark');
  const [tabIndex, setTabIndex] = React.useState(0);
  const maxWidthMediaQuery = useMediaQuery('(max-width:900px)');

  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  const handleSetCurrentTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: maxWidthMediaQuery ? 'column': 'row'
      }}>
        <Box sx={{ width: maxWidthMediaQuery ? '100%' : '15%', margin: '0.5rem' }}>
          <Sidebar handleSetCurrentTheme={handleSetCurrentTheme} />
        </Box>
        <Box sx={{ width: maxWidthMediaQuery ? '100%' : '85%', margin: '0.5rem', }}>
          <Box>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="About Me" sx={{ outline: 'none !important' }} />
              <Tab label="Experience" sx={{ outline: 'none !important' }} />
              <Tab label="Projects" sx={{ outline: 'none !important' }} />
              <Tab label="Contact Me" sx={{ outline: 'none !important' }} />
            </Tabs>
            {/* <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<About />} />
            </Routes> */}
          </Box>
          <Box>
            {tabIndex === 0 && <About />}
            {tabIndex === 1 && <Experience />}
            {tabIndex === 2 && <Projects />}
            {tabIndex === 3 && <Contact />}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
    // <div className="app">
    //   <div className="container app__container">
    //     <div className="row app__row">
    //       <div className="col-lg-3">
    //         <Sidebar />
    //       </div>
    //       <div className="col-lg-9 app__main-content">
    //         <Navbar />
    //         <AnimatePresence mode="wait">
    //           <Routes>
    //             <Route path="/" element={<About />} />
    //             <Route path="/resume" element={<Resume />} />
    //             <Route path="/projects" element={<Projects />} />
    //             <Route path="*" element={<About />} />
    //           </Routes>
    //         </AnimatePresence>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
