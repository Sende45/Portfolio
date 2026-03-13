const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String], 
    demoUrl: { type: String },
    repoUrl: { type: String },
    imageUrl: { type: String },
    category: { type: String, enum: ['SaaS', 'Mobile', 'Web'], default: 'Web' },
    featured: { type: Boolean, default: false }
}, { 
    timestamps: true,
    // C'EST ICI : On force Mongoose à utiliser le nom exact que tu as sur Atlas
    collection: 'project' 
});

module.exports = mongoose.model('Project', projectSchema);