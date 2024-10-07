import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CategoryPage.css';
import images from '../images'; // Ensure all necessary images are imported

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Food items categorized by sections
  const foodItems = {
    Salad: [
      { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing and croutons.', price: '$8', img: images.caesarSalad },
      { name: 'Greek Salad', description: 'Fresh tomatoes, cucumbers, olives, and feta cheese.', price: '$9', img: images.greekSalad },
      { name: 'Cobb Salad', description: 'Mixed greens with grilled chicken, avocado, and bacon.', price: '$10', img: images.cobbSalad },
      { name: 'Spinach Salad', description: 'Spinach leaves with mushrooms, onions, and a tangy vinaigrette.', price: '$7', img: images.spinachSalad },
      { name: 'Chicken Salad', description: 'Chicken breast with mixed greens and a light dressing.', price: '$11', img: images.chickenSalad },
      { name: 'Fruit Salad', description: 'A mix of fresh seasonal fruits.', price: '$6', img: images.fruitSalad },
    ],
    Rolls: [
      { name: 'Spring Roll', description: 'Crispy rolls filled with fresh vegetables.', price: '$6', img: images.springRoll },
      { name: 'Egg Roll', description: 'Savory rolls with pork and vegetables.', price: '$7', img: images.eggRoll },
      { name: 'Vegetable Roll', description: 'Vegetarian rolls with assorted vegetables.', price: '$5', img: images.vegetableRoll },
      { name: 'Shrimp Roll', description: 'Shrimp-stuffed rolls with a spicy kick.', price: '$8', img: images.shrimpRoll },
      { name: 'California Roll', description: 'Roll with crab, avocado, and cucumber.', price: '$9', img: images.californiaRoll },
      { name: 'Chicken Roll', description: 'Roll with grilled chicken and fresh veggies.', price: '$7', img: images.chickenRoll },
    ],
    Deserts: [
      { name: 'Cheesecake', description: 'Rich and creamy cheesecake with a graham cracker crust.', price: '$6', img: images.cheesecake },
      { name: 'Chocolate Cake', description: 'Decadent chocolate cake with a rich frosting.', price: '$7', img: images.chocolateCake },
      { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert with layers of mascarpone cream.', price: '$8', img: images.tiramisu },
      { name: 'Apple Pie', description: 'Classic apple pie with a flaky crust.', price: '$5', img: images.applePie },
      { name: 'Brownies', description: 'Fudgy brownies with a chewy texture.', price: '$4', img: images.brownies },
      { name: 'Panna Cotta', description: 'Creamy panna cotta with a berry coulis.', price: '$7', img: images.pannaCotta },
    ],
    Sandwich: [
      { name: 'Club Sandwich', description: 'Triple-layered sandwich with turkey, bacon, and lettuce.', price: '$9', img: images.clubSandwich },
      { name: 'Grilled Cheese', description: 'Classic grilled cheese sandwich with melted cheddar.', price: '$6', img: images.grilledCheese },
      { name: 'BLT', description: 'Bacon, lettuce, and tomato sandwich on toasted bread.', price: '$7', img: images.blt },
      { name: 'Chicken Sandwich', description: 'Grilled chicken sandwich with fresh veggies.', price: '$8', img: images.chickenSandwich },
      { name: 'Veggie Sandwich', description: 'Sandwich loaded with fresh vegetables and hummus.', price: '$7', img: images.veggieSandwich },
      { name: 'Philly Cheesesteak', description: 'Beef sandwich with melted cheese and peppers.', price: '$10', img: images.phillyCheesesteak },
    ],
    Cake: [
      { name: 'Vanilla Cake', description: 'Classic vanilla cake with buttercream frosting.', price: '$6', img: images.vanillaCake },
      { name: 'Red Velvet Cake', description: 'Rich red velvet cake with cream cheese frosting.', price: '$7', img: images.redVelvetCake },
      { name: 'Carrot Cake', description: 'Moist carrot cake with a tangy cream cheese frosting.', price: '$8', img: images.carrotCake },
      { name: 'Lemon Cake', description: 'Light and zesty lemon cake with a glaze.', price: '$6', img: images.lemonCake },
      { name: 'Chocolate Mousse Cake', description: 'Decadent chocolate mousse layered cake.', price: '$9', img: images.chocolateMousseCake },
      { name: 'Strawberry Shortcake', description: 'Cake with layers of strawberries and cream.', price: '$7', img: images.strawberryShortcake },
    ],
    Pureveg: [
      { name: 'Veg Biryani', description: 'Aromatic rice dish with mixed vegetables.', price: '$8', img: images.vegBiryani },
      { name: 'Paneer Butter Masala', description: 'Paneer cubes cooked in a creamy tomato sauce.', price: '$9', img: images.paneerButterMasala },
      { name: 'Chana Masala', description: 'Chickpeas cooked in a spicy tomato gravy.', price: '$7', img: images.chanaMasala },
      { name: 'Dal Tadka', description: 'Yellow lentils tempered with spices and herbs.', price: '$6', img: images.dalTadka },
      { name: 'Aloo Gobi', description: 'Potato and cauliflower curry with Indian spices.', price: '$7', img: images.alooGobi },
      { name: 'Vegetable Korma', description: 'Mixed vegetables cooked in a rich and creamy sauce.', price: '$8', img: images.vegetableKorma },
    ],
    Pasta: [
      { name: 'Spaghetti Carbonara', description: 'Spaghetti in a creamy egg and cheese sauce.', price: '$10', img: images.spaghettiCarbonara },
      { name: 'Fettuccine Alfredo', description: 'Fettuccine pasta with a rich Alfredo sauce.', price: '$11', img: images.fettuccineAlfredo },
      { name: 'Penne Arrabbiata', description: 'Penne pasta in a spicy tomato sauce.', price: '$9', img: images.penneArrabbiata },
      { name: 'Lasagna', description: 'Layers of pasta with meat sauce and cheese.', price: '$12', img: images.lasagna },
      { name: 'Mac and Cheese', description: 'Macaroni in a cheesy, creamy sauce.', price: '$8', img: images.macAndCheese },
      { name: 'Pesto Pasta', description: 'Pasta with basil pesto sauce.', price: '$9', img: images.pestoPasta },
    ],
    Noodles: [
      { name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and soy sauce.', price: '$8', img: images.chowMein },
      { name: 'Pad Thai', description: 'Thai noodles with shrimp, peanuts, and tamarind sauce.', price: '$9', img: images.padThai },
      { name: 'Soba Noodles', description: 'Japanese soba noodles with a light soy sauce.', price: '$7', img: images.sobaNoodles },
      { name: 'Udon Noodles', description: 'Thick Japanese noodles in a savory broth.', price: '$9', img: images.udonNoodles },
      { name: 'Rice Noodles', description: 'Rice noodles with stir-fried vegetables.', price: '$8', img: images.riceNoodles },
      { name: 'Sesame Noodles', description: 'Noodles with a sesame sauce and scallions.', price: '$7', img: images.sesameNoodles },
    ],
  };

   // Get the food items for the current category from the params
   const items = foodItems[category] || [];

   // Function to handle "View Details" button click
   const handleFoodClick = (foodName) => {
     navigate(`/food/${category}/${foodName}`);
   };
 
   return (
     <div className="category-page">
       <h1>{category} Menu</h1>
       <div className="food-list">
         {items.map((item, index) => (
           <div key={index} className="food-item">
             <img src={item.img} alt={item.name} className="food-item-image" />
             <h3>{item.name}</h3>
             <p>{item.description}</p>
             <p className="item-price">{item.price}</p>
             <button className="add-to-cart" onClick={() => handleFoodClick(item.name)}>
               View Details
             </button>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default CategoryPage;