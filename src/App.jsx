import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Techonologies from './components/Techonologies'
import Experience from './components/Exprience'
import Projects from './components/Project'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className=' overflow-x-hidden mx-auto  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>
        <div className=" top-0 -z-10 h-full w-full "></div>
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        
      </div>
       <div className="  container max-h-max w-full px-9 ">
       <Navbar/>
        <Hero/> 
       <About/>
       <Techonologies/>
       <Experience/>
       <Projects/>
       <Contact/>
      

       </div>
      
      </div>
       
    </>
  )
}

export default App
