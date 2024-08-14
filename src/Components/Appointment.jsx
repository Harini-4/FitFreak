import React, { useState } from 'react';
import '../Assets/css/appointment.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/appointments/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Appointment created:', data);
      toast.success('Appointment booked successfully!');
      // Optionally reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      });
    } catch (error) {
      console.error('Error creating appointment:', error);
      toast.error('Error creating appointment');
    }
  };

  return (
    <div className="appoint">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="Harini"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Kannan"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9585660441"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Hello there!"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Make Appointment</button>
        </form>
      </div>
      <div className="info-section">
        <h2>Secure Your Schedule With Us Today</h2>
        <p>Book an appointment today to secure your spot with our expert team.</p>
        <button className="btn-secondary">Contact Us</button>
      </div>
      <ToastContainer /> {/* Make sure to include this to render the toasts */}
    </div>
  );
};

export default Appointment;
