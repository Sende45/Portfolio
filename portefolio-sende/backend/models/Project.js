const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  demoUrl: { type: String },
  repoUrl: { type: String },
  imageUrl: { type: String },
  imagePublicId: { type: String }, // ← NOUVEAU pour supprimer l'image
  category: { type: String, enum: ['SaaS', 'Mobile', 'Web'], default: 'Web' },
  featured: { type: Boolean, default: false },
}, {
  timestamps: true,
  collection: 'project',
});

module.exports = mongoose.model('Project', projectSchema);