import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import CartScreen from './views/CartScreen';
import OneProduct from './views/OneProduct'
import LoginScreen from './views/LoginScreen';
import RegisterScreen from './views/RegisterScreen';
import ProfileScreen from './views/ProfileScreen';
import ShippingScreen from './views/ShippingScreen';
import PaymentMethodScreen from './views/PaymentMethodScreen';
import PlaceOrderScreen from './views/PlaceOrderScreen';
import OrderScreen from './views/OrderScreen';
import UserListScreen from './views/UserListScreen';
import UserEditScreen from './views/UserEditScreen';
import ProductListScreen from './views/ProductListScreen';
import ProductEditScreen from './views/ProductEditScreen';
import OrderListScreen from './views/OrderListScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentMethodScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/order/:id' element={<OrderScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/product/:id' element={<OneProduct />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/admin/userlist' element={<UserListScreen />} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              <Route path='/admin/productlist' exact element={<ProductListScreen />} />
              <Route path='/admin/productlist/:pageNumber' exact element={<ProductListScreen />} />
              <Route path='/admin/orderlist' element={<OrderListScreen />} />
              <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
              <Route path='/search/:keyword' exact element={<Home />} />
              <Route path='/page/:pageNumber' exact element={<Home />} />
              <Route path='/search/:keyword/page/:pageNumber' exact element={<Home />} />
              <Route path='/' exact element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
