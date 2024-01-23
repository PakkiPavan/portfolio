import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Button } from '@mui/material';

const Navbar = () => {
    const [active, setActive] = useState("");
    useEffect(() => {
        let currentUrl = window.location.href;
        // console.log(currentUrl);
        if (currentUrl.endsWith("/")) {
            setActive("About");
        }
        else if (currentUrl.endsWith("/resume")) {
            setActive("Resume");
        }
        else if (currentUrl.endsWith("/projects")) {
            setActive("Projects");
        }
    }, [active]);
    const navbar_variant = {
        hidden: {
            y: "-30vh",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: "spring"
            }
        }
    };

    return (
        <Box>
            <Link to='/'>
                <Button sx={{ color: '#fff' }}>
                    About
                </Button>
            </Link>
            <Link to='/resume'>
                <Button sx={{ color: '#fff' }}>
                    Resume
                </Button>
            </Link>
            <Link to='/projects'>
                <Button sx={{ color: '#fff' }}>
                    Projects
                </Button>
            </Link>
        </Box>
        // <motion.div className="navbar"
        //     variants={navbar_variant}
        //     initial="hidden"
        //     animate="visible"

        // >
        //     <div className="navbar__active">
        //         {active}
        //     </div>
        //     <div className="navbar__items">
        //         {
        //             active !== "About" && (
        //                 <Link to="/">
        //                     <div className="navbar__item" onClick={() => setActive("About")}>
        //                         About
        //                     </div>
        //                 </Link>
        //             )
        //         }
        //         {
        //             active !== "Resume" && (
        //                 <Link to="/resume">
        //                     <div className="navbar__item" onClick={() => setActive("Resume")}>
        //                         Resume
        //                     </div>
        //                 </Link>
        //             )
        //         }
        //         {
        //             active !== "Projects" && (
        //                 <Link to="/projects">
        //                     <div className="navbar__item" onClick={() => setActive("Projects")}>
        //                         Projects
        //                     </div>
        //                 </Link>
        //             )
        //         }
        //     </div>
        // </motion.div>
    )
}

export default Navbar
