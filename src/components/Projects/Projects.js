import React from 'react'
import { Card, CardContent } from '@mui/material';
import projectsData from '../../data/projectsData';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {

    return (
        <Card variant='outlined'>
            <CardContent sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap', gap: '10px' }}>
                {
                    projectsData.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                projectIndex={index}
                                projectName={project.projectName}
                                deployedUrl={project.deployedUrl}
                                githubUrl={project.githubUrl}
                                TechnologiesUsed={project.TechnologiesUsed}
                                projectImage={project.projectImage}
                            />
                        )
                    })
                }
            </CardContent>
        </Card>
    )
}

export default Projects
