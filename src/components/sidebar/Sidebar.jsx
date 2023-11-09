import React from 'react';

function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen">
      
      <ul>
        <li className="hover:bg-gray-700 px-4 md:px-8 py-2">Trending</li>
        <li className="hover:bg-gray-700 px-4 md:px-8 py-2">Analysis</li>
        <li className="hover:bg-gray-700 px-4 md:px-8 py-2">Watchlist</li>
      </ul>
    </div>
  );
}

export default Sidebar;
