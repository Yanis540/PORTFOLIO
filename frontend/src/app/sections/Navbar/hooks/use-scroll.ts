import { useEffect, useRef, useState } from "react";


const useScroll=()=>{

    const [hideNavbar, setHideNavbar] = useState<boolean>(false);
    const lastScrollTop = useRef(0)
    useEffect(()=>{
        const TOP_OFFSET = 0.5*screen.height ; 

        const handleScroll=()=>{
            var st = window.scrollY || TOP_OFFSET; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop.current && st> TOP_OFFSET) {
               // downscroll code
               lastScrollTop.current = st
                    setHideNavbar(true)
            } else 
                if (st < lastScrollTop.current) {
                // upscroll code
                    setHideNavbar(false)
                    lastScrollTop.current = st
                } 
                else 
                    lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        }
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    return  {hideNavbar}
}

export {
    useScroll
}