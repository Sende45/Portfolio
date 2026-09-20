// middleware/upload.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Génère une signature pour un upload direct depuis le front
exports.getUploadSignature = (req, res) => {
  try {
    const timestamp = Math.round(Date.now() / 1000);
    const folder = 'portfolio';

    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder, upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET },
      process.env.CLOUDINARY_API_SECRET
    );

    res.json({
      timestamp,
      signature,
      folder,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });
  } catch (err) {
    res.status(500).json({ message: 'Erreur signature Cloudinary' });
  }
};

// Supprime une image via son public_id
exports.deleteCloudinaryImage = async (publicId) => {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (err) {
    console.error('Erreur suppression Cloudinary:', err.message);
  }
};