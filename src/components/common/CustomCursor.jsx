import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useSpring(0, { stiffness: 1000, damping: 50, mass: 0.5 })
  const mouseY = useSpring(0, { stiffness: 1000, damping: 50, mass: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{ 
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 0.2 : 0.5
        }}
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}

export default CustomCursor
