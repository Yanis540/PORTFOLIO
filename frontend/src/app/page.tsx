'use client'
import { useEffect, useRef } from 'react'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Navbar from './sections/Navbar/Navbar'
import Personnel from './sections/Personnel'
import Projects from './sections/Projects'
import { useBackground } from './hooks/use-background'

export default function Home() {
  const heroRef = useBackground()
  return (
    <>
      <div className="flex flex-col min-h-screen h-full px-5 bg-navy relative ">
      {/* <div ref={heroRef} className="flex flex-col min-h-screen h-full px-5 bg-navy relative  hero "> */}
        {/* 
          Navbar : 
          - hide when ur scrolling down 
        */}
        <Navbar /> 
        {/** 
          -! Description about my self 
          - Site some technologies familiar with 
        */}
        
        <Personnel /> 
        {
          Array.from({length:50}).map((_,index)=>(
            <h3 key={index}>hilaw</h3>
          ))
        }
        {/* 
          - Eduationnal background // INSPIRE BY this : https://v4.brittanychiang.com (0.2 where i have worked )
        */}
        <Education /> 
        {/* Projects Section */}
        <Projects /> 
        
        {/* Contact Section */}
        <Contact /> 

      </div>
    </>
  )
}
