const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');

dotenv.config();

const sampleDoctors = [
  {
    name: 'Dr. Rahul Sharma',
    speciality: 'Cardiologist',
    experience: '15 years',
    img: '/images/dr1.png',
    description: 'Expert in heart diseases and interventional cardiology. Performs angioplasty and complex cardiac care.',
    qualifications: 'MD, DM (Cardiology)'
  },
  {
    name: 'Dr. Neha Verma',
    speciality: 'Dermatologist',
    experience: '12 years',
    img: '/images/dr2.png',
    description: 'Specializes in medical and cosmetic dermatology, acne and laser treatments.',
    qualifications: 'MBBS, MD (Dermatology)'
  },
  {
    name: 'Dr. Amit Singh',
    speciality: 'Orthopedic Surgeon',
    experience: '10 years',
    img: '/images/dr3.png',
    description: 'Experienced in joint replacement, arthroscopy and sports injury management.',
    qualifications: 'MBBS, MS (Orthopedics)'
  },
  {
    name: 'Dr. Priya Jain',
    speciality: 'Pediatrician',
    experience: '8 years',
    img: '/images/dr4.png',
    description: 'Provides compassionate care for infants and children including vaccinations and growth monitoring.',
    qualifications: 'MBBS, DCH'
  },
  {
    name: 'Dr. Suresh Patel',
    speciality: 'General Surgeon',
    experience: '18 years',
    img: '/images/dr5.png',
    description: 'Laparoscopic and general surgical procedures with strong experience in emergency surgery.',
    qualifications: 'MBBS, MS (General Surgery)'
  },
  {
    name: 'Dr. Kavita Rao',
    speciality: 'Gynecologist',
    experience: '14 years',
    img: '/images/dr6.png',
    description: 'Expert in obstetrics, prenatal care and minimally invasive gynecologic surgery.',
    qualifications: 'MBBS, MS (Obstetrics & Gynecology)'
  }
];

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hospital';

async function reseed() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB for reseed');
    await Doctor.deleteMany({});
    await Doctor.insertMany(sampleDoctors);
    console.log('Reseed completed: inserted', sampleDoctors.length, 'doctors');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Reseed error', err);
    process.exit(1);
  }
}

reseed();
