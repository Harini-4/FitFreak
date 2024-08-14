import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/UserDetails.css';

export default function UserDetailsModal({ username }) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userDetails = {
      age: Number(age),
      gender,
      height: Number(height),
      weight: Number(weight),
      goal,
      signupId: Number(userId),
    };

    try { 
      const response = await fetch('http://localhost:8080/user-details/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username, // pass the username
          ...userDetails,
        }),
      });

      if (response.ok) {
        console.log('User details saved successfully');
        navigate('/home'); // Navigate to the home page
      } else {
        const errorData = await response.text(); // Read error response body
        console.error('Failed to save user details:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="user-details">
      <div className="user-details-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="0" // Optional: Prevent negative values
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              min="0" // Optional: Prevent negative values
            />
          </div>
          <div className="form-group">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              min="0" // Optional: Prevent negative values
            />
          </div>
          <div className="form-group">
            <label>Goal:</label>
            <div className="goal-options">
              <label>
                <input
                  type="radio"
                  name="goal"
                  value="maintain"
                  checked={goal === 'maintain'}
                  onChange={(e) => setGoal(e.target.value)}
                  required
                />
                Maintain overall health
              </label>
              <label>
                <input
                  type="radio"
                  name="goal"
                  value="reduce"
                  checked={goal === 'reduce'}
                  onChange={(e) => setGoal(e.target.value)}
                  required
                />
                Reduce weight
              </label>
              <label>
                <input
                  type="radio"
                  name="goal"
                  value="stress"
                  checked={goal === 'stress'}
                  onChange={(e) => setGoal(e.target.value)}
                  required
                />
                Relieve stress
              </label>
              <label>
                <input
                  type="radio"
                  name="goal"
                  value="muscles"
                  checked={goal === 'muscles'}
                  onChange={(e) => setGoal(e.target.value)}
                  required
                />
                Build muscles
              </label>
            </div>
          </div>
          <button className='user-detail-btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

UserDetailsModal.propTypes = {
  username: PropTypes.string.isRequired,
};