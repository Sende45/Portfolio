const express = require('express');
const router = express.Router();
const { getUploadSignature } = require('../middleware/upload');
const adminAuth = require('../middleware/adminAuth');

// GET /api/upload/sign — admin
router.get('/sign', adminAuth, getUploadSignature);

module.exports = router;