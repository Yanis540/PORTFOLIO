import React from 'react';
import { Route } from '../Navbar';

interface NavbarItemProps {
    route : Route
    index : number
};

function NavbarItem({route,index}:NavbarItemProps) {
    return (
        <div className="flex flex-row font-mono items-center text-md gap-2 ">
            <span className="text-greenish-blue ">{index+1}.</span>
            <h2 className="
                hover:text-greenish-blue 
                cursor-pointer link link-underline link-underline-black"
            >
                {route.name}
            </h2>
        </div>
    );
};

export default NavbarItem;