'use client'
import React from 'react';
import { Project as ProjectType} from '../hooks/use-projects';
import clsx from 'clsx';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

interface ProjectProps {
    project:ProjectType
    left : boolean 
};

function Project({project,left}:ProjectProps) {
    const {ref,hasIntersected} = useIntersectionObserver()
    return (
    <>
        {/* Desktop View */}
        <div ref={ref} className={clsx(` 
            flex  h-full w-full relative  md:py-[20px]
            `,
            left== true ? 'flex-row':'flex-row-reverse', 
            hasIntersected && 'opacity-0 animate-fade-in-bottom'
        )}>
            <div className={clsx(`
                md:flex-[0.5] hidden md:flex flex-col items-center justify-center z-30 my-[10px] `,
                left == true ? 'text-left translate-x-[10%]':'text-right translate-x-[-10%]'
            )}>
                {/* informations */}
                <div className="flex flex-col gap-[10px]">
                    <p className="text-greenish-blue font-mono font-semibold text-lg">Feature project</p>
                    <h2 className="font-bold text-lightest-slate text-2xl capitalize">{project.title}</h2>
                    <div className={clsx(`
                        flex-flex-col gap-[10px] w-full `,
                    )}>
                        <div className="w-full p-4  bg-light-navy rounded shadow-xl hover:shadow-2xl transition-all duration-150 ">
                            <p className="text-light-slate">{project.resume}</p>
                        </div>
                        <div className={clsx(`
                            w-full flex flex-row items-center  gap-x-[10px] flex-wrap px-2`,
                            left == true ?'justify-start' : 'justify-end'
                        )}>
                            {
                                project.technologies.map((tech)=><span key={tech} className="text-light-slate capitalize py-1 text-sm " >{tech}</span> )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Image */}
           <div className={clsx(`md:flex-[0.6] hidden md:block z-20 shadow-sm py-4`)} >
                <a href={project?.deployed_link??project.github_repo??"#"} className="
                    flex-[0.5] flex flex-col  relative rounded-lg 
                    transition-all duration-300 bg-greenish-blue 
                ">
                    <div className="
                        filter grayscale-[70%] mix-blend-multiply contrast-150 
                        hover:grayscale-0 hover:mix-blend-normal transiton-all duration-300
                        before:absolute before:w-full before:h-full hover:contrast-100
                        before:bg-navy before:rounded-lg before:mix-blend-screen 
                        hover:before:bg-transparent ">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.photo} alt={project.title} className="
                            flex-1 w-full h-full   rounded-lg object-contain  
                        " 
                        /> 
                    </div>
                </a> 
            </div>
        </div>
        {/* Mobile View */}
        <div className={clsx(`flex md:hidden px-5 `)}>
            some project
        </div>
    </>
    );
};

export default Project;