'use client'
import HeaderSection from '@/app/components/Header/HeaderSection';
import GeneralDescription from './components/GeneralDescription';
import LottieAnimation from '@/app/components/Lottie/LottieAnimation';
import { useRef } from 'react';
import { useTransition } from '@/app/hooks/use-transition';

interface AboutProps {

};

function About({}:AboutProps) {

    const ref = useRef<HTMLElement>(null);
    useTransition(ref)
    return (
        <section ref={ref} id="about" className="h-full py-[100px] mx-auto flex flex-col justify-start mt-9 " >
            <div  className="flex flex-col justify-center md:items-start gap-[20px] pl-0 md:pl-5 lg:pl-20 ">
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