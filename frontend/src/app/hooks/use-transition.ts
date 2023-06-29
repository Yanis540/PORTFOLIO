import { useEffect, RefObject } from "react";
import { config } from "@/config";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";

const useTransition= (refContain:RefObject<HTMLElement>)=>{
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const animate = async()=>{
      const sr = (await import("scrollreveal")).default();//https://github.com/jlmakes/scrollreveal/issues/541#issuecomment-904622776
      sr?.reveal(refContain.current!, config.srConfig());
    }
    animate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);
}

  
export {
    useTransition
}


