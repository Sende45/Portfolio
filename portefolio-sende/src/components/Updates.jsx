import { motion } from 'framer-motion';
import { Calendar, Zap, Rocket, Award, Terminal, ArrowRight } from 'lucide-react';

const updatesData = [
  {
    date: "24 FÉVRIER 2026",
    title: "Portfolio V4.0",
    content: "Déploiement de l'architecture MERN avec intégration Framer Motion et Tailwind 4.",
    type: "deploy",
    color: "text-blue-500"
  },
  {
    date: "15 JANVIER 2026",
    title: "AWS Certification",
    content: "Validation du module Cloud Practitioner - Focus sur la scalabilité et S3.",
    type: "certif",
    color: "text-emerald-500"
  },
  {
    date: "02 JANVIER 2026",
    title: "Betna Immo",
    content: "Initialisation du moteur de recherche multicritères pour le projet immobilier.",
    type: "dev",
    color: "text-amber-500"
  }
];

const Updates = () => {
  return (
    <div className="relative">
      {/* Ligne de timeline verticale subtile */}
      <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-zinc-800 to-transparent hidden sm:block" />

      <div className="space-y-8 relative z-10">
        {updatesData.map((update, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative flex items-start gap-6"
          >
            {/* Icône flottante style "Node" */}
            <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] ${update.color}`}>
              {update.type === 'deploy' && <Rocket size={14} />}
              {update.type === 'certif' && <Award size={14} />}
              {update.type === 'dev' && <Terminal size={14} />}
            </div>

            <div className="flex-grow space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.2em] text-zinc-500 bg-zinc-900/50 px-2 py-0.5 rounded border border-white/5">
                  {update.date}
                </span>
                <span className={`text-[8px] font-bold uppercase tracking-widest ${update.color}`}>
                  // {update.type}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/20 border border-white/5 group-hover:border-blue-500/20 group-hover:bg-zinc-900/40 transition-all duration-500 relative overflow-hidden">
                {/* Lueur d'arrière-plan */}
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-600/5 blur-2xl group-hover:bg-blue-600/10 transition-all" />
                
                <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1 italic">
                  {update.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {update.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER ACTION : STYLE DASHBOARD */}
      <motion.button 
        whileHover={{ x: 5 }}
        className="group mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all pl-14"
      >
        <div className="h-px w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-blue-600 transition-all" />
        Fetch more logs <ArrowRight size={12} className="group-hover:text-blue-500" />
      </motion.button>
    </div>
  );
};

export default Updates;