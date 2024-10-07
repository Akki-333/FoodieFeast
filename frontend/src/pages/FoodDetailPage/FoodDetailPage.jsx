import React from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetailPage.css';
import images from '../images';

const foodItems = {
  Salad: [
    { name: 'Caesar Salad', description: 'Crisp romaine lettuce...', price: '$8', img: images.caesarSalad },
    { name: 'Greek Salad', description: 'Fresh tomatoes, cucumbers...', price: '$9', img: images.greekSalad },
    // ... other food items
  ],
  Rolls: [
    { name: 'Spring Roll', description: 'Crispy rolls filled with...', price: '$6', img: images.springRoll },
    // ... other food items
  ],
  // Add all the other categories similarly
};

const FoodDetailPage = () => {
  const { category, foodName } = useParams();

  const item = foodItems[category]?.find(item => item.name === foodName);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className='food-detail'>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} className='food-detail-image' />
      <p>{item.description}</p>
      <p className='food-detail-price'>{item.price}</p>
    </div>
  );
};

export default FoodDetailPage;
