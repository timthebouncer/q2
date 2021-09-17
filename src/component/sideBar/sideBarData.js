import React from 'react'
import UserInfo from "../../pages/views/userInfo";
import UserManagement from "../../pages/views/userManagement";

export const SidebarData =[
  {
    name:'個人資訊管理',
    path:'/userInfo',
    component:UserInfo,
    children:{path:'/account',name:'帳戶管理'}

  },
  {
    name:'會員管理',
    path:'/user',
    role:'ADMIN',
    component:UserManagement
  }


]
