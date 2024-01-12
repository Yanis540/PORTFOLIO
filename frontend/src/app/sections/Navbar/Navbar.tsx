'use client'
import {useRef, useState} from 'react';
import NavbarItem from './components/NavbarItem';
import {RxHamburgerMenu} from "react-icons/rx"
import NavbarMobileMenu from './components/NavbarMobileMenu';
import { useScroll } from './hooks/use-scroll';
import clsx from 'clsx';
import IconLogo from '@/icons/IconLogo';
import {Link} from 'react-scroll';
import { useRoutes } from './hooks/use-routes';
import { useOnClickOutside } from '@/app/hooks/use-on-click-oustide';

interface NavbarProps {

};

export type Route = {
    name:string 
    href: string
    delay:number, 
    resume ? : boolean 
}
// Navbar : 
// - hide when ur scrolling down 
function Navbar({}:NavbarProps) {
    const [showMobileView, setShowMobileView] = useState<boolean>(false);
    const toggleMobileMenu = ()=>setShowMobileView(!showMobileView);
    const {hideNavbar,lastScrollTop} = useScroll();
    const routes = useRoutes();
    return (
    <>
        <nav className={clsx(
            "z-40 fixed left-0 right-0 flex flex-col justify-center w-full h-[64px] py-5 mx-auto rounded-b-sm transition-all duration-200 ", 
            "before:absolute before:w-full before:h-full before:bg-navy before:opacity-60 before:z-10", 
            hideNavbar 
                ? "-translate-y-20 backdrop-brightness-75 backdrop-blur-md"
                : lastScrollTop.current > 250&& "backdrop-blur-sm ",
            typeof window =="undefined"
                ? "shadow-navy-shdow"
                : lastScrollTop.current <= 250 
                ?"" :"shadow-navy-shdow" 
        )}
        >
            <div className="flex flex-row items-center justify-between px-1 md:px-5 z-10" >
                {/* Logo */}
                <Link to="hero"smooth={true} className="h-12 w-12 bg-transparent text-greenish-blue animate-mini-fade-in-bottom  cursor-pointer ">
                    <IconLogo /> 
                </Link>

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
                    className='flex md:hidden flex-row items-center gap-2 cursor-pointer'
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