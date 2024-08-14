import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditDietModal = ({ diet, onClose, onSave }) => {
  const [name, setName] = useState(diet.name);
  const [nutrition, setNutrition] = useState(diet.nutrition);
  const [rating, setRating] = useState(diet.rating);
  const [type, setType] = useState(diet.type);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct the form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('nutrition', nutrition);
    formData.append('rating', rating);
    formData.append('type', type);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:8080/Diet/update/${diet.id}`, {
        method: 'PUT',
        body: formData,
        // No need to set 'Content-Type' header for FormData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("Diet updated successfully!");
      setTimeout(() => {
        if (typeof onSave === 'function') {
          onSave({ ...diet, name, nutrition, rating, type, image });
        }
        onClose();
      }, 2000); // Close modal after 2 seconds

    } catch (error) {
      console.error("Error updating diet:", error);
      toast.error("Failed to update the diet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="diet-modal">
      <div className="diet-modal-content">
        <span className="diet-close-button" onClick={onClose}>×</span>
        <h2>Edit Diet</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="nutrition">Nutrition</label>
          <textarea
            id="nutrition"
            name="nutrition"
            value={nutrition}
            onChange={(e) => setNutrition(e.target.value)}
            required
          ></textarea>

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />

          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />

          <label htmlFor="image">Image (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default EditDietModal;
