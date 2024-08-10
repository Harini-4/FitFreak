import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Workout from './Components/Workout';
import Diet from './Components/Diet';
import Progress from './Components/Progress';
import Mentalcare from './Components/mentalcare';
import Navigationav from './Components/Navigationav';
import UserDetailsModal from './Components/UserDetails';
import Main from './Components/Admin/Main';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/userdetail' && !location.pathname.startsWith('/admin') && <Navigationav />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/mental-care" element={<Mentalcare />} />
        <Route path="/diet-plan" element={<Diet />} />
        <Route path="/my-progress" element={<Progress />} />
        <Route path='/userdetail' element={<UserDetailsModal />} />
        <Route path='/admin/*' element={<Main/>}/>
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
