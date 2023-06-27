import {useRef, useEffect}from "react"

const useBackground = ()=>{
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
        if (!heroRef.current) return;
        const { screenX, screenY } = ev;
        heroRef.current.style.setProperty("--x", `${screenX}px`);
        heroRef.current.style.setProperty("--y", `${screenY}px`);
      };
  
      window.addEventListener("mousemove", updateMousePosition);
  
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
    return heroRef
}

export {useBackground}