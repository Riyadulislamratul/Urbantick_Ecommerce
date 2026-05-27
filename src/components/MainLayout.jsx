import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer.jsx'

const MainLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout