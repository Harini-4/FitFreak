import React, { useState } from 'react';
import '../Assets/css/progressform.css'
const ProgressForm = ({ onSaveProgress }) => {
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [workoutReps, setWorkoutReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const progressData = {
      weight,
      waist,
      workoutReps,
      date: new Date().toISOString(),
    };
    onSaveProgress(progressData);
  };

  return (
    <div className="fitness-form-container">
      <form className="fitness-progress-form" onSubmit={handleSubmit}>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Weight (kg):</label>
          <input
            type="number"
            className="fitness-form-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Height (cm):</label>
          <input
            type="number"
            className="fitness-form-input"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
          />
        </div>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Calories Burnt (kcal):</label>
          <input
            type="number"
            className="fitness-form-input"
            value={workoutReps}
            onChange={(e) => setWorkoutReps(e.target.value)}
          />
        </div>
        <button type="submit" className="fitness-form-button">Save Progress</button>
      </form>
    </div>
  );
};

export default ProgressForm;
