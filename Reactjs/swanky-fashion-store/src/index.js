import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/vendor.css"
import "./css/normalize.css"
import './index.css';
import './Assests/fonts/icomoon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage1 from './components/Homepage1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Homepage1 />} />
    

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

