import { motion } from 'framer-motion'
import TextReveal from '../common/TextReveal'
import MagneticButton from '../common/MagneticButton'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-24 pb-24 px-4 overflow-hidden font-sans">
      
      {/* Background radial gradient for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Hero Branding / Headline */}
      <div className="max-w-7xl mx-auto text-center z-10 w-full flex flex-col items-center">
        
        <TextReveal 
          className="text-8xl md:text-[14rem] font-serif text-white tracking-tighter leading-[0.8] mb-8 justify-center select-none"
          delay={0.2}
        >
          Meet Aman.
        </TextReveal>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1, ease: "easeOut" }}
          className="text-white/40 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-12"
        >
          Crafting <span className="text-white/80">premium digital experiences</span> with code & creativity.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1.4, duration: 0.8 }}
           className="flex gap-6"
        >
          <MagneticButton text="Explore Work" className="bg-white text-black hover:bg-white/90 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
