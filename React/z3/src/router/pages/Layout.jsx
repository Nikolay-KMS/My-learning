import { NavLink, Outlet} from 'react-router-dom'

export function Layout() {

  return (
    <div>
      <div className='navbar'>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to="favourite">Favourite</NavLink>
        <NavLink to="basket">Your basket</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
