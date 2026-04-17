import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import TextReveal from '../common/TextReveal'
import { useRef, useEffect } from 'react'

const projectsData = [
  {
    title: 'MiniX — E-commerce',
    category: 'Full Stack Development',
    description: 'A modern e-commerce frontend with a premium UI, glassmorphism design, animated cart system, and localStorage-based persistence. Focused on smooth UX and clean component architecture.',
    image: '/MiniX%20~%20ecommerce.png',
    link: 'https://mini-x-pearl.vercel.app/',
    spanClass: 'md:col-span-2',
    tech: ['React', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'MiniType',
    category: 'Typing Practice App',
    description: 'A minimal typing speed practice tool built to improve accuracy and speed, featuring real-time feedback and clean UI for distraction-free practice.',
    image: '/MiniXtype.png',
    link: 'https://mini-type.vercel.app/',
    spanClass: 'md:col-span-1',
    tech: ['JavaScript', 'React']
  }
]

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Normalized values between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 2000 }}
      className={`w-full ${project.spanClass}`}
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative h-[450px] md:h-[600px] w-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-all duration-500 transform-gpu preserve-3d cursor-pointer block hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.title}`} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-50 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Hover Arrow Overlay */}
        <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 translate-x-[-1rem] group-hover:translate-x-0">
          <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
            <ArrowUpRight className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end translate-z-10">
           <div className="overflow-hidden">
             
             {/* Tags */}
             <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                style={{ translateZ: 30 }}
             >
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-white/70">
                    {tech}
                  </span>
                ))}
             </motion.div>

             <motion.h3 
               className="text-3xl md:text-5xl font-serif text-white leading-tight tracking-tight mb-4"
               style={{ translateZ: 40 }}
             >
               {project.title}
             </motion.h3>
             
             <motion.p 
               className="text-white/50 text-sm md:text-base font-light max-w-lg leading-relaxed mb-6 block"
               style={{ translateZ: 20 }}
             >
               {project.description}
             </motion.p>
             
             <motion.div 
                className="flex items-center gap-2 text-white/70 text-sm group-hover:text-white transition-colors"
                style={{ translateZ: 50 }}
             >
                View Project <ExternalLink className="w-4 h-4 ml-1" />
             </motion.div>
           </div>
        </div>
      </motion.a>
    </motion.div>
  )
}

const Projects = () => {
  const containerRef = useRef(null)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springX = useSpring(cursorX, { stiffness: 50, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      cursorX.set(e.clientX - rect.left)
      cursorY.set(e.clientY - rect.top)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      if (container) container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [cursorX, cursorY])

  return (
    <section id="projects" ref={containerRef} className="relative py-48 px-4 font-sans overflow-hidden">
      
      {/* Interactive Cursor Reactive Glow Gradient */}
      <motion.div 
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
        style={{ x: springX, y: springY }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl overflow-hidden">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 font-medium"
            >
              Portfolio
            </motion.p>
            <TextReveal className="text-5xl md:text-8xl font-serif text-white leading-[0.9] tracking-tighter">
              Selected Works.
            </TextReveal>
          </div>
          
          <motion.a
             href="https://github.com/Aman-pixels"
             target="_blank"
             rel="noreferrer"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="glass-pill text-[#030303] bg-white hover:bg-white/90 text-[10px] uppercase tracking-widest font-bold cursor-pointer border border-transparent py-3 px-8 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Github className="w-4 h-4" />
            <span>Browse all projects</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
