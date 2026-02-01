const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const ADMIN_USER = process.env.ADMIN_USER || 'admin@example.com';
const ADMIN_PASS = process.env.ADMIN_PASS || 'adminpassword';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Simple login that validates against env admin creds
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing credentials' });

  // For simplicity use env creds; in production use DB
  if (email === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ role: 'admin', email }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
