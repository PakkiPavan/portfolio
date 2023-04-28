import React from 'react'
import { Card, CardContent, Paper } from '@mui/material';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {

    return (
        <Card variant='outlined'>
            <CardContent>
                <Paper elevation={5} sx={{
                    width: 'fit-content',
                    padding: '10px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <a
                        href="https://mastermind-board-game.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginRight: '10px', color: 'cornflowerblue' }}
                    >
                        Mastermind Game
                    </a>
                    <a
                        href="https://github.com/PakkiPavan/mastermind-board-game"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '20px', display: 'flex', color: 'cornflowerblue' }}
                    >
                        <FaGithub />
                    </a>
                </Paper>
                <Paper elevation={5} sx={{
                    width: 'fit-content',
                    padding: '10px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <a
                        href="https://mastermind-board-game.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginRight: '10px', color: 'cornflowerblue' }}
                    >
                        Portfolio
                    </a>
                    <a
                        href="https://github.com/PakkiPavan/portfolio"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: '20px', display: 'flex', color: 'cornflowerblue' }}
                    >
                        <FaGithub />
                    </a>
                </Paper>
            </CardContent>
        </Card>
        // <motion.div className="container projects"
        //     variants={project_variants}
        //     initial="hidden"
        //     animate="visible"
        //     exit="exit"
        // >
        //     <div className="projects__navbar">
        //         <div className={active === 'All' && 'projects__navbar-active'} onClick={() => {
        //             setProjects(data_projects);
        //             setActive("All");
        //         }}>All</div>
        //         <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory("react.js")}>React JS</div>
        //         <div className={active === 'mongoDB' && 'projects__navbar-active'} onClick={() => handleFilterCategory("mongoDB")}>Mongo DB</div>
        //         {/* <div className={active === 'vanilla' && 'projects__navbar-active'} onClick={()=>handleFilterCategory("vanilla")}>Vanilla JS</div> */}
        //         <div className={active === 'node.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory("node.js")}>Node JS</div>
        //         <div className={active === 'HTML/CSS' && 'projects__navbar-active'} onClick={() => handleFilterCategory("HTML/CSS")}>HTML/CSS</div>
        //     </div>
        //     <div className="row">
        //         {
        //             projects.map(project => (
        //                 <ProjectCard key={project.name} project={project} />
        //             ))
        //         }
        //     </div>
        // </motion.div>
    )
}

export default Projects
