

import { loaderDelay } from "@/utils";
import {useState , useEffect} from "react"

const useLoader = ()=>{

    const [showLoader,setShowLoader] = useState<boolean>(true);
    useEffect(()=>{
        if(typeof window !="undefined"){
            const timeout = setTimeout(()=>{
                setShowLoader(false);
            },loaderDelay)

            return ()=>clearTimeout(timeout);
        }
    },[])

    return showLoader;

}


export {
    useLoader
}
