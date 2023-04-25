import React from 'react'
import skills from "../../data/about-data";
import { motion } from "framer-motion";
import "./About.css";
import SkillCard from '../SkillCard/SkillCard';

const About = () => {
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
        <motion.div className="about"
            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
                Innovative Frontend developer with 4+ years of experience working with global/remote software development
                teams in large multinational corporations. Award winning competitive programmer with strength in writing clean
                and efficient code.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">
                    My Services
                </h6>
                <div className="row">
                    {
                        skills.map(skill => (
                            <SkillCard skill={skill} />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default About
