import React from 'react'
import {SidebarData} from './sideBarData'
import {Link, Route} from 'react-router-dom'
import './sidebar.css'
import {userIcon} from '@/Icon/svg'
import show from "@/component/tooltip/tooltip";
import tooltip from "@/component/tooltip/tooltip";

const NavBar=({switchMenu, userData})=>{

  const tooltip=(e,name)=>{
    console.log(e)
    if(switchMenu){
      let element = e.target.getBoundingClientRect()
      show.toolTip(e.type,name,e)
    }
  }
  // const closeToolTip=(e)=>{
  //   e.preventDefault()
  //   if(switchMenu){
  //     show.toolTip(e.type)
  //   }
  // }

  return(
    <div className={switchMenu===false? "w-44 h-screen p-4":"w-11 h-screen p-4"} >
      {
        SidebarData.map((item,index)=>{
          return(
              <Route render={()=>{
                if(!item.role){
                  return(
                  <li className="sidebar-items" key={index}>
                  <Link className="flex" to={item.path} >
                  <span className='mr-4' onMouseEnter={e=> tooltip(e,item.name)}>
                  {userIcon}
                  </span>
                        {
                          switchMenu===false? <span>{item.name}</span>:<span className={'opacity-0'}>{item.name}</span>
                        }
                  </Link>
                  </li>)
                }else if(userData && userData.role === item.role){
                      return (
                          <li className="sidebar-items" key={index}>
                            <Link className="flex" to={item.path}>
                              <span className='mr-4'>
                                {userIcon}
                              </span>
                              {
                                switchMenu===false? <span>{item.name}</span>:<span></span>
                              }
                            </Link>
                          </li>
                      )
                    }
              }} />
          )
        })
      }
    </div>
  )
}
export default NavBar
