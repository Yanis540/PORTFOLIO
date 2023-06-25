
import {useState , useEffect} from "react"

const useMobile = ()=>{
    const [isMobile, setIsMobile] = useState(  typeof navigator!="undefined"? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent):false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(typeof navigator!="undefined"? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent):false);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return isMobile
}

export {useMobile}

