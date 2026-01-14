import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Left: Text */}
        <div className="about-text">
          <h1>About City Hospital</h1>
          <p>
            City Hospital has been serving the community for over 20 years,
            offering world-class medical care with compassion and integrity.
            Our team of specialists and state-of-the-art facilities ensure
            personalized treatment for every patient.
          </p>

          <div className="about-highlights">
            <div>
              <h3>🏥 20+</h3>
              <p>Years of Trusted Care</p>
            </div>
            <div>
              <h3>👨‍⚕️ 50+</h3>
              <p>Specialized Doctors</p>
            </div>
            <div>
              <h3>😊 25,000+</h3>
              <p>Patients Served Annually</p>
            </div>
          </div>

          <h2>Our Mission</h2>
          <p>
            To provide accessible, reliable, and compassionate healthcare to
            everyone, while constantly improving our services and facilities.
          </p>

          <h2>Our Vision</h2>
          <p>
            To be recognized as a leading healthcare provider known for
            excellence, innovation, and patient satisfaction.
          </p>

          <h2>Core Values</h2>
          <ul>
            <li>💖 Compassion: Patient-first approach in all care</li>
            <li>🩺 Excellence: High-quality medical services</li>
            <li>🧠 Innovation: Advanced technology & treatment</li>
            <li>🤝 Integrity: Trustworthy and ethical care</li>
            <li>🌟 Commitment: Dedicated to patient well-being</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="about-image">
            <img
              src={process.env.PUBLIC_URL + "/images/image.png"}
              alt="Doctor"
            />
        </div>
      </div>
    </section>
  );
};

export default About;
