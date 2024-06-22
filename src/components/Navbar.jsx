import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul className=' flex justify-around '>
            <li>
            <Link>Home</Link>
            </li>
            <li>
            <Link>Servies</Link>
            </li>
            <li>
            <Link>About</Link>
            </li>
            <li>
            <Link>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;