"use client"
import {useState,useEffect} from 'react';
import { useInView } from 'react-intersection-observer';


const useIntersectionObserver = ()=>{
    const [hasIntersected,setHasIntersected] = useState<boolean>(false);
    const { ref, inView, entry   } = useInView({threshold:0,initialInView:false});
    useEffect(()=>{
        if(inView && ! hasIntersected)
            setHasIntersected(true);
    },[inView,hasIntersected])
    return {hasIntersected, ref,inView}
}
export{ 
    useIntersectionObserver
}

