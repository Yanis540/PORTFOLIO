import sr from "@/utils/sr";
import { useEffect, MutableRefObject } from "react";
import { config } from "@/config";
import usePrefersReducedMotion from "./use-prefers-reduced-motion";
import {forwardRef} from "react"

const useTransition= (revealContainer:MutableRefObject<HTMLElement>)=>{
    const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }
  
      sr?.reveal(revealContainer.current!, config.srConfig());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefersReducedMotion]);
}

  
export {
    useTransition
}


