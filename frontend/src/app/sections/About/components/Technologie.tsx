import clsx from 'clsx';
import React from 'react';

interface TechnologieProps {
    tech: string 
    center_triangle ?: boolean
};

function Technologie({tech,center_triangle=true}:TechnologieProps) {
    return (
        <div className={clsx("flex flex-row gap-2 relative ",center_triangle?"items-center":"items-start ")}>
            <div className={clsx("relative flex  flex-col items-center justify-center",!center_triangle&&"mt-2 ")}>
                <div className="relative w-1 h-1
                border-t-[5px] border-t-transparent
                border-l-[5px] border-l-greenish-blue
                border-b-[5px] border-b-transparent " />
                <div className="w-0 h-0 absolute 
                    border-t-[3.5px] border-t-transparent
                    border-l-[3.5px] border-l-navy
                    border-b-[3.5px] border-b-transparent" 
                /> 
            </div>
        
            
            <h2 className="text-slate text-md relative" >
                {tech}
            </h2>
        </div>
    );
};

export default Technologie;