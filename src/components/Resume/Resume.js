import React from 'react'
import { motion } from "framer-motion";
import { tools, languages } from '../../data/resume-data';
import { 
	FaGraduationCap,
    FaSuitcase
} from "react-icons/fa";
import Bar from '../Bar/Bar';
import { Card, CardContent } from '@mui/material';

const Resume = () => {
    const resume_variants = {
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
                Resume
            </CardContent>
        </Card>
        // <motion.div className="container resume"
        //     variants={resume_variants}
        //     initial="hidden"
        //     animate="visible"
        //     exit="exit"
        // >
        //     <div className="row">
        //         <div className="col-lg-6 resume-card">
        //             <h4 className="resume-card__heading">
        //                 <span style={{color:"#2193b0"}}>
        //                     <FaGraduationCap size={30} className="mr-2 mb-1"/>
        //                 </span>
        //                 Education
        //             </h4>
        //             <div className="resume-card__body">
        //                 <h5 className="resume-card__title">
        //                     Bachelor of Technology
        //                 </h5>
        //                 <p className="resume-card__name">
        //                     Raghu Engineering College (2014-2018)
        //                 </p>
        //                 <p className="resume-card__details">
        //                     Aggregate: 86.02%
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="col-lg-6 resume-card">
        //             <h4 className="resume-card__heading">
        //                 <span style={{color:"#2193b0"}}>
        //                     <FaSuitcase size={25} className="mr-2 mb-2"/>
        //                 </span>
        //                 Experience
        //             </h4>
        //             <div className="resume-card__body">
        //                 <h5 className="resume-card__title">
        //                     Tata Consultancy Services
        //                 </h5>
        //                 <p className="resume-card__name">
        //                     System Engineer (2018-2021)
        //                 </p>
        //                 <p className="resume-card__details">
        //                     Experience in Front end technologies - React JS, HTML, CSS, JavaScript
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-lg-6 resume-languages">
        //             <h5 className="reusme-language__heading">
        //                 Languages and Framework
        //             </h5>
        //             <div className="resume-language__body mt-3">
        //                 {
        //                     languages.map(language=>(
        //                         <Bar value={language}/>
        //                     ))
        //                 }
        //             </div>
        //         </div>
        //         <div className="col-lg-6 resume-languages">
        //             <h5 className="reusme-language__heading">
        //                 Tools and Software
        //             </h5>
        //             <div className="resume-language__body mt-3">
        //             {
        //                 tools.map(tool=>(
        //                     <Bar value={tool}/>
        //                 ))
        //             }
        //             </div>
        //         </div>
        //     </div>
        // </motion.div>
    )
}

export default Resume
