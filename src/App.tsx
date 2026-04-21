import BackgroundMesh from './components/BackgroundMesh';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ProjectMatrix from './components/ProjectMatrix';
import SkillTerminal from './components/SkillTerminal';
import './index.css';

function App() {
  return (
    <>
      <CustomCursor />
      <BackgroundMesh />
      <Navbar />
      
      <main className="flex flex-col gap-24 pb-24">
        <Hero />
        <Timeline />
        <ProjectMatrix />
        <SkillTerminal />
      </main>

      <footer className="py-8 border-t border-white/10 text-center glass-card mt-12 rounded-none relative z-10 mx-6 mb-6">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Anmol2Singh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
          <a href="https://linkedin.com/in/anmol2singh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:anmol.kumar8419@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
        <p className="text-sm font-mono text-gray-500">
          Built with React & Three.js. Designed by Anmol Singh.
        </p>
      </footer>
    </>
  );
}

export default App;
