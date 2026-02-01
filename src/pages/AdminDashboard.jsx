/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    speciality: '',
    experience: '',
    img: '/images/dr1.png',
    description: '',
    qualifications: ''
  });
  const token = localStorage.getItem('admin_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/admin');
      return;
    }
    const fetchData = async () => {
      try {
        const [dRes, aRes] = await Promise.all([
          fetch('/api/doctors'),
          fetch('/api/appointments', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        const d = await dRes.json();
        const a = aRes.ok ? await aRes.json() : [];

        setDoctors(d);
        setAppointments(a);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleFormChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addDoctor = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.speciality) {
      alert('Please fill in all required fields');
      return;
    }

    const res = await fetch('/api/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      const newDoc = await res.json();
      setDoctors(prev => [newDoc, ...prev]);
      setFormData({
        name: '',
        speciality: '',
        experience: '',
        img: '/images/dr1.png',
        description: '',
        qualifications: ''
      });
      setShowForm(false);
      alert('Doctor added successfully!');
    } else {
      alert('Failed to add doctor');
    }
  };

  const deleteDoctor = async (id) => {
    const isConfirmed = window.confirm('Delete this doctor?');
    if (!isConfirmed) return;

    const res = await fetch(`/api/doctors/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      setDoctors(prev => prev.filter(d => d._id !== id));
      alert('Doctor deleted successfully!');
    } else {
      alert('Failed to delete');
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  if (!token) {
    return <p className="admin-msg">Not authenticated. Please login at /admin</p>;
  }

  if (loading) {
    return <div className="admin-msg">Loading...</div>;
  }

  return (
    <section className="admin-dashboard-wrapper">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={logout} className="btn-secondary">Logout</button>
      </div>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>{doctors.length}</h3>
          <p>Doctors</p>
        </div>
        <div className="stat-card">
          <h3>{appointments.length}</h3>
          <p>Appointments</p>
        </div>
      </div>

      <div className="admin-section">
        <div className="section-header">
          <h2>Doctors Management</h2>
          <button onClick={() => setShowForm(!showForm)} className="btn-primary">
            {showForm ? 'Cancel' : '+ Add Doctor'}
          </button>
        </div>

        {showForm && (
          <form className="admin-form" onSubmit={addDoctor}>
            <div className="form-row">
              <div className="form-group">
                <label>Doctor Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Dr. John Doe"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Speciality *</label>
                <input
                  type="text"
                  name="speciality"
                  placeholder="Cardiologist"
                  value={formData.speciality}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Experience</label>
                <input
                  type="text"
                  name="experience"
                  placeholder="10 years"
                  value={formData.experience}
                  onChange={handleFormChange}
                />
              </div>
              <div className="form-group">
                <label>Qualifications</label>
                <input
                  type="text"
                  name="qualifications"
                  placeholder="MD, DM"
                  value={formData.qualifications}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Doctor description..."
                value={formData.description}
                onChange={handleFormChange}
                rows="3"
              />
            </div>
            <button type="submit" className="btn-primary">Add Doctor</button>
          </form>
        )}

        <div className="doctors-list">
          {doctors.length === 0 ? (
            <p className="empty-msg">No doctors added yet</p>
          ) : (
            doctors.map(d => (
              <div className="doctor-item" key={d._id}>
                <img src={d.img ? process.env.PUBLIC_URL + d.img : process.env.PUBLIC_URL + '/images/dr1.png'} alt={d.name} />
                <div className="doctor-info">
                  <h4>{d.name}</h4>
                  <p className="spec">{d.speciality}</p>
                  {d.qualifications && <p className="qual">{d.qualifications}</p>}
                  <p className="exp">{d.experience}</p>
                </div>
                <button onClick={() => deleteDoctor(d._id)} className="btn-danger">Delete</button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="admin-section">
        <h2>Appointments ({appointments.length})</h2>
        <div className="appointments-list">
          {appointments.length === 0 ? (
            <p className="empty-msg">No appointments yet</p>
          ) : (
            appointments.map(a => (
              <div className="appt-item" key={a._id}>
                <div className="appt-info">
                  <h4>{a.name}</h4>
                  <p>{a.email}</p>
                  <p className="doctor">Doctor: {a.doctorId ? a.doctorId.name : 'Not specified'}</p>
                </div>
                <div className="appt-date">
                  {new Date(a.date).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
