import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/mainbar/Mainbar'
function App() {
  return (
    <div className="flex ">
     
    <div className="flex-1 flex flex-col">
      <Header />
      <div className='flex' >
      <Sidebar/>
      <Main/>
      </div>
    </div>
  </div>
  )
}

export default App