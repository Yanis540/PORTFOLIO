import Navbar from './components/Navbar/Navbar'
import Personnel from './components/Personnel'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-5 bg-navy relative ">
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
  )
}
