import React, {lazy, Suspense} from "react";


import Layout from "@/component/Layout/layout";
import NotFound from "../pages/views/notFoundPage/index"

const Login = lazy(()=>import('@/pages/views/loginPage/login'))
const Register = lazy(()=>import('@/pages/views/registerPage/index'))
const Index = lazy(()=>import('@/pages/views/indexPage/index'))
const UserInfo = lazy(()=>import('@/pages/views/userInfo'))
const UserManagement = lazy(()=>import('@/pages/views/userManagement'))


const routes=[
  {
    path: "/",
    name: "Login",
    exact:true,
    component:Login
  },
  {
    path: "/register",
    name: 'Register',
    component:Register
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
    component:()=><Layout><UserManagement /></Layout>
  },
  {
    path:'*',
    component:NotFound
  }
]

export default routes
