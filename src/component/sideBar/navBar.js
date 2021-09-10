import React from 'react'
import {SidebarData} from './sideBarData'
import {Link} from 'react-router-dom'

const NavBar=()=>{
  return(
    <div>
      {
        SidebarData.map((item,index)=>{
          return(
            <li key={index}>
              <Link to={item.path}>
                <span>{item.name}</span>
              </Link>
            </li>
          )
        })
      }
    </div>
  )
}
export default NavBar
