import React,{useContext,useEffect,useState} from 'react'
import service from '@/api/api'
import message from "@/component/toast/toast";
import {authContext} from "@/App";
import {useContextSelector} from "use-context-selector";
import {Switch} from 'react-router-dom'



async function handleUpload(e,userData,setUserData) {
    await uploadFile(e.target.files[0],userData,setUserData);
    showPreviewImage(e.target.files[0])

}

function showPreviewImage(fileObj,avatar) {
    // avatar.src = URL.createObjectURL(fileObj);
}

function uploadFile(fileObj,userData,setUserData) {
  let token =localStorage.getItem('token')
  let config={
    headers: {"Authorization" : `Bearer ${token}`}
  }
  const formData = new FormData()
  formData.append('image',fileObj)
    service.Upload.userImg(formData,config)
      .then((res)=>{
        message.success(res.data.message,'success')
        setUserData({...userData,imgLink:res.data.data})
      })
}

const Profile=()=>{
  const [userData, setUserData]= useContextSelector(authContext,e=>[e.userData, e.setUserData])

  return(
    <div>
      帳戶設定
      <div>
        {
          <img src={userData && userData.imgLink ?userData.imgLink:'https://via.placeholder.com/300x300/efefef?text=Avatar'}
               alt="image-placeholder"
               className="img-thumbnail w-40" data-target="image-preview" />
        }
      </div>
      <div>
        {
          userData?<span>{userData.name}({userData.username})</span>:<span>Loading...</span>
        }
      </div>
      <div>
        <label>
          <input type="file" id="file-uploader" className={'hidden'} accept="image/*"
                 onChange={(e)=>handleUpload(e,userData,setUserData)}
          />
          <span className={'bg-blue-500 p-3.5 rounded text-white absolute cursor-pointer'}>上傳圖片</span>
        </label>

      </div>
    </div>
  )
}


const UserInfo=()=>{

  return(
      <Switch>
        <Profile />
      </Switch>
    )

}
export default UserInfo
