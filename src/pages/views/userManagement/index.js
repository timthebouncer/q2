import React,{useEffect} from 'react'
import service from "@/api/api";
import {authContext} from '@/App'
import {useContextSelector} from "use-context-selector";

const UserManagement=()=>{
  const [token]= useContextSelector(authContext,e=>[e.token])

  let config={
    headers: {"Authorization" : `Bearer ${token}`},
    params:{
      page: 0,
      size: 10
    }
  }

  useEffect(()=>{
    service.User.getList(config)
      .then(res=>{
        console.log(res)
      })
  },[])

  return(
    <div>
      列表式
    </div>
  )
}
export default UserManagement
