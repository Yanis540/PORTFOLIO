'use client'
import React from 'react';
import { Project as ProjectType} from '../hooks/use-projects';
import ProjectDesktop from './ProjectDesktop';
import ProjectMobile from './ProjectMobile';

interface ProjectProps {
    project:ProjectType
    left : boolean 
};

function Project({project,left}:ProjectProps) {
    return (
    <>
        {/* Desktop View */}
        <ProjectDesktop project={project} left={left} /> 
        {/* Mobile View */}
        <ProjectMobile project={project} /> 
    </>
    );
};

export default Project;