import React from 'react';
import logo from '../../assets/logo.png';


function Header() {
  return (
    <div className='text-white'>
      <div className="h-16 bg-black flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
        <div className="flex items-center px-4 md:px-8">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-xl ml-2">Crypto-Tracker</span>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
