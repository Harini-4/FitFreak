import React from 'react';
import '../Assets/css/nutritionPlan.css';

const NutritionPlan = ({ data }) => {
  if (!data || !data.result) {
    return <p style={{textAlign:'center'}}>PLEASE WAIT WHILE WE SUGGEST THE PERFECT PLAN FOR YOU...</p>; // Handle loading or error state
  }

  const { exercise_name, description, goal, calories_per_day, macronutrients, meal_suggestions, seo_title, seo_content, seo_keywords } = data.result;

  return (
    <div className="nutrition-plan">
      <h1>{exercise_name}</h1>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Calories per day:</strong> {calories_per_day}</p>
      
      <div className="macronutrient-breakdown">
        <h1>Macronutrient Breakdown</h1>
        <div className="macronutrient-items">
          <div className="macronutrient-item">
            <strong>Carbohydrates:</strong> {macronutrients.carbohydrates}
          </div>
          <div className="macronutrient-item">
            <strong>Proteins:</strong> {macronutrients.proteins}
          </div>
          <div className="macronutrient-item">
            <strong>Fats:</strong> {macronutrients.fats}
          </div>
        </div>
      </div>

      <div className="meal-suggestions">
        <h2>Meal Suggestions</h2>
        <div className="meal-suggestions-grid">
          {meal_suggestions.map((meal, index) => (
            <div key={index} className="meal-suggestion-card">
              <h3>{meal.meal}</h3>
              {meal.suggestions.map((suggestion, idx) => (
                <div key={idx} style={{ marginBottom: '10px', paddingLeft: '10px' }}>
                  <h4>{suggestion.name}</h4>
                  <p><strong>Calories:</strong> {suggestion.calories}</p>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    {suggestion.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="seo-info">
        <h2>SEO Information</h2>
        <p><strong>SEO Title:</strong> {seo_title}</p>
        <p><strong>SEO Content:</strong> {seo_content}</p>
        <p><strong>SEO Keywords:</strong> {seo_keywords}</p>
      </div>
    </div>
  );
};

export default NutritionPlan;
