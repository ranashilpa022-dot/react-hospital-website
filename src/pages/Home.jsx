import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tagline">Trusted Healthcare Since 2005</span>

          <h1>
            Comprehensive Care <br /> For Every Stage of Life
          </h1>

          <p>
            City Hospital is a leading multi-specialty healthcare institution
            offering advanced medical treatments, modern infrastructure, and
            compassionate patient care — available 24/7.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment">
              <button className="btn-primary">Book Appointment</button>
            </Link>

            <a href="tel:+917879448719">
              <button className="btn-secondary">Emergency Call</button>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>20+</h3>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Qualified Doctors</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Emergency Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services section-light">
        <h2>Our Medical Services</h2>
        <p className="section-subtitle">
          We provide a wide range of healthcare services using the latest
          technology and evidence-based practices.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Cardiology</h3>
            <p>Advanced heart care including diagnosis, intervention, and rehabilitation.</p>
          </div>

          <div className="service-card">
            <h3>Neurology</h3>
            <p>Comprehensive care for brain, spine, and nervous system disorders.</p>
          </div>

          <div className="service-card">
            <h3>Pediatrics</h3>
            <p>Specialized healthcare services for infants, children, and adolescents.</p>
          </div>

          <div className="service-card">
            <h3>Orthopedics</h3>
            <p>Expert treatment for bone, joint, and musculoskeletal conditions.</p>
          </div>
        </div>
      </section>

      {/* ================= DOCTORS SECTION ================= */}
      <section className="doctors section-dark">
        <h2>Meet Our Specialists</h2>
        <p className="section-subtitle">
          Our doctors are highly experienced and committed to delivering
          personalized patient care.
        </p>

        <div className="doctors-grid">
          <div className="doctor-card">
            <h3>Dr. Anjali Sharma</h3>
            <p>Cardiologist</p>
            <span>15+ Years Experience</span>
          </div>

          <div className="doctor-card">
            <h3>Dr. Rohit Verma</h3>
            <p>Neurologist</p>
            <span>12+ Years Experience</span>
          </div>

          <div className="doctor-card">
            <h3>Dr. Priya Singh</h3>
            <p>Pediatrician</p>
            <span>10+ Years Experience</span>
          </div>
        </div>

        <Link to="/doctors">
          <button className="btn-secondary">View All Doctors</button>
        </Link>
      </section>

      {/* ================= ABOUT SECTION (FIXED) ================= */}
      <section className="about section-light">
        <div className="about-container">

          <div className="about-text">
            <h2>About City Hospital</h2>
            <p>
              City Hospital has been serving the community for over two decades.
              We are dedicated to delivering high-quality healthcare through
              advanced medical technologies, skilled professionals, and a
              patient-first approach.
            </p>

            <ul className="about-highlights">
              <li>✔ NABH-inspired quality standards</li>
              <li>✔ Advanced diagnostics & ICU facilities</li>
              <li>✔ Patient-centric treatment approach</li>
              <li>✔ Ethical & transparent medical care</li>
            </ul>

            <Link to="/about">
              <button className="btn-primary">Learn More</button>
            </Link>
          </div>

          <div className="about-image">
            <img
              src={process.env.PUBLIC_URL + "/images/image.png"}
              alt="Doctor"
            />
          </div>

        </div>
      </section>

      {/* ================= QUICK CONTACT SECTION ================= */}
      <section className="quick-contact section-dark">
        <div className="quick-contact-container">
          <h2>Need Medical Assistance?</h2>
          <p>
            Our emergency and support teams are available 24/7 to assist you.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <h3>Emergency Call</h3>
              <p>+91 7879448719</p>
              <a href="tel:+917879448719">
                <button className="btn-primary">Call Now</button>
              </a>
            </div>

            <div className="contact-card">
              <h3>Email Support</h3>
              <p>info@cityhospital.com</p>
              <a href="mailto:info@cityhospital.com">
                <button className="btn-primary">Email Us</button>
              </a>
            </div>

            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>Instant medical guidance</p>
              <a
                href="https://wa.me/917879448719"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">Chat Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
