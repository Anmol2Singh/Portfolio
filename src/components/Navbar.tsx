import { motion, useScroll } from 'framer-motion';

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
      <div className="glass-card px-6 py-4 flex justify-between items-center relative overflow-hidden">
        {/* Scroll Progress Bar inside Navbar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
          style={{ width: '100%', scaleX: scrollYProgress, transformOrigin: '0%' }}
        />
        
        <div className="font-mono text-xl font-bold neon-text-cyan tracking-tighter">
          {"<A.S/>"}
        </div>
        
        <div className="flex gap-6 font-sans text-sm font-medium">
          <a href="#hero" className="hover:text-cyan-300 transition-colors">INIT</a>
          <a href="#timeline" className="hover:text-green-300 transition-colors">TIMELINE</a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">PROJECTS</a>
          <a href="#skills" className="hover:text-green-300 transition-colors">TERMINAL</a>
        </div>
      </div>
    </nav>
  );
}
