import React from 'react';
import Button from '../components/Button/Button';

interface PersonnelProps {

};
function Personnel({}:PersonnelProps) {
    return (
        <section id="hero" className="h-screen mx-auto ">
            <div className="flex flex-row items-center justify-around  mt-[84px] min-h-[calc(100%-84px)]">
                <div className="flex-1 flex flex-col gap-[20px] items-start  justify-center pl-0 md:pl-5 lg:pl-14 h-full relative z-10">
                    <span className=" text-greenish-blue text-md font-bold opacity-0 animate-fade-in-bottom animation-delay-[200ms]">Hi, my name is </span>
                    <h1 className="text-lightest-slate text-[2.8rem] md:text-[5rem] lg:text-8xl xl:text-12xl font-bold opacity-0 animate-fade-in-bottom animation-delay-[250ms] ">Yanis Tabellout.</h1>
                    <h2 className="text-slate text-[2rem] md:text-[5rem] lg:text-8xl xl:text-12xl font-bold opacity-0 animate-fade-in-bottom animation-delay-[300ms]">Passionate about computers.</h2>
                    <p className="text-slate drop-shadow-sm	 lg:max-w-[50%] opacity-0 animate-fade-in-bottom animation-delay-[400ms]">I&apos;m an algerian full stack web, recently graduated from the prestigious university of USTHB with a bachelor degree in <span className='text-greenish-blue' >computer science</span>, precisly in <span className="text-greenish-blue"> software enginnering</span> and information systems engineering </p>
                    <div className='relative group opacity-0 animate-fade-in-bottom animation-delay-[500ms]'>
                        <Button className="
                            text-greenish-blue py-4 px-8 border-[1px] rounded-md  
                            border-greenish-blue bg-transparent  bg-navy text-shadow box-shadow z-60
                            group-hover:bg-greenish-blue
                            transition-bg duration-500  " 
                            secondary
                        >
                            Check out the rest ! 
                        </Button>
                        <Button className="
                            absolute text-greenish-blue py-4 px-8 border-[1px] rounded-md 
                            border-greenish-blue  bg-transparent text-shadow box-shadow z-60
                            -translate-y-[100%]
                            group-hover:-translate-x-1 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:bg-navy 
                            transition-all duration-100 delay-75 ease-out " 
                            secondary
                        >
                            Check out the rest ! 
                        </Button>
                    </div>
                </div>
             

            </div>
        </section>
    );
};
export default Personnel;