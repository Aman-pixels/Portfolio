import { motion } from 'framer-motion'

const NavLink = ({ link }) => {
  return (
    <motion.a
      href={link.href}
      whileHover={{ scale: 1.05 }}
      className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50 hover:text-white transition-all relative h-10 flex items-center px-4 interactive"
    >
      {link.name}
    </motion.a>
  )
}

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'backOut' }}
        className="glass-pill flex items-center gap-2 py-2 px-2"
      >
        {navLinks.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </motion.div>
    </nav>
  )
}

export default Navbar
