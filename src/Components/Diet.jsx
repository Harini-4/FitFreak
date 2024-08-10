import React, { useState } from 'react';
import '../Assets/css/nav.css';
import '../Assets/css/diet.css';

import highProtein from '../Assets/High-protein-foods.jpg';
import lowCarb from '../Assets/no-carb-diet.webp';
import dairyFree from '../Assets/Dairy-Free.jpg';
import vegetaria from '../Assets/vegetaria.jpeg';

export default function Diet() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const categories = [
    { name: 'High Protein', img: highProtein, recipes: 10 },
    { name: 'Low Carb', img: lowCarb, recipes: 10 },
    { name: 'Dairy Free', img: dairyFree, recipes: 11 },
    { name: 'Vegetarian', img: vegetaria, recipes: 11 },
  ];

  const handleCategoryClick = async (category) => {
    const selectedName = category.name;
    setSelectedCategory(category);
  
    try {
      const response = await fetch('http://localhost:8080/Diet/get');
      
      // Log response headers and their sizes
      console.log('Response Headers:');
      response.headers.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        if (key.toLowerCase() === 'content-length') {
          console.log(`Content-Length Header Size: ${value} bytes`);
        }
      });
  
      const data = await response.json();
  
      // Filter based on the selected category directly
      const filteredRecipes = data
        .filter(diet => diet.type === selectedName) // Filter by the selected category name
        .map(diet => {
          let base64String;
  
          if (diet.image instanceof ArrayBuffer || ArrayBuffer.isView(diet.image)) {
            const byteArray = new Uint8Array(diet.image);
            base64String = `data:image/jpeg;base64,${btoa(
              String.fromCharCode(...byteArray)
            )}`;
          } else {
            base64String = diet.image; // Assuming it's a base64 encoded string
          }
  
          console.log("Base64 Image String Length:", base64String.length);
          console.log("Base64 Image String (first 100 chars):", base64String.slice(0, 100));
  
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
                    src={recipe.imageType === 'base64' 
                        ? `data:image/jpeg;base64,${recipe.image}` 
                        : recipe.image} // Conditional image source
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
