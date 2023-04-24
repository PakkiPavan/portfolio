import React from 'react';
import {
    FaGithub
} from "react-icons/fa";
const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
    return (
        <div className="projectCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} rel="noopener noreferrer" target="_blank">
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    <a href={github_url} rel="noopener noreferrer" target="_blank" style={{ color: "#2193b0" }}>
                        {/* <img src={github} alt="github link" className="projectCard__icon" /> */}
                        <FaGithub size={23} className="mr-2" />
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    )
}

export default ProjectCard
