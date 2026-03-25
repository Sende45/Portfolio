import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

const Downloads = () => {
  // Chemins mis à jour selon ta capture d'écran
  const files = {
    cv: "/CVSENDE.pdf", 
    letter: "/BEN%20FAHAD%20SENDE%20SOUMOUK.docx" // %20 remplace les espaces
  };

  return (
    <section className="relative overflow-hidden p-1">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 backdrop-blur-xl shadow-2xl">
        
        <div className="space-y-6 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-500">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Documentation</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter leading-none">
            Besoin d'un <br /> 
            <span className="text-blue-600 not-italic">Dossier Complet ?</span>
          </h3>
          
          <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic">
            Accédez à mes ressources techniques et mon parcours détaillé pour valider l'adéquation avec vos objectifs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
          
          {/* CARTE CV */}
          <motion.a 
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={files.cv} 
            download="CV_Ben_Fahad_Sende.pdf" 
            className="group relative flex flex-col gap-6 p-8 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-[2.5rem] transition-all shadow-2xl shadow-blue-500/20 overflow-hidden min-w-[240px] cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl group-hover:bg-blue-600/40 transition-colors" />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="p-3 rounded-2xl bg-white/10 dark:bg-black/5">
                <Download size={24} className="group-hover:animate-bounce" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest opacity-40">PDF // 1.2MB</span>
            </div>

            <div className="space-y-1 relative z-10">
              <p className="text-xs font-black uppercase tracking-widest opacity-50">Curriculum</p>
              <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none">Mon CV_</h4>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter relative z-10 text-blue-400 dark:text-blue-600">
              Download Asset <ArrowRight size={12} />
            </div>
          </motion.a>

          {/* CARTE MANIFESTE (WORD) */}
          <motion.a 
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={files.letter}
            download="Manifeste_Ben_Fahad.docx"
            className="group relative flex flex-col gap-6 p-8 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white rounded-[2.5rem] border border-zinc-200 dark:border-white/10 transition-all min-w-[240px] cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-zinc-200 dark:bg-white/5 text-zinc-500 dark:text-zinc-400">
                <FileText size={24} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest opacity-20">DOCX // 0.8MB</span>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest opacity-30 text-zinc-500 dark:text-zinc-400">Context</p>
              <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none">Manifeste_</h4>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter text-blue-600">
              Download DOCX <ArrowRight size={12} />
            </div>
          </motion.a>

        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 flex justify-center lg:justify-end gap-10 opacity-30">
        <div className="flex items-center gap-2">
           <Cpu size={12} />
           <span className="text-[8px] font-mono uppercase tracking-widest font-bold">Encrypted Transfer</span>
        </div>
        <div className="flex items-center gap-2">
           <ArrowRight size={12} />
           <span className="text-[8px] font-mono uppercase tracking-widest font-bold">V4.0 Stable Build</span>
        </div>
      </div>
    </section>
  );
};

export default Downloads;