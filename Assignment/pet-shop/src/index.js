import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Aboutus from './Components/Aboutus';
import Shop from './Components/Shop';
import Singleproduct from './Components/Singleproduct';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Checkout from './Components/Checkout';
import Blog from './Components/Blog';
import Singlepost from './Components/Singlepost';
import Contact from './Components/Contact';
import Faqs from './Components/Faqs';
import Account from './Components/Account';
import ThankYou from './ThankYou';
import Error from './Components/Error';
import Style from './Components/Style';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<Aboutus />} />
   <Route path='/shop' element={<Shop />} />
   <Route path='/single-product' element={<Singleproduct />} />   
   <Route path='/cart' element={<Cart />} />
   <Route path='/wishlist' element={<Wishlist />} />
   <Route path='/checkout' element={<Checkout />} />
   <Route path='/blog' element={<Blog />} />
   <Route path='/single-post' element={<Singlepost />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/faqs' element={<Faqs />} />
   <Route path='/account' element={<Account />} />
   <Route path='/thank-you' element={<ThankYou />} />
   <Route path='/error' element={<Error />} />
   <Route path='/styles' element={<Style />} />

    {/* <Route path='/Forgetpassword' element={<Forgetpassword />} />
    <Route path='/registerapp' element={<Registerapp />} />
    <Route path='/password_verification' element={<Password_verification />} />
    <Route path='/newpassword' element={<Newpassword />} />
    <Route path='/homepage' element={<Homepage />} /> */}



  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
