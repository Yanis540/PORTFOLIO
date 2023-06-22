import React from 'react';
import Lottie from "lottie-react"
import animationData from "./assets/diamond.json"
interface DiamondProps {

};

function Diamond({}:DiamondProps) {
    return (
        <Lottie className='text-greenish-blue ' animationData={animationData} /> 
    );
};

export default Diamond;