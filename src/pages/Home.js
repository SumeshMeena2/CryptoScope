import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo.js'
import Navigation from '../components/Navigation.js'
import { CryptoProvider } from '../context/CryptoContext.js'
import { TrendingProvider } from '../context/TrendingContext.js'
import { StorageProvider } from '../context/StorageContext.js'
const Home = () => {
  return (

    <CryptoProvider>
    <TrendingProvider>
      <StorageProvider>

    <main className='w-full h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito'
       
       >
        <div className='w-screen h-screen bg-gray-300 fixed -z-10'  />
        <Logo/>
         <Navigation/>
         <Outlet/>
    </main>
         </StorageProvider>
        </TrendingProvider>
         </CryptoProvider>
  )
}

export default Home
