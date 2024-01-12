import { Route } from "../Navbar";


const useRoutes = ()=>{
    const routes:Route[]=[
        {
            name:"About",
            href:"about",
            delay:80
        },
        {
            name:"Education",
            href:"education",
            delay:100
        },
        {
            name:"Projects",
            href:"projects",
            delay:150
        },
        {
            name:"Contact",
            href:"contact",
            delay:200,
        },
        {
            name:"Resume",
            href:`${process.env.NEXT_PUBLIC_SERVER_URL}/cv/resume.pdf`,
            delay:250,
            resume:true
        },
    ]
    return routes; 
}
export {
    useRoutes
}

