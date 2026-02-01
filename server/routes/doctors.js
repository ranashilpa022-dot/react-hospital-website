const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const auth = require('../middleware/auth');

// GET /api/doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/doctors (protected for admin)
router.post('/', auth, async (req, res) => {
  try {
    const { name, speciality, experience, img, description } = req.body;
    const doc = new Doctor({ name, speciality, experience, img, description });
    await doc.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// DELETE /api/doctors/:id (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
