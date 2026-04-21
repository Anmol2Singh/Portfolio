import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { TypeAnimation } from 'react-type-animation';
import * as THREE from 'three';

function AbstractCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        {/* We use icosahedron for a more complex core shape */}
        <icosahedronGeometry args={[2, 0]} />
        <MeshDistortMaterial
          color={hovered ? "#0f0" : "#0ff"}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={hovered ? 0.4 : 0.2}
          speed={hovered ? 5 : 2}
          wireframe={hovered}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: 3D Core */}
        <div className="h-[400px] w-full relative z-10 cursor-pointer hover-target">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[-10, -10, -5]} color="#0ff" intensity={10} />
            <AbstractCore />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-400 font-mono text-sm md:text-base mb-2">
              <span className="text-green-400">root@engine</span>:~$ ./initialize_profile.sh
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Anmol <br />
              <span className="neon-text-cyan">Singh</span>
            </h1>
            
            <div className="font-mono text-xl md:text-2xl h-16 flex items-center">
              <span className="text-purple-400 mr-2">System.init</span>
              <span className="text-white">(</span>
              <span className="text-green-300">"</span>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1000,
                  'AI Developer',
                  1000,
                  'Full-Stack Creator',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-green-300"
                repeat={Infinity}
              />
              <span className="text-green-300">"</span>
              <span className="text-white">);</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 max-w-lg leading-relaxed text-lg"
          >
            Computer Engineering student building high-performance systems and exploring the intersection of Generative AI, Data Science, and modern web architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-4 pt-4"
          >
            <a href="#projects" className="glass-card px-6 py-3 font-mono text-sm hover:bg-white/10 text-cyan-300 border-cyan-500/30">
              [ View My Stack ]
            </a>
            <a href="/resume.pdf" target="_blank" className="glass-card px-6 py-3 font-mono text-sm hover:bg-white/10 text-green-300 border-green-500/30 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
