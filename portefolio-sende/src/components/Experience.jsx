import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Box, Cpu, HardDrive, ArrowUpRight, Zap } from 'lucide-react';

const experiences = [
  {
    year: "2024 — PRESENT",
    title: "Full-Stack Architect",
    location: "MERN // CLOUD STACK",
    school: "OpenClassrooms & Freelance",
    desc: "Déploiement d'architectures scalables. Lead dev sur Betna Immo (Real Estate) et Xpress-braids. Focus sur l'optimisation des requêtes MongoDB et l'UI réactive.",
    tags: ["React 18", "Node.js", "Firebase Auth", "Docker"],
    type: "mastery"
  },
  {
    year: "2023 — 2024",
    title: "Bachelor Software Engineer",
    location: "PARIS // FR",
    school: "ESTIAM Paris",
    desc: "Ingénierie logicielle avancée. Conception de systèmes distribués et gestion de projet en mode Agile.",
    tags: ["Software Design", "PostgreSQL", "Architecture"],
    type: "education"
  },
  {
    year: "2021 — 2023",
    title: "Core Computing Foundations",
    location: "ACADEMIC // BASE",
    school: "University / ESTIAM",
    desc: "Immersion dans l'algorithmie pure et les structures de données. Développement des fondamentaux JavaScript.",
    tags: ["Data Structures", "Algorithms", "Vanilla JS"],
    type: "education"
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto py-32 px-6">
      
      {/* --- SECTION HEADER --- */}
      <div className="mb-24 space-y-4">
        <div className="flex items-center gap-3 text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase">
          <Terminal size={14} />
          <span>Execution_History</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter">
          Roadmap<span className="text-blue-600">.</span>
        </h2>
      </div>

      <div className="relative">
        {/* --- MAIN VERTICAL LINE --- */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-white/10" />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-blue-600 z-10 shadow-[0_0_15px_#2563eb]" 
        />

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-24 group"
            >
              {/* --- CONNECTOR NODE --- */}
              <div className="absolute left-[-5px] md:left-[27px] top-0 z-20">
                <div className={`w-[11px] h-[11px] rounded-full border-2 transition-colors duration-500 ${
                  exp.type === 'mastery' ? 'bg-blue-600 border-blue-400 animate-pulse' : 'bg-zinc-100 dark:bg-[#030303] border-zinc-400'
                }`} />
              </div>

              {/* --- CONTENT BLOCK --- */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* META DATA (DATE & LOC) */}
                <div className="lg:col-span-3 pt-1 space-y-2">
                   <p className="text-[10px] font-mono font-black text-blue-600 tracking-widest">{exp.year}</p>
                   <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-tighter flex items-center gap-2">
                     <HardDrive size={10} /> {exp.location}
                   </p>
                </div>

                {/* MAIN INFO CARD */}
                <div className="lg:col-span-9">
                  <div className="relative p-8 rounded-3xl bg-zinc-100 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 transition-all duration-500 group-hover:border-blue-600/30 group-hover:bg-white dark:group-hover:bg-white/[0.04] group-hover:shadow-2xl">
                    
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tight mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                          <Box size={12} /> {exp.school}
                        </p>
                      </div>
                      <ArrowUpRight className="text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 max-w-2xl font-medium italic">
                      "{exp.desc}"
                    </p>

                    {/* TECH STACK CHIPS */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-lg text-[9px] font-mono font-bold text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* PROGRESS BAR DECORATION */}
                    <div className="h-[1px] w-full bg-zinc-200 dark:bg-white/5 relative overflow-hidden">
                       <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className={`h-full w-1/3 bg-blue-600 ${exp.type === 'mastery' ? 'w-full opacity-100' : 'w-1/4 opacity-30'}`} 
                       />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM DECORATION --- */}
      <div className="mt-32 flex justify-center">
        <div className="px-6 py-2 rounded-full border border-dashed border-zinc-300 dark:border-white/10 text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400">
           Root_Directory // End_of_records
        </div>
      </div>
    </div>
  );
};

export default Experience;