import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { About } from './pages/About.jsx';
import { Contacts } from './pages/Contacts.jsx';
import { Faq } from './pages/Faq.jsx';
import { Beers } from './pages/Beers.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      {
        path: "/contacts/:contactsId",
        element: <Contacts></Contacts>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/beers",
        element: <Beers></Beers>,
      },
    ]
  },

  // {
  //   path: "/about",
  //   element: <div>about!</div>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
