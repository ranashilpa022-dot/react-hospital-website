const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  speciality: { type: String },
  experience: { type: String },
  img: { type: String },
  description: { type: String },
  qualifications: { type: String },
});

module.exports = mongoose.model('Doctor', DoctorSchema);
