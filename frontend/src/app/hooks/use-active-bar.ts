import { useMemo, useRef , useState , useEffect } from "react";

const useActiveBar = (items:any[])=>{
  const [activeBottomTab,setActiveBottomTab] = useState({width:0 , left:0,height:2}) // left == left offset
  const [activeLeftTab,setActiveLeftTab] = useState({height:0 , top:0,width:2})// top == top offset 
  const isMobileWidth = typeof window !=undefined ?window.innerWidth<768:false 
  const tabsRef = useRef<HTMLElement[]>([]);
  const activeTabIndex = useMemo(()=>items.findIndex((content)=>content.active),[items]);
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setActiveBottomTab((prev)=>({
        ...prev, 
        width:currentTab?.clientWidth ?? 0, 
        left: currentTab?.offsetLeft ?? 0
      }))
      setActiveLeftTab((prev)=>({
        ...prev,
        height : currentTab?.clientHeight??0, 
        top:currentTab?.offsetTop??0  
      }))
    }
    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);
  return {
    tabsRef, 
    isMobileWidth, 
    activeTab : isMobileWidth?activeBottomTab:activeLeftTab 
  }
}

export {useActiveBar}