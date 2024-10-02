import React from 'react'
import NavRoutes from './Routes/NavRoutes'
import Navbar from './Pages/Navbar'
const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <NavRoutes />
    </div>
  )
}

export default App
