import React from 'react';
import ReactDOM from 'react-dom/client';
// import {App} from './router/pages/App';
import {RouterProvider} from "react-router-dom";
import { router } from './router/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);