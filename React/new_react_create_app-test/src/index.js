import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const ThemeContext = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeContext.Provider value='123'>
    <App />
  </ThemeContext.Provider>
  // </React.StrictMode>
);

