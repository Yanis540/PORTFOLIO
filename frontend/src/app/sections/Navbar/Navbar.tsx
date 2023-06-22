'use client'
import {useEffect, useState} from 'react';
import NavbarItem from './components/NavbarItem';
import {RxHamburgerMenu} from "react-icons/rx"
import NavbarMobileMenu from './components/NavbarMobileMenu';
import { useScroll } from './hooks/use-scroll';
import clsx from 'clsx';
import IconLogo from '@/icons/IconLogo';

interface NavbarProps {

};

export type Route = {
    name:string 
    href: string
}
// Navbar : 
// - hide when ur scrolling down 
function Navbar({}:NavbarProps) {
    const [showMobileView, setShowMobileView] = useState<boolean>(false);
    const toggleMobileMenu = ()=>setShowMobileView(!showMobileView);
    const {hideNavbar} = useScroll();
    const routes:Route[]=[
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Education",
            href:"#education"
        },
        {
            name:"Projects",
            href:"#projects"
        },
        {
            name:"Contact",
            href:"#contact"
        },
    ]

    return (
    <>
        <nav className={clsx(
            "w-full z-40 fixed flex flex-col justify-center py-5 left-0 right-0 mx-auto h-[64px] rounded-b-sm transition-all duration-200     ", 
            hideNavbar ? "-translate-y-20 backdrop-brightness-75 backdrop-blur-lg shadow-md ":" backdrop-blur-md shadow-md"
        )}
        >
            <div className="flex flex-row items-center justify-between px-5 " >
                {/* Logo */}
                <div className="h-12 w-12 bg-transparent text-greenish-blue opacity-0 animate-mini-fade-in-bottom animation-delay-[50ms]">
                    <IconLogo /> 
                </div>

                {/* right  display*/}
                <div className="hidden md:flex flex-row items-center justify-between gap-6 p-2  ">
                    {
                        routes.map((route,index)=>(
                            <NavbarItem key={route.href} route={route} index={index} />  
                        ))
                    }
                </div>
                <div
                    onClick={toggleMobileMenu}
                    className='flex md:hidden flex-row items-center gap-2 cursor-pointer '
                >   
                    <RxHamburgerMenu className=" hover:text-greenish-blue transition-all duration-300 " size={30} /> 
                </div>
           </div>

        </nav>
        <NavbarMobileMenu routes={routes} onClose={()=>{setShowMobileView(false)}} visible={showMobileView} />
    </>
    );
};

export default Navbar;