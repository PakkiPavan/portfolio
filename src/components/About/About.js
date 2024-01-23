import React from 'react'
import "./About.css";
import SkillCard from '../SkillCard/SkillCard';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiJest, SiRedux, SiTypescript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const About = () => {
    const theme = useTheme();

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
                                Innovative Full Stack Developer with almost 5.6 years of experience working with global and remote software
                                development teams in large multinational corporations, I excel at writing clean and efficient code. Additionally, my
                                expertise in competitive programming has earned me multiple awards and recognition for my ability to tackle
                                complex challenges with creative solutions.
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
                            <SkillCard icon={<FaNodeJs />} skillName="Node.js" />
                            <SkillCard icon={<FaHtml5 />} skillName="HTML" />
                            <SkillCard icon={<DiCss3 />} skillName="CSS" />
                            <SkillCard icon={<SiJavascript />} skillName="JavaScript" />
                            <SkillCard icon={<SiRedux />} skillName="Redux" />
                            <SkillCard icon={<SiTypescript />} skillName="TypeScript" />
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
                                <li>Won the Mobile App Development Hackathon conducted by Standard Chartered GBS in 2019.</li>
                                <li>Awarded <b>Fast Coder</b> title in the Capgemini Tech Challenge coding competition in 2017.</li>
                                <li>
                                    Achieved a Global Rank of <b>820</b> out of 99,473 participants in the TCS Codevita 2017, a prestigious global-level coding competition. - {" "}
                                    <a href="https://drive.google.com/file/d/1WJNFvcOwnBHSDv3ntJgZ26Lgd845V3YF/view" target="_blank" rel="noreferrer" style={{ color: 'cornflowerblue' }}>
                                        Certificate
                                    </a>
                                </li>
                                <li>
                                    Received a <b>Bronze medal</b> in one of the weekly contests conducted by Hackerrank. - {" "}
                                    <a href="https://www.hackerrank.com/results/infinitum18/pavanpakki786" target="_blank" rel="noreferrer" style={{ color: 'cornflowerblue' }}>
                                        Certificate
                                    </a>
                                </li>
                                <li>Was a <b>Finalist</b> in a Competitive Programming Hackathon during the third year of B.Tech studies.</li>
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
