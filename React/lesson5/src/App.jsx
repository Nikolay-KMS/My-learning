// import { useState } from 'react'
import './App.css'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Button from './components/Button'


function App() {

  const location = useLocation();
  console.log(location);

  return (
    <div className='app'>
      <Link to="/">Main</Link>
      <Link to="about">About</Link>
      <Link to="contacts">Contacts</Link>
      <Link to="faq">FAQ</Link>
      <Link to="beers">Beers</Link>
      <Button />
      <Outlet />
    </div>
  )
}

export default App
 