import React, {useEffect, useState} from 'react'
import {useContextSelector} from "use-context-selector";
import {userListContext} from "@/App";
import service from "@/api/api";
import Pagination from "@/component/pagination/pagination";
import {Link} from "react-router-dom";

const FormList=()=>{

  const [userList, setUserList,totalPage, setTotalPage] = useContextSelector(userListContext,e=>[e.userList,e.setUserList,e.totalPage, e.setTotalPage])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrent] = useState(0)


  let token =localStorage.getItem('token')


  const getUserList=()=>{
    let config={
      headers: {"Authorization" : `Bearer ${token}`},
      params:{
        page: currentPage,
        size: 10
      }
    }

    service.User.getList(config)
      .then(res=>{
        setTotalPage(res.data.data.total)
        // (this.newCurrent - 1) * this.newPageSize + index)
        setUserList(res.data.data.content)
        setLoading(false)
      })
  }
  useEffect(()=>{
    getUserList()
  },[currentPage])


  if(loading)return '載入中....'



  return(
    <div className={'flex flex-col justify-center'}>
      <header className={'p-5 flex-grow-1'}>
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
                  <tr className={'h-10'}>
                    <td>{item.name?item.name:'不取名的垃圾'}</td>
                    <td>{item.username}</td>
                    <td>{item.role}</td>
                    <td><Link to={'/user/userDetail'}><h2  className={'text-blue-400'}>詳情</h2></Link></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </section>
      <footer className={'mt-10 p-5 flex-grow-1 h-32'}>
        <Pagination totalPage={totalPage} currentPage={currentPage} setCurrent={setCurrent} />
        <div className={'text-center'}>共有{totalPage}筆</div>
      </footer>
    </div>
  )
}

export default FormList
