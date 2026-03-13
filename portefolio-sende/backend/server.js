const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Project = require('./models/Project');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// --- DONNÉES DE SECOURS (Si MongoDB est bloqué par ton réseau) ---
const backupProjects = [
  {
    _id: "69b377110afe45908f16bc91",
    title: "Xpress-Braids",
    description: "Solution SaaS premium de réservation et gestion de paiements Stripe pour salons de coiffure.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    demoUrl: "https://xpress-braids.vercel.app",
    category: "SaaS",
    featured: true
  },
  {
    _id: "69b377110afe45908f16bc92",
    title: "MUCOD App",
    description: "Infrastructure de gestion d'entreprise centralisée pour l'optimisation des flux opérationnels.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://mucod-app.vercel.app",
    category: "SaaS",
    featured: true
  }
];

// Connexion MongoDB Atlas (On laisse tourner en arrière-plan)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 Connecté à MongoDB Atlas'))
  .catch(err => console.log('⚠️ Mode local activé (Atlas inaccessible sur ce réseau)'));

// --- ROUTES API ---

// 1. Récupérer tous les projets
app.get('/api/projects', async (req, res) => {
  try {
    // On tente de récupérer sur Atlas
    const projects = await Project.find().sort({ createdAt: -1 });
    
    // Si la base est vide ou non connectée, on envoie le backup
    if (projects.length === 0) return res.json(backupProjects);
    
    res.json(projects);
  } catch (error) {
    // En cas d'erreur réseau (Canalbox), on renvoie les données locales
    console.log("Envoi des données de secours...");
    res.json(backupProjects);
  }
});

// 2. Récupérer un seul projet
app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
        const fallback = backupProjects.find(p => p._id === req.params.id);
        return res.json(fallback || backupProjects[0]);
    }
    res.json(project);
  } catch (error) {
    const fallback = backupProjects.find(p => p._id === req.params.id);
    res.json(fallback || backupProjects[0]);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  🔥 Serveur opérationnel !
  📡 URL: http://localhost:${PORT}/api/projects
  🛠️  Statut: En attente de connexion Atlas ou redirection locale...
  `);
});