import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from '../src/components/Product/Product'
import Attributes from '../src/components/Attributes/Attributes'
import {
    createBrowserRouter,
    RouterProvider,
   } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "Attributes",
    element: <Attributes />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

// import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import MainPage from './pages/mainPage';
// import reportWebVitals from './reportWebVitals';
// import AboutPage from './pages/aboutPage';
// import RegistrationPage from './pages/register';
// import ActivityPage from './pages/activityPage';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import ProgramPage from './pages/programPage';
// import { RecoilRoot } from 'recoil';


// const root = ReactDOM.createRoot(document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

