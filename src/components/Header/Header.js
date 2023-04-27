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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: 60,
    // lineHeight: '60px',
}));

const Header = (props) => {
    const theme = useTheme();
    console.log(theme)

    return (
        <Box sx={{ width: '100%' }}>
            <Card variant="outlined" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <CardContent sx={{ padding: '5px', paddingBottom: '5px !important', textAlign: 'center' }}>
                    <Item elevation={5} sx={{
                        height: 'auto',
                        fontSize: '1rem !important',
                        fontWeight: 'bolder !important',
                        width: 'fit-content',
                        padding: '3px 15px'
                    }}>
                        <div>PAVAN PAKKI</div>
                        <div>Frontend Developer</div>
                        <div>
                            <MuiLink
                                href="https://www.linkedin.com/in/pavan-pakki"
                                target="_blank"
                                underline="none"
                                color="inherit"
                                sx={{
                                    marginRight: '10px',
                                    '&:hover': {
                                        textDecoration: 'none',
                                        color: theme.palette.text.primary
                                    }
                                }}
                            >
                                <FaLinkedin size={23} />
                            </MuiLink>
                            <MuiLink
                                href="https://github.com/pakkipavan"
                                target="_blank"
                                underline="none"
                                color="inherit"
                                sx={{
                                    marginRight: '10px',
                                    '&:hover': {
                                        textDecoration: 'none',
                                        color: theme.palette.text.primary
                                    }
                                }}
                            >
                                <FaGithub size={23} />
                            </MuiLink>
                            <Button onClick={props.handleSetCurrentTheme} sx={{
                                textTransform: 'inherit',
                                padding: '0',
                                minWidth: '0',
                                outline: 'none !important'
                            }}>
                                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                            </Button>
                        </div>
                    </Item>
                </CardContent>
            </Card>
            {/* <Card variant="outlined">
                <CardContent sx={{ padding: '0px', textAlign: 'center' }} elevation={5}>
                    <Item elevation={2} sx={{
                        height: 'auto',
                        padding: '5px'
                    }}>
                        <MuiLink
                            href="https://www.linkedin.com/in/pavan-pakki"
                            target="_blank"
                            underline="none"
                            color="inherit"
                            sx={{
                                marginRight: '10px',
                                '&:hover': {
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary
                                }
                            }}
                        >
                            <FaLinkedin size={23} />
                        </MuiLink>
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
                            <FaGithub size={23} />
                        </MuiLink>
                    </Item>
                    
                </CardContent>
            </Card> */}

            {/* <Card variant="outlined">
                <CardContent>
                    <ButtonGroup
                        orientation="vertical"
                        sx={{
                            width: '100%'
                        }}
                    >
                        <Button onClick={props.handleSetCurrentTheme} sx={{
                            textTransform: 'inherit'
                        }}>
                            Change Theme
                        </Button>
                    </ButtonGroup>
                </CardContent>
            </Card> */}
        </Box>
    );
}

export default Header;
