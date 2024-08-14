import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import profile from '../Assets/profile.webp';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function Navigationav({ username: propUsername }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to set the username from prop or storage
    const setUsername = async () => {
      if (propUsername) {
        // Prioritize propUsername if it exists
        setUser(propUsername);
        localStorage.setItem('username', propUsername); // Store in localStorage
      } else {
        // Check localStorage for the username
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUser(storedUsername);
        } else {
          // Fetch the latest username from the server if no username is set
          try {
            const response = await axios.get('http://localhost:8080/Fitfreak/users');
            const latestUsername = response.data[response.data.length - 1].username;
            setUser(latestUsername);
            localStorage.setItem('username', latestUsername);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        }
      }
    };

    setUsername();
  }, [propUsername]);

  useEffect(() => {
    // Close the dropdown if clicking outside of it
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Set the active page based on the current path
    const pathToPage = {
      '/home': 'Home',
      '/workout': 'Workouts',
      '/mental-care': 'Mental Care',
      '/diet-plan': 'Diet Plan',
      '/my-progress': 'My Progress',
    };
    setActivePage(pathToPage[location.pathname] || 'Home');
  }, [location]);

  const handleSignOut = () => {
    // Sign out the user and clear the username
    localStorage.removeItem('username');
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img className="logo-icon" src={logo} alt="Logo" />
        </div>
        <div className="page-names">
          <Link to="/home" className={activePage === 'Home' ? 'active' : ''}>Home</Link>
          <Link to="/workout" className={activePage === 'Workouts' ? 'active' : ''}>Workouts</Link>
          <Link to="/mental-care" className={activePage === 'Mental Care' ? 'active' : ''}>Mental Care</Link>
          <Link to="/diet-plan" className={activePage === 'Diet Plan' ? 'active' : ''}>Diet Plan</Link>
          <Link to="/my-progress" className={activePage === 'My Progress' ? 'active' : ''}>My Progress</Link>
        </div>
        <div className="log">
          {user && (
            <div className="after-login" onClick={() => setDropdownOpen(!dropdownOpen)} ref={profileRef}>
              <img className="after-profile" src={profile} alt="Profile" />
              <p className="after-name">{user}</p>
              {dropdownOpen && (
                <div className="dropdown-menu" ref={dropdownRef}>
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Navigationav.propTypes = {
  username: PropTypes.string,
};
