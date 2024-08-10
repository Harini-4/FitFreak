// src/Components/Admin/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import FitnessDashboard from './Dashboard';
import AddWorkout from './AddWorkouts';
import AddDiet from './AddDiet';

// import '../../Assets/css/admin/main.css';

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="admin/dashboard" element={<FitnessDashboard />} />
          <Route path="admin/workouts" element={<AddWorkout />} />
          <Route path="admin/diet" element={<AddDiet />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
