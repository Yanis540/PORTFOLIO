import React , {LegacyRef} from 'react';
import diamondData  from "../assets/diamond.json"
import logoAnimationData  from "../assets/animation.json"
import logoAnimationWithoutBgData  from "../assets/animation_without_background.json"
import { LottieOptions, useLottie } from "lottie-react"

interface LottieAnimationProps {
    type ?: "diamond"|"logo-animation"|"logo-animation-without-bg"
    options ? : LottieOptions<"svg">
    ref ?: LegacyRef<HTMLDivElement> 
    style?: React.CSSProperties | undefined
    loop ?: boolean 
};

const LottieAnimation = ({type,options,loop=true , style}:LottieAnimationProps)=> {
    const animationData = (()=>{
        switch(type){
            case "diamond":
                return diamondData
            case "logo-animation-without-bg":
                return logoAnimationWithoutBgData
            default : 
                return logoAnimationData
        }

    })() ; 
    const defaultOptions = {
        animationData: animationData,
        loop: loop,
    }
    
    return useLottie(options?? defaultOptions,style)
   
};

export default LottieAnimation;