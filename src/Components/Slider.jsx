import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MoodSlider = ({ label, min, max, value, color, options, onChange }) => {
  const getBackgroundColor = () => {
    if (options) {
      switch (options[value]) {
        case 'MILD':
          return 'yellow';
        case 'MODERATE':
          return 'orange';
        case 'SEVERE':
          return 'red';
        default:
          return '#ddd';
      }
    }
    return color || '#ddd';
  };

  return (
    <div className="slider-wrapper" style={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {label}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Slider
          value={value}
          min={min}
          max={max}
          step={1}
          onChange={(e, newValue) => onChange(newValue)}
          sx={{
            flexGrow: 1, // Allow the slider to grow and fill the available space
            height: 8, // Increase the height of the slider track
            '& .MuiSlider-thumb': {
              width: 24, // Increase the size of the thumb
              height: 24,
              color: getBackgroundColor(),
            },
            '& .MuiSlider-track': {
              height: 8, // Match the height of the track to the slider
              color: getBackgroundColor(),
            },
            '& .MuiSlider-rail': {
              height: 8, // Match the height of the rail to the slider
              color: '#ddd',
            },
          }}
        />
      </div>
      {options && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px'  // Adjust this value to move the labels closer or further from the slider
        }}>
          {options.map((option, index) => (
            <Typography
              key={index}
              variant="body2"
              style={{
                color: index === value ? 'black' : 'lightgrey',
                fontWeight: index === value ? 'bold' : 'normal',
              }}
            >
              {option}
            </Typography>
          ))}
        </div>
      )}
      {label.includes('Hours slept last night:') && (
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
          {value === max ? `${value}+ hours` : `${value} hours`}
        </Typography>
      )}
    </div>
  );
};

MoodSlider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default MoodSlider;
