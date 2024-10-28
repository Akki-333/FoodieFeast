import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const categoryItems = mockData[category] || []; // Fetch category items from mock data

  return (
    <div className="category-page">
      <h1>{category}</h1>
      <div className="category-items">
        {categoryItems.map((item) => (
          <div key={item.id} className="category-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>Price: ${item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const addToCart = (item) => {
  // Logic to handle adding the item to the cart
  console.log(`${item.name} added to cart!`);
};

export default CategoryPage;
