import React from 'react';

const Navbar = () => {
  return (
      <nav className="nav bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white uppercase ">
        <ul className='flex justify-between items-center '>
            <li className='hover:scale-105 hover:text-gray-700'><a href="/">Con-tacts</a></li>
            <li className='hover:scale-105 hover:text-gray-700'><a href="/new-contact">Add New</a></li>
            
        </ul>
    </nav>
  )
}

export default Navbar;