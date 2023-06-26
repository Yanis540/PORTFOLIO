import React from 'react';
import { Project as ProjectType} from '../hooks/use-projects';
import clsx from 'clsx';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';
import Link from 'next/link';
import Icon from '@/icons/Icon';

interface ProjectDesktopProps {
    project: ProjectType 
    left : boolean 
};

function ProjectDesktop({project,left}:ProjectDesktopProps) {
    const {ref,hasIntersected} = useIntersectionObserver()

    return (
        <div ref={ref} className={clsx(` 
            flex  h-full w-full relative  md:py-[20px]
            `,
            left== true ? 'flex-row':'flex-row-reverse', 
            hasIntersected && 'opacity-0 animate-fade-in-bottom'
        )}>
            {/* Informations */}
            <div className={clsx(`md:flex-[0.5] hidden md:flex flex-col items-center justify-center z-30 my-[10px] `,
                left == true ? 'text-left translate-x-[10%]':'text-right translate-x-[-10%]'
            )}>
                {/* informations */}
                <div className="flex flex-col gap-[10px]">
                    <h3 className="text-greenish-blue font-mono font-semibold text-lg">Feature project</h3>
                    <h2 className="font-bold text-whitish text-2xl capitalize">{project.title}</h2>
                    <div className="flex-flex-col gap-[10px] w-full">
                        <div className="w-full p-4 bg-light-navy rounded shadow-xl hover:shadow-2xl transition-all duration-150 ">
                            <p className="text-light-slate">{project.resume}</p>
                        </div>
                        <div className={clsx(`
                            w-full flex flex-row items-center py-2 gap-x-[10px] flex-wrap px-2`,
                            left == true ?'justify-start' : 'justify-end'
                        )}>
                            {
                                project.technologies.map((tech)=><span key={tech} className="text-lightest-slate capitalize py-1 text-sm " >{tech}</span> )
                            }
                        </div>
                    </div>
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
                            flex-[0.5] flex flex-col  relative rounded-lg 
                            transition-all duration-300 bg-[#0aefff] ease-in-out
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