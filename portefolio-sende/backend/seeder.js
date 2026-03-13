const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const connectDB = async () => {
    try {
        console.log('⏳ Tentative de connexion à MongoDB Atlas...');
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        console.log('✅ MongoDB connecté pour le seeding...');
    } catch (error) {
        console.error(`❌ Erreur de connexion : ${error.message}`);
        process.exit(1);
    }
};

const projects = [
    {
        title: "Xpress-Braids",
        description: "Solution SaaS premium de réservation et gestion de paiements Stripe pour salons de coiffure aux USA.",
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
        title: "The GOAT Store",
        description: "Plateforme E-commerce haute performance avec gestion de catalogue et tunnel d'achat optimisé.",
        techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
        demoUrl: "https://the-goat-store.vercel.app",
        category: "E-commerce",
        featured: true
    },
    {
        title: "Betna-immo",
        description: "Plateforme de mise en relation immobilière moderne et fluide pour le marché ivoirien.",
        techStack: ["React", "Firebase", "Node.js"],
        demoUrl: "https://betna-immo.vercel.app",
        category: "Web",
        featured: false
    },
    {
        title: "GYO SPA",
        description: "Application de gestion complète et système de réservation pour établissement de bien-être.",
        techStack: ["React Native", "Node.js", "MongoDB"],
        demoUrl: "https://gyo-app.vercel.app",
        category: "Mobile",
        featured: false
    }
];

const importData = async () => {
    try {
        await connectDB();
        console.log('🧹 Nettoyage de la collection...');
        await Project.deleteMany();
        
        console.log('📤 Importation des nouveaux projets...');
        await Project.insertMany(projects);

        console.log('🚀 Données importées avec succès !');
        process.exit();
    } catch (error) {
        console.error(`❌ Erreur d'importation : ${error.message}`);
        process.exit(1);
    }
};

importData();