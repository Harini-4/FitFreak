import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/css/admin/sidebar.css';
import logoImage from '../../Assets/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const navigate = useNavigate();

  const handlePageChange = (page, path) => {
    setActivePage(page);
    navigate(path); // Navigate to the desired path
  };

  const handleLogout = () => {
    // Perform any necessary logout operations here, such as clearing auth tokens
    // For example, you might want to call an API to log the user out

    // Navigate to the home page
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logoImage} alt="FitFreak Logo" className="logo-image" />
        <div className="logo-text">FitFreak Admin</div>
      </div>
      <ul className="nav-list">
        <li 
          className={activePage === 'Dashboard' ? 'active' : ''} 
          onClick={() => handlePageChange('Dashboard', 'admin/dashboard')}
        >
          <DashboardIcon className="sidebar-icon" />
          Dashboard
        </li>
        <li 
          className={activePage === 'Workouts' ? 'active' : ''} 
          onClick={() => handlePageChange('Workouts', 'admin/workouts')}
        >
          <FitnessCenterIcon className="sidebar-icon" />
          Workouts
        </li>
        <li 
          className={activePage === 'Diet' ? 'active' : ''} 
          onClick={() => handlePageChange('Diet', 'admin/diet')}
        >
          <LocalDiningIcon className="sidebar-icon" />
          Diet
        </li>
        <li 
          className={activePage === 'Analytics' ? 'active' : ''} 
          onClick={() => handlePageChange('Analytics', 'admin/analytics')}
        >
          <AnalyticsIcon className="sidebar-icon" />
          Mental Health Analytics
        </li>
        <li 
          className={activePage === 'Users' ? 'active' : ''} 
          onClick={() => handlePageChange('Users', 'admin/users')}
        >
          <GroupIcon className="sidebar-icon" />
          Users
        </li>
      </ul>
      <div className="logout" onClick={handleLogout}>
        <LogoutIcon className="sidebar-icon" />
        Log out
      </div>
    </div>
  );
};

export default Sidebar;
