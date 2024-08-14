// src/Components/Admin/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import FitnessDashboard from './Dashboard';
import AddWorkout from './AddWorkouts';
import AddDiet from './AddDiet';
import ManageUsers from './ListUsers';
import ManageAppointmentContent from './AppointmentContent';


const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="admin/dashboard" element={<FitnessDashboard />} />
          <Route path="admin/workouts" element={<AddWorkout />} />
          <Route path="admin/diet" element={<AddDiet />} />
          <Route path="admin/users" element={<ManageUsers/>}/>
          <Route path="admin/analytics" element={<ManageAppointmentContent/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
