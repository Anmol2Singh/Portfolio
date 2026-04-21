import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const commands = [
  { cmd: "ls /languages", output: ["C++", "Python", "JavaScript", "SQL", "HTML/CSS"] },
  { cmd: "ls /domains", output: ["AI/ML & Data Science", "Full-Stack Web Dev", "Game Dev (Unity)", "App Dev"] },
  { cmd: "ls /tools", output: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Git", "Framer Motion", "Tailwind CSS"] }
];

export default function SkillTerminal() {
  const [history, setHistory] = useState<{cmd: string, output: string[]}[]>([]);
  const [currentCommandIdx, setCurrentCommandIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    if (currentCommandIdx >= commands.length) return;

    const fullCmd = commands[currentCommandIdx].cmd;
    let charIdx = 0;
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      setTypedCommand(fullCmd.substring(0, charIdx + 1));
      charIdx++;
      if (charIdx === fullCmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setHistory(prev => [...prev, { cmd: fullCmd, output: commands[currentCommandIdx].output }]);
          setTypedCommand("");
          setIsTyping(false);
          setTimeout(() => {
            setCurrentCommandIdx(prev => prev + 1);
          }, 500);
        }, 400);
      }
    }, 100); // typing speed

    return () => clearInterval(typeInterval);
  }, [currentCommandIdx]);

  return (
    <section id="skills" className="py-24 relative z-10 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold font-mono neon-text-green mb-2">/Skill_Terminal</h2>
        <p className="text-gray-400">Executing system skills analysis.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-xl overflow-hidden border border-gray-700 shadow-2xl bg-[#0a0a0a]"
      >
        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono text-center flex-1 pr-8">
            anmol@engine: ~/skills
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm min-h-[300px]">
          {history.map((item, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex text-green-400 mb-2">
                <span className="mr-2">anmol@engine:~$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-cyan-200">
                {item.output.map((out, i) => (
                  <div key={i} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500">
                    {out}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {currentCommandIdx < commands.length && (
            <div className="flex text-green-400">
              <span className="mr-2">anmol@engine:~$</span>
              <span className="text-white">{typedCommand}</span>
              {isTyping && (
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-gray-300 ml-1 inline-block"
                />
              )}
            </div>
          )}
          
          {currentCommandIdx >= commands.length && (
            <div className="flex text-green-400">
              <span className="mr-2">anmol@engine:~$</span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-gray-300 inline-block"
              />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
