import lasagnaImage from '../Assets/recipes/vegetable-lasagna-recipe-18.jpg';
import capreseImage from '../Assets/recipes/Caprese.webp';
import portobelloImage from '../Assets/recipes/stuffed-portobello-mushrooms-1-16.jpg';
import vegChiliImage from '../Assets/recipes/vegetarian-chili-recipe-square.jpg';
import greekImage from '../Assets/recipes/Greek-Salad-Recipe-Easy.jpg';
import pitaImage from '../Assets/recipes/mozzarella-feta-pita-grilled-cheese-sandwich-7.jpg';
import vegFryImage from '../Assets/recipes/VegetableStirFry_9.webp';
import sweetCornImage from '../Assets/recipes/88198991.webp';
import chickpeaSaladImage from '../Assets/recipes/mediterranean-chickpea-salad-recipe-1x1-1.jpg';
import butternutImage from '../Assets/recipes/Roasted-Butternut-Squash-Risotto-Recipe.webp';
import avocadoToastImage from '../Assets/recipes/avocado-toast1.jpg';

const vegetarianRecipes = [
  {
    name: 'Vegetable Lasagna',
    image: lasagnaImage,
    ingredients: ['Lasagna Noodles', 'Ricotta Cheese', 'Mozzarella Cheese', 'Spinach', 'Tomato Sauce'],
    steps: ['Cook noodles', 'Layer with cheese and spinach', 'Add tomato sauce', 'Bake until bubbly'],
    nutrition: '400 kcal',
    time: '1 hour',
    rating: 4.6
  },
  {
    name: 'Caprese Salad',
    image: capreseImage,
    ingredients: ['Tomatoes', 'Mozzarella Cheese', 'Basil', 'Olive Oil', 'Balsamic Vinegar'],
    steps: ['Slice tomatoes and cheese', 'Layer with basil', 'Drizzle with oil and vinegar'],
    nutrition: '250 kcal',
    time: '10 mins',
    rating: 4.7
  },
  {
    name: 'Stuffed Portobello Mushrooms',
    image: portobelloImage,
    ingredients: ['Portobello Mushrooms', 'Cream Cheese', 'Garlic', 'Spinach', 'Parmesan Cheese'],
    steps: ['Prepare mushrooms', 'Mix stuffing ingredients', 'Stuff mushrooms', 'Bake until tender'],
    nutrition: '300 kcal',
    time: '30 mins',
    rating: 4.4
  },
  {
    name: 'Vegetarian Chili',
    image: vegChiliImage,
    ingredients: ['Kidney Beans', 'Black Beans', 'Tomatoes', 'Bell Peppers', 'Chili Powder'],
    steps: ['Cook beans and vegetables', 'Add tomatoes and chili powder', 'Simmer until flavors meld'],
    nutrition: '350 kcal',
    time: '40 mins',
    rating: 4.5
  },
  {
    name: 'Greek Salad',
    image: greekImage,
    ingredients: ['Cucumbers', 'Tomatoes', 'Red Onion', 'Feta Cheese', 'Olives'],
    steps: ['Chop vegetables', 'Mix with cheese and olives', 'Add dressing'],
    nutrition: '200 kcal',
    time: '10 mins',
    rating: 4.6
  },
  {
    name: 'Spinach and Feta Stuffed Pita',
    image: pitaImage,
    ingredients: ['Pita Bread', 'Spinach', 'Feta Cheese', 'Garlic', 'Olive Oil'],
    steps: ['Stuff pita with spinach and cheese', 'Cook until crispy'],
    nutrition: '250 kcal',
    time: '15 mins',
    rating: 4.3
  },
  {
    name: 'Vegetable Stir-Fry',
    image: vegFryImage,
    ingredients: ['Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce', 'Ginger'],
    steps: ['Stir-fry vegetables', 'Add soy sauce and ginger'],
    nutrition: '280 kcal',
    time: '20 mins',
    rating: 4.4
  },
  {
    name: 'Sweet Corn Soup',
    image: sweetCornImage,
    ingredients: ['Sweet Corn', 'Vegetable Broth', 'Onion', 'Garlic', 'Cream'],
    steps: ['Cook onion and garlic', 'Add corn and broth', 'Blend and add cream'],
    nutrition: '300 kcal',
    time: '30 mins',
    rating: 4.5
  },
  {
    name: 'Chickpea Salad',
    image: chickpeaSaladImage,
    ingredients: ['Chickpeas', 'Cucumber', 'Tomato', 'Red Onion', 'Lemon Dressing'],
    steps: ['Mix all ingredients', 'Toss with lemon dressing'],
    nutrition: '270 kcal',
    time: '15 mins',
    rating: 4.6
  },
  {
    name: 'Butternut Squash Risotto',
    image: butternutImage,
    ingredients: ['Arborio Rice', 'Butternut Squash', 'Vegetable Broth', 'Parmesan Cheese', 'Onion'],
    steps: ['Cook onion', 'Add rice and squash', 'Gradually add broth', 'Stir in cheese'],
    nutrition: '400 kcal',
    time: '45 mins',
    rating: 4.7
  },
  {
    name: 'Avocado Toast',
    image: avocadoToastImage,
    ingredients: ['Bread', 'Avocado', 'Lemon Juice', 'Salt', 'Pepper'],
    steps: ['Toast bread', 'Mash avocado with lemon juice', 'Spread on toast', 'Season with salt and pepper'],
    nutrition: '200 kcal',
    time: '10 mins',
    rating: 4.8
  }
];

export default vegetarianRecipes;
