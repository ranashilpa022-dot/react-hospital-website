import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Appointment.css";

const Appointment = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    problem: "",
  });

  // Doctor name Doctors page se aaye to auto-fill
  useEffect(() => {
    if (location.state?.doctor) {
      setFormData((prev) => ({
        ...prev,
        doctor: location.state.doctor,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // client-side validation
    const errors = {};
    if (!formData.name || formData.name.length < 2) errors.name = 'Please enter your name';
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(formData.email)) errors.email = 'Invalid email';
    const phoneRe = /^[0-9+\-()\s]{7,20}$/;
    if (!phoneRe.test(formData.phone)) errors.phone = 'Invalid phone';
    if (!formData.doctor) errors.doctor = 'Select a doctor';
    if (!formData.date) errors.date = 'Select a date';

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    // submit to backend
    (async () => {
      try {
        const res = await fetch('/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            doctorId: null,
            date: formData.date,
            message: formData.problem,
          }),
        });
        if (!res.ok) throw new Error('Failed to book appointment');
        alert('✅ Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          doctor: '',
          date: '',
          problem: '',
        });
      } catch (err) {
        alert('Failed to book appointment — try again later');
      }
    })();
  };

  const [formErrors, setFormErrors] = React.useState({});

  return (
    <div className="appointment">
      <h1>Book an Appointment</h1>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <div className="field-error">{formErrors.email}</div>}

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {formErrors.phone && <div className="field-error">{formErrors.phone}</div>}

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          <option>Dr. Rahul Sharma</option>
          <option>Dr. Neha Verma</option>
          <option>Dr. Amit Singh</option>
        </select>
        {formErrors.doctor && <div className="field-error">{formErrors.doctor}</div>}

        <input
          type="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          value={formData.date}
          onChange={handleChange}
          required
        />
        {formErrors.date && <div className="field-error">{formErrors.date}</div>}

        <textarea
          name="problem"
          placeholder="Describe your problem"
          value={formData.problem}
          onChange={handleChange}
        />

        <button type="submit">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
