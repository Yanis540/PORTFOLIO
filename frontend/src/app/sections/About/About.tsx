'use client'
import clsx from 'clsx';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';
import Technologie from './components/Technologie';
import HeaderSection from '@/app/components/Header/HeaderSection';
import GeneralDescription from './components/GeneralDescription';
import LottieAnimation from '@/app/components/Lottie/LottieAnimation';

interface AboutProps {

};

function About({}:AboutProps) {
    const {ref,hasIntersected} = useIntersectionObserver();
    return (
        <section className="h-full md:min-h-screen mx-auto flex flex-col justify-center overflow-y-hidden" >
            <div  ref={ref} className={clsx(
                `
                    flex flex-col justify-center md:items-start gap-[20px]
                    pl-0 md:pl-5 lg:pl-20 
                    opacity-0 animate-big-fade-in-bottom 
                `,
                hasIntersected&&"opacity-100 translate-y-0  "
            )}>
                {/* Top  */}
               <HeaderSection section_number={1} title="About me" /> 
                {/*Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between px-4 w-full">
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