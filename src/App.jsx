import { ReactLenis } from 'lenis/react'
import Scene from './components/Three/Scene'
import Navbar from './components/UI/Navbar'
import Hero from './components/UI/Hero'
import About from './components/UI/About'
import Skills from './components/UI/Skills'
import Experience from './components/UI/Experience'
import Projects from './components/UI/Projects'
import Contact from './components/UI/Contact'
import CustomCursor from './components/common/CustomCursor'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="bg-[#030303] cursor-none min-h-screen">
        {/* 3D Background Layer */}
        <Scene />
        
        {/* Custom Interaction Layer */}
        <CustomCursor />
        
        {/* UI Content Layer */}
        <div className="relative z-10 selection:bg-white selection:text-black">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
