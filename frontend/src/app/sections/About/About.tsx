'use client'
import {useEffect} from "react"
import clsx from 'clsx';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import Technologie from './components/Technologie';
import HeaderSection from '@/app/components/Header/HeaderSection';
import GeneralDescription from './components/GeneralDescription';
import LottieAnimation from '@/app/components/Lottie/LottieAnimation';

interface AboutProps {

};

function About({}:AboutProps) {

    const {ref,hasIntersected,inView} = useIntersectionObserver();
    return (
        <section ref={ref} id="about" className="h-full md:h-[90vh] mx-auto flex flex-col justify-start mt-9 " >
            <div  className={clsx(
                `
                    flex flex-col justify-center md:items-start gap-[20px]
                    pl-0 md:pl-5 lg:pl-20 
                    opacity-0 translate-y-0
                `,
                hasIntersected&&"opacity-100  animate-big-fade-in-bottom "
            )}>
                {/* Top  */}
               <HeaderSection  section_number={1} title="About me" /> 
                {/*Bottom */}
                <div   className="flex flex-col md:flex-row items-center justify-between md:px-4 w-full">
                    <GeneralDescription /> 
                    {/* Image or something */}
                    <div className='flex-[0.4] hidden md:flex' >
                        <LottieAnimation type="diamond"/> 
                    </div>

                </div>
           </div>
        </section>
    );
};

export default About;