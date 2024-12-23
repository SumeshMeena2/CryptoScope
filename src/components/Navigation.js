import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav
      className='w-[40%] mt-16 flex justify-around align-middle border border-cyan rounded-lg p-4 max-ssm:flex-col '
    >
       
       
    <NavLink to="/"
     className = {  
        ({isActive}) => {
          return `w-full text-base text-center font-nunito m-2.5    border-0 cursor-pointer rounded capitalize font-semibold   
          ${isActive ? 'bg-cyan text-gray-300' : 'bg-gray-200 text-gray-100  hover:text-cyan'}`               
        }
     }
     >
      Crypto
    </NavLink>
    <NavLink to="/trending"
     className = {
        ({isActive}) => {
          return `w-full text-base text-center font-nunito m-2.5  border-0 cursor-pointer rounded capitalize font-semibold   
          ${isActive ? 'bg-cyan text-gray-300' : 'bg-gray-200 text-gray-100  hover:text-cyan'}`               
        }
     }
     >
      Trending
    </NavLink>
    <NavLink to="/saved"
     className = {
        ({isActive}) => {
          return `w-full text-base text-center font-nunito m-2.5  border-0 cursor-pointer rounded capitalize font-semibold   
          ${isActive ? 'bg-cyan text-gray-300' : 'bg-gray-200 text-gray-100  hover:text-cyan'}`               
        }
     }
     >
      Saved
    </NavLink>
    </nav>
  )
}

export default Navigation
