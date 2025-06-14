import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomeComponents';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Availability from './pages/Availability';
import SellerLogin from './pages/SellerLogin';
import BuyerDashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Order from './pages/Orders';
import SellerDashboard from "./seller/SellerDashboard"; // ✅ New import
import ManageProducts from './seller/ManageProducts';
import { CartProvider } from './components/CartContext';
import OrdersReceived from './seller/OrdersReceived';
import AccountSettings from './seller/AccountSettings';
import GuidePage from './pages/GuidePage';
import SellerGuide from "./seller/SellerGuide";
import TomatoDetails from "./pages/TomatoDetails";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/dashboard" element={<BuyerDashboard />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/availability/:id" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} /> {/* ✅ New route */}
          <Route path="/seller/products" element={<ManageProducts />} />
          <Route path="/seller/orders" element={<OrdersReceived />} />
          <Route path="/seller/profile" element={<AccountSettings />} />
          <Route path="/guides" element={<GuidePage />} />
          <Route path="/seller/guide" element={<SellerGuide />} />
          <Route path="/tomato" element={<TomatoDetails />} />


        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
