import React from 'react';
import Analysis from "../../assets/Analysis.png";
import Watchlist from '../../assets/Watchlist.png';
import Trending from '../../assets/Trending.jpg'

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex items-center justify-center">
      <ul>
        <img className='w-12 h-12 bg-blue-100 rounded-full p-2 mb-5 hover:bg-gray-600' src={Trending} />
        <img className='w-12 h-12 bg-blue-100 rounded-full p-2 mb-5 hover:bg-gray-600' src={Analysis} alt="Analysis Icon" />
        <img className='w-12 h-12 bg-blue-100 rounded-full p-2 hover:bg-gray-600' src={Watchlist} alt="Watchlist Icon" />
      </ul>
    </div>
  );
}

export default Sidebar;
