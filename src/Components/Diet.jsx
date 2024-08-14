import React, { useState, useEffect } from 'react';
import '../Assets/css/nav.css';
import '../Assets/css/diet.css';

import highProtein from '../Assets/High-protein-foods.jpg';
import lowCarb from '../Assets/no-carb-diet.webp';
import dairyFree from '../Assets/Dairy-Free.jpg';
import vegetaria from '../Assets/vegetaria.jpeg';

export default function Diet() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([
    { name: 'High Protein', img: highProtein },
    { name: 'Low Carb', img: lowCarb },
    { name: 'Dairy Free', img: dairyFree },
    { name: 'Vegetarian', img: vegetaria },
  ]);

  useEffect(() => {
    const fetchDiets = async () => {
      try {
        const response = await fetch('http://localhost:8080/Diet/get');
        const data = await response.json();

        // Calculate counts for each category
        const counts = categories.reduce((acc, category) => {
          acc[category.name] = data.filter(diet => diet.type === category.name).length;
          return acc;
        }, {});

        // Update categories with the counts
        setCategories(prevCategories => 
          prevCategories.map(category => ({
            ...category,
            recipes: counts[category.name] || 0
          }))
        );
      } catch (error) {
        console.error('Error fetching diets:', error);
      }
    };

    fetchDiets();
  }, [categories]);

  const handleCategoryClick = async (category) => {
    const selectedName = category.name;
    setSelectedCategory(category);
  
    try {
      const response = await fetch('http://localhost:8080/Diet/get');
      const data = await response.json();
  
      const filteredRecipes = data
        .filter(diet => diet.type === selectedName)
        .map(diet => {
          let base64String;
  
          if (diet.image instanceof ArrayBuffer || ArrayBuffer.isView(diet.image)) {
            const byteArray = new Uint8Array(diet.image);
            base64String = `data:image/jpeg;base64,${btoa(
              String.fromCharCode(...byteArray)
            )}`;
          } else {
            base64String = diet.image;
          }
  
          return {
            name: diet.name,
            image: base64String,
            imageType: 'base64',
            ingredients: diet.ingredients.split(',').map(item => item.trim()),
            steps: diet.steps.split('. ').map(step => step.trim()),
            nutrition: diet.nutrition,
            time: diet.time,
            rating: diet.rating
          };
        });
  
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error(`Error fetching ${selectedName} diets:`, error);
    }
  };
  
  return (
    <div>
      <div className="diet-page">
        <h1>Browse your Diet</h1>
        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.name}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <img 
                src={category.img} 
                alt={category.name} 
                className="category-image" 
              />
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.recipes} recipes</p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedCategory && (
          <div className="recipes-grid">
            <h2>{selectedCategory.name} Recipes</h2>
            <div className="recipes-list">
              {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                  <img 
                    src={`data:image/jpeg;base64,${recipe.image}`} 
                    alt={recipe.name} 
                    className="recipe-image" 
                  />
                  <div className="recipe-content">
                    <h3>{recipe.name}</h3>
                    <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                    <p><strong>Steps:</strong> {recipe.steps.join('. ')}</p>
                    <p><strong>Nutrition:</strong> {recipe.nutrition}</p>
                    <p><strong>Time:</strong> {recipe.time}</p>
                    <p><strong>Rating:</strong> {recipe.rating} stars</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
