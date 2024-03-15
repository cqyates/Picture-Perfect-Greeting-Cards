import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.js';
import Home from "./pages/Home/index.js"
import Build from './pages/Build/index.js'
import Save from "./pages/Save/index.js"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/save',
        element: <Save />
      }, 
      {
        path: '/build',
        element: <Build />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
