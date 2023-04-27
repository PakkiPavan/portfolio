import React from 'react';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { Box, CssBaseline, Tab, Tabs, ThemeProvider, createTheme } from '@mui/material';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';


function App() {
  const [currentTheme, setCurrentTheme] = React.useState('light');
  const [tabIndex, setTabIndex] = React.useState(0);

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
        // display: 'flex',
        // flexDirection: maxWidthMediaQuery ? 'column': 'row'
      }}>
        <Box>
          <Header handleSetCurrentTheme={handleSetCurrentTheme} />
        </Box>
        <Box sx={{ margin: '0.5rem', }}>
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
              {/* <Tab label="Contact Me" sx={{ outline: 'none !important' }} /> */}
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
            {/* {tabIndex === 3 && <Contact />} */}
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
