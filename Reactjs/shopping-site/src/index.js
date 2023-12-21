import React from 'react';
import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import HeaderApp from './componants/headerApp';
import NavApp from './componants/NavApp';
import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.json";
import Header2 from './componants/Header2';
import Banner from './componants/banner';
import Content from './componants/content';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(
  <React.StrictMode>
    <HeaderApp />
    <Header2 />
    <NavApp />
    <Banner />
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
