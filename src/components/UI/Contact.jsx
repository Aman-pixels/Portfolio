import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, Mail } from 'lucide-react'

const socialLinks = [
  {
    platform: "GitHub",
    username: "Aman-pixels",
    link: "https://github.com/Aman-pixels",
    icon: Github
  },
  {
    platform: "LinkedIn",
    username: "Aman Kundal",
    link: "https://www.linkedin.com/in/aman-kundal-631192343/",
    icon: Linkedin
  },
  {
    platform: "Email",
    username: "amankundal540@gmail.com",
    link: "mailto:amankundal540@gmail.com",
    icon: Mail
  }
]

const SocialCard = ({ social, index }) => (
  <motion.a 
    href={social.link} 
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -5 }}
    className="group relative flex items-center justify-between p-6 px-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all overflow-hidden flex-1"
  >
    {/* Soft Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
    
    <div className="flex items-center gap-6 relative z-10 w-full">
      <div className="w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
        <social.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h4 className="text-white text-lg md:text-xl font-medium tracking-tight mb-1">{social.platform}</h4>
        <p className="text-white/40 text-sm tracking-wide">{social.username}</p>
      </div>
    </div>
    
    <div className="relative z-10 h-10 w-10 flex items-center justify-center rounded-full border border-white/5 bg-white/5 group-hover:bg-white/10 transition-colors">
       <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
    </div>
  </motion.a>
)

const Contact = () => {
  return (
    <section id="contact" className="relative py-48 px-4 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 font-medium test-center w-full"
          >
            Connect
          </motion.p>
          <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter mb-6 relative w-full leading-[0.9]">
            Find Me <span className="italic text-white/70">Online.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {socialLinks.map((social, idx) => (
             <SocialCard key={idx} social={social} index={idx} />
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="mt-48 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-white/20 gap-4 border-t border-white/5"
        >
          <span>© 2026 AMAN. ALL RIGHTS RESERVED.</span>
          <a href="mailto:amankundal540@gmail.com" className="hover:text-white transition-colors">Drop an email</a>
          <span>CRAFTED WITH PRECISION.</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
