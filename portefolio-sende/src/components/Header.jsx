import { motion } from 'framer-motion';
import { Terminal, Code2, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-[90] transition-all duration-500 ${
      isScrolled 
      ? 'py-3 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/5 shadow-xl' 
      : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Identity & Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="relative w-10 h-10 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center transition-transform group-hover:rotate-[15deg] group-hover:scale-110 shadow-lg">
            <Code2 size={20} className="text-white dark:text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-zinc-900 dark:text-white uppercase leading-none">
              SENDE<span className="text-blue-600">.</span>STUDIO
            </span>
            <span className="text-[7px] font-mono tracking-[0.4em] text-zinc-400 dark:text-zinc-500 uppercase mt-1 font-bold">
              Full-Stack Architect
            </span>
          </div>
        </motion.div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-all relative group">
              Work.
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500" />
            </a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-white transition-all relative group">
              Studio.
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500" />
            </a>
            
            <a href="#contact" className="group flex items-center gap-3 px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all shadow-2xl shadow-blue-500/10">
              <span className="font-black">Let's Talk</span>
              <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;