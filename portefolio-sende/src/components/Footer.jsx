import { Globe, Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-10 px-6 md:px-12 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#030303] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* SECTION PRINCIPALE : L'ACCROCHE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Zap size={14} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Ready to build</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-zinc-900 dark:text-white leading-none">
              Stay in <br /> <span className="text-blue-600 not-italic">Touch.</span>
            </h2>
          </div>

          {/* LIENS SOCIAUX ÉPURÉS (TEXTE UNIQUEMENT) */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ben-fahad-sende-soumouk-309a69224' },
              { name: 'Github', url: 'https://github.com/Sende45' },
              { name: 'X-Twitter', url: 'https://x.com/SendeYohan27751' },
              { name: 'Email', url: 'mailto:yohannesende@gmail.com' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-blue-600 transition-all duration-300"
              >
                {link.name}
                <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* BARRE INFÉRIEURE : CREDITS & LOCALISATION */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-white/10 gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[10px] font-bold text-zinc-900 dark:text-white uppercase tracking-widest">
              © {currentYear} SENDE STUDIO <span className="mx-2 text-zinc-300 dark:text-white/10">|</span> BAC+3 SOFTWARE ENGINEER
            </p>
            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
              v4.2.26 // Stable Build
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* STATUS BADGE RECTIFIÉ */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-black uppercase text-green-600 tracking-tighter">Available for freelance</span>
            </div>

            <div className="h-4 w-px bg-zinc-200 dark:bg-white/10" />

            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase">
              <Globe size={12} className="text-blue-600" />
              <span>Abidjan, CI</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;