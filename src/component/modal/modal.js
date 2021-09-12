import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
import Service from '../../api/api'
import message from '../toast/toast'


let token =localStorage.getItem('token')
const Modal=()=>{
    const[nickname, setNickname] = useState('')


    let config={
        headers: {"Authorization" : `Bearer ${token}`}
    }

    const nickNameBtn=()=>{
        Service.User.updateUsername({name:nickname},config)
            .then((res=>{
                console.log(res.message)
                message.success(res.message,'success')
                removeModal()
            }))
    }

    return(
        <div className="modal-wrapper">
                <h1>使用者資料補全</h1>
                <div>
                    <span>使用者名稱</span>
                    <input value={nickname} onChange={(e)=>setNickname(e.target.value)} />
                </div>

                <button onClick={nickNameBtn}>確定</button>
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
    let a = document.querySelectorAll("div")[18]
    document.body.removeChild(a)
    document.body.classList.remove('bg-gray-450')
}

export default{
    show:()=>showModal(),
}