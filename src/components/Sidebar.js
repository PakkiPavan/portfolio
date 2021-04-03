import React from "react";
import mightycoder from "../assets/mightycoder.svg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { 
	FaDownload,
	FaGithub,
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhoneAlt
} from "react-icons/fa";

const Sidebar = () =>{
	// const handleEmailMe=()=>{
	// 	window.open("mailto:pavanpakki007@gmail.com")
	// };
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
			<div className="sidebar__name">Pakki Pavan</div>
			<div className="sidebar__item sidebar__title">Web developer</div>
			{/* <a href={resume} download="resume.pdf">
				<div className="sidebar__item sidebar__resume">
					<FaDownload className="mr-1 mb-1"/> Download Resume
				</div>
			</a> */}
			{/* <figure className="sidebar__social-icons my-2">
				<a href="#facebook">
					<FaFacebookSquare size={23}/>
				</a>
				<a href="#instagram">
					<FaInstagramSquare size={23}/>
				</a>
			</figure> */}
			{/* <div className="sidebar__contact">
				<div className="sidebar__item sidebar__github">
					<a href="https://github.com/pakkipavan" rel="noopener noreferrer" target="_blank">
						<FaGithub size={23} className="mr-1 mb-1"/>Github
					</a>
				</div>
				<div className="sidebar__location">
					<FaMapMarkerAlt size={23}/>
					Chennai, India
				</div>
				<div className="sidebar__item">
					<FaEnvelope/>pavanpakki786@gmail.com
				</div>
				<div className="sidebar__item">
					<FaPhoneAlt className="mr-1 mb-1"/>+91 7702556730
				</div>
			</div> */}
			<table className="profile-information">
				<tr>
					<td className="profile-information__td1"><FaGithub size={23}/></td>
					<td style={{textAlign:"left"}}>Github</td>
				</tr>
				<tr>
					<td className="profile-information__td1"><FaMapMarkerAlt size={23}/></td>
					<td style={{textAlign:"left"}}>Chennai, India</td>
				</tr>
				<tr>
					<td className="profile-information__td1"><FaEnvelope/></td>
					<td style={{textAlign:"left"}}>pavanpakki786@gmail.com</td>
				</tr>
				<tr>
					<td className="profile-information__td1"><FaPhoneAlt/></td>
					<td style={{textAlign:"left"}}>+91 7702556730</td>
				</tr>
        	</table>
			{/* <a href={resume} download="resume.pdf">
				<div className="sidebar__item sidebar__resume">
					<FaDownload className="mr-1 mb-1"/> Download Resume
				</div>
			</a> */}
			{/* <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
				Email Me
			</div> */}
			<a href={resume} download="resume.pdf">
				<div className="sidebar__item sidebar__button">
					<FaDownload className="mr-1 mb-1"/> Download CV
				</div>
			</a>
		</motion.div>
	);
}

export default Sidebar;