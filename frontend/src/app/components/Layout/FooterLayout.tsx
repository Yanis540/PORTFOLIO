"use client"
import { useMobile } from '@/app/hooks/use-mobile';
import {config} from '@/config';
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
                    flex flex-col gap-[40px] items-center mb-[40px] relative `,
                    !isMobile && `translate-y-0 
                        opacity-100 transition-all duration-[800ms] ease-in 
                        pointer-events-auto`,
                )}>
                    {
                        config.socialLinks.map((link)=>(
                            <Link key={link.url} target='_blank' href={link.url}><Icon name={link.name} /> </Link>
                        ))
                    }
                </div>
                {/* Bar */}
                <div className={clsx(`
                        flex flex-col items-center 
                    `,
                    !isMobile && ` scale-y-[100%] opacity-100 transition-all origin-bottom duration-800 pointer-events-none `
                )}>
                    <div className="border-[0.1px] border-greenish-blue h-32 w-[0.1px] rounded-sm"></div>
                </div>
       
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
                    <Link href={`mailto:${config.email}`}>{config.email}</Link>
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