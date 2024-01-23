import React from "react";
import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import { Box, Button, Card, CardContent, Link as MuiLink, Paper } from "@mui/material";
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
                        <div>Full Stack Developer</div>
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
        </Box>
    );
}

export default Header;
