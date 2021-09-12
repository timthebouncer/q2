import React,{useContext,useEffect,useState} from 'react'
import {GetUserInfo} from '../../../App'

async function handleUpload(e,avatar) {
    // STEP 2: 得到該檔案的 Blob, i.e., e.target.files
    const arrayBuffer = await getArrayBuffer(e.target.files[0]);
    console.log('arrayBuffer', arrayBuffer);

    const response = await uploadFile(arrayBuffer);
    console.log('response', response);

    showPreviewImage(e.target.files[0],avatar)

}

function getArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        // STEP 3: 轉成 ArrayBuffer, i.e., reader.result
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            resolve(reader.result);
        });
        reader.readAsArrayBuffer(file);
    })
}

function showPreviewImage(fileObj,avatar) {
    avatar.src = URL.createObjectURL(fileObj);

}

function uploadFile(arrayBuffer) {
return true
// return fetch(`https://api.foobar.io`, {
    //     method: 'POST',
    //
    //     // STEP 6：使用 JSON.stringify() 包起來送出
    //     body: JSON.stringify({
    //         appId: 3,
    //         format: 'png',
    //
    //         // STEP 4：轉成 Uint8Array（這是 TypedArray）
    //         // STEP 5：透過 Array.from 轉成真正的陣列
    //         icon: Array.from(new Uint8Array(arrayBuffer)),
    //     }),
    // }).then((res)=> {
    //     if (!res.ok) {
    //         throw res.statusText;
    //     }
    //     return res.json()
    // })
    //     .then(({ data }) => console.log('data', data))
    //     .catch(err => console.log('err', err))
}


const UserInfo=()=>{
    const [avatar,setAvatar] = useState('')
    const getUser = useContext(GetUserInfo)
    useEffect(()=>{
        let imgSrc = document.querySelector(".img-thumbnail")
        setAvatar(imgSrc)
    },[])
  return(
    <div>
      帳戶設定
        <div>
            <img src="https://via.placeholder.com/300x300/efefef?text=Avatar" alt="image-placehoder"
                 className="img-thumbnail w-40" data-target="image-preview" />
        </div>
        <div>
            {
            getUser?<span>{getUser.name}({getUser.username})</span>:<span>Loading...    </span>
            }
        </div>
        <div>
            <label>
                <input type="file" id="file-uploader" className={'hidden'} accept="image/*"
                       onChange={(e)=>handleUpload(e,avatar)}
                />
                <span className={'bg-blue-500 p-3.5 rounded text-white absolute cursor-pointer'}>上傳圖片</span>
            </label>

        </div>
    </div>
  )
}
export default UserInfo
