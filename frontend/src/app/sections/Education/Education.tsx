'use client'
import {MouseEvent, useState,useEffect,useMemo, useRef} from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import clsx from 'clsx';
import HeaderSection from '../../components/Header/HeaderSection';
import { EducationalContent, useEducation } from './hooks/use-education';
import EducationSidebar from './components/EducationSidebar';
import EducationContent from './components/EducationContent';
import { useTransition } from '@/app/hooks/use-transition';

interface EducationProps {

};

// - Eduationnal background // INSPIRE BY this : https://v4.brittanychiang.com (0.2 where i have worked )
function Education({}:EducationProps) {
    
    const ref = useRef<HTMLElement>(null);
    const [contents,setContent] = useEducation(); 
    const activeContent = useMemo(()=>{
        return contents.find((content)=>content.active)!
    },[contents]); 
    const handleCurrentActive = (content:EducationalContent,e:MouseEvent<HTMLElement>)=>{
        if(content.active)
            return ; 
        setContent(content.id)
        return ;
    }
    useTransition(ref)

    return (
        <section ref={ref} id="education" className="h-full py-[100px] mx-auto flex flex-col justify-start" >
            <div   className=" flex flex-col justify-center md:items-start gap-[40px] py-4 pl-0 md:pl-20 lg:pl-40">
                {/* Top  */}
               <HeaderSection section_number={2} title="Education" wfull /> 
                {/*Bottom */}
                <div  className="flex flex-col md:flex-row  gap-6 h-full w-full">
                    {/* Sidebar */}
                    <EducationSidebar handleCurrentActive={handleCurrentActive} contents={contents} /> 
                    {/* Content */}
                    
                    <EducationContent activeContent = {activeContent} /> 
                </div>
           </div>
        </section>
    );
};

export default Education;