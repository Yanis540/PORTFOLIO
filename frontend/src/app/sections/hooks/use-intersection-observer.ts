import {useState,useEffect} from 'react';
import { useInView } from 'react-intersection-observer';


const useIntersectionObserver = ()=>{
    const [hasIntersected,setHasIntersected] = useState<boolean>(false);
    const { ref, inView, entry   } = useInView({threshold:0.01,initialInView:false});
    useEffect(()=>{
        console.log({inView,hasIntersected})
        if(inView && ! hasIntersected)
            setHasIntersected(true);
    },[inView,hasIntersected])
    return {hasIntersected, ref}
}
export{ 
    useIntersectionObserver
}

