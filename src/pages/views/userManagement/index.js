import React,{useEffect,useState} from 'react'
import service from "@/api/api";
import {Link} from 'react-router-dom'
import {userListContext} from '@/App'
import {useContextSelector} from "use-context-selector";

const UserManagement=()=>{
  const [userList, setUserList] = useContextSelector(userListContext,e=>[e.userList,e.setUserList])
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
          setUserList(res.data.data.content)
          setLoading(false)
        })
    }else {
      setLoading(false)
    }

  },[setUserList])

  if(loading)return '載入中....'

  return(
    <div>
      <div className={'p-3'}>
        <h1 className={'ml-6 text-xl'}>會員管理(列表式)</h1>
      </div>
      <div className={'px-8'}>
        {
          userList && userList.map((item,index)=>{
            return(
                <div key={item._id} className={'p-5 mb-6 border-2 border-black rounded flex justify-between'}>
                  <div>
                    {index + 1}.
                    姓名:{item.name} |
                    帳號:{item.username} |
                    角色:{item.role}
                  </div>
                  <div>
                   <Link to={'/user/userDetail'}>詳情</Link>
                  </div>
                </div>

            )
          })
        }
      </div>
    </div>
  )
}
export default UserManagement
