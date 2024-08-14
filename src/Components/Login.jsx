import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Login.css';
import fit from "../Assets/fit.png";

export default function Login({ switchToSignup, onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrors('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Fitfreak/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const username = data.username;
        onLogin(username);
        
        if (email === 'harini@fitfreak.in' && password === 'hare') {
          navigate("/admin/admin/dashboard");
        } else {
          navigate("/home");
        }
      } else {
        const errorMessage = await response.json();
        setErrors(errorMessage.message);
      }
    } catch (error) {
      console.log("Error:", error);
      setErrors('An error occurred. Please try again.');
    }
  };

  return (
    <div className="modal-login">
      <div className="modal-content-login">
        <button className="modal-close-login" onClick={onClose}>X</button>
        <div className="container-login">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <p className="welcome">WELCOME BACK!</p>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
              />
              <div className="form-options">
              <div>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
              </div>
              <div><label>Show Password</label></div>
            </div>
              {errors && <p className='error'>{errors}</p>}
              <button type="submit">Login</button>
              <p className="forget">Forgot Password?</p>
              <p className="no-account" onClick={switchToSignup}>
                Don't have an account? Sign Up
              </p>
            </form>
            <div className="pic">
              <img src={fit} alt="Fit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}