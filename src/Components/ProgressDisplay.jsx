import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js auto for treeshaking

const ProgressDisplay = ({ progressData }) => {
  // Prepare data for the chart
  const dates = progressData.map((entry) => new Date(entry.date).toLocaleDateString());
  const weights = progressData.map((entry) => entry.weight);
  const waists = progressData.map((entry) => entry.waist);
  const calories = progressData.map((entry) => entry.workoutReps);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Weight (kg)',
        data: weights,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Height (cm)',
        data: waists,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Calories Burnt (kcal)',
        data: calories,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
      <h2 className="progress-display-title">Progress Over Time</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressDisplay;
