import { ExternalUrl } from "@/types";


const socialLinks :ExternalUrl[] = [
    {
        name:"github",
        url:"https://github.com/Yanis540",
        title:"Github repo"
    }, 
    {
        name:"linkedin",
        url:"https://www.linkedin.com/in/yanis-tabellout-323a64254/",
        title:"Linkdin profile"
    }, 
    {
        name:"twitter",
        url:"https://twitter.com/yanis5401",
        title:"Twitter profile"
    }, 
    
]
export const config={
    email : "yanistabellout4@gmail.com",
    socialLinks,
    srConfig: (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
}
