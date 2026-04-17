import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const HeroElements = () => {
  const pointsRef = useRef()

  // Generate 200 random coordinates for dust particles
  const particlesPosition = new Float32Array(600)
  for (let i = 0; i < 600; i++) {
    particlesPosition[i] = (Math.random() - 0.5) * 15
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.025
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={200} 
          array={particlesPosition} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.015} 
        color="#ffffff" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true} 
      />
    </points>
  )
}

export default HeroElements
