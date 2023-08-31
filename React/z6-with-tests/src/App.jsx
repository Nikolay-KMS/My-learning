import { RouterProvider } from "react-router-dom";
import { router } from './router/router';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { createContext } from 'react';
import { useState } from "react";

export const ThemeContext = createContext('asCards');

export function App() {
  const [theme, setTheme]= useState('asCards')

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContext.Provider>
  )
}
