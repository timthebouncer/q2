import React, {lazy, Suspense} from "react";

import Login from "../pages/views/loginPage/login"
import Register from "../pages/views/registerPage/index"
import Index from "../pages/views/indexPage/index"
import NotFound from "../pages/views/notFoundPage/index"
import UserInfo from "../pages/views/userInfo";
import UserManagement from "../pages/views/userManagement";

const router=[
  {
    path: "/",
    name: "Login",
    exact:true,
    component: Login,
  },
  {
    path: "/register",
    name: 'Register',
    component: Register
  },
  {
    path: "/index",
    name: "Index",
    auth:'true',
    component: Index,
  },
  {
    name:'個人資訊管理',
    path:'/userInfo',
    auth:'true',
    component:UserInfo
  },
  {
    name:'會員管理',
    path:'/user',
    auth:'true',
    component:UserManagement
  },
  {
    path:'/404',
    name:'NotFound',
    component:NotFound
  }
]

export default router
