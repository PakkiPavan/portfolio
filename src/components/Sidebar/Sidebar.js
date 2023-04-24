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
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial="hidden"
            animate="visible"
        >
            <img src={"/mightycoder.svg"} alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name">Pavan Pakki</div>
            <div className="sidebar__item sidebar__title">Frontend developer</div>
            <table className="profile-information">
                <tr>
                    <td className="profile-information__td1"><FaLinkedin size={23} /></td>
                    <td style={{ textAlign: "left" }}>
                        <a href="https://www.linkedin.com/in/pavan-pakki-964b63141/" rel="noopener noreferrer" target="_blank">
                            Linkedin
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="profile-information__td1"><FaGithub size={23} /></td>
                    <td style={{ textAlign: "left" }}>
                        <a href="https://github.com/pakkipavan" rel="noopener noreferrer" target="_blank">
                            Github
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="profile-information__td1"><FaMapMarkerAlt size={23} /></td>
                    <td style={{ textAlign: "left" }}>Hyderabad, India</td>
                </tr>
                <tr>
                    <td className="profile-information__td1"><FaEnvelope size={20} /></td>
                    <td style={{ textAlign: "left" }}>xyz@gmail.com</td>
                </tr>
                <tr>
                    <td className="profile-information__td1"><FaPhoneAlt /></td>
                    <td style={{ textAlign: "left" }}>XXXXXXXXXX</td>
                </tr>
            </table>
        </motion.div>
    );
}

export default Sidebar;
