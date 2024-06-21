import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLoader } from "@/app/hooks/use-loader";

const useAnimateLoader = ()=>{
    // const [showLoaderAnimation, setShowLoaderAnimation] = useState<boolean>(true);
    const [showLogoAnimation, setShowLogoAnimation] = useState<boolean>(true);
    const {set_show_loader} = useLoader();
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            gsap.fromTo(
                "#logo-hexagon",
                {
                  strokeDashoffset: 270.10827, // var(--strokeLength)
                },
                {
                  strokeDashoffset: 0, // var(--strokeCalc)
                  duration: 1,
                  ease: "linear",
                  // You can add the onComplete callback here if needed
                  onComplete: ()=> {
                    // Animation complete
                  
                   
                  },
                }
            );
            gsap.fromTo(
                "#logo-y",
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                  duration: 1,
                  ease: "linear",
                  delay: 1,
                  // You can add the onComplete callback here if needed
                  onComplete: function() {
                    setShowLogoAnimation(false)
                    console.log("completed Y")
                  },
                }
            );
            gsap.fromTo(container.current,{
                opacity: 1,
            },{
                opacity: 0,
                duration: 0.5,
                delay:2,
                ease: "linear",
                // delay: 0.5,
                // You can add the onComplete callback here if needed
                onComplete: function() {
                  // Animation complete
                //   console.log("completed the whole")
                    setTimeout(() => {
                        set_show_loader(false)
                    }, 500); // wait juste for the loader to move to the left
                },
            })
        },{
            scope:container
        }
    )

    return{showLogoAnimation,ref:container}
}

export {useAnimateLoader}

