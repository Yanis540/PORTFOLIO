import React from 'react';
import { Project } from '../hooks/use-projects';
import clsx from 'clsx';

interface ProjectTechnologiesProps {
    project:Project
    left ?: boolean
};

function ProjectTechnologies({project,left}:ProjectTechnologiesProps) {
    return (
        <div className="flex-flex-col gap-[10px] w-full">
            <div className={clsx(`
                w-full flex flex-row items-center py-2  gap-[10px] flex-wrap md:px-2`,
                (left == true || left == undefined)?'justify-start' : 'justify-end'
            )}>
                {
                    project.technologies.map((tech)=><span key={tech} className="text-teal-300 px-2 py-1 rounded-lg bg-teal-400/10 capitalize text-sm " >{tech}</span> )
                }
            </div>
        </div>
    );
};

export default ProjectTechnologies;