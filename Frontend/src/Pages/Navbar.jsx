import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full flex bg-slate-600 h-14 items-center text-white mx-auto font-bold gap-10 justify-between '>
    <h1 className='text-2xl ml-10 '>vishnu</h1>
    <div className=' flex gap-10'>
    <NavLink to='/Home'>Home</NavLink>
      <NavLink to='/Signin'>Signin</NavLink>
      <NavLink to='/Signup'>Signup</NavLink>
      <NavLink  className="mr-10" to='/About'>About</NavLink>
    </div>
    </div>
  )
}

export default Navbar
