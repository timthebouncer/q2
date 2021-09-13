import React from 'react'
import ReactDOM from 'react-dom'


const ToolTip=({name})=>{
    return(
        <div className='border-2 border-white shadow-md w-28 absolute top-20 left-12 bg-white'>
            {name}
        </div>
    )
}

const showToolTip=(position,name)=>{
    console.log(position,name)

    let div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<ToolTip name={name} />, div)

}

export default {
 toolTip:(position,name)=>showToolTip(position,name)
}