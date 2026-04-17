import { motion } from 'framer-motion'
import TextReveal from '../common/TextReveal'

const About = () => {
  return (
    <section id="about" className="relative py-32 px-4 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Story Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 font-medium">About Me</p>
          
          <TextReveal className="text-4xl md:text-5xl font-serif text-white/90 leading-[1.2] mb-8">
            Curious builder. Passionate about clean design.
          </TextReveal>
          
          <div className="space-y-6 text-white/50 text-base md:text-lg font-light leading-relaxed">
            <p>
              Hey! I'm Aman, an 18-year-old engineering student based in India. I transitioned from a curious beginner learning JavaScript syntax to a passionate full-stack developer focused on high-performance solutions.
            </p>
            <p>
              I love experimenting with modern UI aesthetics—like glassmorphism and minimalism—while building impactful, real-world products.
            </p>
            <p>
              Currently, I'm expanding my horizons into AI automation workflows with n8n and exploring the fundamentals of backend system architecture. If it involves code and creativity, I'm all in.
            </p>
          </div>
        </motion.div>
        
        {/* Visual Element */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative flex-1 w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden border border-white/5 bg-[#0a0a0a] group"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-50 transition-opacity duration-700"></div>
           <img 
             src="/main%20image.png" 
             alt="Aman portrait" 
             loading="lazy" 
             decoding="async"
             className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000 ease-out"
           />
        </motion.div>

      </div>
    </section>
  )
}

export default About
