import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Three.js", "Framer Motion", "JavaScript (ES6+)"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
  },
  {
    title: "Tools & Other",
    skills: ["Git", "GitHub", "Vite", "Postman"]
  },
  {
    title: "Currently Learning",
    skills: ["AI Agents (n8n)", "System Design", "Backend Architecture"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 relative z-10 font-sans min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-serif text-white tracking-tight mb-6">Capabilities</h2>
          <div className="w-24 h-[1px] bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/[0.04] transition-colors duration-700"></div>
              
              <h3 className="text-xl md:text-2xl text-white/80 font-medium mb-8 flex items-center gap-3">
                {category.title === "Currently Learning" && (
                  <span className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse"></span>
                )}
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
