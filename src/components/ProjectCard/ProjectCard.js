import React from 'react';
import {
    FaGithub
} from "react-icons/fa";
import { Paper } from '@mui/material';

const ProjectCard = (props) => {
    return (
        <Paper elevation={5} sx={{
            width: 'fit-content',
            padding: '10px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <div style={{ marginBottom: '10px' }}>
                <a
                    href={props.deployedUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={props.projectImage}
                        alt={`demoImage-${props.projectIndex}`}
                        style={{
                            height: '75px'
                        }}
                    />
                </a>
            </div>
            <div style={{
                display: 'flex'
            }}>
                <a
                    href={props.deployedUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: '10px', color: 'cornflowerblue' }}
                >
                    {props.projectName}
                </a>
                <a
                    href={props.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '20px', display: 'flex', color: 'cornflowerblue' }}
                >
                    <FaGithub />
                </a>
            </div>
            <div>
                <b>Technologies used:{" "}</b>{props.TechnologiesUsed}
            </div>
        </Paper>
    )
}

export default ProjectCard
