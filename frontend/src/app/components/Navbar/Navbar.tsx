'use client'
import {useEffect, useState} from 'react';
import NavbarItem from './components/NavbarItem';
import {RxHamburgerMenu} from "react-icons/rx"
import NavbarMobileMenu from './components/NavbarMobileMenu';
import { useScroll } from './hooks/use-scroll';
import clsx from 'clsx';

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
    useEffect(()=>{
        console.log(hideNavbar)
    },[hideNavbar])
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
            href:"#cContact"
        },
    ]

    return (
    <>
        <nav className={clsx(
            "w-[calc(100%-2.5rem)] z-40 fixed py-5 left-0 right-0 mx-auto h-[64px]  rounded-b-sm border-b-[1px] border-b-greenish-blue transition-all duration-200  ", 
            hideNavbar ? "-translate-y-20 ":"bg-navy"
        )}
        >
            <div className="flex flex-row items-center justify-between" >
                {/* Logo */}
                <div className="flex-1 h-4 w-4">
                    Logo
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