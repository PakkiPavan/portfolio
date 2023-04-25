import React from "react";
import { motion } from "framer-motion";
import {
    // FaDownload,
    FaGithub,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaLinkedin
} from "react-icons/fa";
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const sidebar_variant = {
        hidden: {
            x: "-20vw"
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration: 0.5, type: "spring"
            }
        }
    };

    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 16 }}>
                        PAVAN PAKKI
                    </Typography>
                    <Typography sx={{ fontSize: 16 }}>
                        Frontend Developer
                    </Typography>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent sx={{
                    // display: 'flex',
                    // flexDirection: 'column'
                }}>
                    <ButtonGroup
                        orientation="vertical"
                    >
                        <Link to='/'>
                            <Button sx={{ color: '#fff' }} color="primary">
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
                    </ButtonGroup>
                </CardContent>
            </Card>
        </Box>
        // <motion.div className="sidebar"
        //     variants={sidebar_variant}
        //     initial="hidden"
        //     animate="visible"
        // >
        //     <img src={"/mightycoder.svg"} alt="avatar" className="sidebar__avatar"/>
        //     <div className="sidebar__name">Pavan Pakki</div>
        //     <div className="sidebar__item sidebar__title">Frontend developer</div>
        //     <table className="profile-information">
        //         <tr>
        //             <td className="profile-information__td1"><FaLinkedin size={23} /></td>
        //             <td style={{ textAlign: "left" }}>
        //                 <a href="https://www.linkedin.com/in/pavan-pakki-964b63141/" rel="noopener noreferrer" target="_blank">
        //                     Linkedin
        //                 </a>
        //             </td>
        //         </tr>
        //         <tr>
        //             <td className="profile-information__td1"><FaGithub size={23} /></td>
        //             <td style={{ textAlign: "left" }}>
        //                 <a href="https://github.com/pakkipavan" rel="noopener noreferrer" target="_blank">
        //                     Github
        //                 </a>
        //             </td>
        //         </tr>
        //         <tr>
        //             <td className="profile-information__td1"><FaMapMarkerAlt size={23} /></td>
        //             <td style={{ textAlign: "left" }}>Hyderabad, India</td>
        //         </tr>
        //         <tr>
        //             <td className="profile-information__td1"><FaEnvelope size={20} /></td>
        //             <td style={{ textAlign: "left" }}>xyz@gmail.com</td>
        //         </tr>
        //         <tr>
        //             <td className="profile-information__td1"><FaPhoneAlt /></td>
        //             <td style={{ textAlign: "left" }}>XXXXXXXXXX</td>
        //         </tr>
        //     </table>
        // </motion.div>
    );
}

export default Sidebar;
