'use client'
import React from 'react';
import { Route } from '../Navbar';
import {Link} from "react-scroll"
import clsx from 'clsx';

interface NavbarItemProps {
    route : Route
    index : number
};

function NavbarItem({route,index}:NavbarItemProps) {
    if(route.resume)
    return (
        <a href={route.href} download="resume.pdf" className={clsx("flex flex-row font-mono items-center text-md gap-2 opacity-0 translate-y-0 animate-mini-fade-in-top ","text-white animation-delay-[250ms]")}>
            <h2 className="
                hover:text-greenish-blue 
                cursor-pointer text-sm font-light  animation-delay-100 rounded-lg"
            >
                {route.name}
            </h2>
        </a> 
    )
    
    return (
    <>
        <Link 
            to={route.href} spy={true} smooth={true} 
            className={clsx(
                "flex flex-row font-mono items-center text-md gap-2 opacity-0 translate-y-0 animate-mini-fade-in-top ",
                route.delay == 80 &&`animation-delay-[80ms]`,
                route.delay == 100 &&`animation-delay-[100ms]`,
                route.delay == 150 &&`animation-delay-[150ms]`,
                route.delay == 200 &&`animation-delay-[200ms]`,
                route.delay == 250 &&``,

            )}
            >
            <span className="text-greenish-blue ">{index+1}.</span>
            <h2 className="
                hover:text-greenish-blue 
                cursor-pointer link link-underline link-underline-black text-sm font-light"
            >
                {route.name}
            </h2>
        </Link>
       
    </>
    );
};

export default NavbarItem;