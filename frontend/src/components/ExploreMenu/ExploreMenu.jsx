import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list, addToCart } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div key={index} className='explore-menu-list-item'>
            {/* Using Link to navigate to the category-specific page */}
            <Link to={`/menu/${item.menu_name}`}>
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={category === item.menu_name ? "active" : ""}
              />
            </Link>
            <p>{item.menu_name}</p>
            <button className='add-to-cart' onClick={() => addToCart(item)}>Description</button>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
