import React from 'react'
import skills from "../../data/about-data";
import { motion } from "framer-motion";
import "./About.css";
import SkillCard from '../SkillCard/SkillCard';
import { Box, Card, CardContent, CardHeader, Link, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiJest, SiRedux, SiTypescript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const About = () => {
    const theme = useTheme();
    const about_variants = {
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
                <Box>
                    <Typography gutterBottom variant="h6" component="div" sx={{ borderBottom: '1px solid' }}>
                        Professional Summary
                    </Typography>
                    <Card>
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontSize: '16px'
                                }}
                            >
                                Innovative Frontend developer with 4+ years of experience working with global/remote software development
                                teams in large multinational corporations. Award winning competitive programmer with strength in writing clean
                                and efficient code.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h6" component="div" sx={{ borderBottom: '1px solid' }}>
                        Technical Skills
                    </Typography>
                    <Card>
                        <CardContent sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
                            <SkillCard icon={<FaReact />} skillName="React.js" />
                            <SkillCard icon={<SiRedux />} skillName="Redux" />
                            <SkillCard icon={<FaHtml5 />} skillName="HTML" />
                            <SkillCard icon={<DiCss3 />} skillName="CSS" />
                            <SkillCard icon={<SiJavascript />} skillName="JavaScript" />
                            <SkillCard icon={<SiTypescript />} skillName="TypeScript" />
                            <SkillCard icon={<FaNodeJs />} skillName="Node.js" />
                            <SkillCard icon={<SiJest />} skillName="Jest" />
                            <SkillCard icon={<FaGithub />} skillName="Git" />
                            <SkillCard skillName="C" />
                        </CardContent>
                    </Card>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h6" component="div" sx={{ borderBottom: '1px solid' }}>
                        Achievements
                    </Typography>
                    <Card>
                        <CardContent>
                            <ul>
                                <li>Winner - Mobile App development Hackathon conducted by Standard Chartered GBS-2019</li>
                                <li>Fast Coder - Capgemini Tech Challenge coding competition-2017</li>
                                <li>
                                    Global Rank 820 - Global level coding competition TCS Codevita-2017 - {" "}
                                    <a href="https://drive.google.com/file/d/1WJNFvcOwnBHSDv3ntJgZ26Lgd845V3YF/view" target="_blank" style={{ color: 'cornflowerblue' }}>
                                        Certificate
                                    </a>
                                </li>
                                <li>
                                    Bronze medal - One of the Hackerrank weekly contests - {" "}
                                    <a href="https://www.hackerrank.com/results/infinitum18/pavanpakki786" target="_blank" style={{ color: 'cornflowerblue' }}>
                                        Certificate
                                    </a>
                                </li>
                                <li>Finalist - Competitive Programming Hackathon in B.Tech 3rd year</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h6" component="div" sx={{ borderBottom: '1px solid' }}>
                        Education
                    </Typography>
                    <Card>
                        <CardContent>
                            <b>Raghu Engineering College (JNTU Kakinada Affiliated) (2014-2018),</b> Andhra Pradesh, India<br />
                            <span>Bachelor of Technology (B. Tech) in Electronis and Communication Engineering (86%)</span>
                        </CardContent>
                    </Card>
                </Box>
            </CardContent>
        </Card>
        // <motion.div className="about"
        //     variants={about_variants}
        //     initial="hidden"
        //     animate="visible"
        //     exit="exit"
        // >
        //     <h6 className="about__intro">
        // Innovative Frontend developer with 4+ years of experience working with global/remote software development
        // teams in large multinational corporations. Award winning competitive programmer with strength in writing clean
        // and efficient code.
        //     </h6>
        //     <div className="container about__container">
        //         <h6 className="about__heading">
        //             My Services
        //         </h6>
        //         <div className="row">
        //             {
        //                 skills.map(skill => (
        //                     <SkillCard skill={skill} />
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </motion.div>
    )
}

export default About
