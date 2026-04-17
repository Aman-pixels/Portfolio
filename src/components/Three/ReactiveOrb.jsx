import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function ReactiveOrb() {
  const meshRef = useRef()
  const target = new THREE.Vector3(0, 0, 0)
  
  useFrame((state) => {
    if (!meshRef.current) return

    // Smooth rotation
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.15

    // Smooth cursor follow
    target.x = (state.pointer.x * state.viewport.width) / 10
    target.y = (state.pointer.y * state.viewport.height) / 10

    // Lerp mesh position towards target
    meshRef.current.position.lerp(target, 0.05)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial 
          color="#0f0f0f"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          envMapIntensity={2}
        />
      </Sphere>
    </Float>
  )
}
