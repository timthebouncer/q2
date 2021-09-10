import React from 'react'
import UserInfo from "../../pages/views/userInfo";
import UserManagement from "../../pages/views/userManagement";

export const SidebarData =[
  {
    name:'個人資訊管理',
    path:'/userInfo',
    component:UserInfo
  },
  {
    name:'會員管理',
    path:'/userManagement',
    component:UserManagement
  }


]
