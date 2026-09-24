import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'

export default function MainLayout() {
  return (
    <div className='flex flex-row'>
      <SideNavbar width={20}/>
      <div className='flex flex-col w-[80%] h-screen'>
        <Navbar/>
        <main className='flex-1 overflow-y-scroll'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
