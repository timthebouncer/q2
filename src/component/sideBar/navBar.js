import React from 'react'
import {SidebarData} from './sideBarData'
import {Link, Route} from 'react-router-dom'
import './sidebar.css'
import {userIcon} from '@/Icon/svg'
import ToolTip from "@/component/tooltip/tooltip";

const NavBar=({switchMenu, userData})=>{


  return(
    <div className={switchMenu===false? "w-44 h-screen p-4":"w-11 h-screen p-4"} >
      {
        SidebarData.map((item,index)=>{
          return(
              <Route key={index} render={()=>{
                if(userData || userData.role === item.role){
                  return(
                  <>
                    <li className="sidebar-items" key={index}>
                      <Link className="flex" to={item.path} >
                        {
                          switchMenu===false? <><span className={'mr-4'}>{userIcon}</span> <span>{item.name}</span></>:<>
                            <ToolTip text={item.name}>
                               <span className={"m-0 h-8"}>
                                  {userIcon}
                                </span>
                            </ToolTip>
                            <span className={'opacity-0'}>{item.name}</span>
                          </>
                        }
                      </Link>
                    </li>
                  </>
                  )
                }
                // else if(userData && userData.role === item.role){
                //       return (
                //           <li className="sidebar-items" key={index}>
                //             <Link className="flex" to={item.path}>
                //               <ToolTip text={item.name}>
                //               <span className='mr-4'>
                //                 {userIcon}
                //               </span>
                //               </ToolTip>
                //               {
                //                 switchMenu===false? <span>{item.name}</span>:<span></span>
                //               }
                //             </Link>
                //           </li>
                //       )
                //     }
              }} />
          )
        })
      }
    </div>
  )
}
export default NavBar
