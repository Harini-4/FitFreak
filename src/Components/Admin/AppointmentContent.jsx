import React, { useState, useEffect } from 'react';
import '../../Assets/css/admin/appointmentcontent.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

const ManageAppointmentContent = () => {
  const [appointments, setAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8080/appointments/get');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAppointments(data.filter(app => !app.completed));
        setCompletedAppointments(data.filter(app => app.completed));
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleMarkAsCompleted = async (appointment) => {
    try {
      const updatedAppointment = { ...appointment, completed: true };
      const response = await fetch(`http://localhost:8080/appointments/update/${appointment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAppointment),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAppointments(appointments.filter(app => app.id !== data.id));
      setCompletedAppointments([...completedAppointments, data]);
      toast.success('Appointment marked as completed!');
    } catch (error) {
      console.error('Error marking appointment as completed:', error);
      toast.error('Error marking appointment as completed');
    }
  };

  const handleDeleteClick = (appointment) => {
    setAppointmentToDelete(appointment);
    setConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/appointments/delete/${appointmentToDelete.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setAppointments(appointments.filter(app => app.id !== appointmentToDelete.id));
      setCompletedAppointments(completedAppointments.filter(app => app.id !== appointmentToDelete.id));
      toast.success('Appointment deleted successfully!');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      toast.error('Error deleting appointment');
    }
    setConfirmModalOpen(false);
  };

  const cancelDelete = () => {
    setConfirmModalOpen(false);
  };

  // Inline CSS for the confirmation modal
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '400px',
    position: 'relative',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
    fontSize: '16px',
  };

  const confirmButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white',
  };

  return (
    <div className="manage-appointment-content">
      <h1>Manage Appointments</h1>
      <div className="appointment-section">
        <h2>Active Appointments</h2>
        <table className="appointment-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Message</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.firstName}</td>
                <td>{appointment.lastName}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.date}</td>
                <td>{appointment.message}</td>
                <td>
                  <CheckCircleIcon
                    style={{ color: '#28a745', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }}
                    onClick={() => handleMarkAsCompleted(appointment)}
                  />
                  <DeleteIcon
                    style={{ color: '#dc3545', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }}
                    onClick={() => handleDeleteClick(appointment)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Completed Appointments</h2>
        <table className="appointment-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {completedAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.firstName}</td>
                <td>{appointment.lastName}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.date}</td>
                <td>{appointment.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {confirmModalOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>Are you sure you want to delete this appointment?</h3>
            <div style={buttonContainerStyle}>
              <button style={confirmButtonStyle} onClick={confirmDelete}>Yes</button>
              <button style={cancelButtonStyle} onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAppointmentContent;
