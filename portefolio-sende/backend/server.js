const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const projectRoutes = require('./routes/projects');
const uploadRoutes = require('./routes/upload');

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 Connecté à MongoDB Atlas'))
  .catch(err => console.error('⚠️ Erreur MongoDB:', err.message));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Serveur opérationnel sur http://localhost:${PORT}`);
});