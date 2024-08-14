import React, { useState } from 'react';
import '../Assets/css/progressform.css';

const ProgressForm = ({ onSaveProgress }) => {
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [caloriesBurnt, setCaloriesBurnt] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [stepsCount, setStepsCount] = useState('');
  const [distanceWalked, setDistanceWalked] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const progressData = {
      weight,
      waist,
      caloriesBurnt,
      heartRate,
      stepsCount,
      distanceWalked,
      date: new Date().toISOString(),
    };
    onSaveProgress(progressData);
  };

  return (
    <div className="fitness-form-container">
      <form className="fitness-progress-form" onSubmit={handleSubmit}>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Calories Burnt (kcal):</label>
          <input
            type="number"
            className="fitness-form-input"
            value={caloriesBurnt}
            onChange={(e) => setCaloriesBurnt(e.target.value)}
          />
        </div>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Heart Rate (bpm):</label>
          <input
            type="number"
            className="fitness-form-input"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
          />
        </div>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Steps Count:</label>
          <input
            type="number"
            className="fitness-form-input"
            value={stepsCount}
            onChange={(e) => setStepsCount(e.target.value)}
          />
        </div>
        <div className="fitness-form-group">
          <label className="fitness-form-label">Distance Walked (km):</label>
          <input
            type="number"
            className="fitness-form-input"
            value={distanceWalked}
            onChange={(e) => setDistanceWalked(e.target.value)}
          />
        </div>
        <button type="submit" className="fitness-form-button">Save Progress</button>
      </form>
    </div>
  );
};

export default ProgressForm;
