import React, {lazy, Suspense} from "react";


import Layout from "@/component/Layout/layout";
import NotFound from "../pages/views/notFoundPage/index"

const Login = lazy(()=>import('@/pages/views/loginPage/login'))
const Register = lazy(()=>import('@/pages/views/registerPage/index'))
const Index = lazy(()=>import('@/pages/views/indexPage/index'))
const UserInfo = lazy(()=>import('@/pages/views/userInfo'))
const List = lazy(()=>import('@/pages/views/userManagement/index'))
const FormList = lazy(()=>import('@/pages/views/userManagement/formList'))


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
    path:'/account',
    routes:[
      {
        path:'/account/profile-setting',
        name:'帳戶設定',
        component:()=><Layout><UserInfo /></Layout>
      }
    ]
  },
  {
    name:'會員管理',
    path: '/user',
    routes:[
      {
        path:'/user/list',
        name:'列表式',
        component:()=><Layout><List /></Layout>
      },
      {
        path:'/user/form',
        name:'表格式',
        component:()=><Layout><FormList /></Layout>
      },
    ]
  },
  {
    path:'*',
    component:NotFound
  }
]

export default routes
