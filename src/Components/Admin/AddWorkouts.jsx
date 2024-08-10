import React, { useState } from 'react';
import '../../Assets/css/admin/addworkout.css';

const AddWorkout = () => {
  const [workout, setWorkout] = useState({
    gif: '',
    name: '',
    description: '',
    bodyPart: '',
    reps: '',
    sets: '',
    duration: '',
    rest: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      gif: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('gif', workout.gif);
    formData.append('name', workout.name);
    formData.append('description', workout.description);
    formData.append('bodyPart', workout.bodyPart);
    formData.append('reps', workout.reps);
    formData.append('sets', workout.sets);
    formData.append('duration', workout.duration);
    formData.append('rest', workout.rest);

    try {
      const response = await fetch("http://localhost:8080/Workout/add", {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setMessage('Workout added successfully!');
        setIsError(false);
        setWorkout({
          gif: '',
          name: '',
          description: '',
          bodyPart: '',
          reps: '',
          sets: '',
          duration: '',
          rest: ''
        });
      } else {
        setMessage('Error adding workout: ' + response.statusText);
        setIsError(true);
      }
    } catch (error) {
      setMessage('Error adding workout: ' + error.message);
      setIsError(true);
    }
  };

  return (
    <div className="add-workout-container">
      <h2 className="add-workout-title">Add New Workout</h2>
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
      <form className="add-workout-form" onSubmit={handleSubmit}>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Gif:
            <input className="add-workout-input" type="file" name="gif" onChange={handleFileChange} />
          </label>
        </div>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Name:
            <input className="add-workout-input" type="text" name="name" value={workout.name} onChange={handleChange} />
          </label>
        </div>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Body Part:
            <input className="add-workout-input" type="text" name="bodyPart" value={workout.bodyPart} onChange={handleChange} />
          </label>
        </div>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Reps:
            <input className="add-workout-input" type="number" name="reps" value={workout.reps} onChange={handleChange} />
          </label>
        </div>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Sets:
            <input className="add-workout-input" type="number" name="sets" value={workout.sets} onChange={handleChange} />
          </label>
        </div>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Duration (seconds):
            <input className="add-workout-input" type="number" name="duration" value={workout.duration} onChange={handleChange} />
          </label>
        </div>
        <div className="add-workout-form-group">
          <label className="add-workout-label">
            Rest (seconds):
            <input className="add-workout-input" type="number" name="rest" value={workout.rest} onChange={handleChange} />
          </label>
        </div>
        <div className="add-workout-form-group full-width">
          <label className="add-workout-label">
            Description:
            <textarea className="add-workout-textarea" name="description" value={workout.description} onChange={handleChange}></textarea>
          </label>
        </div>
        <button className="add-workout-button" type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
