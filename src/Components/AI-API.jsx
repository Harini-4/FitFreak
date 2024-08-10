import React, { useState } from 'react';
import NutritionPlan from './AI-API-plan';
import '../Assets/css/nutritionPlanForm.css';

const NutritionAdvice = () => {
  const [goal, setGoal] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNutritionAdvice = async () => {
    setLoading(true);
    setError(null);

    const url = 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/nutritionAdvice';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'd9a1afd6fdmshd3399f9916a9c6bp155046jsn5353cf4924e6',
        'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        goal: goal,
        dietary_restrictions: [dietaryRestrictions],
        current_weight: parseFloat(currentWeight),
        target_weight: parseFloat(targetWeight),
        daily_activity_level: activityLevel,
        lang: 'en'
      })
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAdvice(data);
    } catch (error) {
      setError('Try again after few minutes');
      console.error('Error fetching nutrition advice:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nutrition-advice-plan-container">
      <div className="nutrition-advice-container">
        <h1>Get your nutrition plan for today!</h1>
        
        <label>
          Goal:
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="">Select your goal</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </label>
        
        <label>
          Dietary Restrictions:
          <select value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)}>
            <option value="">Select dietary restriction</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="keto">Keto</option>
            <option value="none">None</option>
          </select>
        </label>
        
        <label>
          Current Weight (kg):
          <input 
            type="number" 
            value={currentWeight} 
            onChange={(e) => setCurrentWeight(e.target.value)} 
          />
        </label>
        
        <label>
          Target Weight (kg):
          <input 
            type="number" 
            value={targetWeight} 
            onChange={(e) => setTargetWeight(e.target.value)} 
          />
        </label>
        
        <label>
          Daily Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="">Select activity level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="very_active">Very Active</option>
          </select>
        </label>
        
        <button onClick={getNutritionAdvice} disabled={loading}>
          {loading ? 'Loading...' : 'Get Advice'}
        </button>
        
        {error && <p className="error">{error}</p>}
      </div>

      {advice && (
        <div className="nutrition-plan-container">
          <NutritionPlan data={advice} />
        </div>
      )}
    </div>
  );
};

export default NutritionAdvice;
