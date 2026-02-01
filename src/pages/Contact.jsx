import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // input change handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // form submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name || formData.name.length < 2) errors.name = 'Please enter your name';
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(formData.email)) errors.email = 'Invalid email';
    if (!formData.message || formData.message.length < 10) errors.message = 'Message is too short';
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;

    (async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Failed');
        alert('✅ Thank you! Our team will contact you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        alert('Failed to send message — try again later');
      }
    })();
  };

  const [errors, setErrors] = useState({});

  return (
    <div className="contact-page">

      {/* ================= HEADER ================= */}
      <div className="contact-header">
        <h1>Contact City Hospital</h1>
        <p>
          We are available 24/7 to assist you. Reach out for appointments,
          emergencies, or general inquiries.
        </p>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="contact-container">

        {/* LEFT : CONTACT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            <strong>📍 Address:</strong>
            <br />
            City Hospital, Jabalpur, Madhya Pradesh
          </p>

          <p>
            <strong>📞 Phone:</strong>
            <br />
            +91 7879448719
          </p>

          <p>
            <strong>📧 Email:</strong>
            <br />
            info@cityhospital.com
          </p>

          <p>
            <strong>⏰ Working Hours:</strong>
            <br />
            OPD: 9:00 AM – 8:00 PM
            <br />
            Emergency: 24/7
          </p>
        </div>

        {/* RIGHT : CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="field-error">{errors.email}</div>}

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <div className="field-error">{errors.message}</div>}

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
