import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Input } from 'reactstrap';
import Login from './Componants/login'; 
import Forgetpassword from './Componants/Forgetpassword';
import Registerapp from './Componants/Registerapp';
import Password_verification from './Componants/Password_verification';
import Newpassword from './Componants/Newpassword';
import Homepage from './Componants/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/Forgetpassword' element={<Forgetpassword />} />
    <Route path='/registerapp' element={<Registerapp />} />
    <Route path='/password_verification' element={<Password_verification />} />
    <Route path='/newpassword' element={<Newpassword />} />
    <Route path='/homepage' element={<Homepage />} />



  </Routes>
  </BrowserRouter>
  
);

