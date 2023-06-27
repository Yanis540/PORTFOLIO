'use client'
import { useEffect , useRef, useState } from 'react';
import LottieAnimation from '../Lottie/LottieAnimation';
import { loaderDelay } from '@/utils';
import clsx from 'clsx';
interface LoaderProps {

};

function Loader({}:LoaderProps) {
    const ref = useRef<any>(); 
    const [showLoaderAnimation, setShowLoaderAnimation] = useState<boolean>(true);
    const [showLogoAnimation, setShowLogoAnimation] = useState<boolean>(true);
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setShowLoaderAnimation(false);
            setShowLogoAnimation(true);
        },loaderDelay)// running for loader delay time then setting the element to invisible  
        return ()=>clearTimeout(timeout);
    },[])
    return (
        <>
            <LottieAnimation 
                type="logo-animation-without-bg" 
                loop = {false}
                className={clsx(
                    "flex-1  flex-col items-center justify-center ", 
                    showLoaderAnimation?"flex" :"hidden "
                )}
            /> 
        </>
    );
};

export default Loader;