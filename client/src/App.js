import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Loader from './Components/loader/Loader';
import ErrorBoundary from "./Components/errorBoundary/index";
import ResponsiveHeader from './Components/Header-component/ResponsiveHeader';
import Footer from './Components/Footer';

import Home from './screens/home-screen';
import SingleProduct from './screens/single-product';
import ProductList from './screens/product-list/index.js';
import Cart from './screens/cart';
import Login from './screens/login';
import Register from './screens/register';
import AllProductList from './screens/all-products';
import Success from './screens/success-screen';
import AdminHome from './adminDashboard/pages/home/Home';
import UserProfileDash from './adminDashboard/pages/user/User';
import NewuserDash from './adminDashboard/pages/newUser/NewUser';
import UserListDash from './adminDashboard/pages/userList/UserList';
import NewProduct from './adminDashboard/pages/newProduct/NewProduct';
import DashProduct from './adminDashboard/pages/product/Product';
import DashProductList from './adminDashboard/pages/productList/ProductList';
import Shipping  from './screens/shippingScreen';
import PaymentMethod from './screens/paymentMethod';
import PlaceOrderScreen  from './screens/placeOrderScreen';
import OrderScreen from './screens/orderScreen';
import DashOrderList from './adminDashboard/pages/orderList/orderList';
import AboutScreen from './screens/aboutPage';
import Categories from './Components/Categories/index';
import MyOrders  from './screens/myOrders';
import DashOrderInfo  from './adminDashboard/pages/order';



const App = () => {
  // const user = useSelector((state) => state.userLogin)
  return (
    <Router>
      <ErrorBoundary>
      <Suspense fallback={<Loader />}>
      <ResponsiveHeader />
      <Routes>
      <Route exact path="/" element={<Home />}/>
        {/* admin dashboard Routes */}
        <Route path='/admin-home' element={<AdminHome />}/>
        <Route path='/user/:userId' element={<UserProfileDash />} />
        <Route path='/newUser' element={<NewuserDash />}/>
        <Route path='/users' element={<UserListDash />}/>
        <Route path='/newproduct' element={<NewProduct  />}/>
        <Route path='/dash-products' element={<DashProductList />} />
        <Route path='/dash-product/:productId' element={<DashProduct />}/>
        <Route path='/dash-orders' element={<DashOrderList />} />
        <Route path='/dash-order/:orderId' element={<DashOrderInfo />} />
        {/* admin dashboard Routes end */}
        
        <Route path='/success' element={<Success />} />
        <Route  path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={ <SingleProduct /> }/>
        <Route path='/products' element={< AllProductList />}></Route>
        <Route  path="/cart" element={ <Cart /> }> </Route>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/login"  element={ <Login/>} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<PaymentMethod />} />
        <Route path='/placeoder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/about-us' element={<AboutScreen />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/my-orders' element={<MyOrders />} />
      </Routes>
      <Footer />
      </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App


