
// import './App.css'

import { useContext } from "react"
import { ThemeContext } from "./main"


export function App() {
  const theme = useContext(ThemeContext)

  return (
    <div>
      Hello
    </div>
  )
}
