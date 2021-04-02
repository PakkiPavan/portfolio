import React from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () =>{
	const handleEmailMe=()=>{
		window.open("mailto:pavanpakki007@gmail.com")
	};
	const sidebar_variant={
        hidden:{
            x:"-20vw"
        },
        visible:{
            x:0,
			transition:{
				delay:0.1,duration:0.5,type:"spring"
			}
        }
    };
	return(
		<motion.div className="sidebar"
			variants={sidebar_variant}
			initial="hidden"
			animate="visible"
		>
			<img src={mightycoder} alt="avatar" className="sidebar__avatar"/>
			<div className="sidebar__name"><span>Pakki</span>Pavan</div>
			<div className="sidebar__item sidebar__title">Web developer</div>
			<a href={resume} download="resume.pdf">
				<div className="sidebar__item sidebar__resume">
					<img src={tie} alt="resume" className="sidebar__icon"/> Download Resume
				</div>
			</a>
			<figure className="sidebar__social-icons my-2">
				<a href="#facebook">
					<img src={facebook} alt="facebook" className="sidebar__icon mr-3"/>
				</a>
				<a href="#instagram">
					<img src={instagram} alt="instagram" className="sidebar__icon"/>
				</a>
			</figure>
			<div className="sidebar__contact">
				<div className="sidebar__item sidebar__github">
					<a href="https://github.com/pakkipavan" rel="noopener noreferrer" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3"/>Github</a>
				</div>
				<div className="sidebar__location">
					<img src={pin} alt="location" className="sidebar__icon mr-3"/>
					Chennai, India
				</div>
				<div className="sidebar__item">pavanpakki786@gmail.com</div>
				<div className="sidebar__item">7702556730</div>
			</div>
			<div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
				Email Me
			</div>
		</motion.div>
	);
}

export default Sidebar;