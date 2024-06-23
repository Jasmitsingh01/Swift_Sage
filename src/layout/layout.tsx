

import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar.js'
function Layout() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
        <Outlet />
    </main>

    <footer>
        
    </footer>

    </>
  )
}

export default Layout