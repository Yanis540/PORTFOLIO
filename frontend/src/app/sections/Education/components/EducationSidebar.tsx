import {MouseEvent} from 'react';
import { EducationalContent } from '../hooks/use-education';
import clsx from 'clsx';

interface EducationSidebarProps {
    handleCurrentActive:(content: EducationalContent, e: MouseEvent<HTMLElement>) => void
    contents : EducationalContent[]

};  

function EducationSidebar({handleCurrentActive,contents }:EducationSidebarProps) {
    return (
        <>
             {/* Sidebar */}
             <div className="md:flex-[0.25] flex flex-col-reverse md:flex-row w-full  h-full relative ">
                <div className="flex w-full md:w-[0.5px] min-h-full relative" > 
                    <div className="flex-1 flex flex-col border-b-[0.5px] md:border-l-[0.5px] border-lightest-navy"></div>
                </div>
                <div className="flex-[1] flex  flex-row md:flex-col w-full items-start ">
                    {
                        contents.map((content)=>(
                            <h3 key={content.id} id={content.id} onClick={(e:MouseEvent<HTMLElement>)=>handleCurrentActive(content,e)} className={clsx(`
                                flex flex-col items-center md:items-start w-full md:pl-4 py-2  rounded-sm 
                                capitalize  text-xs  md:text-sm
                                hover:bg-light-navy transition-all duration-100  cursor-pointer 
                                `,
                                content?.active ?'text-greenish-blue bg-light-navy transition-all border-b-[2px] md:border-b-[0px] md:border-l-[2px] border-greenish-blue' : 'text-slate', 

                            )}>
                                {content.degree}{` ${content.id['1']}`}
                            </h3>
                        ))
                    }
                    
                </div>
                </div>
        </>
    );
};

export default EducationSidebar;