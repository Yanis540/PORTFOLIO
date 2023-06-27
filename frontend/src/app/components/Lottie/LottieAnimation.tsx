import React , {RefObject,LegacyRef} from 'react';
import diamondData  from "./assets/diamond.json"
import logoAnimationData  from "./assets/animation.json"
import logoAnimationWithoutBgData  from "./assets/animation_without_background.json"
import Lottie from "lottie-react"

interface LottieAnimationProps {
    type ?: "diamond"|"logo-animation"|"logo-animation-without-bg"
    loop ? : boolean 
    ref ?: LegacyRef<HTMLDivElement> 
    className ? : string
};

function LottieAnimation({type, loop=true,ref=undefined, className=""}:LottieAnimationProps) {
    const animationData = (()=>{
        switch(type){
            case "diamond":
                return diamondData
            case "logo-animation-without-bg":
                return logoAnimationWithoutBgData
            default : 
                return logoAnimationData
        }

    })()
    return (
        <Lottie ref={ref} animationData={animationData} loop={loop}  className={className}/> 
    );
};

export default LottieAnimation;