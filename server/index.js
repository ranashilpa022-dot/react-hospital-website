const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const doctorsRoute = require('./routes/doctors');
const appointmentsRoute = require('./routes/appointments');
const authRoute = require('./routes/auth');
const contactRoute = require('./routes/contact');

app.use('/api/doctors', doctorsRoute);
app.use('/api/appointments', appointmentsRoute);
app.use('/api/auth', authRoute);
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/hospital';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    // seed sample data if needed
    const seed = require('./seed');
    await seed();

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error', err));
