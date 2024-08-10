import quinoaImage from '../Assets/recipes/quinoa.jpg';
import curryImage from '../Assets/recipes/chickpea-curry-cover-photo-1-of-1.jpg';
import fryImage from '../Assets/recipes/Air-Fryer-Sweet-Potato-Fries-Plated.jpg';
import blackbeanImage from '../Assets/recipes/black-bean-tacos-5.jpg';
import vegStirImage from '../Assets/recipes/VegetableStirFry_9.webp';
import soupImage from '../Assets/recipes/Lemony-Lentil-Soup-Recipe-4.jpg';
import sproutsImage from '../Assets/recipes/BrocSaladBlog-13-of-13.jpg';
import bellImage from '../Assets/recipes/southwestern-style-stuffed-peppers-1-12.jpg';
import cucumberImage from '../Assets/recipes/avocado-cucumber-cauliflower-rice-sushi-roll-recipe-3.jpg';
import sweetpotatoImage from '../Assets/recipes/Square.jpg';
import berryImage from '../Assets/recipes/Berry-Protein-Smoothie-3.webp';

const dairyFreeRecipes = [
  {
    name: 'Quinoa Salad',
    image: quinoaImage,
    ingredients: ['Quinoa', 'Cucumber', 'Tomato', 'Red Onion', 'Lemon Juice'],
    steps: ['Cook quinoa', 'Chop vegetables', 'Mix ingredients', 'Add lemon juice'],
    nutrition: '300 kcal',
    time: '15 mins',
    rating: 4.5
  },
  {
    name: 'Chickpea Curry',
    image: curryImage,
    ingredients: ['Chickpeas', 'Coconut Milk', 'Curry Powder', 'Spinach', 'Tomato'],
    steps: ['Cook chickpeas', 'Add curry powder', 'Stir in coconut milk', 'Add spinach'],
    nutrition: '400 kcal',
    time: '30 mins',
    rating: 4.7
  },
  {
    name: 'Sweet Potato Fries',
    image: fryImage,
    ingredients: ['Sweet Potatoes', 'Olive Oil', 'Paprika', 'Garlic Powder'],
    steps: ['Cut sweet potatoes', 'Toss with oil and spices', 'Bake until crispy'],
    nutrition: '200 kcal',
    time: '25 mins',
    rating: 4.3
  },
  {
    name: 'Black Bean Tacos',
    image: blackbeanImage,
    ingredients: ['Black Beans', 'Corn Tortillas', 'Avocado', 'Salsa', 'Lettuce'],
    steps: ['Warm tortillas', 'Heat beans', 'Assemble tacos with toppings'],
    nutrition: '350 kcal',
    time: '10 mins',
    rating: 4.6
  },
  {
    name: 'Veggie Stir-Fry',
    image: vegStirImage,
    ingredients: ['Bell Peppers', 'Broccoli', 'Carrots', 'Soy Sauce', 'Ginger'],
    steps: ['Stir-fry vegetables', 'Add soy sauce and ginger'],
    nutrition: '280 kcal',
    time: '20 mins',
    rating: 4.4
  },
  {
    name: 'Lentil Soup',
    image: soupImage,
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Tomato Paste', 'Vegetable Broth'],
    steps: ['Cook lentils', 'Add vegetables and broth', 'Simmer until tender'],
    nutrition: '350 kcal',
    time: '40 mins',
    rating: 4.8
  },
  {
    name: 'Roasted Brussels Sprouts',
    image: sproutsImage,
    ingredients: ['Brussels Sprouts', 'Olive Oil', 'Salt', 'Pepper'],
    steps: ['Cut and toss with oil', 'Roast until crispy'],
    nutrition: '150 kcal',
    time: '20 mins',
    rating: 4.2
  },
  {
    name: 'Stuffed Bell Peppers',
    image: bellImage,
    ingredients: ['Bell Peppers', 'Quinoa', 'Black Beans', 'Corn', 'Salsa'],
    steps: ['Cook quinoa', 'Mix with beans and corn', 'Stuff peppers', 'Bake'],
    nutrition: '320 kcal',
    time: '35 mins',
    rating: 4.5
  },
  {
    name: 'Cucumber Avocado Rolls',
    image: cucumberImage,
    ingredients: ['Cucumber', 'Avocado', 'Rice Vinegar', 'Sesame Seeds'],
    steps: ['Slice cucumber and avocado', 'Roll together', 'Sprinkle with sesame seeds'],
    nutrition: '180 kcal',
    time: '10 mins',
    rating: 4.1
  },
  {
    name: 'Sweet Potato and Black Bean Chili',
    image: sweetpotatoImage,
    ingredients: ['Sweet Potatoes', 'Black Beans', 'Tomatoes', 'Chili Powder', 'Onion'],
    steps: ['Cook onions', 'Add sweet potatoes and beans', 'Simmer with tomatoes and chili powder'],
    nutrition: '350 kcal',
    time: '45 mins',
    rating: 4.7
  },
  {
    name: 'Berry Smoothie',
    image: berryImage,
    ingredients: ['Mixed Berries', 'Almond Milk', 'Banana', 'Spinach'],
    steps: ['Blend all ingredients until smooth'],
    nutrition: '220 kcal',
    time: '5 mins',
    rating: 4.8
  }
];

export default dairyFreeRecipes;
