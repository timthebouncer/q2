import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
import service from '../../api/api'
import message from '../toast/toast'


let token =localStorage.getItem('token')
const Modal=()=>{
    const[nickname, setNickname] = useState('')


    let config={
        headers: {"Authorization" : `Bearer ${token}`}
    }

    const nickNameBtn=()=>{
      service.User.updateUsername({name:nickname},config)
            .then((res=>{
                message.success(res.data.message,'success')
                removeModal()
            }))
            .catch(err=>{
                message.error(err.response.data.message,'error')
            })
    }

    return(
        <div id="modalId" className="modal-wrapper">
                <h1>使用者資料補全</h1>
                <div>
                    <span>使用者名稱</span>
                    <input className='border-2 border-black' value={nickname} onChange={(e)=>setNickname(e.target.value)} />
                </div>

                <button className="bg-blue-400 p-1.5 rounded text-white" onClick={nickNameBtn}>確定</button>
        </div>
    )

}

const showModal=()=>{
    let div = document.createElement('div')
        document.body.appendChild(div)
        document.body.classList.add('bg-gray-450')
        ReactDOM.render(<Modal/>, div)
}
const removeModal=()=>{
    let getModal = document.getElementById("modalId")
    document.body.removeChild(getModal.parentNode)
    document.body.classList.remove('bg-gray-450')
}

export default{
    show:()=>showModal(),
}
