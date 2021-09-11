import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

const Modal=()=>{

    return(
        <div className="modal-wrapper">
                <h1>使用者資料補全</h1>
                <div>
                    <span>使用者名稱</span>
                    <input />
                </div>

                <button>確定</button>
        </div>
    )

}

const showModal=()=>{
    let div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Modal/>, div)
}

export default{
    show:()=>showModal()
}