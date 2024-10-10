import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import FoodDetailPage from './pages/FoodDetailPage/FoodDetailPage';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import CategoryDetails from './pages/CategoryDetails/CategoryDetails';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path="/ExploreMenu" element={<ExploreMenu />} />
          <Route path="/CategoryDetails" element={<CategoryDetails />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/CategoryPage' element={<CategoryPage />} />
          <Route path='/FoodDetailPage  ' element={<FoodDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
