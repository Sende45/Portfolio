import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. URL de ton backend sur Render
  const API_BASE_URL = "https://portfolio-backend-evbb.onrender.com";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // 2. Appel à l'API de production
        const response = await axios.get(`${API_BASE_URL}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const reveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  if (loading) return <SkeletonGrid />;

  return (
    <div className="space-y-64 pb-40">
      {projects.map((project, index) => (
        <motion.div 
          key={project._id} 
          {...reveal}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
        >
          {/* --- SIDEBAR TECHNIQUE --- */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-8 sticky top-40">
            <span className="text-[10px] font-mono font-black vertical-text tracking-[0.5em] text-zinc-300 dark:text-zinc-700">
              PROJECT_0{index + 1}
            </span>
            <div className="h-20 w-[1px] bg-zinc-200 dark:bg-white/10" />
            <div className="flex flex-col gap-4">
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">
                  <Github size={20}/>
                </a>
              )}
            </div>
          </div>

          {/* --- VISUEL DU PROJET --- */}
          <div className="lg:col-span-7 group">
            <Link to={`/project/${project._id}`} className="relative block aspect-[16/10] overflow-hidden rounded-[3rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-2xl transition-all duration-700 hover:shadow-blue-600/20">
              <img 
                src={project.imageUrl || "/placeholder.jpg"} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-8">
                 <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                   {project.category || "Fullstack Solution"}
                 </div>
              </div>

              <div className="absolute bottom-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500">
                 <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl rotate-45">
                    <ArrowUpRight size={32} />
                 </div>
              </div>
            </Link>
          </div>

          {/* --- CONTENU & TEXTE --- */}
          <div className="lg:col-span-4 space-y-10 lg:pt-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <Terminal size={14} />
                <span className="text-[10px] font-mono font-black uppercase tracking-widest">Live_Application</span>
              </div>
              <h3 className="text-5xl md:text-7xl lg:text-[6vw] font-black text-zinc-900 dark:text-white uppercase italic tracking-tighter leading-[0.8] transition-colors group-hover:text-blue-600">
                {project.title}
              </h3>
            </div>

            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic border-l-2 border-blue-600 pl-6">
              {project.description}
            </p>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map(tech => (
                <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-lg text-[9px] font-black uppercase tracking-widest text-zinc-500">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <Link 
                to={`/project/${project._id}`}
                className="group/btn inline-flex items-center gap-6 text-xs font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-white pb-2 border-b-2 border-zinc-200 dark:border-white/10 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Case Study
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- SKELETON UI PREMIUM ---
const SkeletonGrid = () => (
  <div className="space-y-64 py-20 px-6">
    {[1, 2].map(n => (
      <div key={n} className="grid grid-cols-1 lg:grid-cols-12 gap-24 animate-pulse">
        <div className="hidden lg:block lg:col-span-1 h-40 bg-zinc-200 dark:bg-zinc-900 rounded-full w-2" />
        <div className="lg:col-span-7 aspect-[16/10] bg-zinc-200 dark:bg-zinc-900 rounded-[3rem]" />
        <div className="lg:col-span-4 space-y-8">
          <div className="h-12 bg-zinc-200 dark:bg-zinc-900 w-3/4 rounded-2xl" />
          <div className="h-24 bg-zinc-200 dark:bg-zinc-900 w-full rounded-2xl" />
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-zinc-200 dark:bg-zinc-900 rounded-lg" />
            <div className="h-6 w-16 bg-zinc-200 dark:bg-zinc-900 rounded-lg" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Projects;