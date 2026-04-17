import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const MinimalIcosahedron = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      // Very slow and elegant rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      
      // Subtle reaction to mouse movement
      meshRef.current.rotation.y += (state.pointer.x * 0.1 - meshRef.current.rotation.y) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe={true}
          transparent={true}
          opacity={0.15}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

export default MinimalIcosahedron
