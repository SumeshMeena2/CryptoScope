import React from 'react'
import { Link } from 'react-router-dom'
import logosvg from '../assets/The_logo_.svg'

const Logo = () => {
  return (
      <Link to="/" 
              
          className='absolute top-[1.5rem] left-[1.5rem] text-decoration:none] text-lg text-cyan flex items-center  '
        >
       <img className=' h-[120px] w-[120px] max-sm:h-[60px] max-sm:w-[60px] max-ssm:h-[40px] max-ssm:w-[40px] ' src={logosvg} alt="cryptobucks"/>
       <span className='mt-3 text-[34px]'> </span>
    </Link>
  )
}

export default Logo
