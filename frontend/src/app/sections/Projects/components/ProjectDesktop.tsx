
import React, { useRef } from 'react';
import { Project as ProjectType} from '../hooks/use-projects';
import clsx from 'clsx';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import { useTransition } from '@/app/hooks/use-transition';
import ProjectTechnologies from './ProjectTechnologies';

interface ProjectDesktopProps {
    project: ProjectType 
    left : boolean 
};

function ProjectDesktop({project,left}:ProjectDesktopProps) {
    const ref = useRef<HTMLDivElement>(null);
    useTransition(ref)

    return (
        <div ref={ref} className={clsx(` 
            hidden md:flex  h-full w-full relative  md:py-[20px]
            `,
            left== true ? 'flex-row':'flex-row-reverse', 
        )}>
            {/* Informations */}
            <div className={clsx(`md:flex-[0.5] hidden md:flex flex-col items-center justify-center z-30 my-[10px] `,
                left == true ? 'text-left translate-x-[10%]':'text-right translate-x-[-10%]'
            )}>
                <div className="flex flex-col gap-[10px]">
                    {/* Project Title */}
                    <div className="flex flex-col gap-[7px]">
                        <h3 className="text-greenish-blue font-mono font-semibold text-lg">Feature project</h3>
                        <h2 className="font-bold text-whitish text-2xl capitalize">{project.title}</h2>
                    </div>
                    {/* Project resume  */}
                    <div className="w-full p-4 bg-light-navy hover:scale-[1.01] rounded shadow-xl hover:shadow-2xl transition-all duration-300 ">
                        <p className="text-light-slate">{project.resume}</p>
                    </div>
                    
                    <ProjectTechnologies project={project} left={left} /> 
                    {/* Links */}
                    <div className={clsx("flex flex-row items-center gap-3",left==true?'justify-start':"justify-end")}>
                        {project.links.map((link,index)=>(
                            link.url && (
                                <Link key={index} target='_blank' href={link.url}><Icon name={link.name} />  </Link> 
                            ) 
                        ))}
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className={clsx(`md:flex-[0.6] hidden md:flex flex-col items-center justify-center z-20 shadow-sm py-4`,)} >
                <a href={
                    project?.links?.find((link)=>link.name=="external")?.url
                    ??
                        project?.links?.find((link)=>link.name=="github")?.url
                        ??"#"
                    } 
                    target='_blank' 
                    className="
                        flex-[0.5] flex flex-col  relative rounded-lg hover:scale-[1.01]
                        transition-all duration-300 bg-[#0aefff] ease-in-out hover:bg-transparent
                        before:absolute before:w-full before:h-full hover:contrast-100
                        before:bg-navy before:rounded-lg before:mix-blend-screen 
                        hover:before:bg-transparent 
                    "
                >
                    <div className="
                        filter grayscale-[100%] mix-blend-multiply contrast-100 
                        hover:grayscale-0 hover:mix-blend-normal transiton-all duration-300 ease-in-out
                        ">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.photo} alt={project.title} className="
                            flex-1 w-full h-full   rounded-lg object-contain  
                        " 
                        /> 
                    </div>
                </a> 
            </div>
        </div>
    );
};

export default ProjectDesktop;