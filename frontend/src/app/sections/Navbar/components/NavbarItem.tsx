import React from 'react';
import { Route } from '../Navbar';
import {Link} from "react-scroll"
import clsx from 'clsx';

interface NavbarItemProps {
    route : Route
    index : number
};

function NavbarItem({route,index}:NavbarItemProps) {
    return (
        <Link 
            to={route.href} spy={true} smooth={true} 
            className={clsx("flex flex-row font-mono items-center text-md gap-2 opacity-0 translate-y-0 animate-mini-fade-in-top ",`animation-delay-[${150}ms]`)}>
            <span className="text-greenish-blue ">{index+1}.</span>
            <h2 className="
                hover:text-greenish-blue 
                cursor-pointer link link-underline link-underline-black"
            >
                {route.name}
            </h2>
        </Link>
    );
};

export default NavbarItem;