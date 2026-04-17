import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import ReactiveOrb from './ReactiveOrb'

const Scene = () => {
  return (
    <div className="canvas-container fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas shadows antialias="true">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          
          {/* Subtle Minimalist Lighting */}
          <ambientLight intensity={0.2} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.2} 
            penumbra={1} 
            intensity={2} 
            color="#ffffff" 
          />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#555555" />
          
          <ReactiveOrb />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
