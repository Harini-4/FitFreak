import React, { useState } from 'react';
import '../Assets/css/nav.css';
import '../Assets/css/workout.css';
import { FitnessCenter, RunCircle, Spa, Accessibility } from '@mui/icons-material';
import { Slider, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const categories = [
  { name: 'Strength Training', icon: <FitnessCenter style={{ fontSize: 50 }} /> },
  { name: 'Cardio', icon: <RunCircle style={{ fontSize: 50 }} /> },
  { name: 'Yoga', icon: <Spa style={{ fontSize: 50 }} /> },
  { name: 'Flexibility', icon: <Accessibility style={{ fontSize: 50 }} /> },
];

const FilterGender = ({ gender, onGenderChange }) => (
  <div className="workout-filter-gender">
    <h3>Filter by Gender:</h3>
    <RadioGroup row value={gender} onChange={onGenderChange}>
      {['All', 'Male', 'Female'].map((value) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio sx={{ color: 'rgb(255, 83, 83)', '&.Mui-checked': { color: 'rgb(255, 83, 83)' } }} />}
          label={value}
        />
      ))}
    </RadioGroup>
  </div>
);

const FilterAge = ({ ageRange, onAgeRangeChange }) => (
  <div className="workout-filter-age">
    <h3>Filter by Age Group:</h3>
    <Slider
      value={ageRange}
      onChange={onAgeRangeChange}
      valueLabelDisplay="auto"
      min={5}
      max={100}
      step={1}
      sx={{
        color: 'rgb(255, 83, 83)',
        '& .MuiSlider-thumb': {
          borderRadius: '50%',
        },
      }}
    />
    <p>Age range: {ageRange[0]} - {ageRange[1]}</p>
  </div>
);

export default function Workout() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gender, setGender] = useState('All');
  const [ageRange, setAgeRange] = useState([18, 50]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeRangeChange = (event, newValue) => {
    setAgeRange(newValue);
  };

  return (
    <div className="workout-page">
      <h1>Workout Categories</h1>

      <div className="workout-main-content">
        {/* Filters */}
        <div className="workout-filters">
          <FilterGender gender={gender} onGenderChange={handleGenderChange} />
          <FilterAge ageRange={ageRange} onAgeRangeChange={handleAgeRangeChange} />
        </div>

        {/* Workout Categories */}
        <div className="workout-category-grid">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`workout-category-card ${selectedCategory === category.name ? 'workout-selected' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="workout-category-icon">
                {category.icon}
              </div>
              <div className="workout-category-content">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="workout-selected-category">
          <h2>Selected Category: {selectedCategory}</h2>
          {/* Display exercises or other relevant info here */}
        </div>
      )}
    </div>
  );
}
