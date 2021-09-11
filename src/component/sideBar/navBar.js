import React from 'react'
import {SidebarData} from './sideBarData'
import {Link} from 'react-router-dom'
import './sidebar.css'

const NavBar=({switchMenu})=>{
  return(
    <div className={switchMenu===false? "w-44 h-screen p-4":"w-11 h-screen p-4"} >
      {
        SidebarData.map((item,index)=>{
          return(
            <li className="sidebar-items" key={index}>
              <Link className="flex" to={item.path}>
                <span className='mr-4'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
                </span>
                {
                  switchMenu===false? <span>{item.name}</span>:<span></span>
                }
              </Link>
            </li>
          )
        })
      }
    </div>
  )
}
export default NavBar
