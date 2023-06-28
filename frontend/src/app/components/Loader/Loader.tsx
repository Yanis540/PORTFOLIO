'use client'
import LottieAnimation from '../Lottie/LottieAnimation';
import clsx from 'clsx';
import IconLoader from '@/icons/IconLoader';
import { useAnimateLoader } from './hooks/use-animate-loader';
interface LoaderProps {

};

function Loader({}:LoaderProps) {
    const {showLoaderAnimation,showLogoAnimation} = useAnimateLoader();
    return (
        <div className="flex flex-col w-full h-screen py-5 px-5 mx-auto  bg-navy relative max-w-[100vw] overflow-y-hidden">
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
                    "flex flex-col h-full w-full relative" ,
                )}>
                    <div className={clsx(
                        "absolute text-greenish-blue transition-all duration-500 delay-500", 
                        (!showLogoAnimation && !showLoaderAnimation) ? "w-12 h-12 top-0 left-0 disppear-loader": "top-[calc(50%-75px)] left-[calc(50%-100px)] w-[200px] h-[150px] "   // 64px == height of the navbar    

                    )}>
                        <IconLoader /> 
                    </div>
                </div>
                )
            }
        
        </div>
    );
};

export default Loader;