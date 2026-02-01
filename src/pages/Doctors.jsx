import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctors');
        if (!res.ok) throw new Error('Failed to load doctors');
        const data = await res.json();
        if (mounted) setDoctors(data);
      } catch (err) {
        if (mounted) setError(err.message || 'Error');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchDoctors();
    return () => (mounted = false);
  }, []);

  if (loading) return (<section className="doctors-section"><p>Loading doctors...</p></section>);
  if (error) return (<section className="doctors-section"><p>Error: {error}</p></section>);

  return (
    <section className="doctors-section">
      <h1>Meet Our Experts</h1>
      <p>
        Our highly qualified doctors are dedicated to providing the best
        healthcare services.
      </p>

      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div className="doctor-card" key={doc._id || doc.name}>
            <img src={doc.img ? process.env.PUBLIC_URL + doc.img : process.env.PUBLIC_URL + '/images/dr1.png'} alt={doc.name} />
            <h3>{doc.name}</h3>
            {doc.qualifications && <p className="qual">{doc.qualifications}</p>}
            <p className="speciality">{doc.speciality}</p>
            <p className="experience">{doc.experience}</p>
            <p className="description">{doc.description}</p>
            <Link to="/appointment">
              <button className="btn-primary">Book Appointment</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
