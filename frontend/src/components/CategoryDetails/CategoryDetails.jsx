import React from 'react';
import '../CategoryDetails/CategoryDetails.css'; // Create this file for styling

const CategoryDetails = ({ category, items, addToCart }) => {
  return (
    <div className="category-details">
      <h2>{category}</h2>
      <div className="food-items-list">
        {items.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="item-price">${item.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(item)}>+1</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
