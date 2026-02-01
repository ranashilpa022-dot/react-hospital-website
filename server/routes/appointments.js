const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

// POST /api/appointments
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, doctorId, date, message } = req.body;
    const appt = new Appointment({ name, email, phone, doctorId, date, message });
    await appt.save();
    res.status(201).json({ message: 'Appointment created' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

// GET /api/appointments (admin)
router.get('/', auth, async (req, res) => {
  try {
    const appts = await Appointment.find().populate('doctorId');
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
