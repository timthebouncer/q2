import React from 'react'
import ReactDOM from 'react-dom'
import './message.css'
import {infoIcon, errorIcon} from "@/Icon/svg";

const Toast=({msg,type})=>{
    return(
        <div>
        {
            type === 'success' ?
            <div className="message bg-yellow-400">
                {infoIcon}
                <p>{msg}</p>
            </div>:(
            <div className="message bg-red-400">
                {errorIcon}
                <p>{msg}</p>
            </div>)
        }
        </div>
    )



}

const notification=(msg,type)=>{
    let div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(<Toast msg={msg} type={type} />, div)

    setTimeout(()=>{
        document.body.removeChild(div)
    },2000)
}

export default {
    success:(msg,type)=>notification(msg,type),
    error:(msg,type)=>notification(msg,type)
}


