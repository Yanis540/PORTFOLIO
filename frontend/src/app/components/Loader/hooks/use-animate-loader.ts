import { logoLoaderAnimationDelay, lottieLoaderAnimationDelay } from "@/utils";
import { useEffect, useState } from "react";


const useAnimateLoader = ()=>{
    const [showLoaderAnimation, setShowLoaderAnimation] = useState<boolean>(true);
    const [showLogoAnimation, setShowLogoAnimation] = useState<boolean>(false);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setShowLoaderAnimation(false);
            setShowLogoAnimation(true);
        },lottieLoaderAnimationDelay)// running for loader delay time then setting the element to invisible  
        return ()=>clearTimeout(timeout);
    },[])
    useEffect(()=>{
        if(showLogoAnimation){
            const timeout = setTimeout(()=>{
                setShowLogoAnimation(false);
            },logoLoaderAnimationDelay)
            return ()=>clearTimeout(timeout);
        }
    },[showLogoAnimation])

    return{showLoaderAnimation,showLogoAnimation}
}

export {useAnimateLoader}

