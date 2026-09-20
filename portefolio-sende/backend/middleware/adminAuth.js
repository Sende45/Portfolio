// middleware/adminAuth.js
module.exports = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ message: 'Non autorisé' });
  }
  next();
};