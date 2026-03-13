import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus, Command, Layout, Server, Database, Zap } from 'lucide-react';
import { useRef } from 'react';

// Tes composants internes
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Updates from '../components/Updates';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const revealText = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
  };

  return (
    <main ref={containerRef} className="relative w-full">
      
      {/* 1. HERO SECTION (L'entrée de page) */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <Hero />
      </section>

      {/* 2. PROJECTS SECTION (Tes travaux Betna, Xpress, etc.) */}
      <section id="projects" className="relative px-6 py-40 border-t border-zinc-200 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            style={{ y: yRange }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12"
          >
            <motion.div {...revealText} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/20">
                <Layout size={12} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-tighter text-blue-600">Full-Stack Ecosystems</span>
              </div>
              <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.75] italic text-zinc-900 dark:text-white">
                Work<span className="text-blue-600 not-italic">.</span>
              </h2>
            </motion.div>
            <motion.p {...revealText} className="max-w-sm text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-tight italic">
              Conception d'applications métier scalables — De l'immobilier aux systèmes de réservation.
            </motion.p>
          </motion.div>

          <Projects />
        </div>
      </section>

      {/* 3. IDENTITY SECTION (AboutMe + Activity Feed) */}
      <section id="about" className="relative border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          
          {/* GAUCHE : AboutMe */}
          <div className="lg:col-span-7 p-8 md:p-20 lg:border-r border-zinc-200 dark:border-white/5 relative">
            <div className="sticky top-40">
              <motion.div {...revealText} className="space-y-16">
                <div className="flex items-center gap-4 text-blue-600">
                   <Command size={24} />
                   <span className="text-sm font-black tracking-[0.4em] uppercase">Architecture Core</span>
                </div>
                
                <div className="scale-105 origin-left">
                  <AboutMe />
                </div>
                
                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-zinc-100 dark:border-white/5">
                  <div className="space-y-6">
                    <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      <Server size={14} className="text-blue-600" /> Backend Logic
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'Firebase', 'MongoDB', 'Docker'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-white/5 rounded-full text-[10px] font-bold tracking-tight">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                      <Database size={14} className="text-blue-600" /> Frontend Mastery
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js 15', 'Tailwind', 'Framer Motion'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-white/5 rounded-full text-[10px] font-bold tracking-tight">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* DROITE : Activity Feed */}
          <div className="lg:col-span-5 bg-zinc-50/50 dark:bg-zinc-900/10 p-8 md:p-20">
            <div className="flex items-center justify-between mb-20">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-zinc-900 dark:text-white underline decoration-blue-600 decoration-4">Activity_</h2>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 shadow-xl flex items-center justify-center">
                    <Plus size={20} className="text-blue-600" />
                </div>
            </div>
            <Updates />
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION (Le gros bouton final) */}
      <section id="contact" className="relative py-60 px-6 text-center overflow-hidden bg-white dark:bg-[#030303]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-20"
        >
          <div className="space-y-4">
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600">Available Q2 2026</span>
             <h2 className="text-6xl md:text-[13vw] font-black uppercase tracking-tighter leading-[0.75] text-zinc-900 dark:text-white">
              Let's <br /> <span className="text-blue-600 italic">Deploy.</span>
            </h2>
          </div>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hello@sende.studio" 
            className="group relative inline-flex items-center gap-8 px-16 py-8 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-2xl font-black uppercase tracking-[0.2em] overflow-hidden transition-all shadow-2xl"
          >
            <span className="relative z-10">Initiate Protocol</span>
            <ArrowUpRight className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.19, 1, 0.22, 1]" />
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;