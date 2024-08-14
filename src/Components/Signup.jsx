import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Signup.css';
import fit from "../Assets/signup.png";
import axios from 'axios';
import PropTypes from 'prop-types';

export default function Signup({ onClose, switchToLogin, onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState("");

  const navigate = useNavigate();

  // Signup Component (handleSubmit method)
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
  }
  if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
  }
  
  setError('');
  console.log('Form Data:', { username, email, password });

  try {
      const response = await fetch("http://localhost:8080/Fitfreak/signup", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              username,
              email,
              password
          }),
      });

      const responseData = await response.text();
      console.log('Response Body:', responseData);

      const res = await axios.get('http://localhost:8080/Fitfreak/users');
      const userId = res.data[res.data.length - 1].id;
      localStorage.setItem('userId', userId); // Storing userId
      // localStorage.setItem('username', username); 

      if (response.ok) {
          if (typeof onSignup === 'function') {
              onSignup(username); // Pass username to callback
          } else {
              console.error('onSignup is not a function');
          }
          navigate("/userdetail");
      } else {
          setError(responseData);
      }
  } catch (error) {
      console.error('Fetch Error:', error);
      setError('An unexpected error occurred');
  }
};

  console.log('Username in Signup:', username);

  return (
    <div className="modal-signup">
      <div className="modal-content-signup">
        <button className="modal-close-signup" onClick={onClose}>X</button>
        <div className="signup">
          <form onSubmit={handleSubmit}>
            <p className="create">CREATE YOUR ACCOUNT</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            <div className="form-options-sign">
              <div>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
              </div>
              <div><label>Show Password</label></div>
            </div>
            <button type="submit">Sign Up</button>
            <p className="login-link" onClick={switchToLogin}>Already have an account? Login</p>
          </form>
        </div>
        <div className="Spic">
          <img src={fit} alt="Fit" />
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  onClose: PropTypes.func,
  switchToLogin: PropTypes.func,
  onSignup: PropTypes.func.isRequired
};