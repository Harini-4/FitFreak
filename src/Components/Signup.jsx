import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Signup.css';
import fit from "../Assets/signup.png";

export default function Signup({ onClose, switchToLogin,onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

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

      console.log('Response Status:', response.status);
      const responseData = await response.text();
      console.log('Response Body:', responseData);

      if (response.ok) {
        onSignup=(username);
        navigate("/userdetail");
      } else {
        setError(responseData);
      }
    }
    catch (error) {
      console.error('Fetch Error:', error);
      setError('An unexpected error occurred');
    }
  };


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
              onChange={handleUsernameChange}
              placeholder="Username"
            />
            {errors.username && <span className="error">{errors.username}</span>}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
