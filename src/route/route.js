import React, {lazy, Suspense} from "react";

import Login from "../pages/views/loginPage/login"
import Index from "../pages/views/indexPage/index"

const router=[
  {
    path: "/",
    name: "Login",
    exact:true,
    component: Login,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
]

export default router
