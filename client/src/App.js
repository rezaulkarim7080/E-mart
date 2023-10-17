import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
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
import Success from './pages/Success.jsx';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateProduct from './pages/admin/CreateProduct';
import AllUsers from './pages/admin/AllUsers';
import UserDashboard from './pages/user/UserDashboard';
import UserOrders from './pages/user/UserOrders';
import ProtectedRoute from './pages/route/ProtectedRoute';
import CreateProductForm from './pages/admin/CreateProductForm';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadUser } from './actions/userAction';

// import * as api from './api';

function App() {


  // const dispatch = useDispatch();
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await api.PaymentKey();

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   dispatch(loadUser());

  //   getStripeApiKey();
  // }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());


  /////




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
          <Route path='/products/products/:id' element={<SinglePageDetails />} />

          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:keyword' element={<AllProducts />} />
          <Route path='/search' element={<Search />} />
          <Route path='/me/update' element={<EditProfile />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/order/confirm' element={<ConFirmOrder />} />
          <Route path='/payment/process' element={<Payment />} />
          <Route path='/success' element={<Success />} />

          <ProtectedRoute
            isAdmin={true}
            exact
            path="/AdminDashboard"
            component={AdminDashboard}
          />
          {/* <Route path='/AdminDashboard' element={<AdminDashboard />} /> */}
          {/* <Route path='/admin/products/catagory' element={<CreateCatagory />} /> */}
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
