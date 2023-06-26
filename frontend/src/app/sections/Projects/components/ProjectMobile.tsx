'use client'
import React, { useRef } from 'react';
import { Project as ProjectType } from '../hooks/use-projects';
import clsx from 'clsx';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import { useTransition } from '@/app/hooks/use-transition';

interface ProjectMobileProps {
    project:ProjectType
};

function ProjectMobile({project}:ProjectMobileProps) {
    const ref = useRef<HTMLDivElement>(null);
    useTransition(ref)

    return (
        <div ref={ref} className="flex md:hidden px-5 w-full relative">
            <div className="flex flex-col py-8 px-2  h-full w-full z-30 transition-all shadow-navy hover:shadow-lg duration-300 rounded">
                <div className=" flex flex-col justify-center gap-[40px] h-full  px-4  ">
                    <div className="flex flex-col gap-[7px] ">
                        <h3 className="text-greenish-blue font-mono">Feature project</h3>
                        <h2 className="font-bold text-whitish text-2xl capitalize">{project.title}</h2>
                    </div>
                    <div className={clsx(`flex-flex-col w-full `,)}>
                        <p className="text-light-slate">{project.resume}</p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className={`w-full flex flex-row items-center justify-start gap-x-[10px] flex-wrap`}>
                            {
                                project.technologies.map((tech)=><span key={tech} className="text-lightest-slate capitalize py-1 text-sm " >{tech}</span> )
                            }
                        </div>
                        {/* Links */}
                        <div className="flex flex-row items-center justify-end gap-3">
                            {project.links.map((link,index)=>(
                                link.url && (
                                    <Link key={index} target='_blank' href={link.url}><Icon name={link.name} />  </Link> 
                                ) 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className="absolute flex flex-col top-0 left-0 bottom-0 right-0  px-2 w-full h-full  z-20 shadow-sm" >
                <div className="flex flex-col justify-center gap-[20px] h-full px-4">
                    <a href={
                        project?.links?.find((link)=>link.name=="external")?.url
                        ??
                            project?.links?.find((link)=>link.name=="github")?.url
                            ??"#"
                        } target='_blank' className="
                            flex flex-col  relative rounded-md h-full w-full 
                            transition-all duration-300 bg-navy ease-in-out
                            before:absolute before:w-full before:h-full 
                            opacity-[0.2] blur-[0.5px]
                            shadow-navy-shadow
                            before:mix-blend-screen  before:bg-navy before:rounded-lg
                        "
                    >
                        <div className="filter grayscale-[100%] h-full w-full mix-blend-multiply contrast-[100%] ">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={project.photo} alt={project.title} className="
                                flex-1 w-full h-full  rounded-lg  bg-cover bg-no-repeat 
                            " 
                            /> 
                        </div>
                    </a> 
                </div>
            </div>
        </div>
    );
};

export default ProjectMobile;