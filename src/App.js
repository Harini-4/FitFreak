import React, { useState } from 'react';
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
import LandingPage from './Components/LandingPage';

function App() {
  const [username, setUsername] = useState('');
  const location = useLocation();

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleSignup = (user) => {
    setUsername(user);
  };
  console.log('Username in App:', username);

  return (
    <>
    {location.pathname !== '/' && location.pathname !== '/userdetail' && !location.pathname.startsWith('/admin') && (
      <Navigationav username={username} />
    )}
    <Routes>
      <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
      <Route path="/home" element={<Home username={username} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      <Route path="/workout" element={<Workout />} />
      <Route path="/mental-care" element={<Mentalcare />} />
      <Route path="/diet-plan" element={<Diet />} />
      <Route path="/my-progress" element={<Progress />} />
      <Route path="/userdetail" element={<UserDetailsModal username={username} />} />
      <Route path='/admin/*' element={<Main />} />
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