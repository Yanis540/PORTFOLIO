import React from 'react';
import { EducationalContent } from '../hooks/use-education';
import Link from 'next/link';
import Technologie from '../../About/components/Technologie';

interface EducationContentProps {
    activeContent : EducationalContent
};

function EducationContent({activeContent}:EducationContentProps) {
    return (
        <div className="flex-1 flex flex-col gap-4">
            {/* Details about the formation */}
           <div className="flex flex-col gap-1">
                {/* where and what   */}
                <h2 className="flex flex-col md:flex-row md:items-center gap-3 text-xl md:text-2xl  font-bold ">
                    {activeContent.field}
                    <span className="
                        text-greenish-blue relative 
                        link link-underline link-underline-black
                    ">
                        <Link href="https://www.usthb.dz" >
                        @{activeContent.location}
                        </Link>
                    </span>
                </h2>
                {/* Where */}
                <div>
                    <h2 className="text-light-slate font-mono font-bold text-sm">{activeContent?.started_date} - {activeContent?.end_date} </h2>
                </div>
            </div>
            {/* What you delivered */}
            <div className='flex flex-col items-start pl-8 md:pl-5 gap-[10px]'>
                {
                    activeContent?.delivered.map((delivered_value,index)=>(
                        <Technologie key={index} tech={delivered_value} center_triangle={false} /> 
                    ))
                }
            </div>
        </div>
    );
};

export default EducationContent;