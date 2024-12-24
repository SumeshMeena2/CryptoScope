import React from 'react'
import Search from './Search'

import { useContext , useRef } from 'react'
import Currency from './Currency'
import Sorting from './Sorting'
import submitIcon from '../assets/submit-icon.svg'
import { CryptoContext } from '../context/CryptoContext'

const Filters = () => {

  let {setCurrency , setSortBy} = useContext(CryptoContext);
  
   const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
     e.preventDefault();
    
     let val = currencyRef.current.value;

     setCurrency(val);
     currencyRef.current.value = "";

  }

  const handleSort = (e) => {
          e.preventDefault()
          let val = e.target.value
          setSortBy(val)
  }
   
  return (
    
    
    <div className=' w-full border border-cyan flex justify-between items-center p-2 gap-2  max-lg:gap-[0.5rem] max-ssm:flex-col max-ssm:items-start  '  >
        
        <Search/>
        <div className=' flex mr-7 max-md:mr-3 max-ssm:pl-2 '>

         <form className='relative flex items-center font-nunito  ' onSubmit={handleCurrencySubmit} >
          <label htmlFor='currency' className=' relative flex justify-center items-center mr-2 font-bold max-lg:hidden text-teal-600'>Currency</label>
             <input ref={currencyRef} type='text' name='currency' 
            placeholder='usd' className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4'/>

             <button type="submit">
                
                <img src={submitIcon} alt="submit" className=' w-full h-auto '/>

             </button>
             

         </form>
        </div>
        





        <label className='relative flex justify-center items-center max-md:w-40 max-ssm:pl-1 '>
            
            <span className='font-bold m-2 max-lg:hidden text-teal-600 '> Sort by:</span>
            <select  name='sortby' className=' max-lg:w-30 max-md:pr-4 max-md:text-sm rounded bg-gray-200 text-base pl-2 pr-10 py-0.6 leading-4 capitalize focus:outline-0 border border-transparent focus:border-cyan ' onClick={handleSort}>


                <option value='market_cap_desc'>market cap_desc</option> 
                <option value='market_cap_asc'>market cap_asc</option>
                <option value='gecko_desc'>gecko_desc</option>
                <option value='gecko_asc'>gecko_asc</option>
                <option value='id_desc'>id_desc</option>
                <option value='id_asc'>id_asc</option>
                <option value='volume_asc'>volume_asc</option>
                <option value='volume_desc'>volume_desc</option>
               


            </select>
        </label>











    </div>
  )
}

export default Filters
