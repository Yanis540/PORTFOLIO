'use client'
import clsx from 'clsx';
import IconLoader from '@/icons/IconLoader';
import { useAnimateLoader } from './hooks/use-animate-loader';
import { useEffect, useState } from 'react';
interface LoaderProps {

};

function Loader({}:LoaderProps) {
    const [isClient,setIsClient]= useState<boolean>(true)
    useEffect(()=>{
        setIsClient(true)
    },[])
    if(!isClient)return (
        <div className="flex flex-col w-full h-screen py-5 px-5 mx-auto  bg-navy relative max-w-[100vw] overflow-y-hidden"></div>
    )
    return <LoaderClient /> 
};


function LoaderClient({}){
    const {showLogoAnimation,ref} = useAnimateLoader();
    return (
        <div className="flex flex-col w-full h-screen py-5 px-5 mx-auto  bg-navy relative max-w-[100vw] overflow-y-hidden">
            <div className={clsx(
                "flex flex-col h-full w-full relative" ,
            )}>
                <div ref={ref}  className={clsx(
                    "absolute text-greenish-blue transition-all duration-500 delay-500 ", 
                    !   showLogoAnimation
                    ?   "w-12 h-12 top-0 left-0 disppear-loader"
                    :   "left-[calc(50%-75px)] top-[calc(50%-50px)]  w-[150px] h-[100px] "   // 64px == height of the navbar    

                )} suppressHydrationWarning={true}>
                    <IconLoader /> 
                </div>
            </div>
        </div>
    );
}
export default Loader;