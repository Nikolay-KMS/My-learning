import { RouterProvider } from "react-router-dom";
import { router } from './router/router';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { createContext } from 'react';
import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { themeMUI } from "../src/utilities/themeMUI";


export const ThemeContext = createContext('asCards');

export function App() {
  const [theme, setTheme] = useState('asCards')

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={themeMUI}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </ThemeContext.Provider>
  )
}
