import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ProgressDisplay = ({ progressData }) => {
  // Calculate derived metrics
  const dates = progressData.map((entry) => new Date(entry.date).toLocaleDateString());
  const caloriesPerKm = progressData.map((entry) => entry.distanceWalked > 0 ? (entry.caloriesBurnt / entry.distanceWalked).toFixed(2) : 0);
  const activityIntensityScore = progressData.map((entry) => 
    entry.stepsCount > 0 ? 
    ((entry.caloriesBurnt / entry.stepsCount) * (entry.heartRate / 100)).toFixed(2) : 0
  );

  // Prepare data for the chart
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Calories Burnt Per Kilometer (kcal/km)',
        data: caloriesPerKm,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        fill: false,
      },
      {
        label: 'Activity Intensity Score',
        data: activityIntensityScore,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="progress-display-container">
      <h2 className="progress-display-title">Derived Metrics Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProgressDisplay;
