// import React, { useState } from "react";
// import "./Appointment.css";

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     doctor: "",
//     date: "",
//   });

//   // input change handler
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // submit handler (SAVE TO localStorage)
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // old appointments get karo
//     const existingAppointments =
//       JSON.parse(localStorage.getItem("appointments")) || [];

//     // new appointment object
//     const newAppointment = {
//       name: formData.name,
//       email: formData.email,
//       doctor: formData.doctor,
//       date: formData.date,
//     };

//     // update list
//     const updatedAppointments = [
//       ...existingAppointments,
//       newAppointment,
//     ];

//     // save in localStorage
//     localStorage.setItem(
//       "appointments",
//       JSON.stringify(updatedAppointments)
//     );

//     alert("✅ Appointment booked successfully!");

//     // form reset
//     setFormData({
//       name: "",
//       email: "",
//       doctor: "",
//       date: "",
//     });
//   };

//   return (
//     <div className="appointment">
//       <h1>Book Appointment</h1>

//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Patient Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <select
//           name="doctor"
//           value={formData.doctor}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Doctor</option>
//           <option>Dr. Rahul Sharma</option>
//           <option>Dr. Neha Verma</option>
//           <option>Dr. Amit Singh</option>
//         </select>

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Confirm Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default Appointment;

// import React, { useState } from "react";
// import "./Appointment.css";

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     doctor: "",
//     date: "",
//     problem: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const existingAppointments =
//       JSON.parse(localStorage.getItem("appointments")) || [];

//     const newAppointment = {
//       id: Date.now(),
//       ...formData,
//     };

//     localStorage.setItem(
//       "appointments",
//       JSON.stringify([...existingAppointments, newAppointment])
//     );

//     alert("✅ Your appointment has been booked successfully!");

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       doctor: "",
//       date: "",
//       problem: "",
//     });
//   };

//   return (
//     <div className="appointment">
//       <h1>Book an Appointment</h1>
//       <p className="appointment-subtitle">
//         Please fill in the details below and our team will contact you.
//       </p>

//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Patient Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Mobile Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />

//         <select
//           name="doctor"
//           value={formData.doctor}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Doctor</option>
//           <option>Dr. Rahul Sharma – Cardiologist</option>
//           <option>Dr. Neha Verma – Dermatologist</option>
//           <option>Dr. Amit Singh – Orthopedic</option>
//         </select>

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           min={new Date().toISOString().split("T")[0]}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="problem"
//           placeholder="Describe your health concern (optional)"
//           value={formData.problem}
//           onChange={handleChange}
//           rows="4"
//         ></textarea>

//         <button type="submit">Confirm Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default Appointment;

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

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const newAppointment = {
      id: Date.now(),
      ...formData,
    };

    localStorage.setItem(
      "appointments",
      JSON.stringify([...existingAppointments, newAppointment])
    );

    alert("✅ Appointment booked successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      problem: "",
    });
  };

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

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

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

        <input
          type="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          value={formData.date}
          onChange={handleChange}
          required
        />

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
