import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MagneticButton({ children, text = "", className = "" }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={`relative rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md px-6 py-3 transition-colors ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {text && <span className="font-medium text-sm tracking-widest uppercase">{text}</span>}
      </span>
    </motion.button>
  );
}
