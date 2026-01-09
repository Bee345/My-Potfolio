import React from 'react'
import Header from './Header.jsx';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <> 
    <Header />
    <main className='mt-0 z-40 pt-20 relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white'> 
    <Outlet />
    </main>
    </>
  )
}

export default MainLayout