import React,{useEffect,useState} from 'react'
import service from "@/api/api";
import {Link} from 'react-router-dom'
import {userListContext} from '@/App'
import {useContextSelector} from "use-context-selector";

const UserManagement=()=>{
  const [userList, setUserList,totalPage, setTotalPage,scrollState, setScrollState,currentPage, setCurrent] = useContextSelector(userListContext,e=>
      [e.userList,e.setUserList,e.totalPage, e.setTotalPage,e.scrollState, e.setScrollState,e.currentPage, e.setCurrent])
  const [loading, setLoading] = useState(true)
  const [isBottom, setBottom] = useState(false)


  let total = 0;
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
      .then(({data})=>{
        const {content,total:totalPage} = data.data
        setUserList(userList=>[...userList, ...content])

        setTotalPage(totalPage)

        if(totalPage%10 !== 0){
          total = Math.floor(totalPage/10) + 1
           sessionStorage.setItem('total123',total)
        }else {
          total = Math.floor(totalPage/10)
            sessionStorage.setItem('total123',total)
        }
        setLoading(false)
        setBottom(false)
      })
  }

  const infiniteScroll=()=>{
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if(clientHeight + scrollTop > scrollHeight){
       let totals = sessionStorage.getItem('total123')
        if(parseInt(totals) === currentPage)return
        setBottom(true)
        setCurrent((currentPage) => currentPage + 1)
    }
  }

  useEffect(()=>{
        setTimeout(()=>{
            window.scrollTo(0, parseInt(scrollState));
        },100)
  },[])

  useEffect(()=>{
    window.addEventListener('scroll',infiniteScroll)
    return()=>{
        window.removeEventListener('scroll',infiniteScroll)
    }
  },[currentPage])

  useEffect(()=>{
      if(userList.length===0){
          getUserList()
      }else if(isBottom){
          getUserList()
      }else {
          setLoading(false)
      }

  },[currentPage])


  if(loading)return '?????????....'

  return(
    <div>
      <div className={'p-3'}>
        <h1 className={'ml-6 text-xl'} >????????????(?????????)</h1>
      </div>
      <div className={'px-8'}>
        {
          userList && userList.map((item,index)=>{
            return(
                <div key={item._id} className={'p-5 mb-6 border-2 border-black rounded flex justify-between'}>
                  <div>
                    {index + 1}.
                    ??????:{item.name} |
                    ??????:{item.username} |
                    ??????:{item.role}
                  </div>
                  <div>
                   <Link to={'/user/userDetail'} onClick={()=> {
                       setScrollState(window.pageYOffset)
                       // setCurrent(currentPage)
                   }}><h2 className={'text-blue-400'}>??????</h2></Link>
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
