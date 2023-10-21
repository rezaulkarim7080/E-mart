import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import * as api from './api';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './pages/route/ProtectedRoute';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Search from './components/Search';
import Loader from './loader/Loader';
import SinglePageDetails from './pages/SinglePageDetails';
import AllProducts from './pages/AllProducts';
import Account from './pages/Account';
import EditProfile from './pages/EditProfile';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import ConFirmOrder from './pages/ConFirmOrder';
import Payment from './pages/Payment';
import PaymentWithoutStripe from './pages/PaymentWithoutStripe';

import Success from './pages/Success';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateProduct from './pages/admin/CreateProduct';
import AllUsers from './pages/admin/AllUsers';
import UserDashboard from './pages/user/UserDashboard';
import UserOrders from './pages/user/UserOrders';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';

function App() {

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("http://localhost:5000/api/stripeapikey");
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error('Error getting Stripe API key:', error);
    }
  }

  useEffect(() => {
    dispatch(loadUser());
    getStripeApiKey();
  }, [dispatch]);

  // disable right click 
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:id' element={<SinglePageDetails />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/search' element={<Search />} />
          <Route path='/me/update' element={<EditProfile />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/order/confirm' element={<ConFirmOrder />} />


          <Route path='/payment/process' element={<PaymentWithoutStripe />} />
          {/* <Route path='/payment/process' element={<Payment />} /> */}
          {/* {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Route path="/payment/process" element={<Payment />} />
            </Elements>
          )} */}


          <Route path='/success' element={<Success />} />

          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/admin/products/new' element={<CreateProduct />} />
          <Route path='/admin/users' element={<AllUsers />} />

          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/userdashboard/orders' element={<UserOrders />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

