import React from 'react';

interface TechnologieProps {
    tech: string 
};

function Technologie({tech}:TechnologieProps) {
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="relative flex  flex-col items-center justify-center">
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