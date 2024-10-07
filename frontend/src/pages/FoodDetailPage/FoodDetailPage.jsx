import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetailPage.css';
import images from '../images'; // Assuming you have images imported

const foodItems = {
  Salad: [
    { name: 'Caesar Salad', description: 'Crisp romaine lettuce...', price: '$8', img: images.caesarSalad },
    { name: 'Greek Salad', description: 'Fresh tomatoes, cucumbers...', price: '$9', img: images.greekSalad },
    { name: 'Cobb Salad', description: 'Mixed greens with grilled chicken...', price: '$10', img: images.cobbSalad },
    // Add other Salad items here
  ],
  Rolls: [
    { name: 'Spring Roll', description: 'Crispy rolls filled with...', price: '$6', img: images.springRoll },
    { name: 'Egg Roll', description: 'Savory rolls with pork and vegetables...', price: '$7', img: images.eggRoll },
    // Add other Roll items here
  ],
  // Add other categories (Desserts, Sandwich, Cake, etc.)
  Desserts: [
    { name: 'Cheesecake', description: 'Rich and creamy cheesecake...', price: '$6', img: images.cheesecake },
    { name: 'Tiramisu', description: 'Coffee-flavored Italian dessert...', price: '$8', img: images.tiramisu },
  ],
  // Add more categories as needed
};

const FoodDetailPage = () => {
  const { category, foodName } = useParams();
  const [quantity, setQuantity] = useState(1);

  const item = foodItems[category]?.find(item => item.name === foodName);

  if (!item) {
    return <p>Item not found</p>;
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = () => {
    // Handle add-to-cart functionality here
    alert(`${item.name} added to cart with quantity ${quantity}`);
  };

  return (
    <div className='food-detail'>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} className='food-detail-image' />
      <p>{item.description}</p>
      <p className='food-detail-price'>{item.price}</p>
      <div className='quantity-section'>
        <label>Quantity: </label>
        <input type='number' min='1' value={quantity} onChange={handleQuantityChange} />
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodDetailPage;
