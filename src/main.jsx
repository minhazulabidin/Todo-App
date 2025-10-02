
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import app from '../firebase.config.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />,

)
