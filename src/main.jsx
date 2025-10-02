
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import app from '../firebase.config.js';
import EditPage from './EditPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <EditPage/>,
  },
]);


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />,

)
