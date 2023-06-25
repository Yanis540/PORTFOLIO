import React from 'react';
import HeaderSection from '../../components/Header/HeaderSection';
import clsx from 'clsx';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import { useProjects } from './hooks/use-projects';
import Project from './components/Project';
import Image from 'next/image';

interface ProjectsProps {

};

function Projects({}:ProjectsProps) {
    const {ref,hasIntersected} = useIntersectionObserver();
    const projects = useProjects();
    return (
        <section ref={ref} id="about" className="h-full py-[100px] mx-auto flex flex-col justify-start mt-9 " >
            <div  className={clsx(
                `
                    flex flex-col justify-center md:items-start gap-[20px]
                    pl-0 md:pl-5 lg:pl-20 
                    opacity-0 translate-y-0
                `,
                hasIntersected&&"opacity-100  animate-big-fade-in-bottom "
            )}>
                {/* Top  */}
               <HeaderSection  section_number={3} title="Projects" /> 
                {/*Bottom */}
                <div   className="flex flex-col items-start gap-[15px] md:px-4 w-full">
                    {
                        projects.map((project,index)=>(
                            <Project key={index} project= {project} left={index%2==1 } /> 
                        ))
                    }

                </div>
           </div>
        </section>
    );
};

export default Projects;