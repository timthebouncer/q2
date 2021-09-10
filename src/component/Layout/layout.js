import React from 'react'
import NavBar from '../sideBar/navBar'
import Header from '../header/header'

const Layout=(props)=>{
  return(
    <div>
    <Header />
    <NavBar />
      <div>
        {props.children}
      </div>
    </div>
  )
}
export default Layout
