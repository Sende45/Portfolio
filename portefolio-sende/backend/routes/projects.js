const express = require('express');
const router = express.Router();
const {
  getProjects, getProjectById, createProject, updateProject, deleteProject,
} = require('../controllers/projectController');
const adminAuth = require('../middleware/adminAuth');

// Public
router.get('/', getProjects);
router.get('/:id', getProjectById);

// Admin
router.post('/', adminAuth, createProject);
router.put('/:id', adminAuth, updateProject);
router.delete('/:id', adminAuth, deleteProject);

module.exports = router;