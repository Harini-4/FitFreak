import React, { useState } from "react";
import "../Assets/css/bmi.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      alert("Please enter valid height and weight values.");
    }
  };

  return (
    <div className="bmi-calculator">
      <div className="overlay"></div>
      <div className="content">
        <h1>Calculate Your Body Mass Index</h1>
        <p>You love having a second home but the mortgage</p>
        <div className="form">
          <div className="form-group">
            <label>Your Height (cm)</label>
            <input
              type="text"
              placeholder="Enter Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Your Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter Value"
              // value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBMI}>Calculate Your BMI</button>
        </div>
        {bmi && <div className="result">Your BMI is: {bmi}</div>}
      </div>
    </div>
  );
};

export default BMICalculator;
