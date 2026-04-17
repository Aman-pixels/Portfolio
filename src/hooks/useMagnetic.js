import { useRef, useState, useEffect } from 'react'

export const useMagnetic = (strength = 0.5) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return
      
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      
      const distance = Math.sqrt(dx * dx + dy * dy)
      const radius = Math.max(width, height) * 2

      if (distance < radius) {
        setPosition({ x: dx * strength, y: dy * strength })
      } else {
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [strength])

  return { ref, x: position.x, y: position.y }
}
