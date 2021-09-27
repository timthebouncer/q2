import React, {useEffect, useState} from 'react'
import {useContextSelector} from "use-context-selector";
import {userListContext} from "@/App";
import service from "@/api/api";
import Pagination from "@/component/pagination/pagination";
import {Link} from "react-router-dom";

const FormList=()=>{

  const [userList, setUserList,totalPage, setTotalPage] = useContextSelector(userListContext,e=>[e.userList,e.setUserList,e.totalPage, e.setTotalPage])
  const [loading, setLoading] = useState(true)

  let token =localStorage.getItem('token')
  let config={
    headers: {"Authorization" : `Bearer ${token}`},
    params:{
      page: 0,
      size: 10
    }
  }


  useEffect(()=>{
    if(userList.length === 0){
      service.User.getList(config)
        .then(res=>{
          setTotalPage(res.data.data.total)
          // (this.newCurrent - 1) * this.newPageSize + index)
          setUserList(res.data.data.content)
          setLoading(false)
        })
    }else {
      setLoading(false)
    }

  },[setUserList])

  if(loading)return '載入中....'



  return(
    <div className={'flex flex-col justify-center min-h-full'}>
      <header className={'p-5 flex-grow-custom'}>
        <h1 className={'ml-6 text-xl'}>會員管理(表格式)</h1>
      </header>
      <section className={'flex-1 px-5'}>
        <div className={'flex flex-col text-center'}>
          <table>
            <thead>
            <tr className={'border-b-2 border-black'}>
              <th>姓名</th>
              <th>帳號</th>
              <th>角色</th>
              <th>詳情</th>
            </tr>
            </thead>
            <tbody>
            {
              userList && userList.map(item =>{
                return(
                  <tr>
                    <td>{item.name?item.name:'不取名的垃圾'}</td>
                    <td>{item.username}</td>
                    <td>{item.role}</td>
                    <td><Link to={'/user/userDetail'}>詳情</Link></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </section>
      <footer className={'text-center p-5 flex-grow-custom'}>
        <Pagination totalPage={totalPage} />
      </footer>
    </div>
  )
}

export default FormList
