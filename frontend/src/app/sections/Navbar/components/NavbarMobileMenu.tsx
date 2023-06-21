import React from 'react';
import { Route } from '../Navbar';
import NavbarItem from './NavbarItem';
import Drawer from '@/app/components/Drawer/Drawer';

interface NavbarMobileMenuProps {
    onClose: ()=>void
    visible : boolean 
    routes : Route[]
};

function NavbarMobileMenu({onClose, visible,routes}:NavbarMobileMenuProps) {
    return (
        <Drawer isOpen={visible} onClose={onClose} >
            <div className="flex md:hidden flex-col items-start justify-between gap-6 p-2  ">
            {
                routes.map((route,index)=>(
                    <NavbarItem key={route.href} route={route} index={index} />  
                ))
            }
        </div>
        </Drawer>
    );
};

export default NavbarMobileMenu;