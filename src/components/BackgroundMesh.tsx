import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMesh() {
  const [particles] = useState(() => {
    return [...Array(20)].map(() => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
      duration: Math.random() * 10 + 10,
    }));
  });

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Dynamic Gradient Mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/30 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-green-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-900/20 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      
      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: [null, particle.y - 500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Grid overlay for 'Engine/Cyber' feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}
