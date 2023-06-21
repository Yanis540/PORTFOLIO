import {useRef, useEffect}from "react"

const useBackground = ()=>{
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
        if (!heroRef.current) return;
        console.log("here")
        const { clientX, clientY } = ev;
        heroRef.current.style.setProperty("--x", `${clientX}px`);
        heroRef.current.style.setProperty("--y", `${clientY}px`);
      };
  
      window.addEventListener("mousemove", updateMousePosition);
  
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
    return heroRef
}

export {useBackground}