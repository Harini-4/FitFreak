import zuccImage from '../Assets/recipes/zoodles-with-pesto-and-tomatoes.jpg';
import cauliImage from '../Assets/recipes/cauliflower-stir-fry-recipe.jpg';
import aspaImage from '../Assets/recipes/aspa.jpeg';
import eggplantImage from '../Assets/recipes/eggplant-pizza-SQ2-021.jpg';
import caesarImage from '../Assets/recipes/caesar-salad-crispy-chicken.jpg';
import eggsImage from '../Assets/recipes/EWL-AvocadoDeviledEggs-beauty-104-0d8d1f41858f4ae39de590135e1594ab.jpg';
import mushroomImage from '../Assets/recipes/mushroom-spinach-omelet-ck.jpg';
import ketoImage from '../Assets/recipes/keto-chicken-curry-1200.jpg';
import frittataImage from '../Assets/recipes/1-1200-ZUCCHINI-FRITTATA.jpg';
import shrimpAvocadoImage from '../Assets/recipes/wholesomeyum-Shrimp-Avocado-Salad.jpg';

const lowCarbRecipes = [
  {
    name: 'Zucchini Noodles with Pesto',
    image: zuccImage,
    ingredients: ['Zucchini', 'Pesto Sauce', 'Parmesan Cheese', 'Cherry Tomatoes'],
    steps: ['Spiralize the zucchini to make noodles', 'Heat pesto sauce in a pan', 'Add zucchini noodles and cherry tomatoes', 'Cook for 2-3 minutes', 'Sprinkle with Parmesan cheese before serving'],
    nutrition: '150 kcal per serving',
    time: '15 mins',
    rating: 4.5,
  },
  {
    name: 'Cauliflower Rice Stir-Fry',
    image: cauliImage,
    ingredients: ['Cauliflower Rice', 'Bell Peppers', 'Soy Sauce', 'Garlic', 'Ginger'],
    steps: ['In a pan, heat oil over medium heat', 'Add garlic and ginger, sauté for 1 minute', 'Add bell peppers and cook for 3 minutes', 'Add cauliflower rice and soy sauce', 'Cook for another 5 minutes'],
    nutrition: '120 kcal per serving',
    time: '20 mins',
    rating: 4.6,
  },
  {
    name: 'Grilled Salmon with Asparagus',
    image: aspaImage,
    ingredients: ['Salmon Fillets', 'Asparagus', 'Lemon Juice', 'Olive Oil', 'Salt', 'Pepper'],
    steps: ['Preheat grill to medium-high heat', 'Season salmon with lemon juice, olive oil, salt, and pepper', 'Grill salmon for 6-7 minutes on each side', 'Grill asparagus until tender'],
    nutrition: '200 kcal per serving',
    time: '25 mins',
    rating: 4.8,
  },
  {
    name: 'Eggplant Pizza',
    image: eggplantImage,
    ingredients: ['Eggplant', 'Tomato Sauce', 'Mozzarella Cheese', 'Basil'],
    steps: ['Preheat oven to 200°C (400°F)', 'Slice eggplant into thick rounds', 'Top each slice with tomato sauce and mozzarella', 'Bake for 15-20 minutes', 'Garnish with basil before serving'],
    nutrition: '180 kcal per serving',
    time: '30 mins',
    rating: 4.4,
  },
  {
    name: 'Chicken Caesar Salad',
    image: caesarImage,
    ingredients: ['Chicken Breast', 'Romaine Lettuce', 'Caesar Dressing', 'Parmesan Cheese', 'Croutons'],
    steps: ['Grill chicken breast until cooked', 'Chop romaine lettuce', 'Toss lettuce with Caesar dressing', 'Top with sliced chicken, Parmesan cheese, and croutons'],
    nutrition: '250 kcal per serving',
    time: '20 mins',
    rating: 4.7,
  },
  {
    name: 'Avocado and Bacon Deviled Eggs',
    image: eggsImage,
    ingredients: ['Eggs', 'Avocado', 'Bacon', 'Mayonnaise', 'Lemon Juice'],
    steps: ['Boil eggs and slice in half', 'Remove yolks and mix with avocado, mayonnaise, and lemon juice', 'Fill egg whites with the mixture', 'Top with crumbled bacon'],
    nutrition: '110 kcal per serving',
    time: '15 mins',
    rating: 4.6,
  },
  {
    name: 'Mushroom and Spinach Omelette',
    image: mushroomImage,
    ingredients: ['Eggs', 'Mushrooms', 'Spinach', 'Cheese', 'Salt', 'Pepper'],
    steps: ['Beat eggs and season with salt and pepper', 'Sauté mushrooms and spinach in a pan', 'Pour eggs over vegetables and cook until set', 'Sprinkle cheese on top and fold omelette'],
    nutrition: '200 kcal per serving',
    time: '10 mins',
    rating: 4.5,
  },
  {
    name: 'Keto Chicken Curry',
    image: ketoImage,
    ingredients: ['Chicken', 'Coconut Milk', 'Curry Powder', 'Onion', 'Garlic'],
    steps: ['Sauté onion and garlic in a pan', 'Add chicken and curry powder, cook until browned', 'Pour in coconut milk and simmer for 15 minutes'],
    nutrition: '300 kcal per serving',
    time: '30 mins',
    rating: 4.7,
  },
  {
    name: 'Zucchini and Cheese Frittata',
    image: frittataImage,
    ingredients: ['Zucchini', 'Eggs', 'Cheese', 'Onion', 'Salt', 'Pepper'],
    steps: ['Preheat oven to 180°C (350°F)', 'Sauté onion and zucchini in a pan', 'Whisk eggs with salt and pepper, pour over vegetables', 'Sprinkle cheese on top and bake for 20 minutes'],
    nutrition: '250 kcal per serving',
    time: '30 mins',
    rating: 4.4,
  },
  {
    name: 'Shrimp and Avocado Salad',
    image: shrimpAvocadoImage,
    ingredients: ['Shrimp', 'Avocado', 'Lettuce', 'Lime Juice', 'Cilantro'],
    steps: ['Cook shrimp in a pan until pink', 'Chop lettuce and avocado', 'Toss shrimp, lettuce, and avocado with lime juice and cilantro'],
    nutrition: '180 kcal per serving',
    time: '15 mins',
    rating: 4.8,
  },
];

export default lowCarbRecipes;
