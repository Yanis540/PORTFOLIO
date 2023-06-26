import sr from "@/utils/sr";
import { useEffect, RefObject, useRef } from "react";
import { config } from "@/config";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";

const useTransition= (refContain:RefObject<HTMLElement>)=>{
    const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      sr?.reveal(refContain.current!, config.srConfig());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefersReducedMotion]);
}

  
export {
    useTransition
}


