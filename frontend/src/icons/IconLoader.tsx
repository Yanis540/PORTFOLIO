'use client'
import {useEffect} from 'react';

const IconLoader = () => {
  
  useEffect(()=>{
    if(typeof document !="undefined"){
      const hexagon = (document.querySelector("hexagon")! )as SVGPathElement;
      const strokeLength = hexagon?.getTotalLength() ; 
      hexagon?.style?.setProperty('--strokeLength',`${strokeLength}`);
    }
  },[])
  if(typeof document =="undefined")
    return null ; 
  return (
  <>

    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
      <g>
        <path  
          id="logo-hexagon"
          d="M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 Z
          " 
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={270.10827}
          strokeDashoffset={-270.10827}

          fill="transparent"
        />
      </g>
      <path id="logo-y" d="M35.413153,27L50,44.688027L63.237773,26.999999L50,44.688028L50,72.166825" fill="none" stroke="currentColor" strokeWidth="5"/>

      </svg>

  </>
  )

};

export default IconLoader;