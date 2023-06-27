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
            delay:200
        },
    ]
    return routes; 
}
export {
    useRoutes
}

