import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Homepage from './Components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

<Routes>
  <Route path='/' element={<Homepage />} />
  <Route path='/about-us' element={<Homepage />} />
  <Route path='/checkin-checkout' element={<Homepage />} />
  <Route path='/blog' element={<Homepage />} />
  {/* <Route path='/' element={<Homepage />} /> */}
  

  {/* <Route path='/Forgetpassword' element={<Forgetpassword />} />
  <Route path='/registerapp' element={<Registerapp />} />
  <Route path='/password_verification' element={<Password_verification />} />
  <Route path='/newpassword' element={<Newpassword />} />
  <Route path='/homepage' element={<Homepage />} /> */}



</Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
