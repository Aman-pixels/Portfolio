import { motion } from 'framer-motion'
import { Rocket, Target, Zap } from 'lucide-react'

const milestones = [
  {
    year: "Currently",
    title: "Exploring Advanced Tech",
    description: "Diving deep into AI automation tools like n8n, learning core system design principles, and scaling backend architectures.",
    icon: <Rocket className="w-5 h-5" />,
    current: true
  },
  {
    year: "2024",
    title: "Full Stack Builder",
    description: "Built and deployed comprehensive full-stack applications using the MERN stack and Firebase. Shifted focus from learning syntax to building real-world solutions.",
    icon: <Zap className="w-5 h-5" />,
    current: false
  },
  {
    year: "2023",
    title: "Finding the Spark",
    description: "Wrote my very first lines of JavaScript. Discovered the intersection of design and logic, leading to an obsession with modern web development.",
    icon: <Target className="w-5 h-5" />,
    current: false
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 relative z-10 font-sans min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight mb-4">The Journey</h2>
          <p className="text-white/50 text-lg">Currently learning & building.</p>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-[39px] md:left-1/2 top-48 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent transform md:-translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16 relative">
          {milestones.map((item, idx) => (
            <div key={item.year} className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[39px] md:left-1/2 top-6 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 w-[3px] h-[3px] bg-white rounded-full hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10" />

              {/* Year Bubble (Mobile) */}
              <div className="md:hidden flex items-center gap-4 mb-4">
                 <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${item.current ? 'border-green-500/50 bg-green-500/10 text-green-400' : 'border-white/10 bg-white/5 text-white/50'}`}>
                    {item.icon}
                 </div>
                 <span className="font-serif text-2xl text-white">{item.year}</span>
              </div>

              {/* Content Box */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex-1 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
              >
                <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                  <div className={`hidden md:inline-flex mb-4 px-4 py-1.5 rounded-full text-sm border ${item.current ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-white/10 bg-white/5 text-white/60'}`}>
                    {item.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white/90 mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
