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
import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, Link as MuiLink, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography, Paper } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
}));

const Sidebar = (props) => {
    const theme = useTheme();
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
                <CardContent sx={{ padding: '10px', textAlign: 'center' }}>
                    <Item elevation={5} sx={{
                        height: '45px',
                        lineHeight: '3 !important',
                        fontSize: '1rem !important',
                        fontWeight: 'bolder !important',
                        marginBottom: '0.5rem'
                    }}>
                        PAVAN PAKKI
                    </Item>
                    <Item elevation={2} sx={{
                        height: '30px',
                        lineHeight: '2 !important',
                    }}>
                        Frontend Developer
                    </Item>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent sx={{ padding: '0px', textAlign: 'center' }}>
                    <List>
                        <ListItem sx={{ justifyContent: 'left' }}>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <FaLinkedin size={23} />
                            </ListItemIcon>
                            <MuiLink
                                href="https://www.linkedin.com/in/pavan-pakki"
                                target="_blank"
                                underline="none"
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        textDecoration: 'none',
                                        color: theme.palette.text.primary
                                    }
                                }}
                            >
                                Linkedin
                            </MuiLink>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'left' }}>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <FaGithub size={23} />
                            </ListItemIcon>
                            <MuiLink
                                href="https://github.com/pakkipavan"
                                target="_blank"
                                underline="none"
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        textDecoration: 'none',
                                        color: theme.palette.text.primary
                                    }
                                }}
                            >
                                Github
                            </MuiLink>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'left' }}>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <FaMapMarkerAlt size={23} />
                            </ListItemIcon>
                            <MuiLink
                                href="#"
                                target="_blank"
                                underline="none"
                                color="inherit"
                                sx={{
                                    '&:hover': {
                                        textDecoration: 'none',
                                        color: theme.palette.text.primary
                                    }
                                }}
                            >
                                Hyderbad
                            </MuiLink>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>

            <Card variant="outlined">
                <CardContent>
                    <ButtonGroup
                        orientation="vertical"
                        sx={{
                            width: '100%'
                        }}
                    >
                        {/* <Button sx={{
                            textTransform: 'inherit'
                        }}>
                            <Link to='/' style={{ color: theme.palette.text.primary }}>About Me</Link>
                        </Button>
                        <Button sx={{
                            textTransform: 'inherit'
                        }}>
                            <Link to='/resume' style={{ color: theme.palette.text.primary }}>Resume</Link>
                        </Button>
                        <Button sx={{
                            textTransform: 'inherit'
                        }}>
                            <Link to='/projects' style={{ color: theme.palette.text.primary }}>Projects</Link>
                        </Button> */}
                        <Button onClick={props.handleSetCurrentTheme} sx={{
                            textTransform: 'inherit'
                        }}>
                            Change Theme
                        </Button>
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
        // <table className="profile-information">
        //     <tr>
        //         <td className="profile-information__td1"><FaLinkedin size={23} /></td>
        //         <td style={{ textAlign: "left" }}>
        //             <a href="https://www.linkedin.com/in/pavan-pakki-964b63141/" rel="noopener noreferrer" target="_blank">
        //                 Linkedin
        //             </a>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td className="profile-information__td1"><FaGithub size={23} /></td>
        //         <td style={{ textAlign: "left" }}>
        //             <a href="https://github.com/pakkipavan" rel="noopener noreferrer" target="_blank">
        //                 Github
        //             </a>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td className="profile-information__td1"><FaMapMarkerAlt size={23} /></td>
        //         <td style={{ textAlign: "left" }}>Hyderabad, India</td>
        //     </tr>
        //     <tr>
        //         <td className="profile-information__td1"><FaEnvelope size={20} /></td>
        //         <td style={{ textAlign: "left" }}>xyz@gmail.com</td>
        //     </tr>
        //     <tr>
        //         <td className="profile-information__td1"><FaPhoneAlt /></td>
        //         <td style={{ textAlign: "left" }}>XXXXXXXXXX</td>
        //     </tr>
        // </table>
        // </motion.div>
    );
}

export default Sidebar;
