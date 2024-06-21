'use client'
import Contact from './sections/Contact'
import Education from './sections/Education/Education'
import Navbar from './sections/Navbar/Navbar'
import Personnel from './sections/Personnel'
import Projects from './sections/Projects/Projects'
import { useBackground } from './hooks/use-background'
import FooterLayout from './components/Layout/FooterLayout'
import About from './sections/About/About'
import { QueryClientProvider ,QueryClient} from '@tanstack/react-query'
import Loader from './components/Loader/Loader'
import { useLoader } from './hooks/use-loader'
export default function Home() {
  const heroRef = useBackground()
  const queryClient = new QueryClient();
  const {show_loader} = useLoader();
  if(show_loader)
    return <Loader />;
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen h-full px-[10px] md:px-5 bg-navy w-full relative max-w-[100vw] overflow-y-hidden">
        <Navbar /> 
        <main className="mx-auto px-1 sm:px-2 md:px-5 max-w-[1200px]">
          <Personnel /> 
          <About /> 
          <Education /> 
          <Projects /> 
          <Contact /> 
        </main>
        <FooterLayout /> 

      </div>
    </QueryClientProvider>
  )
}
