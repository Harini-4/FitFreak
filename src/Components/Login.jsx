import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Login.css';
import fit from "../Assets/fit.png";

export default function Login({ switchToSignup, onClose, onLogin }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState('');

  const navigate = useNavigate();

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Fitfreak/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      console.log("Response:", response); // Log the response metadata

      if (response.ok) {
        if(email==='harini@fitfreak.in' && password==='hare')
          {
              navigate("/admin/admin/dashboard");
          }
        else{
          const data = await response.json(); // Parse the JSON response
          console.log("Data:", data); // { message: "Login Successful", username: "johnDoe" }
          const username = data.username; // Extract the username
          onLogin(username); // Pass the username to the navigation bar
          navigate("/");
      }
      } else {
        const errorMessage = await response.json();
        setError(errorMessage.message);
      }
    } catch (error) {
      console.log("Error:", error); // Log any errors that occur
      setError('An error occurred. Please try again.');
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
                onChange={handleemailChange}
                placeholder="Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
              <div className="form-options">
                <div>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                  />
                </div>
                <div>
                  <label>Show Password</label>
                </div>
              </div>
              {/* Display the error message above the button */}
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
