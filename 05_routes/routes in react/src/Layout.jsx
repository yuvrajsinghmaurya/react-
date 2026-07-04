import React from 'react'

// import Header from './components/Header/Header.jsx'
import { Header , Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      
      <Header/>
      {/* now here we will use outlet because i want header and footer will same all page but only middle content will change
      and this will added on index  */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
