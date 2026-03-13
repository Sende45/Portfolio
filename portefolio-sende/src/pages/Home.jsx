import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plus, Command, Layout, Server, Database } from 'lucide-react';
import { useRef } from 'react';

// Composants internes
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Updates from '../components/Updates';
import Downloads from '../components/Downloads'; // <-- NOUVELLE IMPORTATION

const Home = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const revealText = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main ref={containerRef} className="relative w-full bg-zinc-50 dark:bg-[#030303]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <Hero />
      </section>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="relative px-6 py-32 border-t border-zinc-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <motion.div {...revealText} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Layout size={12} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Full-Stack Ecosystems</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-zinc-900 dark:text-white leading-none">
                Work<span className="text-blue-600 not-italic">.</span>
              </h2>
            </motion.div>
            <motion.p {...revealText} className="max-w-sm text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-tight">
              Conception d'applications métier scalables — De l'immobilier aux systèmes de réservation automatisés.
            </motion.p>
          </div>

          <Projects />
        </div>
      </section>

      {/* 3. IDENTITY & STACK SECTION */}
      <section id="about" className="relative border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          
          <div className="lg:col-span-7 p-8 md:p-16 lg:border-r border-zinc-200 dark:border-white/5">
            <div className="sticky top-32 space-y-16">
              <motion.div {...revealText} className="space-y-12">
                <div className="flex items-center gap-4 text-blue-600">
                   <Command size={20} />
                   <span className="text-[10px] font-black tracking-[0.4em] uppercase">Architecture Core</span>
                </div>
                
                <AboutMe />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-zinc-100 dark:border-white/5">
                  <div className="space-y-4">
                    <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                      <Server size={14} className="text-blue-600" /> Infrastructure
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express', 'Firebase', 'MongoDB', 'Docker'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-lg text-[10px] font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                      <Database size={14} className="text-blue-600" /> Interface
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js 15', 'Tailwind', 'Framer Motion'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-lg text-[10px] font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-50/50 dark:bg-zinc-900/20 p-8 md:p-16">
            <div className="flex items-center justify-between mb-16">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white italic">Activity_</h2>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                    <Plus size={18} className="text-blue-600" />
                </div>
            </div>
            <Updates />
          </div>
        </div>
      </section>

      {/* --- NOUVELLE SECTION : DOCUMENTS & CV --- */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <Downloads />
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="relative py-48 px-6 text-center overflow-hidden bg-white dark:bg-[#030303]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Available Q2 2026</span>
              <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-none text-zinc-900 dark:text-white">
                Let's <span className="text-blue-600 italic">Deploy.</span>
              </h2>
          </div>

          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:hello@sende.studio" 
            className="group relative inline-flex items-center gap-6 px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-xl font-black uppercase tracking-widest overflow-hidden transition-all shadow-xl"
          >
            <span className="relative z-10">Initiate Protocol</span>
            <ArrowUpRight className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;