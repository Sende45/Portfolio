const Project = require('../models/Project');
const { deleteCloudinaryImage } = require('../middleware/upload');

// GET /api/projects — public
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Erreur récupération projets' });
  }
};

// GET /api/projects/:id — public
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projet introuvable' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Erreur récupération projet' });
  }
};

// POST /api/projects — admin
exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Données invalides', error: error.message });
  }
};

// PUT /api/projects/:id — admin
exports.updateProject = async (req, res) => {
  try {
    const existing = await Project.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: 'Projet introuvable' });

    // Si l'image change, on supprime l'ancienne sur Cloudinary
    if (req.body.imagePublicId && existing.imagePublicId && req.body.imagePublicId !== existing.imagePublicId) {
      await deleteCloudinaryImage(existing.imagePublicId);
    }

    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Erreur mise à jour', error: error.message });
  }
};

// DELETE /api/projects/:id — admin
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projet introuvable' });

    if (project.imagePublicId) {
      await deleteCloudinaryImage(project.imagePublicId);
    }

    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Projet supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur suppression', error: error.message });
  }
};