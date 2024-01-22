import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import Grandpa from './Grandpa';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      },
      {
        path: '/dad',
        element: <Dad></Dad>
      },
      {
        path: '/uncle',
        element:<Uncle></Uncle>,
      },
      {
        path: '/aunty',
        element: <Aunty></Aunty>
      },
      {
        path:'/myself',
        element: <Myself></Myself>
      },
      {
        path:'/brother',
        element:<Brother></Brother>
      },
      {
        path:'/sister',
        element: <Sister></Sister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
