import React from 'react'
import logo from '../../assets/logo.png'
function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white">
    <div className="flex items-center h-16 px-8">
      <img src={logo} alt="Logo" className="w-10 h-10" />
      <span className="text-xl ml-2">Crypto-Tracker</span>
    </div>
    <ul>
      <li className="hover:bg-gray-700 px-8 py-2">Dashboard</li>
    </ul>
  </div>
  )
}

export default Sidebar