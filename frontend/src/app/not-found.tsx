"use client"
import React from 'react';
import Navbar from './sections/Navbar/Navbar';
import LottieAnimation from './components/Lottie/LottieAnimation';
import Button from './components/Button/Button';
import Link from 'next/link';

interface NotFoundPageProps {

};

function NotFoundPage({}:NotFoundPageProps) {
    return (
    <div className="flex flex-col min-h-screen h-full px-[10px] md:px-5 bg-navy w-full relative max-w-[100vw] overflow-y-hidden">
        <div className="h-screen mx-auto w-full">
            <div className="flex flex-col items-center justify-center h-full  ">
                {/* Animation */}
                <LottieAnimation type="not-found" loop={true} /> 
                {/* redirect */}
                <div className="flex flex-col items-center gap-[40px]">
                    <h2 className="text-slate text-xl md:text-2xl lg:text-4xl">Oups ! Page was not found </h2>
                    <div className='relative group opacity-0 animate-fade-in-bottom animation-delay-[500ms]'>
                        <Link href="/">
                            <Button className="
                                text-md text-greenish-blue py-4 px-8 border-[1px] rounded-md  
                                border-greenish-blue bg-transparent  bg-navy text-shadow box-shadow z-60
                                group-hover:bg-greenish-blue
                                transition-bg duration-500  " 
                                secondary
                            >
                                Return 
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button className="
                                absolute text-md text-greenish-blue py-4 px-8 border-[1px] rounded-md 
                                border-greenish-blue  bg-transparent text-shadow box-shadow z-60
                                -translate-y-[100%]
                                group-hover:-translate-x-1 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:bg-navy 
                                transition-all duration-100 delay-75 ease-out " 
                                secondary
                            >
                                Return 
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default NotFoundPage;