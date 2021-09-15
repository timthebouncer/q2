import React, {lazy, Suspense} from "react";

import Login from "../pages/views/loginPage/login"
import Register from "../pages/views/registerPage/index"
import Index from "../pages/views/indexPage/index"
import NotFound from "../pages/views/notFoundPage/index"
import UserInfo from "../pages/views/userInfo";
import UserManagement from "../pages/views/userManagement";
import Layout from "@/component/Layout/layout";

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
    component:()=><Layout><Index /></Layout>,
  },
  {
    name:'個人資訊管理',
    path:'/userInfo',
    component:()=><Layout><UserInfo /></Layout>
  },
  {
    name:'會員管理',
    path:'/user',
    component:UserManagement
  },
  {
    path:'*',
    component:NotFound
  }
]

export default router
