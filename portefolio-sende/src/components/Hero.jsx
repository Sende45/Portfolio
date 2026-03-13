import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Cpu } from 'lucide-react';

const Hero = () => {
  const reveal = {
    initial: { y: "110%" },
    animate: { y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto min-h-[90vh] flex flex-col justify-center px-6 md:px-12">
      
      {/* --- TAG DE STATUT MINIMALISTE --- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500">
          Available for hire // 2026
        </span>
      </motion.div>

      {/* --- TITRE BRUTALISTE --- */}
      <div className="space-y-2">
        <div className="overflow-hidden">
          <motion.h1 
            {...reveal}
            className="text-[15vw] md:text-[11vw] font-black leading-[0.8] uppercase italic tracking-tighter text-zinc-900 dark:text-white"
          >
            Creative<span className="text-blue-600 not-italic">.</span>
          </motion.h1>
        </div>
        
        <div className="overflow-hidden flex flex-col md:flex-row md:items-center gap-8">
          <motion.h1 
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="text-[15vw] md:text-[11vw] font-black leading-[0.8] uppercase italic tracking-tighter text-zinc-900 dark:text-white"
          >
            Developer
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block h-[1vw] bg-blue-600 flex-grow origin-left mt-4" 
          />
        </div>
      </div>

      {/* --- FOOTER DU HERO : DATA & CTA --- */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-zinc-200 dark:border-white/5 pt-12">
        
        {/* Bio Courte */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="lg:col-span-5"
        >
          <p className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 leading-tight italic max-w-md">
            "Ingénierie d'interfaces <span className="text-zinc-900 dark:text-white font-bold">hautes performances</span> et architectures scalables."
          </p>
        </motion.div>

        {/* stack info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="lg:col-span-3 hidden xl:block"
        >
          <div className="flex items-center gap-3 text-blue-600/50">
            <Cpu size={16} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest leading-none">
              MERN_STACK <br /> ARCHITECT.sys
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="lg:col-span-4 flex justify-end"
        >
          <a 
            href="#contact"
            className="group relative flex items-center gap-8 px-10 py-6 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all shadow-2xl"
          >
             <span className="relative z-10 text-xs font-black uppercase tracking-widest">Start a Project</span>
             <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
             <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </a>
        </motion.div>
      </div>

      {/* BACKGROUND DECOR (Discret) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default Hero;