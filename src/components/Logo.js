import React from 'react'
import { Link } from 'react-router-dom'
import logosvg from '../assets/bold-letter-b-svgrepo-com.svg'

const Logo = () => {
  return (
      <Link to="/" 
              
          className='absolute top-[1.5rem] left-[1.5rem] text-decoration:none] text-lg text-cyan flex items-center  '
        >
       <img className=' h-12   ' src={logosvg} alt="cryptobucks"/>
       <span className='mt-3 text-[34px]'> itswap </span>
    </Link>
  )
}

export default Logo
