import React, { useState } from 'react'
import { motion } from "framer-motion";
import ProjectCard from '../ProjectCard/ProjectCard';
import data_projects from '../../data/projects-data';
import { Card, CardContent } from '@mui/material';

const Projects = () => {
    const [projects, setProjects] = useState(data_projects);
    const [active, setActive] = useState("All");
    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name));
        setProjects(new_array);
        setActive(name);
    }
    const project_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <Card variant="outlined">
            <CardContent>
                Projects
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
