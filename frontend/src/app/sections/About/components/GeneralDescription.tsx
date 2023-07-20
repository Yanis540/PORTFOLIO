import React from 'react';
import Technologie from './Technologie';

interface GeneralDescriptionProps {

};

function GeneralDescription({}:GeneralDescriptionProps) {
    const web_technologies_left = ['Javascript','Python','React',"Prisma",'NodeJs','GraphQL','PostgreSql',"firebase"]
    const web_technologies_right = ['TypeScript','NextJs',"React Native",'Django','tRPC',"SQL",'MySql','Mongodb']
    const ia_technologies_left = ['Tensorflow','Matplotlib','Keras']
    const ia_technologies_right = ['Pytorch','Pandas','Scikit-learn']
    return (
        <>
            {/* Bla bla about me  */}
        
            <div className='flex-[0.6] flex flex-col items-start gap-4 w-full md:w-[60%]'>
                {/* Paragraph */}
                <p className="text-slate">
                    Hello! My name is Yanis and I enjoy creating things that are IT related. 
                    My interest in <span className="text-greenish-blue mr-1">development and web development</span> started back in 2020 when My big brother introduced me to the world of HTML and CSS and Javascript and i completly fell 
                    in love with coding in general. I also started to have a little more interest in mobile development which is growing exponentially in recent years. 
                </p>
                <p className="text-slate">
                    I also had the privilege to study at one of the most prestigious universities in Algeria which is <span className="text-greenish-blue mr-1" >USTHB</span>
                    and finished as <span className="text-greenish-blue mr-1">valedictorian</span> in my bachelor&apos;s degree in <span className="text-greenish-blue mr-1">Software engineering.</span>
                    I&apos;m also currently continuing my master&apos;s degree in computer science in one of the most illustrious university in the world <span className="text-greenish-blue mr-1">Sorbonne University.</span>
                </p>
                <p className="text-slate">
                    Here are some technologies i&apos;m familiar with :
                </p>
                {/*technologies  */}
                <div className="flex flex-col sm:flex-row items-start md:items-center justify-around gap-4 sm:gap-0 w-full pl-8 sm:pl-0">
                    {/* technologie left  */}
                    <div className="flex flex-col">
                        {
                            web_technologies_left.map((tech)=>(
                                <Technologie key={tech} tech={tech} /> 
                            ))
                        }
                    </div>
                    {/* technologie right  */}
                    <div className="flex flex-col">
                        {
                            web_technologies_right.map((tech)=>(
                                <Technologie key={tech} tech={tech} /> 
                            ))
                        }
                    </div>
                </div>
                <p className="text-slate">
                    I&apos;m also an IA enthousiast, especially in creating <span className="text-greenish-blue mr-1" >Deep Learning and machine learning models</span>. I work 
                    mainly with : 
                </p>
                {/*  Technologies IA */}
                <div className="flex flex-col sm:flex-row items-start md:items-center justify-around gap-4 sm:gap-0 w-full pl-8 sm:pl-0">
                    {/* technologie left  */}
                    <div className="flex flex-col">
                        {
                            ia_technologies_left.map((tech)=>(
                                <Technologie key={tech} tech={tech} /> 
                            ))
                        }
                    </div>
                    {/* technologie right  */}
                    <div className="flex flex-col">
                        {
                            ia_technologies_right.map((tech)=>(
                                <Technologie key={tech} tech={tech} /> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default GeneralDescription;