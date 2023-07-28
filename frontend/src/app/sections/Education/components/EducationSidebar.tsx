'use client'
import {MouseEvent, useMemo, RefObject , forwardRef, useRef,useEffect, useState} from 'react';
import { EducationalContent } from '../hooks/use-education';
import clsx from 'clsx';
import { useActiveBar } from '@/app/hooks/use-active-bar';

interface EducationSidebarProps {
    handleCurrentActive:(content: EducationalContent, e: MouseEvent<HTMLElement>) => void
    contents : EducationalContent[]

};  

const EducationSidebar = (({handleCurrentActive,contents   }:EducationSidebarProps)=> {
    const {tabsRef,activeTab} = useActiveBar(contents); 
    if(!tabsRef )
        return null ; 
    return (
        <>
             {/* Sidebar */}
             <div className="md:flex-[0.25] flex flex-col-reverse md:flex-row w-full  h-full relative ">
                <div className="flex w-full md:w-[0.5px] min-h-full relative" > 
                    <div className="flex-1 flex flex-col border-b-[0.5px] md:border-l-[0.5px] border-lightest-navy"></div>
                </div>
                <div className="flex-[1] flex  flex-row md:flex-col w-full items-start ">
                    {
                        contents.map((content,index)=>(
                            <h3 
                                key={content.id} ref={(el) => {
                                    if(((tabsRef as any)?.current) && el)
                                        (tabsRef as any).current![index] = el 
                                }} 
                                id={content.id} onClick={(e:MouseEvent<HTMLElement>)=>handleCurrentActive(content,e)} 
                                className={clsx(`
                                    flex flex-col items-center md:items-start w-full md:pl-4 py-2  rounded-sm 
                                    capitalize  text-xs  md:text-sm
                                    hover:bg-light-navy transition-all duration-100  cursor-pointer 
                                    `,
                                    content?.active ?'text-greenish-blue bg-light-navy transition-all  border-greenish-blue' : 'text-slate', 
                                    // content?.active ?'text-greenish-blue bg-light-navy transition-all border-b-[2px] md:border-b-[0px] md:border-l-[2px] border-greenish-blue' : 'text-slate', 

                                )}
                            >
                                {content.degree}{` ${content.id['1']}`}
                            </h3>
                        ))
                    }
                    <span
                        className="absolute bottom-0 block  bg-greenish-blue transition-all duration-200"
                        style={{...activeTab}}
                    />
                    
                </div>
                </div>
        </>
    );
});

export default EducationSidebar;