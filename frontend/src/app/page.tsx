'use client'
import { useEffect, useRef } from 'react'
import Contact from './sections/Contact'
import Education from './sections/Education/Education'
import Navbar from './sections/Navbar/Navbar'
import Personnel from './sections/Personnel'
import Projects from './sections/Projects'
import { useBackground } from './hooks/use-background'
import FooterLayout from './components/Layout/FooterLayout'
import About from './sections/About/About'

export default function Home() {
  const heroRef = useBackground()
  return (
    <>
      <div className="flex flex-col min-h-screen h-full px-[10px] md:px-5 bg-navy w-full relative max-w-[100vw] overflow-y-hidden">
      {/* <div ref={heroRef} className="flex flex-col min-h-screen h-full px-5 bg-navy relative  hero "> */}

        <Navbar /> 
        <main className="mx-auto md:px-5 max-w-[1200px]">
          <Personnel /> 

          <About /> 
          <Education /> 
          {/* Projects Section */}
          <Projects /> 
          
          {/* Contact Section */}
          <Contact /> 
        </main>
        <FooterLayout /> 

      </div>
    </>
  )
}
