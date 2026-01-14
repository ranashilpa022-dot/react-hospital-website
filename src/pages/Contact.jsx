import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you! Our team will contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact City Hospital</h1>
        <p>
          We are available 24/7 to assist you. Reach out for appointments,
          emergencies, or general inquiries.
        </p>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        {/* Left: Contact Info */}
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

        {/* Right: Contact Form */}
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

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
