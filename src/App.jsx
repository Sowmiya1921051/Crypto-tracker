import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/mainbar/Mainbar'
function App() {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <Main />
    </div>
  </div>
  )
}

export default App