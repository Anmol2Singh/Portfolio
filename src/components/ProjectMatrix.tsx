import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-Soil Smart Card System",
    subtitle: "TheGreenCoders (SIH 2025 Finalist)",
    description: "A digital GreenTech agriculture platform unifying soil health, weather, and market intelligence. Features AI-powered pest detection via voice bots using Gemini 2.5 Pro and RandomForest.",
    tags: ["Python", "React.js", "MongoDB", "AI/ML"],
    link: "https://thegreencoders.web.app",
    github: "#",
    color: "from-green-500/20 to-emerald-900/20"
  },
  {
    title: "ScoreFlow",
    subtitle: "MESWCOE Academic Tracker",
    description: "Centralized dashboard engineered for teachers to track and visualize academic scores. Streamlines Wadia College's internal marks management with real-time PostgreSQL data updates.",
    tags: ["React.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://meswcoe-scoreflow.vercel.app",
    github: "#",
    color: "from-cyan-500/20 to-blue-900/20"
  },
  {
    title: "MedCare+ Health Platform",
    subtitle: "Intelligent Dose Reminder",
    description: "A Flutter-based mobile application integrating professional-grade pharmacological data, a long-term medication history archive, and AI-driven clinical intelligence for proactive healthcare.",
    tags: ["Flutter", "Dart", "Kotlin", "Firebase"],
    link: "#",
    github: "#",
    color: "from-blue-500/20 to-indigo-900/20"
  },
  {
    title: "3D Boom Barrier Digital Gateway",
    subtitle: "Interactive 3D Web Application",
    description: "An immersive, WebGL-powered 3D visualization and digital gateway system. Focuses on spatial UI concepts and optimized 3D asset rendering directly within the browser.",
    tags: ["Three.js", "WebGL", "React.js"],
    link: "#",
    github: "#",
    color: "from-yellow-500/20 to-orange-900/20"
  },
  {
    title: "Game Dev & AR/VR Builds",
    subtitle: "Interactive Portfolio",
    description: "A showcase of immersive experiences built with Unity. Demonstrates core C# architecture, 3D physics, and optimized rendering for diverse platforms.",
    tags: ["Unity", "C#", "AR/VR", "3D Modeling"],
    link: "#",
    github: "#",
    color: "from-purple-500/20 to-fuchsia-900/20"
  }
];

export default function ProjectMatrix() {
  return (
    <section id="projects" className="py-24 relative z-10 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold font-mono neon-text-cyan mb-2">/Project_Matrix</h2>
        <p className="text-gray-400">Deployed architectures and experiential simulations.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt 
              glareEnable={true} 
              glareMaxOpacity={0.15} 
              scale={1.02} 
              transitionSpeed={2000}
              className="h-full"
            >
              <div className={`glass-card p-6 h-full flex flex-col relative overflow-hidden group bg-gradient-to-br ${project.color} border-white/10 hover:border-cyan-500/50`}>
                
                {/* Decorative Tech Lines */}
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10 H90 V90 H10 Z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="10" fill="currentColor"/>
                  </svg>
                </div>

                <div className="flex-grow z-10">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <h4 className="text-sm font-mono text-gray-400 mb-4">{project.subtitle}</h4>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="z-10 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-mono bg-black/40 border border-white/10 rounded text-cyan-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.github} className="text-sm font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      Repo
                    </a>
                    <a href={project.link} className="text-sm font-mono text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                      Live Demo
                    </a>
                  </div>
                </div>
                
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
