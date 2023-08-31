import React from 'react'
import { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
// import { createContext } from 'react'
// import { Provider } from 'react-redux'

export const ThemeContext = React.createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store = {store}>
  <ThemeContext.Provider value='123'>
    <App />
  </ThemeContext.Provider>  // </Provider>
)


