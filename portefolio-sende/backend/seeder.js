const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const connectDB = async () => {
    try {
        console.log('⏳ Tentative de connexion à MongoDB Atlas...');
        
        // Ajout d'options pour stabiliser la connexion sur les réseaux instables
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000, // Attendre 10s max
            socketTimeoutMS: 45000,         // Fermer la socket après 45s d'inactivité
        });

        console.log('✅ MongoDB connecté pour le seeding sur Atlas...');
    } catch (error) {
        console.error(`❌ Erreur de connexion : ${error.message}`);
        console.log('--- Conseil ---');
        console.log('Si l erreur est ECONNREFUSED, vérifie que tu as bien mis les GUILLEMETS autour de l URI dans ton .env');
        process.exit(1);
    }
};

const projects = [
    {
        title: "Xpress-Braids",
        description: "Solution SaaS premium de réservation et gestion de paiements Stripe pour salons de coiffure.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
        demoUrl: "https://xpress-braids.vercel.app",
        category: "SaaS",
        featured: true
    },
    {
        title: "MUCOD App",
        description: "Infrastructure de gestion d'entreprise centralisée pour l'optimisation des flux opérationnels.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        demoUrl: "https://mucod-app.vercel.app",
        category: "SaaS",
        featured: true
    },
    {
        title: "Betna-immo",
        description: "Plateforme de mise en relation immobilière moderne et fluide.",
        techStack: ["React", "Firebase", "Node.js"],
        category: "Web",
        featured: false
    },
    {
        title: "GYO SPA",
        description: "Application de gestion complète pour établissement de bien-être (SPA).",
        techStack: ["React Native", "Node.js", "MongoDB"],
        category: "Mobile",
        featured: false
    }
];

const importData = async () => {
    try {
        await connectDB();

        // Nettoyage de la collection existante
        // Note: Project utilisera la collection 'project' grâce à la modif dans models/Project.js
        console.log('🧹 Nettoyage de la collection...');
        await Project.deleteMany();
        console.log('🗑️ Anciens projets supprimés.');

        // Insertion des nouveaux projets
        console.log('📤 Importation des nouveaux projets...');
        await Project.insertMany(projects);

        console.log('🚀 Données importées avec succès dans la collection "project" !');
        process.exit();
    } catch (error) {
        console.error(`❌ Erreur d'importation : ${error.message}`);
        process.exit(1);
    }
};

importData();