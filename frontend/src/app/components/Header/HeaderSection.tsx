import clsx from 'clsx';
import React from 'react';

interface HeaderSectionProps {
    section_number : number 
    title : string  
    wfull ? : boolean 
};

function HeaderSection({title,section_number,wfull=false}:HeaderSectionProps) {
    return (
        // TOP
        <div className={clsx("flex flex-col ",wfull ? 'w-full':'md:w-[70%] lg:w-[60%]')}>
            {/* Text */}
            <div className="flex flex-row items-center text-2xl md:text-4xl  gap-2 ">
                <span className="text-greenish-blue ">{section_number}.</span>
                <h2 className="
                    hover:text-greenish-blue 
                    cursor-pointer "
                >
                    {title}
                </h2>
                {/* Line */}
                <div className="flex-1 w-full h-[1px] border-t-[1px] border-t-lightest-navy " />
            </div>
        </div>
    );
};

export default HeaderSection;