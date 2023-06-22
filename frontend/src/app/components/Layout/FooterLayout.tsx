import Icon from '@/icons/Icon';
import Link from 'next/link';
import React from 'react';
import {FaCircle} from "react-icons/fa";
interface FooterLayoutProps {

};

function FooterLayout({}:FooterLayoutProps) {
    return (
        <div className="
            hidden lg:flex flex-row  items-end justify-between w-full px-5  mx-auto 
            fixed bottom-0 right-0 left-0 
            opacity-0 animate-fade-in-bottom animation-delay-[1500ms]
            
        ">
            {/* Left side */}
           <div className="flex flex-col items-center relative group"> 
                <div className="
                    flex flex-col gap-[40px] items-center mb-[20px] relative 
                    translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[800ms] ease-in
                ">
                    <Link target='_blank' href="https://github.com/Yanis540"  > <Icon type='github' /></Link> 
                    <Link target='_blank' href="https://www.linkedin.com/in/yanis-tabellout-323a64254/"><Icon type='linkedin' /></Link> 
                    <Link target='_blank' href="https://twitter.com/yanis5401"><Icon type='twitter' /></Link> 
                </div>
                <div className="
                    flex flex-col items-center
                    opacity-0 scale-y-0 group-hover:scale-y-[100%] group-hover:opacity-100 transition-all origin-bottom duration-800 
                ">
                    <div className="border-[0.1px] border-greenish-blue h-32 w-[0.1px] rounded-sm"></div>
                </div>
                <div className='flex flex-col items-center w-full absolute bottom-0 right-0 mx-auto text-greenish-blue 
                    translate-y-[-50%] group-hover:scale-[0.8] group-hover:translate-y-[50%] transition-all duration-300ms
                '>
                    <FaCircle size={24} /> 
                </div>
           </div>
            {/* Right side */}

           <div className="flex flex-col items-center justify-end h-full relative  ">
                <div className="flex flex-col items-center mb-28 rotate-[90deg] text-lightest-slate text-sm ">
                    <Link href="mailto:yanistabellout4@gmail.com">yanistabellout4@gmail.com</Link>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border-[0.1px] border-greenish-blue h-32 w-[0.1px] rounded-sm"></div>
                </div>
           </div>
        </div>
    );
};

export default FooterLayout;