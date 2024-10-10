import React, { useContext, useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom'; // Import Link for navigation
import CategoryDetails from '../../pages/CategoryDetails/CategoryDetails'; // Import the new component

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, addToCart } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category

  // Find the items for the selected category`
  const getCategoryItems = (category) => {
    const menu = menu_list.find(item => item.menu_name === category);
    return menu ? menu.items : []; // Assuming each item has an 'items' property
  };

  const handleViewCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      
      {selectedCategory ? (
        <CategoryDetails 
          category={selectedCategory} 
          items={getCategoryItems(selectedCategory)} 
          addToCart={addToCart} 
        />
      ) : (
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div key={index} className="explore-menu-list-item">
              <Link to={`/menu/${item.menu_name}`}>
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className={category === item.menu_name ? 'active' : ''}
                />
              </Link>
              <p>{item.menu_name}</p>
              <button className="view-details" onClick={() => handleViewCategory(item.menu_name)}>
                View {item.menu_name}
              </button>
            </div>
          ))}
        </div>
      )}
      
      <hr />
    </div>
  );
};

export default ExploreMenu;