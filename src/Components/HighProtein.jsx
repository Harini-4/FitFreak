// highProteinRecipes.js
import grilledChicken from '../Assets/recipes/Best-Grilled-Chicken-Breast.jpg';
import salmon from '../Assets/recipes/salmon.jpg';
import beef from '../Assets/recipes/beef.jpg';
import quinoaSalad from '../Assets/recipes/quinoa.jpg';
import lentilSoup from '../Assets/recipes/lentil.jpg';
import yogurtParfait from '../Assets/recipes/greek.jpg';
import eggOmelette from '../Assets/recipes/omlette.jpg';
import burritoBowl from '../Assets/recipes/Black-Bean-Burrito-Bowl-Recipe.jpg';
import turkeyMeatballs from '../Assets/recipes/bakedturkeymeatballs.jpg';
import shrimpStirFry from '../Assets/recipes/Shrimp-Stir-Fry-076.jpg';

const highProteinRecipes = [
  {
    name: 'Grilled Chicken Breast',
    image: grilledChicken,
    ingredients: ['Chicken Breast', 'Olive Oil', 'Garlic Powder', 'Salt', 'Pepper'],
    steps: ['Preheat grill to medium-high heat', 'Season chicken with garlic powder, salt, and pepper', 'Grill chicken for 6-7 minutes on each side or until fully cooked'],
    nutrition: '165 kcal per 100g',
    time: '30 mins',
    rating: 4.7,
  },
  {
    name: 'Salmon Fillet',
    image: salmon,
    ingredients: ['Salmon Fillet', 'Lemon Juice', 'Dill', 'Salt', 'Pepper'],
    steps: ['Preheat oven to 200°C (400°F)', 'Season salmon with lemon juice, dill, salt, and pepper', 'Bake for 12-15 minutes or until cooked through'],
    nutrition: '208 kcal per 100g',
    time: '20 mins',
    rating: 4.8,
  },
  {
    name: 'Beef Stir-Fry',
    image: beef,
    ingredients: ['Beef Strips', 'Broccoli', 'Soy Sauce', 'Garlic', 'Ginger'],
    steps: ['Heat oil in a pan over medium-high heat', 'Add beef and stir-fry until browned', 'Add broccoli, garlic, and ginger, and stir-fry for 5 minutes', 'Add soy sauce and cook for an additional 2 minutes'],
    nutrition: '250 kcal per serving',
    time: '25 mins',
    rating: 4.5,
  },
  {
    name: 'Quinoa Salad with Chickpeas',
    image: quinoaSalad,
    ingredients: ['Quinoa', 'Chickpeas', 'Cucumber', 'Tomato', 'Feta Cheese', 'Olive Oil', 'Lemon Juice'],
    steps: ['Cook quinoa according to package instructions', 'In a bowl, mix quinoa, chickpeas, cucumber, tomato, and feta', 'Drizzle with olive oil and lemon juice, then toss to combine'],
    nutrition: '220 kcal per serving',
    time: '15 mins',
    rating: 4.6,
  },
  {
    name: 'Lentil Soup',
    image: lentilSoup,
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Onion', 'Garlic', 'Vegetable Broth'],
    steps: ['In a pot, heat oil and sauté onion, garlic, carrots, and celery', 'Add lentils and vegetable broth, bring to a boil', 'Reduce heat and simmer for 20-25 minutes until lentils are tender'],
    nutrition: '180 kcal per serving',
    time: '35 mins',
    rating: 4.4,
  },
  {
    name: 'Greek Yogurt Parfait',
    image: yogurtParfait,
    ingredients: ['Greek Yogurt', 'Berries', 'Granola', 'Honey'],
    steps: ['In a glass, layer Greek yogurt, berries, and granola', 'Drizzle with honey before serving'],
    nutrition: '150 kcal per serving',
    time: '5 mins',
    rating: 4.7,
  },
  {
    name: 'Egg and Spinach Omelette',
    image: eggOmelette,
    ingredients: ['Eggs', 'Spinach', 'Cheese', 'Salt', 'Pepper'],
    steps: ['Beat eggs and season with salt and pepper', 'In a pan, cook spinach until wilted', 'Pour eggs over spinach and cook until set', 'Sprinkle cheese on top and fold omelette'],
    nutrition: '200 kcal per serving',
    time: '10 mins',
    rating: 4.6,
  },
  {
    name: 'Black Bean Burrito Bowl',
    image: burritoBowl,
    ingredients: ['Black Beans', 'Brown Rice', 'Corn', 'Avocado', 'Salsa'],
    steps: ['Cook brown rice according to package instructions', 'In a bowl, combine black beans, rice, corn, avocado, and salsa'],
    nutrition: '350 kcal per serving',
    time: '20 mins',
    rating: 4.5,
  },
  {
    name: 'Turkey Meatballs',
    image: turkeyMeatballs,
    ingredients: ['Ground Turkey', 'Breadcrumbs', 'Egg', 'Garlic Powder', 'Onion Powder'],
    steps: ['Preheat oven to 200°C (400°F)', 'Mix all ingredients and form into meatballs', 'Place on a baking sheet and bake for 15-20 minutes'],
    nutrition: '150 kcal per 100g',
    time: '30 mins',
    rating: 4.4,
  },
  {
    name: 'Shrimp Stir-Fry',
    image: shrimpStirFry,
    ingredients: ['Shrimp', 'Bell Peppers', 'Soy Sauce', 'Garlic', 'Ginger'],
    steps: ['Heat oil in a pan over medium-high heat', 'Add shrimp and cook until pink', 'Add bell peppers, garlic, and ginger, and stir-fry for 3 minutes', 'Add soy sauce and cook for an additional 2 minutes'],
    nutrition: '200 kcal per serving',
    time: '15 mins',
    rating: 4.7,
  },
];

export default highProteinRecipes;
