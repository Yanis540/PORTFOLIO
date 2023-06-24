"use client"
import { useMobile } from '@/app/hooks/use-mobile';
import Icon from '@/icons/Icon';
import clsx from 'clsx';
import Link from 'next/link';
import {useMemo} from 'react';
import {FaCircle} from "react-icons/fa";

interface FooterLayoutProps {

};

function FooterLayout({}:FooterLayoutProps) {
    const isMobile = useMobile();
    return (
    <>
        {/* Left side */}
        <div className="
            hidden lg:flex flex-row items-end justify-between px-5  mx-auto 
            fixed bottom-0 left-0 
            opacity-0 animate-fade-in-bottom animation-delay-[1500ms] 
            
        ">
           <div className="flex flex-col items-center relative group"> 
                {/* Links */}
                <div className={clsx(`
                        flex flex-col gap-[40px] items-center mb-[20px] relative 
                        
                    `,
                    !isMobile && `translate-y-full opacity-0 group-hover:translate-y-0 
                        group-hover:opacity-100 transition-all duration-[800ms] ease-in 
                        pointer-events-none group-hover:pointer-events-auto`,
                )}>
                    <Link target='_blank' href="https://github.com/Yanis540"  > <Icon type='github' /></Link> 
                    <Link target='_blank' href="https://www.linkedin.com/in/yanis-tabellout-323a64254/"><Icon type='linkedin' /></Link> 
                    <Link target='_blank' href="https://twitter.com/yanis5401"><Icon type='twitter' /></Link> 
                </div>
                {/* Bar */}
                <div className={clsx(`
                        flex flex-col items-center 
                    `,
                    !isMobile && `opacity-0 scale-y-0 group-hover:scale-y-[100%] group-hover:opacity-100 transition-all origin-bottom duration-800
                        pointer-events-none group-hover:pointer-events-auto`
                )}>
                    <div className="border-[0.1px] border-greenish-blue h-32 w-[0.1px] rounded-sm"></div>
                </div>
                {/* Circle */}
                {
                    !isMobile  && (
                    <div className='flex flex-col items-center w-full absolute bottom-0 right-0 mx-auto text-greenish-blue 
                        translate-y-[-50%] group-hover:scale-[0.8] group-hover:translate-y-[50%] transition-all duration-300ms pointer-events-none
                    '>
                        <FaCircle size={24} /> 
                    </div>
                    )
                }
       
           </div>
        </div>
        {/* Right side */}
        <div className="
            hidden lg:flex flex-row items-center  px-5  
            fixed bottom-0 right-0 w-fit
            opacity-0 animate-fade-in-bottom animation-delay-[1500ms]
            
        ">
           <div className="flex flex-col items-center h-full w-fit relative translate-x-[45%] ">
                <div className="absolute flex flex-col items-center -top-full w-fit mb-28 rotate-[90deg]  text-lightest-slate text-sm "> {/*//*/}
                    <Link href="mailto:yanistabellout4@gmail.com">yanistabellout4@gmail.com</Link>
                </div>
                <div className="flex flex-col items-center">
                    <div className="border-[0.1px] border-greenish-blue h-32 w-[0.1px] rounded-sm"></div>
                </div>
           </div>
        </div>
    </>
    );
};

export default FooterLayout;