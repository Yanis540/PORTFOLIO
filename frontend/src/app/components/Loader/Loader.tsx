'use client'
import { useEffect , useState } from 'react';
import LottieAnimation from '../Lottie/LottieAnimation';
import { logoLoaderAnimationDelay, lottieLoaderAnimationDelay } from '@/utils';
import clsx from 'clsx';
import IconLoader from '@/icons/IconLoader';
import { useAnimateLoader } from './hooks/use-animate-loader';
interface LoaderProps {

};

function Loader({}:LoaderProps) {
    const {showLoaderAnimation,showLogoAnimation} = useAnimateLoader();
    return (
        <div className="flex flex-col w-full h-screen px-[10px] md:px-5 bg-navy relative max-w-[100vw] overflow-y-hidden">
           {showLoaderAnimation&& (
            <div className='flex flex-col items-center h-full w-full relative'>
                <LottieAnimation 
                    type="logo-animation-without-bg" 
                    loop = {false}
                    className={clsx(
                        "flex-1  flex-col items-center  justify-center absolute top-0 right-0 h-full w-full overflow-y-hidden", 
                        showLoaderAnimation?"flex" :"hidden " 
                    )}
                />
            </div> 
           )} 

            {
                (showLogoAnimation|| (!showLogoAnimation && !showLoaderAnimation))&& (
                <div className={clsx(
                    "flex flex-col items-center justify-center h-full w-full " ,
                    !showLogoAnimation && !showLoaderAnimation && "  absolute top-0 left-0  -translate-x-[45%] -translate-y-[45%] scale-[0.4] transition-all opacity-0 duration-500 delay-500 "       
                )}>
                    <div className="text-greenish-blue w-[200px] h-[150px]    ">
                        <IconLoader /> 
                    </div>
                </div>
                )
            }
        
        </div>
    );
};

export default Loader;