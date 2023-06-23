import React from 'react';
import diamondData  from "./assets/diamond.json"
import logoAnimationData  from "./assets/animation.json"
import Lottie from "lottie-react"
import { resolveTripleslashReference } from 'typescript';

interface LottieAnimationProps {
    type ?: "diamond"|"logo-animation"
    loop ? : boolean 
};

function LottieAnimation({type, loop=true}:LottieAnimationProps) {
    const animationData = (()=>{
        switch(type){
            case "diamond":
                return diamondData
            default : 
                return logoAnimationData
        }

    })()
    return (
        <Lottie animationData={animationData} loop={loop} /> 
    );
};

export default LottieAnimation;