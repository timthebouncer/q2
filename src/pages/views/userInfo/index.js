import React,{useContext,useEffect,useState} from 'react'
import Service from '../../../api/api'
import message from "../../../component/toast/toast";
import {GetUserInfo} from "../../../App";
import modal from "../../../component/modal/modal";

async function handleUpload(e,avatar,setAvatar) {
    await uploadFile(e.target.files[0],avatar,setAvatar);
    showPreviewImage(e.target.files[0],avatar)

}


function showPreviewImage(fileObj,avatar) {
    // avatar.src = URL.createObjectURL(fileObj);
}

function uploadFile(fileObj,avatar,setAvatar) {
  let token =localStorage.getItem('token')
  let config={
    headers: {"Authorization" : `Bearer ${token}`}
  }
  const formData = new FormData()
  formData.append('image',fileObj)
    Service.Upload.userImg(formData,config)
      .then((res)=>{
        message.success(res.data.message,'success')
        avatar.src = res.data.data
      })
}

const UserInfo=()=>{
    const [avatar,setAvatar] = useState('')
    const [getUser, setGetUser] = useState(null)

    let token =localStorage.getItem('token')

    useEffect(()=>{
      let imgSrc = document.querySelector(".img-thumbnail")
      setAvatar(imgSrc)

      let config={
        headers: {"Authorization" : `Bearer ${token}`}
      }
      Service.Auth.userAuth(config)
        .then((res)=>{
          setGetUser(res.data.data)
        })

    },[setAvatar])
  return(
    <div>
      帳戶設定
        <div>
          {
              <img src={getUser && getUser.imgLink ?getUser.imgLink:'https://via.placeholder.com/300x300/efefef?text=Avatar'}
                   alt="image-placeholder"
              className="img-thumbnail w-40" data-target="image-preview" />
          }
        </div>
        <div>
            {
              getUser?<span>{getUser.name}({getUser.username})</span>:<span>Loading...    </span>
            }
        </div>
        <div>
            <label>
                <input type="file" id="file-uploader" className={'hidden'} accept="image/*"
                       onChange={(e)=>handleUpload(e,avatar,setAvatar)}
                />
                <span className={'bg-blue-500 p-3.5 rounded text-white absolute cursor-pointer'}>上傳圖片</span>
            </label>

        </div>
    </div>
  )
}
export default UserInfo
