import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2023 - Present",
    title: "B.E. Computer Engineering",
    subtitle: "M.E.S. Wadia College of Engineering",
    description: "Currently in my 3rd year maintaining a 9.61 CGPA. Active in GDG tech team and won 1st Place in Project IDX Hackathon.",
    icon: "🎓",
    glow: "cyan"
  },
  {
    year: "2025 - 2026",
    title: "Game Developer Intern",
    subtitle: "Firebird",
    description: "Developing interactive Unity experiences, leveraging C# and game engine architectures to build immersive AR/VR applications.",
    icon: "🎮",
    glow: "purple"
  },
  {
    year: "Dec 2025",
    title: "SIH '25 Grand Finalist",
    subtitle: "Ministry of Agriculture & Farmers Welfare",
    description: "Developed an E-Soil Smart Card system with AI-powered pest detection. Selected for the Grand Finale among top teams nationwide.",
    icon: "🏆",
    glow: "gold"
  },
  {
    year: "Nov 2024",
    title: "Full-Stack Developer",
    subtitle: "Automated Library Management",
    description: "Built a complete system with React.js, Node.js, and MySQL featuring JWT Auth and automated fine calculation.",
    icon: "💻",
    glow: "green"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative z-10 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold font-mono neon-text-cyan mb-2">/LifeLong_Achievements</h2>
        <p className="text-gray-400">Tracing the execution path of my career.</p>
      </motion.div>

      <div className="relative border-l-2 border-cyan-500/30 ml-6 md:ml-0 md:border-l-0">
        {/* Central Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-green-500/50 to-transparent transform -translate-x-1/2" />

        {milestones.map((item, index) => {
          const isEven = index % 2 === 0;
          const isGold = item.glow === 'gold';
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row items-center w-full relative ${
                isEven ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[-9px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_10px_#0ff] z-10" 
                   style={{ borderColor: isGold ? '#ffd700' : undefined, boxShadow: isGold ? '0 0 15px #ffd700' : undefined }}
              />

              {/* Card */}
              <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                <div 
                  className={`glass-card p-6 relative overflow-hidden group ${isGold ? 'border-yellow-500/30' : ''}`}
                >
                  {isGold && (
                    <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                  
                  <span className={`inline-block px-3 py-1 rounded text-xs font-mono mb-4 bg-white/5 border ${isGold ? 'text-yellow-400 border-yellow-400/30' : 'text-cyan-400 border-cyan-400/30'}`}>
                    {item.year}
                  </span>
                  
                  <h3 className={`text-xl font-bold mb-1 ${isGold ? 'text-yellow-400' : 'text-white'}`}>
                    {item.icon} {item.title}
                  </h3>
                  <h4 className="text-sm text-gray-400 mb-3 font-mono">{item.subtitle}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
