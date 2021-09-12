import React,{useState} from 'react'
import NavBar from '../sideBar/navBar'
import Header from '../header/header'

const Layout=(props)=>{

  const [switchMenu, setSwitchMenu] = useState(false)
  return(
    <div className="layout-wrapper">
    <Header switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} />
    <div className="flex">
      <div className="border-r-2 border-black">
        <NavBar switchMenu={switchMenu} />
      </div>
      <div className="component-wrapper w-full">
        {props.children}
      </div>
    </div>
    </div>
  )
}
export default Layout
