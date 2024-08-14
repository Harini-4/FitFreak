import React, { useState, useEffect } from 'react';
import '../../Assets/css/admin/dietcontent.css';
import EditDietModal from '../Admin/EditDietModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageDietContent = () => {
  const [diets, setDiets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDiet, setCurrentDiet] = useState(null);
  const [filterType, setFilterType] = useState('');
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [dietToDelete, setDietToDelete] = useState(null);

  useEffect(() => {
    const fetchDiets = async () => {
      try {
        const response = await fetch('http://localhost:8080/Diet/get');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDiets(data);
      } catch (error) {
        console.error("Error fetching diets:", error);
      }
    };

    fetchDiets();
  }, []);

  const handleEditClick = (diet) => {
    setCurrentDiet(diet);
    setModalOpen(true);
  };

  const handleDeleteClick = (diet) => {
    setDietToDelete(diet);
    setConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/Diet/delete/${dietToDelete.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setDiets(diets.filter(diet => diet.id !== dietToDelete.id));
    } catch (error) {
      console.error("Error deleting diet:", error);
    }
    setConfirmModalOpen(false);
  };

  const cancelDelete = () => {
    setConfirmModalOpen(false);
  };

  const handleUpdate = async (updatedDiet) => {
    try {
      const response = await fetch(`http://localhost:8080/Diet/update/${updatedDiet.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDiet),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedDietFromServer = await response.json();
      setDiets(diets.map(diet => (diet.id === updatedDiet.id ? updatedDietFromServer : diet)));
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating diet:", error);
    }
  };

  const filteredDiets = filterType 
    ? diets.filter(diet => diet.type === filterType) 
    : diets;

  const sortedDiets = [...filteredDiets].sort((a, b) => a.name.localeCompare(b.name));

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
    <div className="manage-diet-content">
      <h1>Manage Diet Content</h1>
      <div className="diet-filter">
        <label htmlFor="filter-type">Filter by Type:</label>
        <select
          id="filter-type"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="High Protein">High Protein</option>
          <option value="Dairy Free">Dairy Free</option>
          <option value="Low Carb">Low Carb</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>
      <table className="manage-diet-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Nutrition</th>
            <th>Rating</th>
            <th>Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {sortedDiets.map((diet) => (
            <tr key={diet.id}>
              <td><img src={`data:image/jpeg;base64,${diet.image}`} alt={diet.name} className="manage-diet-image" /></td>
              <td>{diet.name}</td>
              <td>{diet.nutrition}</td>
              <td>{diet.rating}</td>
              <td>{diet.type}</td>
              <td>
                <EditIcon className="manage-diet-icon manage-diet-edit-btn" onClick={() => handleEditClick(diet)} />
                <DeleteIcon className="manage-diet-icon manage-diet-delete-btn" onClick={() => handleDeleteClick(diet)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && <EditDietModal diet={currentDiet} onClose={() => setModalOpen(false)} onUpdate={handleUpdate} />}
      {confirmModalOpen && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>Are you sure you want to delete this diet?</h3>
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

export default ManageDietContent;
