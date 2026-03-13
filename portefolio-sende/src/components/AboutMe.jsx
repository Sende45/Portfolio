import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout, Code2, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
// Importation de l'image locale
import portfolioImg from '../assets/portfolio.png'; 

const AboutMe = () => {
  const containerRef = useRef(null);

  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div ref={containerRef} className="max-w-[1400px] mx-auto py-24 px-6 md:px-12">
      
      {/* --- HEADER : IDENTITY LOG --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 border-b border-zinc-200 dark:border-white/5 pb-12">
        <motion.div {...reveal}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-zinc-400">System.identity_v4</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none">
            Fullstack <br /> 
            <span className="text-blue-600">Architect.</span>
          </h2>
        </motion.div>
        
        <motion.div {...reveal} transition={{ delay: 0.2 }} className="max-w-xs">
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
            // Basé à Abidjan. Diplômé de l'ESTIAM Paris. <br />
            // focus: performance, scalabilité, et clean code.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        
        {/* --- COLONNE GAUCHE : LE CORE ENGINE (7 colonnes) --- */}
        <div className="lg:col-span-7 space-y-16">
          
          <motion.div {...reveal} className="space-y-8">
            <h3 className="text-2xl font-black uppercase italic tracking-tight text-zinc-900 dark:text-white">Engineering Philosophy_</h3>
            <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300 leading-snug">
              Je ne me contente pas de coder des interfaces. Je bâtis des **écosystèmes complets**. De la modélisation de bases de données complexes sur **MongoDB** à la création d'API robustes avec **Node.js**, chaque ligne de code est optimisée pour la vitesse.
            </p>
          </motion.div>

          {/* BLUEPRINT GRID : LES MODULES FULLSTACK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...reveal} className="p-8 rounded-3xl bg-zinc-100 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 group hover:border-blue-600/30 transition-all">
              <Database className="text-blue-600 mb-6" size={28} />
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Backend Mastery</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Logique serveur intensive avec **Express**, gestion d'états real-time via **Firebase**, et déploiement conteneurisé avec **Docker**.
              </p>
            </motion.div>

            <motion.div {...reveal} className="p-8 rounded-3xl bg-zinc-100 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 group hover:border-blue-600/30 transition-all">
              <Layout className="text-blue-600 mb-6" size={28} />
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Frontend Engineering</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Interfaces réactives et ultra-fluides avec **React & Vite**. Utilisation de **Framer Motion** pour une expérience utilisateur cinématique.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- COLONNE DROITE : LE PROFIL PHYSIQUE --- */}
        <motion.div 
          {...reveal}
          className="lg:col-span-5"
        >
          <div className="relative group">
            {/* Image avec effet de profondeur utilisant ton fichier portfolio.png */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-200 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-2xl">
              <img 
                src={portfolioImg} 
                alt="BEN FAHAD SENDE SOUMOUK"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 space-y-1">
                <p className="text-2xl font-black text-white uppercase italic tracking-tighter">B. Fahad Sende</p>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-blue-500 font-bold">Graduate Software Engineer</p>
              </div>
            </div>

            {/* Floating Info Tag style Terminal */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl space-y-3 hidden sm:block">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-blue-500/50" />
              </div>
              <p className="text-[10px] font-mono text-zinc-400 leading-tight">
                STATUS: <span className="text-green-500">AVAILABLE</span><br />
                STACK: <span className="text-blue-600">MERN_CERTIFIED</span><br />
                LOCATION: <span className="text-zinc-600 dark:text-zinc-200">ABIDJAN_CI</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- MODULES DE DONNÉES TECHNIQUES --- */}
      <motion.div {...reveal} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'React / Next.js', value: 'Expert' },
          { label: 'Node / Express', value: 'Master' },
          { label: 'Firebase / NoSQL', value: 'Advanced' },
          { label: 'Docker / CI-CD', value: 'Ready' }
        ].map((tech, i) => (
          <div key={i} className="p-6 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 flex flex-col gap-1">
            <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400">{tech.label}</span>
            <span className="text-lg font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter">{tech.value}</span>
          </div>
        ))}
      </motion.div>

      {/* --- CTA CALL TO ACTION --- */}
      <motion.div {...reveal} className="mt-24 flex justify-center">
        <button className="group relative flex items-center gap-6 px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all">
          <span className="relative z-10">Consulter les Spécifications</span>
          <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </button>
      </motion.div>
    </div>
  );
};

export default AboutMe;