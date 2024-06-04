import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import HomeTwo from './pages/Home2';
import Index3 from './pages/Home3/Index3';
import Index4 from './pages/Home4/Index4';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/index-2",
    element: <HomeTwo/>,
  },
  {
    path: "/index-3",
    element: <Index3/>,
  },
  {
    path: "/index-4",
    element: <Index4/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
