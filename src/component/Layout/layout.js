import React,{useState,useEffect,useContext} from 'react'
import NavBar from '../sideBar/navBar'
import Header from '../header/header'
import Service from '../../api/api'
// import {AuthToken} from '../../App'


const Layout=(props)=>{
  const {userInfo}=props
 //  const {setAuth} = useContext(AuthToken)
 //  let token =localStorage.getItem('token')
 //
 // useEffect(()=>{
 //
 //    let config={
 //      headers: {"Authorization" : `Bearer ${token}`}
 //    }
 //    Service.Auth.userAuth(config)
 //      .then((res)=>{
 //        console.log(res)
 //        setAuth(res.data.success)
 //        // setUserInfo(res.data.data)
 //      })
 //
 //  },[])


  const [switchMenu, setSwitchMenu] = useState(false)
  return(
    <div className="layout-wrapper">
    <Header switchMenu={switchMenu} setSwitchMenu={setSwitchMenu} />
    <div className="flex">
      <div className="border-r-2 border-black">
        <NavBar switchMenu={switchMenu} userInfo={userInfo} />
      </div>
      <div className="component-wrapper w-full">
        {props.children}
      </div>
    </div>
    </div>
  )
}
export default Layout
