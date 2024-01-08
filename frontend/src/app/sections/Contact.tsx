'use client'
import Button from '../components/Button/Button';
import Link from 'next/link';
import { useMobile } from '../hooks/use-mobile';
import {config} from '@/config';
import Icon from '@/icons/Icon';
import cslx from "clsx"
interface ContactProps {

};

function Contact({}:ContactProps) {
    const isMobile = useMobile();
    return (
        <section className="flex flex-col items-center py-8 mx-auto gap-4 max-w-[600px] ">
            <div className="flex flex-col items-center gap-[30px] ">
                <h5 className="font-mono text-greenish-blue">4. What&apos;s next ? </h5>
                <h2 className="capitalize text-4xl md:text-[4rem] text-whitish font-bold ">Get in touch</h2>
                <p className="mx-auto px-auto text-slate text-center ">I&apos;m currently looking for new opportunities, especially in freelance. 
                    My inbox is always open whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
            </div>
            <div className="py-12">
                <Link href={`mailto:${config.email}`} className='relative group opacity-0 animate-fade-in-bottom animation-delay-[500ms]'>
                    <Button className="
                        text-greenish-blue py-4 px-8 border-[1px] rounded-md  
                        border-greenish-blue bg-transparent  bg-navy text-shadow box-shadow z-60
                        group-hover:bg-greenish-blue
                        transition-bg duration-500  " 
                        secondary
                    >
                        Say Hello !
                    </Button>
                    <Button className="
                        absolute text-greenish-blue py-4 px-8 border-[1px] rounded-md 
                        border-greenish-blue  bg-transparent text-shadow box-shadow z-60
                        -translate-y-[100%]
                        group-hover:-translate-x-1 group-hover:-translate-y-[calc(100%+0.25rem)] group-hover:bg-navy 
                        transition-all duration-100 delay-75 ease-out " 
                        secondary
                    >
                        Say Hello !
                    </Button>
                </Link>
            </div>
            <div className={cslx(isMobile?'flex':'flex lg:hidden',`  flex-row items-center gap-[50px] px-5 mt-10 `)}>
                {
                    config.socialLinks.map((link)=>(
                        <Link key={link.url} href={link.url}><Icon name={link.name} size={32} /></Link> 
                    ))                
                }
            </div>
            <div className="">
                <span className="flex flex-col items-center text-greenish-blue text-md font-mono">
                    Built by Yanis Tabellout 
                    <span className="text-xs  text-slate">(inspired from Brittany Chiang)
                    </span> 
                </span>
            </div>

        </section>
    );
};

export default Contact;