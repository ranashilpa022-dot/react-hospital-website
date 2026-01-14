import React from "react";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Rahul Sharma",
    speciality: "Cardiologist",
    experience: "15 years",
    img: process.env.PUBLIC_URL + "/images/dr1.png",
    description:
      "Expert in heart diseases and cardiac surgeries with modern techniques.",
  },
  {
    name: "Dr. Neha Verma",
    speciality: "Dermatologist",
    experience: "12 years",
    img: process.env.PUBLIC_URL + "/images/dr2.png",
    description:
      "Specializes in skin treatments, cosmetic dermatology, and laser therapy.",
  },
  {
    name: "Dr. Amit Singh",
    speciality: "Orthopedic Surgeon",
    experience: "10 years",
    img: process.env.PUBLIC_URL + "/images/dr1.png",
    description:
      "Experienced in joint replacement, fracture treatment, and sports injuries.",
  },
  {
    name: "Dr. Priya Jain",
    speciality: "Pediatrician",
    experience: "8 years",
    img: process.env.PUBLIC_URL + "/images/dr2.png",
    description:
      "Providing compassionate care for children and infants with personalized treatment.",
  },
];

const Doctors = () => {
  return (
    <section className="doctors-section">
      <h1>Meet Our Experts</h1>
      <p>
        Our highly qualified doctors are dedicated to providing the best
        healthcare services.
      </p>

      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.img} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p className="speciality">{doc.speciality}</p>
            <p className="experience">{doc.experience}</p>
            <p className="description">{doc.description}</p>
            <button className="btn-primary">Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
