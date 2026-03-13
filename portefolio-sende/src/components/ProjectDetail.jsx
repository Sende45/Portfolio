import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Cpu, Layout, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // URL de ton backend
  const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://portfolio-backend-evbb.onrender.com';

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement du projet:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
    window.scrollTo(0, 0); // Remonte en haut de page au chargement
  }, [id, API_BASE_URL]);

  if (loading) return <div className="h-screen bg-black flex items-center justify-center text-white font-mono uppercase tracking-widest animate-pulse text-xs">Chargement du Case Study...</div>;
  
  if (!project) return (
    <div className="h-screen bg-black flex flex-col items-center justify-center text-white gap-8">
      <p className="font-mono text-xs uppercase tracking-widest opacity-50">Projet introuvable</p>
      <Link to="/" className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Retour</Link>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* BOUTON RETOUR */}
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-16 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Gallery</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* TEXTE & DÉTAILS */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <div className="h-px w-8 bg-blue-600" />
                <span className="text-[10px] font-mono font-black uppercase tracking-widest">{project.category || "Fullstack Solution"}</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.85]">
                {project.title}
              </h1>
            </div>

            <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium italic border-l-4 border-blue-600 pl-8 py-2">
              {project.description}
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-12 py-10 border-y border-zinc-100 dark:border-white/10">
              <div className="space-y-3">
                <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                  <Cpu size={12} /> Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map(tech => (
                    <span key={tech} className="text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                  <Layout size={12} /> Deliverable
                </span>
                <span className="text-sm font-bold block">SaaS Platform</span>
              </div>
            </div>

            {/* ACTION */}
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/20"
              >
                Launch Application <ExternalLink size={16} />
              </a>
            )}
          </div>

          {/* IMAGE PREVIEW */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="sticky top-40"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={project.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"} 
                alt={project.title}
                className="relative w-full rounded-[2rem] shadow-2xl border border-zinc-200 dark:border-white/5 object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;