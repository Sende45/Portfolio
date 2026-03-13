const Project = require('../models/Project');

// @desc    Récupérer tous les projets
// @route   GET /api/projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des projets" });
    }
};

// @desc    Ajouter un nouveau projet
// @route   POST /api/projects
exports.createProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: "Données invalides" });
    }
};