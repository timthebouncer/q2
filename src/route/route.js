import React, {lazy, Suspense} from "react";

import Login from "../pages/views/loginPage/login"
import Register from "../pages/views/registerPage/index"
import Index from "../pages/views/indexPage/index"
import NotFound from "../pages/views/notFoundPage/index"

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
    path:'/404',
    name:'NotFound',
    component:NotFound
  }
]

export default router
