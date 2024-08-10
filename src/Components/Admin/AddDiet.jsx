import React, { useState } from 'react';
import '../../Assets/css/admin/adddiet.css';

const AddDiet = () => {
  const [diet, setDiet] = useState({
    image: '',
    name: '',
    ingredients: '',
    steps: '',
    nutrition: '',
    time: '',
    rating: '',
    type: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiet((prevDiet) => ({
      ...prevDiet,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setDiet((prevDiet) => ({
      ...prevDiet,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', diet.image);
    formData.append('name', diet.name);
    formData.append('ingredients', diet.ingredients);
    formData.append('steps', diet.steps);
    formData.append('nutrition', diet.nutrition);
    formData.append('time', diet.time);
    formData.append('rating', parseFloat(diet.rating));
    formData.append('type', diet.type);

    try {
      const response = await fetch("http://localhost:8080/Diet/add", {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setMessage('Diet added successfully!');
        setIsError(false);
        setDiet({
          image: '',
          name: '',
          ingredients: '',
          steps: '',
          nutrition: '',
          time: '',
          rating: '',
          type: ''
        });
      } else {
        setMessage('Error adding diet: ' + response.statusText);
        setIsError(true);
      }
    } catch (error) {
      setMessage('Error adding diet: ' + error.message);
      setIsError(true);
    }
  };

  return (
    <div className="add-diet-container">
      <h2 className="add-diet-title">Add New Diet</h2>
      {message && (
        <div
          style={{
            color: isError ? 'red' : 'green',
            fontWeight: 'bold'
          }}
        >
          {message}
        </div>
      )}
      <form className="add-diet-form" onSubmit={handleSubmit}>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Image:
            <input className="add-diet-input" type="file" name="image" onChange={handleFileChange} />
          </label>
        </div>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Name:
            <input className="add-diet-input" type="text" name="name" value={diet.name} onChange={handleChange} />
          </label>
        </div>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Ingredients:
            <textarea className="add-diet-textarea" name="ingredients" value={diet.ingredients} onChange={handleChange}></textarea>
          </label>
        </div>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Steps:
            <textarea className="add-diet-textarea" name="steps" value={diet.steps} onChange={handleChange}></textarea>
          </label>
        </div>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Nutrition:
            <input className="add-diet-input" type="text" name="nutrition" value={diet.nutrition} onChange={handleChange} />
          </label>
        </div>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Time:
            <input className="add-diet-input" type="text" name="time" value={diet.time} onChange={handleChange} />
          </label>
        </div>
        <div className="add-diet-form-group">
          <label className="add-diet-label">
            Rating:
            <input className="add-diet-input" type="number" name="rating" value={diet.rating} onChange={handleChange} />
          </label>
        </div>
        <div className="add-diet-form-group">
  <label className="add-diet-label">
    Type:
    <select
      className="add-diet-input"
      name="type"
      value={diet.type}
      onChange={handleChange}
    >
      <option value="High Protein">High Protein</option>
      <option value="Dairy Free">Dairy Free</option>
      <option value="Low Carb">Low Carb</option>
      <option value="Vegetarian">Vegetarian</option>
    </select>
  </label>
</div>

        <button className="add-diet-button" type="submit">Add Diet</button>
      </form>
    </div>
  );
};

export default AddDiet;
