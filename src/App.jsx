import { Suspense, lazy } from 'react'
import { ReactLenis } from 'lenis/react'
import Scene from './components/Three/Scene'
import Navbar from './components/UI/Navbar'
import Hero from './components/UI/Hero'
import CustomCursor from './components/common/CustomCursor'

// Lazy loaded components (below-the-fold) to improve TBT and FCP
const About = lazy(() => import('./components/UI/About'))
const Skills = lazy(() => import('./components/UI/Skills'))
const Experience = lazy(() => import('./components/UI/Experience'))
const Projects = lazy(() => import('./components/UI/Projects'))
const Contact = lazy(() => import('./components/UI/Contact'))

// Minimal fallback while chunks load
const LoaderFallback = () => (
  <div className="w-full flex justify-center py-12">
    <div className="w-6 h-6 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="bg-[#030303] cursor-none min-h-screen">
        {/* 3D Background Layer */}
        <Scene />
        
        {/* Custom Interaction Layer */}
        <CustomCursor />
        
        {/* UI Content Layer */}
        <div className="relative z-10 selection:bg-white selection:text-black min-h-screen">
          <Navbar />
          <Hero />
          
          <Suspense fallback={<LoaderFallback />}>
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
