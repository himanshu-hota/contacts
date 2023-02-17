import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <nav className="nav bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white uppercase ">
        <ul className='flex justify-between items-center '>
            <li className='hover:scale-105 hover:text-gray-700'><Link to={'..'}>Con-tacts</Link></li>
            <li className='hover:scale-105 hover:text-gray-700'><Link to='add-new-contact'>Add New</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar;